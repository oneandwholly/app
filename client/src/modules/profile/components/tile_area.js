import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tile from './tile';

class TileArea extends Component {

  render() {
    const tiles = this.props.order.map((index) => {
      return <Tile key={index} photo={ this.props.photos[index] } />
    });

    return <div>{tiles}</div>
  }
}

function mapStateToProps ({ profile }) {
  return {
    photos: profile.photos,
    order: profile.order
  };
}

export default connect(mapStateToProps)(TileArea);
