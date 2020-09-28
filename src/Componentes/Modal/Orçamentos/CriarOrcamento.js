import React, { useState } from 'react';
import './CriarOrcamento.css';
import axios from 'axios';

import { Container, Form, Button, Modal, Col } from 'react-bootstrap';

const url = "http://localhost:1100/api/";

const state = {
    orcamento: {
        id: 0,
        idOrdemServico: 12,
        valor: 0,
        descricao: "",
        ordemDeServico: ""
    },
    ordensDeServico: []
}

const CriarOrcamento = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setValor = (valor) => state.orcamento.valor = valor;
    const setDescricao = (descricao) => state.orcamento.descricao = descricao;
    const setIdOrdemDeServico = (idOrdemDeServico) => state.orcamento.idOrdemDeServico = idOrdemDeServico;

    const salvar = () => {
        axios["post"](url + `orcamento/cria`, state.orcamento).then(resp => {
            handleClose();
        });
    }

    axios["get"](url + `OrdemDeServico/obtemTodos`).then(resp => {
        state.ordensDeServico = resp.data;
    });

    return (
        <div>
            <Container>
                <Col md={1}>
                    <Button type="submit" className="mb-2" onClick={handleShow}>Adicionar</Button>
                </Col>

                <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Criar orçamento</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Ordem De Servico</Form.Label>
                                <Form.Control as="select" value={state.orcamento.ordemDeServico} onChange={(e) => setIdOrdemDeServico(e.target.value)}>
                                    {state.ordensDeServico.map((ordemDeServico) => <option key={ordemDeServico.id} value={ordemDeServico.id}>{ordemDeServico.id} - Erick</option>)}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Valor</Form.Label>
                                <Form.Control type="text" placeholder="Valor" onChange={state.orcamento.valor} onChange={e => setValor(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control type="text" placeholder="Descrição" onChange={state.orcamento.descricao} onChange={e => setDescricao(e.target.value)} />
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

export default CriarOrcamento;