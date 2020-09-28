import React from 'react';
import './Orcamentos.css';
import Menu from '../Menu/Menu'
import axios from 'axios';

import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';

import CriaOrcamento from '../Modal/Orçamentos/CriarOrcamento';
import VisualizarOrcamento from '../Modal/Orçamentos/VisualizarOrcamento';
import EditarOrcamento from '../Modal/Orçamentos/EditarOrcamento';

const url = "http://localhost:1100/api/";

const states = {
    orcamentos: [

    ]
}

export default class Orcamentos extends React.Component {

    state = { ...states };

    componentWillMount() {
        axios["get"](url + `orcamento/obtemTodos`).then(resp => {
            this.setState({ orcamentos: resp.data });
        });
    }

    render() {
        return (
            <div>
                <Menu />
                <Container>
                    <Row className="busca">
                        <Col md={4}>
                            <h4>Orcamentos</h4>
                        </Col>
                        <Col md={7}>
                            <Row>
                                <Col xs={6}>
                                    <Form.Control type="text" placeholder="Orcamentos" />
                                </Col>
                                <Col xs={1}>
                                    <Button type="submit" className="mb-2">Buscar</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={1}>
                            <CriaOrcamento />
                        </Col>
                    </Row>


                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Ordem De Servico</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.orcamentos.map(function (orcamento) {
                                    return (
                                        <tr key={orcamento.id}>
                                            <td>{orcamento.id}</td>
                                            <td>{orcamento.ordemDeServico.id} - Erick</td>
                                            <td>{parseFloat(orcamento.valor)}</td>
                                            <td>
                                                <VisualizarOrcamento orcamento={orcamento.id} />
                                                <EditarOrcamento orcamento={orcamento.id} />
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