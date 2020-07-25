const router = require('express').Router();
const User = require('./../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');







/* --------------------------------
.          register route
-------------------------------- */
router.post('/register', async (req, res)=>{
  try {
  
    let { email, password, passwordCheck, displayName } = req.body;
    
    /* --------------------------------
    .             validate
    -------------------------------- */
    // email password passwordCheck must be filled
    if(!email || !password || !passwordCheck)
      return res.status(400).json({ msg: `Not all fields have been entered.` });

    // password length must be at least 5 characters long
    if(password.length < 5)
      return res.status(400).json({ msg: `The password needs to be at least 5 characters long.` });

    // password and passwordCheck must match
    if(password !== passwordCheck)
      return res.status(400).json({ msg: `Enter the same password twice for verification.` });
  

    // does the User already have an account???
    const existingUser = await User.findOne({ email: email });
    if(existingUser)
      return res.status(400).json({ msg: `An account with this email already exists.` });
    
    // if there is no displayName set displayName to email
    if(!displayName) displayName = email;

    /* --------------------------------
    . password hashing and user saving
    -------------------------------- */
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    
    const savedUser = await User.create({
      email,
      password: passwordHash,
      displayName
    });
    res.json(savedUser);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})







/* --------------------------------
.           log in route
-------------------------------- */
router.post("/login", async (req, res)=>{
  try {
    
    const { email, password } = req.body;

    /* --------------------------------
    .           validate
    -------------------------------- */
    // email and password must be filled
    if(!email || !password)
      return res.status(400).json({ msg: 'Not all fields have been entered.' })

    // does the user really have an account???
    const user = await User.findOne({ email: email });
    if(!user)
      return res.status(400)
      .json({ msg: 'No account with this email has been registered.'});

    // does the password match with the user's original password
    const isMatch = await bcrypt.compare(password, user.password); //it is a boolean

    if(!isMatch) 
      return res.status(400).json({ msg: 'Invalid credentials.' });

    // -----------------------------user validated. now jwt time
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);    
    res.json({
      token,
      user: {
        id: user._id,
      displayName: user.displayName,
      email: user.email
      }
    })


  } catch (err) {
    res.status(500).json({ error: err.massage });
  }
})






// lesson 5
/* --------------------------------
.          delete route
-------------------------------- */
router.delete('/delete', auth, async (req, res)=>{
  console.log(req.user)
})





module.exports = router;