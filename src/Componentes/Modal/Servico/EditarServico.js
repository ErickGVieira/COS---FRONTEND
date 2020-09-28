import React, { useState } from 'react';
import './CriarServico.css';
import axios from 'axios';

import { Container, Row, Col, Table, Form, Button, Modal } from 'react-bootstrap';

const url = "http://localhost:1100/api/";

const EditarServico = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <a>
            <Button type="submit" variant="warning" className="mb-2" onClick={handleShow}>Editar</Button>
            <Button type="submit" variant="danger" id="remover">Remover</Button>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar serviço</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control type="text" placeholder="Nome" value="troca de pneu" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                        </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Salvar
                        </Button>
                </Modal.Footer>
            </Modal>
        </a>
    );
}

export default EditarServico;