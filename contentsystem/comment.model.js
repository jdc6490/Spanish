const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  contentId: String,
  body: String,
  name: String,
  meetupId: String,
  timeStamp: Date
});

mongoose.model('Comment', commentSchema);
