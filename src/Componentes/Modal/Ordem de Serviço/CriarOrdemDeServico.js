import React, { useState } from 'react';
import './CriarOrdemDeServico.css';
import axios from 'axios';

import { Container, Row, Col, Table, Form, Button, Modal } from 'react-bootstrap';

const url = "http://localhost:1100/api/";

const state = {
    ordemDeServico: {
        idCliente: 0,
        idServicoSolicitado: 0,
        idServicoExecutado: 0,
        idStatus: 0,
        dataInicio: null,
        dataFim: null,
        idSolicitante: 0,
        idExecutor: 0
    },
    clientes: [],
    status: [],
    servicos: []
}

const CriarOrdemDeServico = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setIdCliente = (id) => state.ordemDeServico.idCliente = id;
    const setIdServicoSolicitado = (id) => state.ordemDeServico.idServicoSolicitado = id;
    const setIdServicoExecutado = (id) => state.ordemDeServico.idServicoExecutado = id;
    const setIdStatus = (id) => state.ordemDeServico.idStatus = id;
    const setDataInicio = (dataInicio) => state.ordemDeServico.dataInicio = dataInicio;
    const setIdSolicitante = (id) => state.ordemDeServico.idSolicitante = id;

    const salvar = () => {
        axios["post"](url + `ordemDeServico/cria`, state.ordemDeServico).then(resp => {
            console.log(resp.data);
            handleClose();
        });
    }

    axios["get"](url + `cliente/obtemTodos`).then(resp => {
        state.clientes = resp.data;
    });

    axios["get"](url + `status/obtemTodos`).then(resp => {
        state.status = resp.data;
        console.log(resp.data);
    });

    axios["get"](url + `servico/obtemTodos`).then(resp => {
        state.servicos = resp.data;
    });

    return (
        <div>
            <Container>
                <Col md={1}>
                    <Button type="submit" className="mb-2" onClick={handleShow}>Adicionar</Button>
                </Col>

                <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Criar ordem de serviço</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Cliente</Form.Label>
                                <Form.Control as="select" value={state.ordemDeServico.idCliente} onChange={(e) => setIdCliente(e.target.value)}>
                                    {state.clientes.map((cliente) => <option key={cliente.id} value={cliente.id}>{cliente.nome}</option>)}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Serviço Solicitado</Form.Label>
                                <Form.Control as="select" value={state.ordemDeServico.idServicoSolicitado} onChange={(e) => setIdServicoSolicitado(e.target.value)}>
                                    {state.servicos.map((servico) => <option key={servico.id} value={servico.id}>{servico.descricao}</option>)}
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

export default CriarOrdemDeServico;