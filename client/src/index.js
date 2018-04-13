//This will be about the redux side of things (Data control layer - redux)

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  //is a react component that connects react to redux
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers';

import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware());



ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));











// Header across top.
//----Logo
//----Login in with Meetup or Logged in as "name"

// Left side panel is content area (left 2/3 of page)
//----Search bar with filters
//----What's new (news feed)
//----By type
//----By difficulty
//----By country
//----By rating+

// Right side panel is news area (right 1/3 of page)
//----Recent activity news feed (8 most recent), view all links to last month
//----Upcoming events (next 8), view all button linking to meetup
//----Photos (random 4), view all button linking to meeetup
//----Google adsense


/*
const content = {
  contentId: '4358774583',
  contentType: 'Word',
  spanishPhrase: 'Hola',
  englishTrans: 'Hello',
  exampleUsage: 'Hola, Jon!  Como estas?',
  country: 'All'
};

// axios.post('api/content', content);

*/
