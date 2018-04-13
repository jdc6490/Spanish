const mongoose = require('mongoose');
const { Schema } = mongoose;

const feedSchema = new Schema({
  feedId: Number,
  userId: String,
  contentType: String,
  timeStamp: Date
});

mongoose.model('Feed', feedSchema);
