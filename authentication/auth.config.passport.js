const passport = require('passport');
const MeetupStrategy = require('passport-meetup').Strategy;
const keys = require('../config/keys');
const authService = require('./auth.service');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

async function userDeserializeCallback(userId, done) {
  const user = await authService.findUserById(userId);
  done(null, user);
}

passport.deserializeUser(userDeserializeCallback);

const meetupData = {
      consumerKey: keys.meetupKey,
      consumerSecret: keys.meetupSecret,
      callbackURL: '/auth/meetup/callback',
      proxy: true
  };

async function meetupVerifyCallback(token, tokenSecret, profile, done) {
  const user = await authService.findOrCreateUser(profile, token, tokenSecret);
  done(null, user);
}

const meetupStrategy = new MeetupStrategy(meetupData, meetupVerifyCallback);

passport.use(meetupStrategy);
