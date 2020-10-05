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

function Editar(aeronave) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setPrefix = (prefix) => state.aeronave.prefix = prefix;
    const setMaxDepartureWeight = (maxDepartureWeight) => state.aeronave.max_departure_weight = maxDepartureWeight;
    const setMaxLandingWeight = (maxLandingWeight) => state.aeronave.max_landing_weight = maxLandingWeight;
    const setActive = (active) => state.aeronave.active = active;
    const setAircraftModel = (airCraftModel) => state.aeronave.aircraft_model = airCraftModel;
    const setPassengerCountAircraft = (passengerCountAircraft) => state.aeronave.passengers_count_aircraft;

    const salvar = () => {
        axios["put"](url + `aeronave/atualiza`, aeronave.aeronave).then(resp => {
            handleClose();
            document.location.reload(true);
        });
    }

    return (
        <>
            <a>
                <Button type="submit" variant="warning" className="mb-2" onClick={handleShow}>Editar</Button>

                <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar aeronave</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Prefix</Form.Label>
                                        <Form.Control type="text" value={aeronave.aeronave.prefix} onChange={e => setPrefix(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Max Departure Weight</Form.Label>
                                        <Form.Control type="text" placeholder="Max Departure Weight" value={aeronave.aeronave.maX_DEPARTURE_WEIGHT} onChange={e => setMaxDepartureWeight(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Max Landing Weight</Form.Label>
                                        <Form.Control type="text" placeholder="Max Landing Weight" value={aeronave.aeronave.maX_LANDING_WEIGHT} onChange={e => setMaxLandingWeight(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Active</Form.Label>
                                        <Form.Control type="text" placeholder="Active" value={aeronave.aeronave.active} onChange={e => setActive(e.target.value)} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Aircraft Model</Form.Label>
                                        <Form.Control type="text" placeholder="Max Landing Weight" value={aeronave.aeronave.aircrafT_MODEL} onChange={e => setAircraftModel(e.target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Passengers Count Aircraft</Form.Label>
                                        <Form.Control type="text" placeholder="Passengers Count Aircraft" value={aeronave.aeronave.passengerS_COUNT_AIRCRAFT} onChange={e => setPassengerCountAircraft(e.target.value)} />
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
            </a>
        </>
    );
}


export default class EditarAeronaves extends React.Component {

    componentWillUnmount(){
        this.setState({aeronave: this.props.aeronave});
    }

    render() {
        return (
            <Editar aeronave={this.props.aeronave} />
        );
    }
}