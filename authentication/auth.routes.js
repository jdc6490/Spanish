const passport = require('passport');

module.exports = app => {
  app.get('/auth/meetup',
    passport.authenticate('meetup')
  );

  app.get('/auth/meetup/callback',
    passport.authenticate('meetup', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('./dashboard');
  });

  app.get('/api/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/auth/current_user', (req, res) => {
    res.send(req.user);
  });
};
