import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Auth } from './modules/auth';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' exact component={Auth} />
      </Router>
    );
  }
}

export default App;
