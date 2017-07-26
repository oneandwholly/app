import {
  SAVE_PROFILE_PHOTOS,
  PREVENT_FETCHING_PHOTOS
} from './actionTypes';

export default (state = { photos: {}, order: [], shouldFetchPhotos: true }, action) => {
  switch(action.type) {
    case SAVE_PROFILE_PHOTOS:
      let newPhotos = {};
      let newOrder = [];
      let newState = { ...state , order: [] }
      action.payload.forEach((photo) => {
        newState.order.push(photo.id);
        newState.photos[photo.id] = photo;
      });
      console.log('newState', newState);
      return newState;
    case PREVENT_FETCHING_PHOTOS:
      return { ...state, shouldFetchPhotos: false }
    default:
      return state;
    }
}
