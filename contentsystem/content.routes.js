const contentService = require('./content.service');
const newsFeedService = require('../newsfeed/newsfeed.service')
const requireLogin = require('../middlewares/requirelogin');

module.exports = app => {

  app.get('/api/content', requireLogin, async (req, res) => {
    const contents = await contentService.fetchContents();
    res.send(contents);
  });

  app.get('/api/content/:id', requireLogin, async (req, res) => {
    const contentById = await contentService.fetchContentById(req.params.id);
    res.send(contentById);
  });

  app.post('/api/content', requireLogin, async (req, res) => {
    data = req.body;
    const newContentId = await contentService.saveNewContent(data);
    const newFeed = await newsFeedService.saveNewContent(data, newContentId);
    res.send(newContentId);
  });

  app.delete('/api/content', async (req, res) => {
    data = req.body
    const deleteContent = await contentService.deleteOldContent(data);
  });

  app.post('/api/content/edit', async (req, res) => {
    data = req.body
    const editContent = await contentService.editOldContent(data);
  });

  app.get('/api/comment/:id', async (req, res) => {
    console.log(req.params.id);
    const comments = await contentService.fetchComments(req.params.id);
    res.send(comments);
  });

  app.post('/api/comment', async (req, res) => {
    data = req.body
    const newCommentId = await contentService.saveNewComment(data);
    const newFeed = await newsFeedService.saveNewComment(data);
    res.send(newCommentId);
  });

  app.post('/api/rate', async (req, res) => {
    data = req.body
    const rateContent = await contentService.saveNewRating(data);
    //const addFeed = await newsFeedService.saveNewFeed(data);
  });

};
