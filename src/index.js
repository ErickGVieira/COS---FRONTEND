import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './Componentes/Login/Login';
import Home from './Componentes/Home/Home';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/home' component={Home}/>
        <Redirect from='*' to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
