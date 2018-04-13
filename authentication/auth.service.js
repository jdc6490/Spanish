const mongoose = require('mongoose');
const User = mongoose.model('User');

// Here I'm exporting an object (the curly braces mean I'm making an object)
// There are other ways to do this, like exporting a class, but if you do it this way you don't have to call 'new'
module.exports = {

  async findOrCreateUser(profile, token, tokenSecret) {
    const existingUser = await User.findOne({ meetupId: profile.id });

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

  // I also create a findUserById method here, because remember we want to keep all databae access in the service, you don't want to call User.findById() in your passport config
  // Since finding a user is asynchronous, I use async/await.
  findUserById(id) {
    return User.findById(id);
  }
};
