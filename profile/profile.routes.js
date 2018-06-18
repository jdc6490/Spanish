const profileService = require('./profile.service');
const requireLogin = require('../middlewares/requirelogin');

module.exports = app => {

  app.get('/api/profile/:id', requireLogin, async (req, res) => {
    const profile = await profileService.fetchUserProfile(req.params.id)
    const contents = await profileService.fetchUserContents(req.params.id);
    const results = {
      profile: profile,
      contents: []
    };
    contents.forEach(function(content, err) {
      results.contents.push(content);
    });
    res.send(results)
  });

};
