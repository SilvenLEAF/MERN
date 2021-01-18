

const express = require('express');
const app= express();



const mongoose = require('mongoose');
const cors = require('cors');



if(process.env.NODE_ENV !== 'production'){
  // if we are on development, load development environmental variables
  require('dotenv').config()
}




/* -----------------------------------
.             configuration
----------------------------------- */
app.use(express.json());
app.use(cors());


/* -----------------------------------
.             routes
----------------------------------- */
app.use('/users', require('./routes/userRoutes'))



// -----------------connect to MongoDB
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}, (err)=>{
  if (err) throw err;
  console.log('connected to MongoDB')
})


// ----------------LISTEN-------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`)
})
