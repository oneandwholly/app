import axios from 'axios';

const ROOT_URL = "http://localhost:7700";

export function fetchPhotos(username) {
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
        console.log(res);
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
