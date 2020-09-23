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

                        {/* onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} */}
                        <Nav activeKey="/home">
                            <Nav.Item>
                                <Nav.Link href="/home">Ordens de Serviço</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/clientes" eventKey="clientes">Clientes</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/pecas" eventKey="pecas">Peças</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/orcamentos" eventKey="orcamentos">Orçamentos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/usuarios" eventKey="usuarios">Usuários</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/servicos" eventKey="servicos">Servicos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/" eventKey="sair">Sair</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Row>
                </Container>
            </div>
        );
    }
}