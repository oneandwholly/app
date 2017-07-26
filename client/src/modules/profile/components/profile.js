import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import TileArea from './tile_area';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    //if didnt come from clicking topNavBar's profile button
    if(this.props.shouldFetchPhotos) {
      this.props.fetchPhotos(this.props.match.params.username);
    }
  }

  componentWillReceiveProps(newProps) {
    if(this.props.shouldFetchPhotos) {
      this.props.fetchPhotos(newProps.match.params.username);
    }
  }

  render() {
    return (
      <div>
        <TileArea history={this.props.history}></TileArea>
      </div>
    );
  }
}

function mapStateToProps({ profile }) {
  return { shouldFetchPhotos: profile.shouldFetchPhotos };
}

export default connect(mapStateToProps, actions)(Profile);
