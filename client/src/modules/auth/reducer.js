import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    SET_USERNAME
} from './actionTypes';

export default (state = { authenticated: false, username: '' }, action) => {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, error: '', authenticated: true };
    case UNAUTH_USER:
      return { ...state, error: '', authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case SET_USERNAME:
    console.log('username', action.payload)
      return { ...state, username: action.payload }
    default:
      return state;
    }
}
