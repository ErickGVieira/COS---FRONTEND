import React, { useState } from 'react';
import './CriarOrdemDeServico.css';
import axios from 'axios';

import { Form, Button, Modal } from 'react-bootstrap';

const url = "http://localhost:1100/api/";

const state = {
    cliente: {
        nome: "",
        cpf: "",
        telefone: "",
        email: ""
    }
}

const EditarCliente = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setNome = (nome) => state.cliente.nome = nome;
    const setCpf = (cpf) => state.cliente.cpf = cpf;
    const setTelefone = (telefone) => state.cliente.telefone = telefone;
    const setEmail = (email) => state.cliente.email = email;

    return (
        <a>
            <Button type="submit" variant="warning" className="mb-2" onClick={handleShow}>Editar</Button>
            <Button type="submit" variant="danger" id="remover">Remover</Button>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar cliente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nome do Cliente</Form.Label>
                            <Form.Control type="text" placeholder="Nome" value="Erick"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Serviço Solicitado</Form.Label>
                            <Form.Control type="text" placeholder="Cpf" value="Troca de Pneu"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Serviço Executado</Form.Label>
                            <Form.Control type="text" placeholder="Cpf" value="-"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Data início</Form.Label>
                            <Form.Control type="text" placeholder="E-mail" value="28-09-2020 15:00"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Data Fim</Form.Label>
                            <Form.Control type="text" placeholder="E-mail" value="28-09-2020 15:00"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Solicitante</Form.Label>
                            <Form.Control type="text" placeholder="E-mail" value="Erick"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Executor</Form.Label>
                            <Form.Control type="text" placeholder="E-mail" value="-"/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Status</Form.Label>
                            <Form.Control type="text" placeholder="E-mail" value="solicitada"/>
                        </Form.Group>
                    </Form>
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

export default EditarCliente;