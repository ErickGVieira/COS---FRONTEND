import React, { useState } from 'react';
import './CriarUsuario.css';
import axios from 'axios';

import { Container, Row, Col, Table, Form, Button, Modal } from 'react-bootstrap';
const url = "http://localhost:1100/api/";

const state = {
    usuario: {}
}

function buscaUsuario(idUsuario){
    axios["get"](url + `usuario/obtem?idUsuario=${idUsuario}`).then(resp => {
        state.usuario = resp.data;
    });
}

const VisualizarUsuario = (props) => {

    buscaUsuario(props.usuario);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <a>
            <Button type="submit" variant="success" className="mb-2" onClick={handleShow}>Visualizar</Button>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Criar usuário</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Nome" value={state.usuario.nome} disabled/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" placeholder="CPF" value="461.714.708.05" disabled/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" value="123" disabled/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Cargo</Form.Label>
                            <Form.Control type="text" placeholder="Cargo" value="Gerente" disabled/>
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

export default VisualizarUsuario;