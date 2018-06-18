const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {

  async findOrCreateUser(profile, token, tokenSecret) {
    const existingUser = await User.findOne({ meetupId: profile.id });
    console.log(profile);
    if (existingUser) {
    	return existingUser;
    } else {
      const userData = {
	       meetupId: profile.id,
         name: profile.displayName,
         token: token,
         tokenSecret: tokenSecret
      };
      const user = await new User(userData).save();
      return user;
    }
  },

  async findUserById(id) {
    return await User.findById(id);
  }

};
