import React from 'react';
import './Menu.css';
import { Container, Nav, Image, Row } from 'react-bootstrap';
import Logo from '../../Imagens/logo.jpg';

export default class Menu extends React.Component {

    render() {
        return (
            <div>
                <Container id="menu">
                    <Row>
                        <Image src={Logo} width="50" height="25" />

                        <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                            <Nav.Item>
                                <Nav.Link href="/home">Ordens de Serviço</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Clientes</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2">Peças</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2">Orçamentos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2">Usuários</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2">Sair</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Row>
                </Container>
            </div>
        );
    }
}