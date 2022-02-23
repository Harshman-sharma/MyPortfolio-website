import React from 'react'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>My Portfolio</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            
                            <LinkContainer to='/qualifications'>
                                <Nav.Link><i className="fas fa-atlas"></i>Qualifications</Nav.Link>
                            </LinkContainer>
                            
                            <LinkContainer to="/certificates">
                                <Nav.Link><i className="fas fa-certificate"></i>Online Certificates</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/login">
                                <Nav.Link><i className="fas fa-user"></i>Login/Register</Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header