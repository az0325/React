import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home'
import { Route, Router } from "react-router"
import history from "./history"


ReactDOM.render(
  <Router history={history}>
    <Route path='/' component={Home} />
  </Router>,
  document.getElementById('index')
);
