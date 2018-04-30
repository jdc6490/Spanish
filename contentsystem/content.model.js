const mongoose = require('mongoose');
const { Schema } = mongoose;

const contentSchema = new Schema({
  content: Object, // Word (neutral), Phrase (neutral), Slang (non-neutral), Grammar
  userToken: String,
});

mongoose.model('Content', contentSchema);
