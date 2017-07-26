import axios from 'axios';
import { SAVE_PROFILE_PHOTOS } from './actionTypes';
import { PREVENT_FETCHING_PHOTOS } from './actionTypes';

const ROOT_URL = "http://localhost:7700";

export function fetchPhotos(username, history) {
  return function(dispatch) {
    const config = {
      headers: { authorization: localStorage.getItem('token')}
    };

    axios.get(`${ROOT_URL}/users/${username}/id`)
      .then(res => {
        const id = res.data.id;
        return axios.get(`${ROOT_URL}/users/${id}/photos`);
      })
      .then(res => {
        dispatch({
          type: SAVE_PROFILE_PHOTOS,
          payload: res.data
        });
        if(history) {
          history.push(`/${username}`);
        }
      })

  }
}

export function preventFetchingAgain() {
  return function(dispatch) {
    dispatch({
      type: PREVENT_FETCHING_PHOTOS
    })
  }
}
