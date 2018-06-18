const mongoose = require('mongoose');
const { Schema } = mongoose;

const contentSchema = new Schema({
  content: Object, // Word (neutral), Phrase (neutral), Slang (non-neutral), Grammar
  meetupId: String,
  name: String,
  timeStamp: Date
});

mongoose.model('Content', contentSchema);
