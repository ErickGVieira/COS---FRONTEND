import React from 'react';
import './Modelos.css';
import axios from 'axios';

import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';

import CriarModelos from '../Modal/Modelos/CriarModelos';
import VisualizarModelos from '../Modal/Modelos/VisualizarModelos';
import EditarModelos from '../Modal/Modelos/EditarModelos';
import Menu from '../Menu/Menu';

const url = "http://localhost:1100/api/";

const states = {
    modelos: [

    ]
}

export default class Modelos extends React.Component {

    state = {...states};

    componentWillMount(){
        axios["get"](url + `modelo/obtemTodos`).then(resp => {
            this.setState({modelos: resp.data});
        });
    }

    render() {
        function remover(code) {
            axios["delete"](url + `modelo/remove?code=${code}`).then(resp => {
                document.location.reload(true);
            });
        }

        return (
            <>
            <Menu></Menu>
            <Container>
                <Row className="busca">
                    <Col md={4}>
                        <h4>Modelos</h4>
                    </Col>
                    <Col md={7}>
                        <Row>
                            <Col xs={6}>
                                <Form.Control type="text" placeholder="Modelos" />
                            </Col>
                            <Col xs={1}>
                                <Button type="submit" className="mb-2">Buscar</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={1}>
                        <CriarModelos />
                    </Col>
                </Row>


                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Alternative Code</th>
                            <th>Max Departure Weight</th>
                            <th>Max Landing Weight</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.modelos.map(function(modelo){
                                return(
                                    <tr key={modelo.id}>
                                        <td>{modelo.code}</td>
                                        <td>{modelo.alternativE_CODE}</td>
                                        <td>{modelo.maX_DEPARTURE_WEIGHT}</td>
                                        <td>{modelo.maX_LANDING_WEIGHT}</td>
                                        <td>
                                            <VisualizarModelos modelo={modelo}/>
                                            <EditarModelos modelo={modelo}/>
                                            <Button type="submit" variant="danger" id="remover" onClick={() => remover(modelo.code)}>Remover</Button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
            </Container>
            </>
        );
    }
}