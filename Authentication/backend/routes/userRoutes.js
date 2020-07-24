const router = require('express').Router();
const User = require('./../models/User');
const bcrypt = require('bcryptjs');

// lesson 3
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



module.exports = router;