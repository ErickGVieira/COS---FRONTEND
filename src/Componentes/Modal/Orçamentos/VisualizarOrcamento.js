import React, { useState } from 'react';
import './CriarOrcamento.css';
import axios from 'axios';

import { Table, Form, Button, Modal } from 'react-bootstrap';

const url = "http://localhost:1100/api/";

const VisualizarOrcamento = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <a>
            <Button type="submit" variant="success" className="mb-2" onClick={handleShow}>Visualizar</Button>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Visualizar orçamento</Modal.Title>
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
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control type="text" value="Manutenção e troca de pneu" disabled/>
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

export default VisualizarOrcamento;