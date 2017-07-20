import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Home } from '../../home';
import Signup from './signup';
import Login from './login';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = { display: 'signup' };
    this.displaySignup = this.displaySignup.bind(this);
    this.displayLogin = this.displayLogin.bind(this);
  }

  displaySignup() {
    this.setState({ display: 'signup' });
  }

  displayLogin() {
    this.setState({ display: 'login' });
  }

  render() {
    console.log('auth', this.props.auth, 'display', this.state.display)
    if(this.props.auth.authenticated) {
      return <Home />
    } else {
      switch(this.state.display) {
        case 'signup':
          return <Signup displayLogin={this.displayLogin} />
        case 'login':
          return <Login displaySignup={this.displaySignup} />
        default:
          return <Signup displayLogin={this.displayLogin} />
      }
    }
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Auth);
