import React, { useState } from 'react';
import './Usuarios.css';
import Menu from '../Menu/Menu'
import axios from 'axios';

import { Container, Row, Col, Table, Form, Button, Modal } from 'react-bootstrap';
import Usuario from '../Modal/Usuario/Usuario';

const url = "http://localhost:1100/api/";

const states = {
    usuarios: [

    ]
}


export default class Usuarios extends React.Component {
    state = {...states};

    componentWillMount(){
        axios["get"](url + `usuario/obtemTodos`).then(resp => {
            // state.usuarios = resp.data;
            this.setState({usuarios: resp.data});
        });
    }

    render(){
        return (
            <div>
                <Menu />
                <Container>
                    <Row className="busca">
                        <Col md={4}>
                            <h4>Usuarios</h4>
                        </Col>
                        <Col md={7}>
                            <Row>
                                <Col xs={6}>
                                    <Form.Control type="text" placeholder="Usuarios" />
                                </Col>
                                <Col xs={1}>
                                    <Button type="submit" className="mb-2">Buscar</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={1}>
                            <Usuario />
                        </Col>
                    </Row>
    
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Cargo</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.usuarios.map(function(usuario){
                                    return(
                                        <tr key={usuario.id}>
                                            <td>{usuario.id}</td>
                                            <td>{usuario.nome}</td>
                                            <td>{usuario.cpf}</td>
                                            <td>{usuario.cargo.descricao}</td>
                                            <td className='botoes'>
                                                <Button variant="warning">Editar</Button>
                                                <Button variant="danger">Remover</Button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}