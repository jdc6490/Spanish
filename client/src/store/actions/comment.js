import axios from 'axios';
import * as actionTypes from './actionTypes';

export const addCommentStart = () => {
  return {
    type: actionTypes.ADD_COMMENT_START
  };
};

export const addCommentSuccess = (data) => {
  return {
    type: actionTypes.ADD_COMMENT_SUCCESS,
    commentData: data
  };
};

export const addCommentFail = (error) => {
  return {
    type: actionTypes.ADD_COMMENT_FAIL,
    error: error
  };
};

export const fetchCommentsStart = () => {
  return {
    type: actionTypes.FETCH_COMMENTS_START,
  };
};

export const fetchCommentsSuccess = (data) => {
  return {
    type: actionTypes.FETCH_COMMENTS_SUCCESS,
    comments: data
  };
};

export const fetchCommentsFail = (error) => {
  return {
    type: actionTypes.FETCH_COMMENTS_FAIL,
    error: error
  };
};

export const addComment = (comment) => async dispatch => {
  //dispatch(addCommentStart());
  try {
    const {data} = await axios.post('/api/comment', comment);
    dispatch( addCommentSuccess(data) );
  } catch(error) {
      //dispatch( addCommentFail(error) );
  }
};

export const fetchComments = (id) => async dispatch => {
  dispatch(fetchCommentsStart());
  try {
    const {data} = await axios.get('/api/comment/' + id);
    dispatch( fetchCommentsSuccess(data) );
  } catch(error) {
      dispatch( fetchCommentsFail(error) );
  }
};
