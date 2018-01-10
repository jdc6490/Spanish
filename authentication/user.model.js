const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  meetupId: String,
  name: String,
  email: String, //need to decide if this is worth storing
  token: String,
  tokenSecret: String
});

mongoose.model('User', userSchema);
