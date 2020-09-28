import React, { useState } from 'react';
import './CriarUsuario.css';
import axios from 'axios';

import { Container, Row, Col, Table, Form, Button, Modal } from 'react-bootstrap';

const url = "http://localhost:1100/api/";

const state = {
    usuario: {
        cpf: "",
        senha: "",
        nome: "",
        idCargo: 0
    },
    cargos: [

    ]
}

axios["get"](url + `cargo/obtemTodos`).then(resp => {
    state.cargos = resp.data;
});

const CriarUsuario = () => {
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setCpf = (cpf) => state.usuario.cpf = cpf;
    const setSenha = (senha) => state.usuario.senha = senha;
    const setNome = (nome) => state.usuario.nome = nome;
    const setIdCargo = (idCargo) => state.usuario.idCargo = idCargo;
    
    const salvar = () => {
        axios["post"](url + `usuario/cria`, state.usuario).then(resp => {
            handleClose();
        });
    }

    axios["get"](url + `usuario/obtemTodos`).then(resp => {
        state.usuarios = resp.data;
    });

    return (
        <div>
            <Container>
                <Col md={1}>
                    <Button type="submit" className="mb-2" onClick={handleShow}>Adicionar</Button>
                </Col>

                <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Criar usuário</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="text" placeholder="Nome" onChange={state.usuario.nome} onChange={e => setNome(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>CPF</Form.Label>
                                <Form.Control type="text" placeholder="CPF" onChange={state.usuario.cpf} onChange={e => setCpf(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Senha" onChange={state.usuario.senha} onChange={e => setSenha(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Cargo</Form.Label>
                                <Form.Control as="select" value={state.usuario.cargo} onChange={(e) => setIdCargo(e.target.value)}>
                                    <option>Nenhum</option>
                                    {state.cargos.map((cargo) => <option key={cargo.id} value={cargo.id}>{cargo.descricao}</option>)}
                                </Form.Control>
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

export default CriarUsuario;