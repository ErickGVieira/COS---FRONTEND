import React from 'react';
import './Pecas.css';
import Menu from '../Menu/Menu'
import axios from 'axios';

import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';

import CriarPeca from '../Modal/Peca/CriarPeca';
import VisualizarPeca from '../Modal/Peca/VisualizarPeca';
import EditarPeca from '../Modal/Peca/EditarPeca';

const url = "http://localhost:1100/api/";

const states = {
    pecas: [

    ]
}

export default class Pecas extends React.Component {

    state = {...states};

    componentWillMount(){
        axios["get"](url + `peca/obtemTodos`).then(resp => {
            this.setState({pecas: resp.data});
        });
    }

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
                            <CriarPeca />
                        </Col>
                    </Row>


                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Descricao</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.pecas.map(function (peca) {
                                    return (
                                        <tr key={peca.id}>
                                            <td>{peca.id}</td>
                                            <td>{peca.descricao}</td>
                                            <td>
                                                <VisualizarPeca peca={peca.id} />
                                                <EditarPeca servico={peca.id} />
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