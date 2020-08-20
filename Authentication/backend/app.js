const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// firing express app
const app= express();

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