import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopNavBar from './topNavBar';

class Navigation extends Component {

  render() {
    if (this.props.auth.authenticated) {
      return <TopNavBar history={this.props.history} />
    } else {
      return <div></div>;
    }
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Navigation);
