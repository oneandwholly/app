import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Auth } from './modules/auth';
import { Navigation } from './modules/navigation';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route path='/' exact component={Auth} />
        </div>
      </Router>
    );
  }
}

export default App;
