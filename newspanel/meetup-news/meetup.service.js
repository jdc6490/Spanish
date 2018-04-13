
module.exports = {

  async organizePhotos(photoAlbumsArray) {
    const length = photoAlbumsArray.length - 1;  //remove unwanted photos
    delete photoAlbumsArray[length];
    delete photoAlbumsArray[length - 3];

    var samplePhotos = [].concat.apply([], photoAlbumsArray); //flattening out the array

    samplePhotos = samplePhotos.filter(function(n){ return n != undefined })  //removing undefined objects in the array (deleted previously)

    const photos = [];
    for (i = 0; i < 4; i++) {       //randomly selecting 4 photos
      const randomNum = Math.floor(Math.random() * samplePhotos.length);
      photos.push(samplePhotos[randomNum]);
      delete samplePhotos[randomNum];
      samplePhotos = samplePhotos.filter(function(n){ return n != undefined });
    };

    //console.log(photos)
    return photos;
  },

  async organizeEvents(eventsArray) {
    const events = []
    for (i = 0; i < 8; i++) {     //filtering events to upcoming 8
      events.push(eventsArray[i])
    };

    //console.log(events)
    return events;
  }

};
