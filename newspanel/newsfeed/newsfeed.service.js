const mongoose = require('mongoose');
const Feed = mongoose.model('Feed');
const User = mongoose.model('User');
const passport = require('passport');


module.exports = {

  async saveNewFeed(data) {
    const feedData = {
       contentID: data.contentId,
       //user: req.user,
       contentType: data.contentType,
       timeStamp: Date.now()
    };
    //req.user.name + " made a new " + req.body.contentType + " entry"//
    const newsFeed = await new Feed(feedData).save();


  }

};
