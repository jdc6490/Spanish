import * as actionTypes from '../actions/actionTypes';

const initialState = {
  _id: null,
  token: null,
  name: null,
  meetupId: null

}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_FETCH_USER:
      return action.user || false;
    default:
      return state;
  }
};

export default reducer
