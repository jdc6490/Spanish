const newsFeedService = require('./newsfeed.service')
const requireLogin = require('../middlewares/requirelogin');

module.exports = app => {

  app.get('/api/newsfeed', requireLogin, async (req, res) => {
    const feeds = await newsFeedService.fetchFeeds();
    res.send(feeds);
  });

};
