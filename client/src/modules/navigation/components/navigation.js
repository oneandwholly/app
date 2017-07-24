import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signoutUser } from '../../auth';

class Navigation extends Component {

  handleSignOut(e) {
    e.preventDefault();
    this.props.signoutUser();
  }

  render() {
    if (this.props.auth.authenticated) {
      return (
        <nav>
        <div>logo</div>
        <div><input></input></div>
        <div>
        <ul>
        <a>explore</a>
        <a>activities</a>
        <a>profile</a>
        <a>create*</a>
        <a onClick={this.handleSignOut.bind(this)}>logout*</a>
        </ul>
        </div>
        </nav>
      );
    } else {
      return <div></div>;
    }
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { signoutUser })(Navigation);
