import * as actionTypes from '../actions/actionTypes';

const initialState = {
  events: [],
  photos: [],
  eventsLoading: false,
  photosLoading: false
}

const fetchEventsStart = ( state, action ) => {
  return {
    ...state,
    eventsLoading: true
  }
};

const fetchEventsSuccess = ( state, action ) => {
  return {
    ...state,
    events: action.events,
    eventsLoading: false
  }
};

const fetchEventsFail = ( state, action ) => {
  return {
    ...state,
    photosLoading: false,
    error: action.error
  }
};

const fetchPhotosStart = ( state, action ) => {
  return {
    ...state,
    photosLoading: true
  }
};

const fetchPhotosSuccess = ( state, action ) => {
  return {
    ...state,
    photos: action.photos,
    photosLoading: false
  }
};

const fetchPhotosFail = ( state, action ) => {
  return {
    ...state,
    photosLoading: false,
    error: action.error
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_EVENTS_START: return fetchEventsStart( state, action );
    case actionTypes.FETCH_EVENTS_SUCCESS: return fetchEventsSuccess( state, action );
    case actionTypes.FETCH_EVENTS_FAIL:  return fetchEventsFail( state, action );
    case actionTypes.FETCH_PHOTOS_START: return fetchPhotosStart( state, action );
    case actionTypes.FETCH_PHOTOS_SUCCESS: return fetchPhotosSuccess( state, action );
    case actionTypes.FETCH_PHOTOS_FAIL:  return fetchPhotosFail( state, action );
    default: return state;
  }
};

export default reducer
