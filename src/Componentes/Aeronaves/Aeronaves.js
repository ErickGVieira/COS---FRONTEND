import React from 'react';
import './Aeronaves.css';
import axios from 'axios';

import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';

import CriarAeronaves from '../Modal/Aeronaves/CriarAeronaves';
import VisualizarAeronaves from '../Modal/Aeronaves/VisualizarAeronaves';
import EditarAeronaves from '../Modal/Aeronaves/EditarAeronaves';

import Menu from '../Menu/Menu';

const url = "http://localhost:1100/api/";

const states = {
    aeronaves: [

    ]
}

export default class Aeronaves extends React.Component {

    state = { ...states };

    componentWillMount() {
        axios["get"](url + `aeronave/obtemTodos`).then(resp => {
            this.setState({aeronaves: resp.data});
        });
    }

    render() {
        function remover(prefix) {
            axios["delete"](url + `aeronave/remove?prefixAeronave=${prefix}`).then(resp => {
                document.location.reload(true);
            });
        }

        return (
            <>
                <Menu></Menu>
                <Container>
                    <Row className="busca">
                        <Col md={4}>
                            <h4>Aeronaves</h4>
                        </Col>
                        <Col md={7}>
                            <Row>
                                <Col xs={6}>
                                    <Form.Control type="text" placeholder="Aeronaves" />
                                </Col>
                                <Col xs={1}>
                                    <Button type="submit" className="mb-2">Buscar</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={1}>
                            <CriarAeronaves />
                        </Col>
                    </Row>


                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Prefix</th>
                                <th>Max Departure Weight</th>
                                <th>Max Landing Weight</th>
                                <th>Passengers Count Aircraft</th>
                                <th>Active</th>
                                <th>Aircraft Model</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.aeronaves.map(function(aeronave){
                                return(
                                    <tr key={aeronave.id}>
                                        <td>{aeronave.prefix}</td>
                                        <td>{aeronave.maX_DEPARTURE_WEIGHT}</td>
                                        <td>{aeronave.maX_LANDING_WEIGHT}</td>
                                        <td>{aeronave.passengerS_COUNT_AIRCRAFT}</td>
                                        <td>{aeronave.active == false ? "Não" : "Sim"}</td>
                                        <td>{aeronave.aircrafT_MODEL}</td>
                                        <td>
                                            <VisualizarAeronaves aeronave={aeronave}/>
                                            <EditarAeronaves aeronave={aeronave}/>
                                            <Button type="submit" variant="danger" id="remover" onClick={() => remover(aeronave.prefix)}>Remover</Button>
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