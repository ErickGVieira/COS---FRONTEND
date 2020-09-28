import React from 'react';
import './Pagamentos.css';
import Menu from '../Menu/Menu'
import axios from 'axios';

import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';

import CriarServico from '../Modal/Servico/CriarServico';
import VisualizarServico from '../Modal/Servico/VisualizarServico';
import EditarServico from '../Modal/Servico/EditarServico';

const url = "http://localhost:1100/api/";

const states = {
    servicos: [

    ]
}

export default class Pagamentos extends React.Component {

    state = {...states};

    componentWillMount(){
        axios["get"](url + `servico/obtemTodos`).then(resp => {
            this.setState({servicos: resp.data});
        });
    }

    render() {
        return (
            <div>
                <Menu />
                <Container>
                    <Row className="busca">
                        <Col md={4}>
                            <h4>Servicos</h4>
                        </Col>
                        <Col md={7}>
                            <Row>
                                <Col xs={6}>
                                    <Form.Control type="text" placeholder="Servicos" />
                                </Col>
                                <Col xs={1}>
                                    <Button type="submit" className="mb-2">Buscar</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={1}>
                            <CriarServico />
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
                                this.state.servicos.map(function(servico){
                                    return(
                                        <tr key={servico.id}>
                                            <td>{servico.id}</td>
                                            <td>{servico.descricao}</td>
                                            <td>
                                                <VisualizarServico servico={servico.id}/>
                                                <EditarServico servico={servico.id}/>
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