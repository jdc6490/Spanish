import axios from 'axios';
import * as actionTypes from './actionTypes';


export const authFetchUser = () => async dispatch => {
    const {data} = await axios.get('http://localhost:5000/api/current_user');
  dispatch({ type: actionTypes.AUTH_FETCH_USER, user: data });
};
