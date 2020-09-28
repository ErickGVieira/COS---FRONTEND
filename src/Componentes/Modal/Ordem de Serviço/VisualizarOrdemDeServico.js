import React, { useState } from 'react';
import './CriarOrdemDeServico.css';
import axios from 'axios';

import { Container, Row, Col, Table, Form, Button, Modal } from 'react-bootstrap';

const url = "http://localhost:1100/api/";

const VisualizarCliente = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <a>
            <Button type="submit" variant="success" className="mb-2" onClick={handleShow}>Visualizar</Button>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Visualizar ordem de serviço</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nome do Cliente</Form.Label>
                            <Form.Control type="text" placeholder="Nome" value="Erick" disabled/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Serviço Solicitado</Form.Label>
                            <Form.Control type="text" placeholder="Cpf" value="Troca de Pneu" disabled/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Serviço Executado</Form.Label>
                            <Form.Control type="text" placeholder="Cpf" value="-" disabled/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Data início</Form.Label>
                            <Form.Control type="text" placeholder="E-mail" value="28-09-2020 15:00" disabled/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Data Fim</Form.Label>
                            <Form.Control type="text" placeholder="E-mail" value="28-09-2020 15:00" disabled/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Solicitante</Form.Label>
                            <Form.Control type="text" placeholder="E-mail" value="Erick" disabled/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Executor</Form.Label>
                            <Form.Control type="text" placeholder="E-mail" value="-" disabled/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Status</Form.Label>
                            <Form.Control type="text" placeholder="E-mail" value="solicitada" disabled/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Atender
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                        </Button>
                </Modal.Footer>
            </Modal>
        </a>
    );
}

export default VisualizarCliente;