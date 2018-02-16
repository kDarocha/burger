import axios from 'axios';

import * as actionTypes from './actionsTypes';

const ROOT_URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
const API_KEY = '?key=AIzaSyAl4Nvng8Ybh8_xv9WZ56T6vj6_etXF-kc';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  }
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
};

export const auth = (email, password, isSignUp) => {
  return dispatch => {
    dispatch(authStart());

    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    let url = '/signupNewUser';
    if (!isSignUp) {
      url = '/verifyPassword';
    }

    axios.post(ROOT_URL + url + API_KEY, authData)
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
      })
      .catch(error => {
        console.log(error);
        dispatch(authFail(error));
      })
  }
};
