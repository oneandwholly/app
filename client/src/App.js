import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Auth, RequireAuth } from './modules/auth';
import { Navigation } from './modules/navigation';
import { Create } from './modules/create';
import { Profile } from './modules/profile';
import { CardWrapper } from './modules/card';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={Navigation} />
          <Switch>
            <Route path='/' exact component={Auth} />
            <Route path='/create' exact component={Create} />
            <Route path='/p/:photo_id' component={CardWrapper} />
            <Route path='/:username' component={RequireAuth(Profile)} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
