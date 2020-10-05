import React, { useState } from 'react';
import './CriarAeronaves.css';
import axios from 'axios';

import { Container, Col, Form, Button, Modal, Row } from 'react-bootstrap';

const url = "http://localhost:1100/api/";

function Visualizar(aeronave) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <a>
                <Button type="submit" variant="success" className="mb-2" onClick={handleShow}>Visualizar</Button>

                <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Visualizar aeronave</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Prefix</Form.Label>
                                        <Form.Control type="text" value={aeronave.aeronave.prefix} disabled/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Max Departure Weight</Form.Label>
                                        <Form.Control type="text" placeholder="Max Departure Weight" value={aeronave.aeronave.maX_DEPARTURE_WEIGHT} disabled/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Max Landing Weight</Form.Label>
                                        <Form.Control type="text" placeholder="Max Landing Weight" value={aeronave.aeronave.maX_LANDING_WEIGHT} disabled/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Active</Form.Label>
                                        <Form.Control type="text" placeholder="Active" value={aeronave.aeronave.active == false ? "Não" : "Sim"} disabled/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Aircraft Model</Form.Label>
                                        <Form.Control type="text" placeholder="Max Landing Weight" value={aeronave.aeronave.aircrafT_MODEL} disabled/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Passengers Count Aircraft</Form.Label>
                                        <Form.Control type="text" placeholder="Passengers Count Aircraft" value={aeronave.aeronave.passengerS_COUNT_AIRCRAFT} disabled/>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fechar
                            </Button>
                    </Modal.Footer>
                </Modal>
            </a>
        </>
    );
}


export default class VisualizarAeronaves extends React.Component {
    render() {
        return (
            <Visualizar aeronave={this.props.aeronave}/>
        );
    }
}