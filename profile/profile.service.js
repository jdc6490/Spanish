const mongoose = require('mongoose');
const User = mongoose.model('User');
const Content = mongoose.model('Content');
const Rating = mongoose.model('Rating');
const Comment = mongoose.model('Comment');

module.exports = {

    async fetchUserProfile(id) {
      try {
        const profile = await User.findOne({meetupId: id});
        return profile;
      } catch (error) {
        console.log(error);
      }

    },

    async fetchUserContents(id) {
      try {
        const contents = await Content.find({meetupId: id});
        return contents;
      } catch (error) {
        console.log(error);
      }
    }

};
