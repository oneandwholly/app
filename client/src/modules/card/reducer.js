import {
  SAVE_CARD_PHOTO
} from './actionTypes';

export default (state = { photo: {} }, action) => {
  switch(action.type) {
    case SAVE_CARD_PHOTO:
      let newState = { photo: action.payload[0] };

      return newState;
    default:
      return state;
    }
}
