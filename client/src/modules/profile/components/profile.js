import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Profile extends Component {
  componentWillMount() {
    const username = this.props.match.params.username;
    this.props.fetchPhotos(username);
  }

  render() {
    return (
        <div></div>
    );
  }
}

export default connect(null, actions)(Profile);
