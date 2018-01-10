const mongoose = require('mongoose');
const { Schema } = mongoose;

const contentSchema = new Schema({
  contentId: Number,
  contentType: String, // Word (neutral), Phrase (neutral), Slang (non-neutral), Grammar
  spanishPhrase: String,
  englishTrans: String,
  exampleUsage: String,
  country: String
  //needs way to relate to a user (creator)
});

mongoose.model('Content', contentSchema);
