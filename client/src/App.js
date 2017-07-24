import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Auth } from './modules/auth';
import { Navigation } from './modules/navigation';
import { Create } from './modules/create';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route path='/' exact component={Auth} />
          <Route path='/create' exact component={Create} />
        </div>
      </Router>
    );
  }
}

export default App;
