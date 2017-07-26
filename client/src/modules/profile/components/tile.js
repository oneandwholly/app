//accepts photo as a prop, which has photo_id, image_url, # of likes, # of comments

/*
  photo = {

  }
*/
import React from 'react';
import { Link } from 'react-router-dom';

//<div>like:{photo.likes} comments:{photo.comments}</div>

export default ({ photo }) => {
  console.log('photo', photo)
  return (
    <div>
      <Link to={`/p/${photo.id}`}><img src={photo.img_url} /></Link>
    </div>
  )
}
