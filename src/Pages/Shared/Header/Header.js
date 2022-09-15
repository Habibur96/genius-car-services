import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>

                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="w-100"
                            height="70"
                            className="d-inline-block align-top"
                            alt=""
                        />
                    </Navbar.Brand>

                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;