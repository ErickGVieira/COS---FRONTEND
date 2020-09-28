import React, { useState } from 'react';
import './CriarCliente.css';
import axios from 'axios';

import { Container, Row, Col, Table, Form, Button, Modal } from 'react-bootstrap';

const url = "http://localhost:1100/api/";

const state = {
    cliente: {
        nome: "",
        cpf: "",
        telefone: "",
        email: ""
    }
}

const CriarCliente = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setNome = (nome) => state.cliente.nome = nome;
    const setCpf = (cpf) => state.cliente.cpf = cpf;
    const setTelefone = (telefone) => state.cliente.telefone = telefone;
    const setEmail = (email) => state.cliente.email = email;

    const salvar = () => {
        axios["post"](url + `cliente/cria`, state.cliente).then(resp => {
            handleClose();
        });
    }

    return (
        <div>
            <Container>
                <Col md={1}>
                    <Button type="submit" className="mb-2" onClick={handleShow}>Adicionar</Button>
                </Col>

                <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Criar cliente</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Nome" onChange={state.cliente.nome} onChange={e => setNome(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Cpf</Form.Label>
                                <Form.Control type="text" placeholder="Cpf" onChange={state.cliente.cpf} onChange={e => setCpf(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control type="text" placeholder="Telefone" onChange={state.cliente.telefone} onChange={e => setTelefone(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="text" placeholder="E-mail" onChange={state.cliente.email} onChange={e => setEmail(e.target.value)} />
                            </Form.Group>
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
        </div>
    );
}

export default CriarCliente;