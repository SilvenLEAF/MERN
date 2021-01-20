const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlEncoded({ extended: true } ));
app.use(express.static(path.join(__dirname, 'build')));

/* --------------------------------
.           routes
-------------------------------- */
// ------------routes handling
app.get('/', (req, res, next)=> {
  try {
    
    res.sendFile(path.join(__dirname, 'build', 'index.html'));

  } catch {    
    next();    
  }
  
})

app.use('/download', require('./routes/api-routes'));


// ------------errors handling
app.use((err, req, res, next)=>{
  console.log(err);
  res.send({ alert: `Sorry! There is an error!!`})
})




// --------------------------------
const PORT = process.env.PORT || 5000;
app.listen(5000, ()=>{
  console.log(`Server is running on port ${PORT}`);
})
