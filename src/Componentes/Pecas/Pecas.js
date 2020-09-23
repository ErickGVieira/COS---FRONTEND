import React from 'react';
import './Pecas.css';
import Menu from '../Menu/Menu'

import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';
import Logo from '../../Imagens/logo.jpg';

const url = "http://localhost:1100/api/pecas/";

export default class Pecas extends React.Component {

    render() {
        return (
            <div>
                <Menu />
                <Container>
                    <Row className="busca">
                        <Col md={4}>
                            <h4>Pecas</h4>
                        </Col>
                        <Col md={7}>
                            <Row>
                                <Col xs={6}>
                                    <Form.Control type="text" placeholder="Pecas" />
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
                                <th>Descricao</th>
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