import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchEventsStart = () => {
  return {
    type: actionTypes.FETCH_EVENTS_START,
  };
};

export const fetchEventsSuccess = (data) => {
  return {
    type: actionTypes.FETCH_EVENTS_SUCCESS,
    events: data
  };
};

export const fetchEventsFail = (error) => {
  return {
    type: actionTypes.FETCH_EVENTS_FAIL,
    error: error
  };
};

export const fetchPhotosStart = () => {
  return {
    type: actionTypes.FETCH_PHOTOS_START,
  };
};

export const fetchPhotosSuccess = (data) => {
  return {
    type: actionTypes.FETCH_PHOTOS_SUCCESS,
    photos: data
  };
};

export const fetchPhotosFail = (error) => {
  return {
    type: actionTypes.FETCH_PHOTOS_FAIL,
    error: error
  };
};

export const fetchEvents = () => async dispatch => {
  dispatch(fetchEventsStart());
  try {
    const {data} = await axios.get('http://localhost:5000/api/events');
    dispatch( fetchEventsSuccess(data) );
  } catch(error) {
      dispatch( fetchEventsFail(error) );
  }
};

export const fetchPhotos = () => async dispatch => {
  dispatch(fetchPhotosStart());
  try {
    const {data} = await axios.get('http://localhost:5000/api/photos');
    dispatch( fetchPhotosSuccess(data) );
  } catch(error) {
      dispatch( fetchPhotosFail(error) );
  }
};
