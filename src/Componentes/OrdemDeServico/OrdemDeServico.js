import React from 'react';
import './OrdemDeServico.css';
import axios from 'axios';

import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';

import CriarOrdemDeServico from '../Modal/Ordem de Serviço/CriarOrdemDeServico';
import VisualizarOrdemDeServico from '../Modal/Ordem de Serviço/VisualizarOrdemDeServico';
import EditarOrdemDeServico from '../Modal/Ordem de Serviço/EditarOrdemDeServico';

const url = "http://localhost:1100/api/";

const states = {
    ordemDeServicos: [

    ]
}

export default class OrdemDeServico extends React.Component {

    state = {...states};

    componentWillMount(){
        axios["get"](url + `OrdemDeServico/obtemTodos`).then(resp => {
            this.setState({ordemDeServicos: resp.data});
        });
    }

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
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.ordemDeServicos.map(function(OrdemDeServico){
                                return(
                                    <tr key={OrdemDeServico.id}>
                                        <td>{OrdemDeServico.id}</td>
                                        <td>{OrdemDeServico.cliente.nome}</td>
                                        <td>{OrdemDeServico.servico.descricao}</td>
                                        <td>{OrdemDeServico.servico1.descricao}</td>
                                        <td>{OrdemDeServico.dataInicio}</td>
                                        <td>{OrdemDeServico.status.descricao}</td>
                                        <td>
                                            <VisualizarOrdemDeServico ordemDeServico={OrdemDeServico.id}/>
                                            <EditarOrdemDeServico ordemDeServico={OrdemDeServico.id}/>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        );
    }
}