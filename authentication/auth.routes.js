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

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send('Logged in as ' + req.user.name);
  });
};
