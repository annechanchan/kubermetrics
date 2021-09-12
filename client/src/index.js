import '@babel/polyfill';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import store from '../store'
import styles from '../styles.css'
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
