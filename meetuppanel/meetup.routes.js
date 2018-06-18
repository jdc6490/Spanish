const meetupService = require('./meetup.service');
const requireLogin = require('../middlewares/requirelogin');
const axios = require('axios')

module.exports = app => {

  app.get('/api/photos', requireLogin, async (req, res) => {
      try {
        const { data } = await axios.get('https://api.meetup.com/meetup-group-llQYfjbx/photo_albums?key=464f4a11306f4d6e14725926755c80b&oauth_token=ef750d8f43b6b492ccc47f07bdd6a1de&oauth_token_secret=0ab8404580b709bcc8aac19de51cdb72');
        const photos = await meetupService.organizePhotos(data);
        res.send(photos);
      } catch (error) {
        console.log(error);
      }
  });

  app.get('/api/events', requireLogin, async (req, res) => {
      try {
        const { data } = await axios.get('https://api.meetup.com/meetup-group-llQYfjbx/events?key=464f4a11306f4d6e14725926755c80b&oauth_token=ef750d8f43b6b492ccc47f07bdd6a1de&oauth_token_secret=0ab8404580b709bcc8aac19de51cdb72');
        const events = await meetupService.organizeEvents(data);
        res.send(events);
      } catch (error) {
        console.log(error);
      }
  });

};
