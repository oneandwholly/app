import {
  SAVE_PHOTOS
} from './actionTypes';

export default (state = { photos: {}, order: [] }, action) => {
  switch(action.type) {
    case SAVE_PHOTOS:
      let newPhotos = {};
      let newOrder = [];
      let newState = { photos: { ...state.photos }, order: [] }
      action.payload.forEach((photo) => {
        newState.order.push(photo.id);
        newState.photos[photo.id] = photo;
      });
      console.log('newState', newState);
      return newState;
    default:
      return state;
    }
}
