import React from "react";
import {Nav, Navbar, Container } from 'react-bootstrap'

const NavbarComponent = () => {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
      <Navbar.Brand href="#home"><strong>E-Culinery</strong></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="container mt-6">
          <Nav.Link href="#home">Sign Up</Nav.Link>
          <Nav.Link href="#link">About Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
