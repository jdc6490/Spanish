import * as actionTypes from '../actions/actionTypes';

const initialState = {
  contents: [],
  loading: false,

}


const fetchContentsStart = ( state, action ) => {
  return {
    ...state,
    loading: true
  }

};

const fetchContentsSuccess = ( state, action ) => {
  return {
    ...state,
    contents: action.contents,
    loading: false
  }

};

const fetchContentsFail = ( state, action ) => {
  return {
    ...state,
    loading: false
  }

};





const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CONTENTS_START: return fetchContentsStart( state, action );
    case actionTypes.FETCH_CONTENTS_SUCCESS: return fetchContentsSuccess( state, action );
    case actionTypes.FETCH_CONTENTS_FAIL:  return fetchContentsFail( state, action );
    default: return state;
  }
};

export default reducer
