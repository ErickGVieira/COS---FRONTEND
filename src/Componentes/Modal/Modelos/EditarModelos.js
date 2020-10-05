import React, { useState } from 'react';
import './CriarModelos.css';
import axios from 'axios';

import { Container, Col, Form, Button, Modal, Row } from 'react-bootstrap';

const url = "http://localhost:1100/api/";

const state = {
    modelo: {
        code: null,
        alternative_code: null,
        max_departure_weight: null,
        max_landing_weight: null
    }
}

function Edita(modelo) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setCode = (code) => state.modelo.code = code;
    const setAlternativeCode = (alternativeCode) => state.modelo.alternativeCode = alternativeCode;
    const setMaxDepartureWeight = (maxDepartureWeight) => state.modelo.max_departure_weight = maxDepartureWeight;
    const setMaxLandingWeight = (maxLandingWeight) => state.modelo.max_landing_weight = maxLandingWeight;

    const salvar = () => {
        axios["put"](url + `modelo/atualiza`, modelo.modelo).then(resp => {
            handleClose();
            document.location.reload(true);
        });
    }

    return (
        <a>
            <Button type="submit" variant="warning" className="mb-2" onClick={handleShow}>Editar</Button>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edita modelo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Code</Form.Label>
                                    <Form.Control type="text" placeholder="Code" value={modelo.modelo.code} onChange={e => setCode(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Alternative Code</Form.Label>
                                    <Form.Control type="text" placeholder="Alternative Code" value={modelo.modelo.alternativE_CODE} onChange={e => setAlternativeCode(e.target.value)} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Max Departure Weight</Form.Label>
                                    <Form.Control type="text" placeholder="Max Departure Weight" value={modelo.modelo.maX_DEPARTURE_WEIGHT} onChange={e => setMaxDepartureWeight(e.target.value)} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Max Landing Weight</Form.Label>
                                    <Form.Control type="text" placeholder="Max Landing Weight" value={modelo.modelo.maX_LANDING_WEIGHT} onChange={e => setMaxLandingWeight(e.target.value)} />
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
    );
}


export default class EditarModelos extends React.Component {

    componentWillMount() {
        this.setState({ modelo: this.props.modelo });
    }

    render() {
        return (
            <Edita modelo={this.props.modelo} />
        );
    }
}