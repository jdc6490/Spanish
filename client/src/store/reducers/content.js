import * as actionTypes from '../actions/actionTypes';

const initialState = {
  contents: [],
  addContentLoading: false,
  fetchContentsLoading: false,
  error: null
}

const addContentStart = ( state, action ) => {
  return {
    ...state,
    addContentLoading: true
  }
};

const addContentSuccess = ( state, action ) => {
  return {
    ...state,
    contents: state.contents.concat( action.contentData ),
    addContentLoading: false
  }
};

const addContentFail = ( state, action ) => {
  return {
    ...state,
    addContentLoading: false,
    error: action.error
  }
};

const fetchContentsStart = ( state, action ) => {
  return {
    ...state,
    fetchContentsLoading: true
  }
};

const fetchContentsSuccess = ( state, action ) => {
  return {
    ...state,
    contents: action.contents,
    fetchContentsLoading: false
  }
};

const fetchContentsFail = ( state, action ) => {
  return {
    ...state,
    fetchContentsLoading: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CONTENT_START: return addContentStart( state, action );
    case actionTypes.ADD_CONTENT_SUCCESS: return addContentSuccess( state, action );
    case actionTypes.ADD_CONTENT_FAIL:  return addContentFail( state, action );
    case actionTypes.FETCH_CONTENTS_START: return fetchContentsStart( state, action );
    case actionTypes.FETCH_CONTENTS_SUCCESS: return fetchContentsSuccess( state, action );
    case actionTypes.FETCH_CONTENTS_FAIL:  return fetchContentsFail( state, action );
    default: return state;
  }
};

export default reducer
