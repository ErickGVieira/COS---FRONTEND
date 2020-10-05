import React, { useState } from 'react';
import './CriarAeronaves.css';
import axios from 'axios';

import { Container, Col, Form, Button, Modal, Row } from 'react-bootstrap';

const url = "http://localhost:1100/api/";

const state = {
    aeronave: {
        id: 0,
        prefix: null,
        max_departure_weight: null,
        max_landing_weight: null,
        active: 1,
        aircraft_model: null,
        passengers_count_aircraft: 0
    }
}

function Cria() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setPrefix = (prefix) => state.aeronave.prefix = prefix;
    const setMaxDepartureWeight = (maxDepartureWeight) => state.aeronave.max_departure_weight = maxDepartureWeight;
    const setMaxLandingWeight = (maxLandingWeight) => state.aeronave.max_landing_weight = maxLandingWeight;
    const setActive = (active) => state.aeronave.active = active;
    const setAircraftModel = (airCraftModel) => state.aeronave.aircraft_model = airCraftModel;
    const setPassengersCountAircraft = (passengerCountAircraft) => state.aeronave.passengers_count_aircraft;

    const salvar = () => {
        axios["post"](url + `aeronave/cria`, state.aeronave).then(resp => {
            handleClose();
            document.location.reload(true);
        });
    }

    return (
        <>
            <Container>
                <Col md={1}>
                    <Button type="submit" className="mb-2" onClick={handleShow}>Adicionar</Button>
                </Col>

                <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Criar aeronave</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Prefix</Form.Label>
                                        <Form.Control type="text" placeholder="Prefix" onChange={state.aeronave.prefix} onChange={e => setPrefix(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Max Departure Weight</Form.Label>
                                        <Form.Control type="text" placeholder="Max Departure Weight" onChange={state.aeronave.max_departure_weight} onChange={e => setMaxDepartureWeight(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Max Landing Weight</Form.Label>
                                        <Form.Control type="text" placeholder="Max Landing Weight" onChange={state.aeronave.max_landing_weight} onChange={e => setMaxLandingWeight(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Active</Form.Label>
                                        <Form.Control type="text" placeholder="Active" onChange={state.aeronave.active} onChange={e => setActive(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Aircraft Model</Form.Label>
                                        <Form.Control type="text" placeholder="Aircraft Model" onChange={state.aeronave.airCraftModel} onChange={e => setAircraftModel(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Passengers Count Aircraft</Form.Label>
                                        <Form.Control type="text" placeholder="Passengers Count Aircraft" onChange={state.aeronave.passengers_count_aircraft} onChange={e => setPassengersCountAircraft(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fechar
                            </Button>
                        <Button variant="primary" onClick={salvar}>
                            Salvar
                            </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    );
}


export default class CriarAeronaves extends React.Component {
    render() {
        return (
            <Cria />
        );
    }
}