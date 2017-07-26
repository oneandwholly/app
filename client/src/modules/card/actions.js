import axios from 'axios';
import { SAVE_CARD_PHOTO, SAVE_CARD_COMMENTS } from './actionTypes';

const ROOT_URL = "http://localhost:7700";

export function fetchPhoto(id, history) {
  return function(dispatch) {
    const config = {
      headers: { authorization: localStorage.getItem('token')}
    };

    axios.get(`${ROOT_URL}/photos/${id}`)
      .then(res => {
        console.log(res.data);

        dispatch({
          type: SAVE_CARD_PHOTO,
          payload: res.data
        });
        if(history) {
          history.push(`/p/${id}`);
        }
      })

  }
}

export function addComment({comment_text, photo_id}) {
  return function(dispatch) {
      const config = {
        headers: { authorization: localStorage.getItem('token')}
      };
      const body = {
        comment_text,
        photo_id
      };
      axios.post('http://localhost:3090/comments/', body, config)
      .then((response) => {
        axios.get(`${ROOT_URL}/photos/${photo_id}/comments`, {
            headers: { authorization: localStorage.getItem('token') }
        })
            .then((response) => {
              console.log(response);
                  dispatch({
                      type: SAVE_CARD_COMMENTS,
                      payload: {data: response.data, photo_id}
                  })
            });
      })
  }
}
