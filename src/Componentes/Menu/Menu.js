import React from 'react';
import './Menu.css';
import { Container, Nav, Image, Row } from 'react-bootstrap';

export default class Menu extends React.Component {

    render() {
        return (
            <div>
                <Container id="menu">
                    <Row>
                        <Nav activeKey="/">
                            <Nav.Item>
                                <Nav.Link href="/">Aeronaves</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/modelos" eventKey="modelos">Modelos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/relatorios" eventKey="relatorios">Relatórios</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/importar" eventKey="importar">Importar</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Row>
                </Container>
            </div>
        );
    }
}