import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const HomeNavbar = () => {
    return (
        // style={{ backgroundColor: "#070640" }}
        <Navbar collapseOnSelect expand="md" variant="dark"  >
            <Container>
                <Navbar.Brand href="#home" className="fs-1 fw-bold text-white">My Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

                    <Nav >

                        <Nav.Link className="text-white" eventKey={2} href="#contact">
                            Contact Me
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HomeNavbar;