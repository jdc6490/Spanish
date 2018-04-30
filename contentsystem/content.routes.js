const contentService = require('./content.service');
const newsFeedService = require('../newspanel/newsfeed/newsfeed.service')
const requireLogin = require('../middlewares/requirelogin');

module.exports = app => {

  app.get('/api/content', requireLogin, async (req, res) => {
    const Contents = await contentService.fetchContents();
    res.send(Contents);


  });

  app.post('/api/content/add', requireLogin, async (req, res) => {
    data = req.body
    const addContent = await contentService.saveNewContent(data);
    const addFeed = await newsFeedService.saveNewFeed(data);


  });

  app.post('/api/content/delete', async (req, res) => {
    data = req.body
    const deleteContent = await contentService.deleteOldContent(data);


  });

  app.post('/api/content/edit', async (req, res) => {
    data = req.body
    const editContent = await contentService.editOldContent(data);


  });

  app.post('/api/content/comment', async (req, res) => {
    data = req.body
    const addComment = await contentService.saveNewComment(data);
    const addFeed = await newsFeedService.saveNewFeed(data);


  });

  app.post('/api/content/rate', async (req, res) => {
    data = req.body
    const rateContent = await contentService.saveNewRating(data);
    const addFeed = await newsFeedService.saveNewFeed(data);


  });



};
