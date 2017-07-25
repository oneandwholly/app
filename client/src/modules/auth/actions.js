import axios from 'axios';

import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    SET_USERNAME
} from './actionTypes';

const ROOT_URL = "http://localhost:7700";

export function loginUser({ username, password }) {
  return function(dispatch) {

    // Submit email/password to the server
      axios.post(`${ROOT_URL}/login`, { username, password })
          .then(response => {
              // If request is good..
              // - Update the state to indicate user is authenticated
              dispatch({ type: AUTH_USER })
              // - Save the JWT token
              localStorage.setItem('token', response.data.token);

              const config = {
                headers: { authorization: localStorage.getItem('token')}
              };
              console.log('config', config)
              return axios.get(`${ROOT_URL}/users/id`, config)
              .then(res => {
                dispatch({
                  type: SET_USERNAME,
                  payload: res.data.username
                });
              });
          })
          .catch(() => {
              // If request is bad..
              // - Show error to the user
                dispatch(authError('Bad Login Info'));
          });
  }
}

export function signupUser({username, email, password }) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/users`, { username, email, password })
            .then(response => {
                // If request is good..
                // - Update the state to indicate user is authenticated
                dispatch({ type: AUTH_USER })
                // - Save the JWT token
                localStorage.setItem('token', response.data.token);
            })
            .catch(error => {
                const response = error.response;
                dispatch(authError(response.data.error));
            });
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser() {
    localStorage.removeItem('token');

    return { type: UNAUTH_USER };
}

export function setUsername() {
  return function(dispatch) {
    const config = {
      headers: { authorization: localStorage.getItem('token')}
    };
    console.log('config', config)
    axios.get(`${ROOT_URL}/users/id`, config)
    .then(res => {
      dispatch({
        type: SET_USERNAME,
        payload: res.data.username
      });
    })
  }
}
