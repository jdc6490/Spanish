import axios from 'axios';
import * as actionTypes from './actionTypes';

export const addContentStart = () => {
  return {
    type: actionTypes.ADD_CONTENT_START
  };
};

export const addContentSuccess = (data) => {
  return {
    type: actionTypes.ADD_CONTENT_SUCCESS,
    contentData: data
  };
};

export const addContentFail = (error) => {
  return {
    type: actionTypes.ADD_CONTENT_FAIL,
    error: error
  };
};

export const fetchContentsStart = () => {
  return {
    type: actionTypes.FETCH_CONTENTS_START,
  };
};

export const fetchContentsSuccess = (data) => {
  return {
    type: actionTypes.FETCH_CONTENTS_SUCCESS,
    contents: data
  };
};

export const fetchContentsFail = (error) => {
  return {
    type: actionTypes.FETCH_CONTENTS_FAIL,
    error: error
  };
};

export const addContent = (content) => async dispatch => {
  //dispatch(addContentStart());
  try {
    const {data} = await axios.post('/api/content', content);
    dispatch( addContentSuccess(data) );
  } catch(error) {
      //dispatch( addContentFail(error) );
  }
};

export const fetchContents = () => async dispatch => {
  //dispatch(fetchContentsStart());
  try {
    const {data} = await axios.get('/api/content');
    dispatch( fetchContentsSuccess(data) );
  } catch(error) {
    //  dispatch( fetchContentsFail(error) );
  }
};
