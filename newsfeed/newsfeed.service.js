const mongoose = require('mongoose');
const Feed = mongoose.model('Feed');

module.exports = {

  async fetchFeeds() {
    try {
      const feeds = await Feed.find()
      return feeds;
    } catch (error) {
      console.log(error);
    }
  },

  async saveNewContent(data, newContentId) {
    console.log('new content to be added to the database:', data, newContentId)
    const feedData = {
      type: data.contentData.type,
      contentId: newContentId._id,
      action: 'content',
      preview: {
        spanish: data.contentData.spanish,
        english: data.contentData.english
      },
      meetupId: data.meetupId,
      name: data.name,
      timeStamp: Date.now()
    };

    //name, action, type, preview.  req.user.name + " made a new " + req.body.contentType (res.body.contentID link) + " entry"  Preview below .. word//
    const newsFeed = await new Feed(feedData).save();
  },

  async saveNewComment(data) {
    console.log(data)
    const feedData = {
      type: data.contentData.type,
      contentId: data.contentId,
      action: 'comment',
      preview: data.body,
      meetupId: data.meetupId,
      name: data.name,
      timeStamp: Date.now()
    };

    //name, action, type, preview.  req.user.name + " made a new " + req.body.contentType (res.body.contentID link) + " entry"  Preview below .. word//
    const newsFeed = await new Feed(feedData).save();
  },

};
