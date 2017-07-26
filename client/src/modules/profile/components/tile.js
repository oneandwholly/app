//accepts photo as a prop, which has photo_id, image_url, # of likes, # of comments

/*
  photo = {

  }
*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchPhoto } from '../../card';
import { connect } from 'react-redux';
//<div>like:{photo.likes} comments:{photo.comments}</div>

class Tile extends Component {
  handleTileClick(e) {
    e.preventDefault();
    this.props.fetchPhoto(this.props.photo.id, this.props.history)
  }

  render() {
    const photo = this.props.photo;
    return (
      <div>
        <a onClick={this.handleTileClick.bind(this)}><img src={photo.img_url} /></a>
      </div>
    );
  }
}

export default connect(null, { fetchPhoto })(Tile);
