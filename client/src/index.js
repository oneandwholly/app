import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import reducers from './rootReducer';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { AUTH_USER } from './modules/auth';

let store = createStore(reducers, composeWithDevTools(
  applyMiddleware(reduxThunk)
));

const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
