import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Aeronaves from './Componentes/Aeronaves/Aeronaves';
import Modelos from './Componentes/Modelos/Modelos';
import Relatorios from './Componentes/Relatorios/Relatorios';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Aeronaves}/>
        <Route exact path='/modelos' component={Modelos}/>
        <Route exact path='/relatorios' component={Relatorios}/>
        <Redirect from='*' to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
