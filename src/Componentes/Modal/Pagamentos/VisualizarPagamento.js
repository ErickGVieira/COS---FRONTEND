import React, { useState } from 'react';
import './CriarPagamento.css';
import axios from 'axios';

import { Form, Button, Modal } from 'react-bootstrap';

const url = "http://localhost:1100/api/";

const VisualizarPagamento = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <a>
            <Button type="submit" variant="success" className="mb-2" onClick={handleShow}>Visualizar</Button>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Visualizar pagamento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Ordem de Serviço</Form.Label>
                            <Form.Control type="text" value="12 - Erick" disabled/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Valor</Form.Label>
                            <Form.Control type="text" value="150" disabled/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Tipo Pagamento</Form.Label>
                            <Form.Control type="text" value="Dinheiro" disabled/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                        </Button>
                </Modal.Footer>
            </Modal>
        </a>
    );
}

export default VisualizarPagamento;