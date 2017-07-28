import axios from 'axios';
import { SAVE_CARD_PHOTO, SAVE_CARD_COMMENTS, CLEAR_CARD_DATA, ADD_COMMENT } from './actionTypes';

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
      axios.post(`${ROOT_URL}/comments`, body, config)
      .then((res) => {
        console.log(res)
        axios.get(`${ROOT_URL}/comments/${res.data[0].cid}`, {
            headers: { authorization: localStorage.getItem('token') }
        })
            .then((res) => {
                  dispatch({
                      type: ADD_COMMENT,
                      payload: res.data[0]
                  })
            });
      })
  }
}

export function fetchCommentsByPhotoId({photo_id}) {
  return function(dispatch) {
    const config = {
      headers: { authorization: localStorage.getItem('token')}
    };

    axios.get(`${ROOT_URL}/photos/${photo_id}/comments`)
      .then(res => {
        console.log('commennts', res.data);
        dispatch({
            type: SAVE_CARD_COMMENTS,
            payload: res.data
        })
      });
  }
}

export function clearCardData() {
  return function(dispatch) {
    dispatch({
      type: CLEAR_CARD_DATA
    });
  }
}
