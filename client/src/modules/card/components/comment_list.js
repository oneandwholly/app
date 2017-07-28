import React, { Component } from 'react';

class CommentList extends Component {
  render() {
    console.log('comment_list', this.props.comments)
    if( this.props.comments ) {
      return (
        <div>{this.props.comments.map((comment) => {
            return <div key={comment.id}>{comment.comment_text}</div>
          })}</div>
        );
    } else {
      return <div></div>
    }
  }

}

export default CommentList
