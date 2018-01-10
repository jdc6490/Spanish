//meet api to get events and photo.  Will be displayed on right panel below short needs feed

module.exports = app => {
  app.get('/auth/meetup',
    passport.authenticate('meetup')
  );
};
