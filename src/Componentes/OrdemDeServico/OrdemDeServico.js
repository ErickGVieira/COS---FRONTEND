import React from 'react';
import './OrdemDeServico.css';
import Menu from '../Menu/Menu'

import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';
import Logo from '../../Imagens/logo.jpg';

import CriarOrdemDeServico from '../Modal/Ordem de Serviço/CriarOrdemDeServico';
const url = "http://localhost:1100/api/OrdemDeServico/";

export default class OrdemDeServico extends React.Component {

    render() {
        return (
            <Container>
                <Row className="busca">
                    <Col md={4}>
                        <h4>Ordens de Serviço</h4>
                    </Col>
                    <Col md={7}>
                        <Row>
                            <Col xs={6}>
                                <Form.Control type="text" placeholder="Ordem de Servico" />
                            </Col>
                            <Col xs={1}>
                                <Button type="submit" className="mb-2">Buscar</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={1}>
                        <CriarOrdemDeServico />
                    </Col>
                </Row>


                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Cliente</th>
                            <th>Servico Solicitado</th>
                            <th>Servico Executado</th>
                            <th>Data Inicio</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </Table>
            </Container>
        );
    }
}