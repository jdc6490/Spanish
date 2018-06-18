const mongoose = require('mongoose');
const Content = mongoose.model('Content');
const Rating = mongoose.model('Rating');
const Comment = mongoose.model('Comment');

module.exports = {

  async fetchContents() {
    try {
      const contents = await Content.find()
      return contents;
    } catch (error) {
      console.log(error);
    }
  },

  async fetchComments(id) {
    try {
      const comments = await Comment.find( { contentId: id } );
      return comments;
    } catch (error) {
      console.log(error);
    }
  },

  async fetchContentById(id) {
    try {
      const contentById = await Content.findOne( { _id: mongoose.Types.ObjectId(id) } );
      return contentById;
    } catch (error) {
      console.log(error);
    }
  },

  async saveNewContent(data) {
    const Data = {
      content: data.contentData,
      meetupId: data.meetupId,
      name: data.name,
      timeStamp: Date.now()
    };
    try {
      const content = await new Content(Data).save()
      console.log(content);
      return content;
    } catch (error) {
      console.log(error);
    }
  },

  async deleteOldContent(data) {
    const deleteContent = await Content.find({contentId: data.contentId}).deleteOne()
  },

  async editOldContent(data) {
    const editContent = await Content.find({contentId: data.contentId}).updateOne({
      contentId: data.contentId,
      type: data.type,
      spanish: data.spanish,
      english: data.english,
      example: data.example,
      country: data.country
    })
  },

  async saveNewComment(data) {
    const Data = {
      contentId: data.contentId,
      body: data.body,
      name: data.name,
      meetupId: data.meetupId,
      timeStamp: Date.now()
    };
    try {
      const comment = await new Comment(Data).save()
      return comment;
    } catch (error) {
      console.log(error);
    }
  },

  async saveNewRating(data) {
    const existingRating = await Rating.findOne({ contentId: data.contentId, postedby: data.postedBy})
    if (existingRating) {
      const updateRating = await Rating.updateOne
    }
    const ratingData = {
      //accuracy: data
      //userId: req.user,
      //difficulty: data
    };
    await new Rating(ratingtData).save()
  }


};
