import axios from 'axios';
import { SAVE_PHOTOS } from './actionTypes';

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
          type: SAVE_PHOTOS,
          payload: res.data
        });
        if(history) {
          history.push(`/${username}`);
        }
      })

    // axios.get(`${ROOT_URL}/${username}/photos`, config)
    //   .then(res => {
    //     console.log(res.data);
    //     dispatch({
    //       type:  ,
    //       payload: res.data
    //     });
    //   });

  }
}
