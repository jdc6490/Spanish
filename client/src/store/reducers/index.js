import { combineReducers } from 'redux';
import auth from './auth';
import content from './content';
import meetup from './meetup';
import comment from './comment';

export default combineReducers({
  auth: auth,
  content: content,
  meetup: meetup,
  comment: comment

});
