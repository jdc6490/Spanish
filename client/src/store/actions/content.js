import axios from 'axios';
import * as actionTypes from './actionTypes';


export const addContentStart = () => {
  return {
    type: actionTypes.ADD_CONTENT_START
  };

};

export const addContentSuccess = (res) => {
  return {
    type: actionTypes.ADD_CONTENT_SUCCESS,
    contentData: res.data
  };

};



export const fetchContentsStart = () => {
  return {
    type: actionTypes.FETCH_CONTENTS_START,
  };

};



export const fetchContentsSuccess = (res) => {
  return {
    type: actionTypes.FETCH_CONTENTS_SUCCESS,
    contents: res.data
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
    const res = await axios.post('http://localhost:5000/api/content/add', content);
    console.log(res);
    dispatch( addContentSuccess(res) );
  } catch(error) {
      //dispatch( addContentFail(error) );
  }
};



export const fetchContents = () => async dispatch => {

  dispatch(fetchContentsStart());
  try {
    const res = await axios.get('http://localhost:5000/api/content');
    dispatch( fetchContentsSuccess(res) );
  } catch(error) {
      dispatch( fetchContentsFail(error) );
  }
};
