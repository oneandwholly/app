import {
  SAVE_CARD_PHOTO,
  CLEAR_CARD_DATA,
  SAVE_CARD_COMMENTS,
  ADD_COMMENT
} from './actionTypes';

export default (state = { photo: {}, comments: [] }, action) => {
  switch(action.type) {
    case SAVE_CARD_PHOTO:
      let newState = { photo: action.payload[0] };
      return newState;
    case CLEAR_CARD_DATA:
      return { photo: {} };
    case SAVE_CARD_COMMENTS:
      return { ...state , comments: action.payload };
    case ADD_COMMENT:
    console.log('addingcomments', action.payload)
    console.log('state.comments', state.comments)
      let newComments = [...state.comments]
      newComments.push(action.payload)
      console.log(newComments, 'new')
      return { ...state, comments: newComments }
    default:
      return state;
    }
}
