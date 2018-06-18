const mongoose = require('mongoose');
const { Schema } = mongoose;

const feedSchema = new Schema({
  type: String,
  contentId: String,
  action: String,
  preview: Object,
  meetupId: String,
  name: String,
  timeStamp: Date
});

mongoose.model('Feed', feedSchema);
