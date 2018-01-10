const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
  commentId: Number,
  body: Number
  //needs way to relate to a user (creator) and a content entry
});

mongoose.model('Comment', commentSchema);
