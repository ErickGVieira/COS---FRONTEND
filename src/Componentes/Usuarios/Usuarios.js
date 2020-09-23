import React from 'react';
import './Usuarios.css';
import Menu from '../Menu/Menu'

import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';
import Logo from '../../Imagens/logo.jpg';

const url = "http://localhost:1100/api/usuarios/";

export default class Usuarios extends React.Component {

    render() {
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
                            <Button type="submit" className="mb-2">Adicionar</Button>
                        </Col>
                    </Row>


                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Cargo</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}