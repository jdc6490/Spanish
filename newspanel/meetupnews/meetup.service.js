
module.exports = {

  organizePhotos(data) {
    const photoAlbumsArray = data.map(data => (data.photo_sample));
    const length = photoAlbumsArray.length - 1;  //remove unwanted photos
    delete photoAlbumsArray[length];
    delete photoAlbumsArray[length - 3];

    var samplePhotos = [].concat.apply([], photoAlbumsArray); //flattening out the array

    samplePhotos = samplePhotos.filter(photo => { return photo != undefined })  //removing undefined objects in the array (deleted previously)

    const photos = [];
    for (i = 0; i < 4; i++) {       //randomly selecting 4 photos
      const randomNum = Math.floor(Math.random() * samplePhotos.length);
      photos.push(samplePhotos[randomNum]);
      delete samplePhotos[randomNum];
      samplePhotos = samplePhotos.filter(photo => { return photo != undefined });
    };
    return photos;
  },

  organizeEvents(data) {
    const eventsArray = data.map(data => ({
      name: data.name,
      date: data.local_date,
      time: data.local_time,
      rsvp: data.yes_rsvp_count
    }));

    const events = []
    for (i = 0; i < 8; i++) {     //filtering events to upcoming 8
      events.push(eventsArray[i])
    };
    return events;
  }

};
