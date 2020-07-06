import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home'
// import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import { Route, Router } from "react-router"
import history from "./history"
import Starbucks from './components/Starbucks/Starbucks'
import AlertDialog from './components/Dialog/AlertDialog'
// import reducers from './reducers'

// redux
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

// Store 생성
// const store = createStore(reducers);

ReactDOM.render(
  // <Provider>
  <Router Router history={history} >
    <Route path='/' component={Header} />
    <Route path="/home" component={Home} />
    <Route path="/starbucks" component={Starbucks} />
    <Route path="/dialog" component={AlertDialog} />
  </Router >
  // </Provider>
  , document.getElementById('index')
);
