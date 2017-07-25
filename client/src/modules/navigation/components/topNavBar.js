import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signoutUser, setUsername } from '../../auth';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TopNavBar extends Component {
  constructor(props) {
    super(props);
  }

  handleSignOut(e) {
    e.preventDefault();
    this.props.signoutUser();
  }

  render() {
    return (
      <nav>
      <Link to='/'>logo</Link>
      <div><input></input></div>
      <div>
      <ul>
      <a>explore</a>
      <a>activities</a>
      <Link to={`/${this.props.username}`}>profile</Link>
      <Link to='/create'>create*</Link>
      <a onClick={this.handleSignOut.bind(this)}>logout*</a>
      </ul>
      </div>
      </nav>
    );
  }

}

function mapStateToProps({ auth }) {
  return { username: auth.username };
}

export default connect(mapStateToProps, { signoutUser, setUsername })(TopNavBar);
