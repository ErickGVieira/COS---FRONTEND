import React, { useState } from 'react';
import './CriarModelos.css';
import axios from 'axios';

import { Container, Col, Form, Button, Modal, Row } from 'react-bootstrap';

const url = "http://localhost:1100/api/";

function Visualizar(modelo) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <a>
            <Button type="submit" variant="success" className="mb-2" onClick={handleShow}>Visualizar</Button>

            <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Visualizar modelo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Code</Form.Label>
                                        <Form.Control type="text" placeholder="Code" value={modelo.modelo.code} disabled/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Alternative Code</Form.Label>
                                        <Form.Control type="text" placeholder="Alternative Code" value={modelo.modelo.alternativE_CODE} disabled/>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Max Departure Weight</Form.Label>
                                        <Form.Control type="text" placeholder="Max Departure Weight" value={modelo.modelo.maX_DEPARTURE_WEIGHT} disabled/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Max Landing Weight</Form.Label>
                                        <Form.Control type="text" placeholder="Max Landing Weight" value={modelo.modelo.maX_LANDING_WEIGHT} disabled/>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Fechar
                            </Button>
                        <Button variant="primary">
                            Salvar
                            </Button>
                    </Modal.Footer>
                </Modal>
        </a>
    );
}


export default class VisualizarModelos extends React.Component {

    componentWillMount() {

    }

    render() {
        return (
            <Visualizar modelo={this.props.modelo} />
        );
    }
}