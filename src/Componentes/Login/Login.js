import React from 'react';
import './Login.css';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import Logo from '../../Imagens/logo.jpg';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const url = "http://localhost:1100/api/usuario/";
const state = {
    usuario: {
        cpf: "",
        senha: ""
    }
}

export default class Login extends React.Component {

    state = {...state};

    limpar(){
        this.setState({ usuario: this.state.usuario });
    }

    salvar() {
        const usuario = this.state.usuario;
        if(usuario.cpf != "" && usuario.senha != ""){
            axios["get"](url + `login?cpf=${usuario.cpf}&senha=${usuario.senha}`).then(resp => {
                if(resp.data.id != 0){
                    window.location.href = "http://localhost:3000/home";
                    // return <Redirect to="/home" />
                }else{
                    alert("Usuário inválido");
                }
            });
        }
    }

    setCpf = (cpf) => state.usuario.cpf = cpf;
    setSenha = (senha) => state.usuario.senha = senha;

    render(){
        return (
            <div className="login">
                <Container>
                    <Row>
                        <Col className="esquerda">
                            <h2 className="titulo">
                                Bem-Vindo
                            </h2>
                            <h5 className="subTitulo">
                                Para se manter conectado, por favor faça
                                login com suas informações pessoais
                            </h5>
                        </Col>
                        <Col className="direita">
                            <p>
                                <Image id="logo" src={Logo}></Image>
                            </p>
                            <Form className="formulario">
                                <Form.Group>
                                    <Form.Control type="text" placeholder="CPF" onChange={this.state.usuario.cpf} onChange={e => this.setCpf(e.target.value)}/>
                                </Form.Group>
    
                                <Form.Group>
                                    <Form.Control type="password" placeholder="Senha" onChange={this.state.usuario.senha} onChange={e => this.setSenha(e.target.value)}/>
                                </Form.Group>
    
                                <Button id="botao" onClick={e => this.salvar(e)}>
                                    Entrar
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}