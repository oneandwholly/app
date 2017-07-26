import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import TileArea from './tile_area';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPhotos(this.props.match.params.username);
  }

  componentWillReceiveProps(newProps) {
    this.props.fetchPhotos(newProps.match.params.username);
  }

  render() {
    console.log('props', this.props)
    return (
      <div>
        <TileArea></TileArea>
      </div>
    );
  }
}

export default connect(null, actions)(Profile);
