import React from 'react';
import './Clientes.css';
import Menu from '../Menu/Menu'
import axios from 'axios';

import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';

import CriarCliente from '../Modal/Cliente/CriarCliente';
import VisualizarCliente from '../Modal/Cliente/VisualizarCliente';
import EditarCliente from '../Modal/Cliente/EditarCliente';

const url = "http://localhost:1100/api/";

const states = {
    clientes: [

    ]
}

export default class Clientes extends React.Component {

    state = {...states};

    componentWillMount(){
        axios["get"](url + `cliente/obtemTodos`).then(resp => {
            this.setState({clientes: resp.data});
        });
    }

    render() {
        return (
            <div>
                <Menu />
                <Container>
                    <Row className="busca">
                        <Col md={4}>
                            <h4>Clientes</h4>
                        </Col>
                        <Col md={7}>
                            <Row>
                                <Col xs={6}>
                                    <Form.Control type="text" placeholder="Clientes" />
                                </Col>
                                <Col xs={1}>
                                    <Button type="submit" className="mb-2">Buscar</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={1}>
                            <CriarCliente />
                        </Col>
                    </Row>


                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Cpf</th>
                                <th>Telefone</th>
                                <th>E-mail</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.clientes.map(function (cliente) {
                                    return (
                                        <tr key={cliente.id}>
                                            <td>{cliente.id}</td>
                                            <td>{cliente.nome}</td>
                                            <td>{cliente.cpf}</td>
                                            <td>{cliente.telefone}</td>
                                            <td>{cliente.email}</td>
                                            <td>
                                                <VisualizarCliente cliente={cliente.id} />
                                                <EditarCliente cliente={cliente.id} />
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