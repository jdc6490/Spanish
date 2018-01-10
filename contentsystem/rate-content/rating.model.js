const mongoose = require('mongoose');
const { Schema } = mongoose;

const ratingSchema = new Schema({
  ratingId: Number,
  ratingAvg: Number,
  totalVoteNum: Number,
  oneStarVoteNum: Number,
  twoStarVoteNum: Number,
  threeStarVoteNum: Number
//needs way to relate to a user (creator) and a content entry
});

mongoose.model('Rating', ratingSchema);
