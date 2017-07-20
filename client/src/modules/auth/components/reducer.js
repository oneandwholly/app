import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from './actionTypes';

export default (state = { authenticated: false }, aciton) => {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, error: '' };
    case UNAUTH_USER:
      return { ...state, authenticated: false, error: '' };
      case AUTH_ERROR:
      return { ...state, error: action.payload };
  }
  return state;
}
