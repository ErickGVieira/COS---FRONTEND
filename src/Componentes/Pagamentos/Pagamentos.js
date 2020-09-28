import React from 'react';
import './Pagamentos.css';
import Menu from '../Menu/Menu'
import axios from 'axios';

import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';

import CriarPagamento from '../Modal/Pagamentos/CriarPagamento';
import VisualizarPagamento from '../Modal/Pagamentos/VisualizarPagamento';
import EditarPagamento from '../Modal/Pagamentos/EditarPagamento';

const url = "http://localhost:1100/api/";

const states = {
    pagamentos: [

    ]
}

export default class Pagamentos extends React.Component {

    state = {...states};

    componentWillMount(){
        axios["get"](url + `pagamento/obtemTodos`).then(resp => {
            this.setState({pagamentos: resp.data});
        });
    }

    render() {
        return (
            <div>
                <Menu />
                <Container>
                    <Row className="busca">
                        <Col md={4}>
                            <h4>Pagamentos</h4>
                        </Col>
                        <Col md={7}>
                            <Row>
                                <Col xs={6}>
                                    <Form.Control type="text" placeholder="Pagamentos" />
                                </Col>
                                <Col xs={1}>
                                    <Button type="submit" className="mb-2">Buscar</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={1}>
                            <CriarPagamento />
                        </Col>
                    </Row>


                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Valor</th>
                                <th>Ordem De Serviço</th>
                                <th>Tipo Pagamento</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.pagamentos.map(function(pagamento){
                                    return(
                                        <tr key={pagamento.id}>
                                            <td>{pagamento.id}</td>
                                            <td>{pagamento.valor}</td>
                                            <td>12 - Erick</td>
                                            <td>Dinheiro</td>
                                            <td>
                                                <VisualizarPagamento pagamento={pagamento.id}/>
                                                <EditarPagamento pagamento={pagamento.id}/>
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