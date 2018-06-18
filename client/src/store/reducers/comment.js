import * as actionTypes from '../actions/actionTypes';

const initialState = {
  comments: [],
  addCommentLoading: false,
  fetchCommentsLoading: false,
  error: null
}

const addCommentStart = ( state, action ) => {
  return {
    ...state,
    addcommentLoading: true
  }
};

const addCommentSuccess = ( state, action ) => {
  return {
    ...state,
    comments: state.comments.concat( action.commentData ),
    addCommentLoading: false
  }
};

const addCommentFail = ( state, action ) => {
  return {
    ...state,
    addcommentLoading: false,
    error: action.error
  }
};

const fetchCommentsStart = ( state, action ) => {
  return {
    ...state,
    fetchcommentsLoading: true
  }
};

const fetchCommentsSuccess = ( state, action ) => {
  return {
    ...state,
    comments: action.comments,
    fetchcommentsLoading: false
  }
};

const fetchCommentsFail = ( state, action ) => {
  return {
    ...state,
    fetchcommentsLoading: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT_START: return addCommentStart( state, action );
    case actionTypes.ADD_COMMENT_SUCCESS: return addCommentSuccess( state, action );
    case actionTypes.ADD_COMMENT_FAIL:  return addCommentFail( state, action );
    case actionTypes.FETCH_COMMENTS_START: return fetchCommentsStart( state, action );
    case actionTypes.FETCH_COMMENTS_SUCCESS: return fetchCommentsSuccess( state, action );
    case actionTypes.FETCH_COMMENTS_FAIL:  return fetchCommentsFail( state, action );
    default: return state;
  }
};

export default reducer
