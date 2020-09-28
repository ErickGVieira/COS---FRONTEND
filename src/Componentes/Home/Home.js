import React from 'react';
import './Home.css';

import Menu from '../Menu/Menu'
import OrdemDeServico from '../OrdemDeServico/OrdemDeServico';

export default class Home extends React.Component {

    render() {
        return (
            <div>
              <Menu />
              <OrdemDeServico />
            </div>
        );
    }
}