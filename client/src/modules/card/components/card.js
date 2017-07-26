import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentList from './comment_list';
import NewComment from './new_comment';
// img_url, photo_id, # comments, # likes, comments

class Card extends Component {
  render() {
    const photo = this.props.photo;
    return (
      <div>
        <div>username</div>
        <img src={photo.img_url} />
        <button>like</button>
        <button>comment</button>
        <div>#likes</div>
        <div>{photo.caption}</div>
        <CommentList />
        <NewComment photo_id={photo.id}/>

      </div>
    );
  }
}

export default connect()(Card);
