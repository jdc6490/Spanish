//meet api to get events and photo.  Will be displayed on right panel below short needs feed
const request = require('request');
const meetupService = require('./meetup.service');


module.exports = app => {

  request.get('https://api.meetup.com/meetup-group-llQYfjbx/photo_albums?key=464f4a11306f4d6e14725926755c80b&oauth_token=ef750d8f43b6b492ccc47f07bdd6a1de&oauth_token_secret=0ab8404580b709bcc8aac19de51cdb72', async (req, res) => {

    const photoAlbumsArray =  await JSON.parse(res.body).map(body => (body.photo_sample));
    const photos = await meetupService.organizePhotos(photoAlbumsArray);
  });

  request.get('https://api.meetup.com/meetup-group-llQYfjbx/events?key=464f4a11306f4d6e14725926755c80b&oauth_token=ef750d8f43b6b492ccc47f07bdd6a1de&oauth_token_secret=0ab8404580b709bcc8aac19de51cdb72', async (req, res) => {

    const eventsArray = await JSON.parse(res.body).map(body => ({
      name: body.name,
      date: body.local_date,
      time: body.local_time,
      rsvp: body.yes_rsvp_count
    }));
    const events = await meetupService.organizeEvents(eventsArray);
  });

};
