const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const request = require('request');

require('./authentication/user.model');
require('./authentication/auth.config.passport');
require('./contentsystem/content.model');
require('./contentsystem/comment.model');
require('./contentsystem/rating.model');
require('./newspanel/newsfeed/feed.model');

require('./contentsystem/content.service');
require('./newspanel/newsfeed/newsfeed.service');


mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./authentication/auth.routes')(app);
require('./contentsystem/content.routes')(app);
require('./newspanel/meetup-news/meetup.routes')(app);

app.listen(5000);



/*
for (j = 0; j < 100; j++) {
  const valuesArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const helperArray = [];
  for (i = 0; i < 11; i++) {
	   const ranNum =  Math.floor(Math.random() * 36);
     helperArray.push(valuesArray[ranNum]);
  };
  const code = helperArray.join("");
  console.log(code);
}
