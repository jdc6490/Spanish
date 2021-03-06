const mongoose = require('mongoose');
const { Schema } = mongoose;

const ratingSchema = new Schema({
  Rating: Number, //Between 1 and 5
  userId: String,
  contentRef: String,
});

mongoose.model('Rating', ratingSchema);


/*
Can be calculated by rating services
ratingAvg: Number,
totalVoteNum: Number,
oneStarVoteNum: Number,
twoStarVoteNum: Number,
threeStarVoteNum: Number
*/
