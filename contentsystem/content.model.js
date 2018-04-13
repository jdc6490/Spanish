const mongoose = require('mongoose');
const { Schema } = mongoose;

const contentSchema = new Schema({
  contentId: String,
  type: String, // Word (neutral), Phrase (neutral), Slang (non-neutral), Grammar
  spanish: String,
  english: String,
  example: String,
  country: String,
  //userId: String

});

mongoose.model('Content', contentSchema);
