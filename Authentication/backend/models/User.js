const mongoose = require('mongoose');

// creating UserSchema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  displayName: {
    type: String
  }
})


// create User Model
module.exports = User = mongoose.model('user', UserSchema);