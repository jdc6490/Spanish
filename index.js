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
require('./newsfeed/newsfeed.model');

require('./contentsystem/content.service');
require('./newsfeed/newsfeed.service');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['http://localhost:3000']);
    res.append('Access-Control-Allow-Credentials', 'true');
    res.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

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
require('./meetuppanel/meetup.routes')(app);
require('./profile/profile.routes')(app);
require('./newsfeed/newsfeed.routes')(app);

app.listen(5000);
