import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentList from './comment_list';
import NewComment from './new_comment';
import { clearCardData } from '../actions';
// img_url, photo_id, # comments, # likes, comments

class Card extends Component {
  componentWillUnmount(){
    console.log('unmounting')
    this.props.clearCardData();
  }

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
        <CommentList comments={this.props.comments}/>
        <NewComment photo_id={photo.id}/>

      </div>
    );
  }
}

export default connect(null, { clearCardData })(Card);
