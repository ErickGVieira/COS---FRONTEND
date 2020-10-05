import React from 'react';
import './Relatorios.css';
import axios from 'axios';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

import { Container, Row, Col, Table, Form, Button } from 'react-bootstrap';

import Menu from '../Menu/Menu';

const url = "http://localhost:1100/api/";

const states = {
    aeronaves: [

    ]
}

// const ExcelFile = ReactExport.ExcelFile;
// const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
// const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default class Aeronaves extends React.Component {

    state = { ...states };

    componentWillMount() {
        axios["get"](url + `aeronave/obtemTodosAtivos`).then(resp => {
            this.setState({ aeronaves: resp.data });
        });
    }

    render() {

        return (
            <>
                <Menu></Menu>
                <Container>
                    <Row className="busca">
                        <Col md={4}>
                            <h4>Aeronaves ativos</h4>
                        </Col>
                        <Col md={7}>
                            <Row>
                                <Col xs={6}>
                                    <Form.Control type="text" placeholder="Aeronaves" />
                                </Col>
                                <Col xs={2}>
                                    <Button type="submit" className="mb-2">Buscar</Button>
                                </Col>
                                <Col xs={3}>
                                    <ReactHTMLTableToExcel
                                        className="btn btn-info"
                                        table="aeronaves"
                                        filename="Aeronaves"
                                        sheet="Sheet"
                                        buttonText="Export excel" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                    <Table striped bordered hover id="aeronaves">
                        <thead>
                            <tr>
                                <th>Prefix</th>
                                <th>Max Departure Weight</th>
                                <th>Max Landing Weight</th>
                                <th>Passengers Count Aircraft</th>
                                <th>Active</th>
                                <th>Aircraft Model</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.aeronaves.map(function (aeronave) {
                                    return (
                                        <tr key={aeronave.id}>
                                            <td>{aeronave.prefix}</td>
                                            <td>{aeronave.maX_DEPARTURE_WEIGHT}</td>
                                            <td>{aeronave.maX_LANDING_WEIGHT}</td>
                                            <td>{aeronave.passengerS_COUNT_AIRCRAFT}</td>
                                            <td>{aeronave.active == false ? "Não" : "Sim"}</td>
                                            <td>{aeronave.aircrafT_MODEL}</td>
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