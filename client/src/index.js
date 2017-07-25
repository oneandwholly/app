import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import reducers from './rootReducer';
import './index.css';
import axios from 'axios';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { AUTH_USER, SET_USERNAME } from './modules/auth';

const ROOT_URL = "http://localhost:7700";

let store = createStore(reducers, composeWithDevTools(
  applyMiddleware(reduxThunk)
));

const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });

  const config = {
    headers: { authorization: localStorage.getItem('token')}
  };
  axios.get(`${ROOT_URL}/users/id`, config)
  .then(res => {
    store.dispatch({
      type: SET_USERNAME,
      payload: res.data.username
    });
  })
}

render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
