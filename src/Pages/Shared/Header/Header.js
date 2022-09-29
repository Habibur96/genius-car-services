
import { signOut } from 'firebase/auth';
import React from 'react';

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'


const Header = () => {
    const [user] = useAuthState(auth);


    const navigate = useNavigate();

    const handleSignOut = () => {

        signOut(auth);
        if (signOut) {
            navigate('/login')
        }
    }


    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='fs-3 fw-bold' bg="primary" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand as={Link} to="/"> <img height={85} src={logo} alt="" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#experts">Experts</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {/* <span>{user?.displayName && user.displayName}</span> */}
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none fs-3' onClick={handleSignOut} >Sign Out</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;