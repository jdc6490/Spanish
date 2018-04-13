const contentService = require('./content.service');
const newsFeedService = require('../newspanel/newsfeed/newsfeed.service')
const requireLogin = require('../middlewares/requirelogin');

module.exports = app => {

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







//Not sure if routes or click event handlers are needed here?

//routes involved in managing content  examples below:


//Click submit button
//Go to "./sumbitcontent" route and save content to DB (in ser) and redirect to "./dashboard" route
// redirects back to /dashboard and new content will be displayed there

//Click edit button (only available for content you uploaded)
// Goes to "./editcontent" route and present a form that fills with present data for editting.
//After sumbitting creates a new entry in the database but deletes the old one (overwrites)
//Updated changes will now display in given content on the dashboard

//Click make recommendation button (available when its someone elses content)
//Go to "./recommendcontent" route (display input field)
//save recommendation (comment) to DB and redirect to "./dashboard" route
//Recommendation is displayed as a comment under the phrase in the dashboard (like a comment based system)

//Click delete button (only available to adminstrators based on roles)
//Goes to "./deletecontent" route to delete content in theDB and redirect to "./dashboard" route
//Given phrase will no longer show on dashboard


//Click move button (only available to adminstrators based on roles)
//Go to "./movecontent" route to change content type in the DB content.model and redirect to "./dashboard" route
//Given phrase will now filter as a new content type
