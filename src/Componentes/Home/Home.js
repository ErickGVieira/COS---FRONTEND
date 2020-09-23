import React from 'react';
import './Home.css';
import Menu from '../Menu/Menu'

import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import Logo from '../../Imagens/logo.jpg';

const url = "http://localhost:1100/api/usuario/";

export default class Home extends React.Component {

    render() {
        return (
            <div>
              <Menu />
            </div>
        );
    }
}