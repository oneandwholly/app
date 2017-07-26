import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Auth, RequireAuth } from './modules/auth';
import { Navigation } from './modules/navigation';
import { Create } from './modules/create';
import { Profile } from './modules/profile';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route path='/' exact component={Auth} />
          <Route path='/create' exact component={Create} />
          <Route path='/:username' component={RequireAuth(Profile)} />
        </div>
      </Router>
    );
  }
}

export default App;
