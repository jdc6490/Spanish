const mongoose = require('mongoose');
const Content = mongoose.model('Content');
const Rating = mongoose.model('Rating');
const Comment = mongoose.model('Comment');

module.exports = {

  async fetchContents() {
    const Contents = await Content.find()
    return Contents;
  },


  async saveNewContent(data) {

    console.log('this is the data')
    console.log(data)
    console.log('above this point')
    console.log(data.userToken)
    const Data = {
      content: data.contentData,
      userToken: data.userToken,
    };
    await new Content(Data).save();
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
    const commentData = {
      commentId: data.commentId,
      contentId: data.contentId,
      //userId: req.user,
      body: data.body
    };
    await new Comment(commentData).save()
  },


  async saveNewRating(data) {
    const ratingData = {
      rating: data.rating,
      //userId: req.user,
      contentRef: data.contentId
    };
    await new Rating(ratingtData).save()
  }

};
