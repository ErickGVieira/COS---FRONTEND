import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './Componentes/Login/Login';
import Home from './Componentes/Home/Home';
import Clientes from './Componentes/Clientes/Clientes';
import Pecas from './Componentes/Pecas/Pecas';
import Orcamentos from './Componentes/Orcamentos/Orcamentos';
import Usuarios from './Componentes/Usuarios/Usuarios';
import Servicos from './Componentes/Servicos/Servicos';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/clientes' component={Clientes}/>
        <Route exact path='/pecas' component={Pecas}/>
        <Route exact path='/orcamentos' component={Orcamentos}/>
        <Route exact path='/usuarios' component={Usuarios}/>
        <Route exact path='/servicos' component={Servicos}/>
        <Redirect from='*' to='/' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
