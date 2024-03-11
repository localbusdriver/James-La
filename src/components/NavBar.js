import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";

export const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">James La</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={"navbar-link"}>
              Home
            </Nav.Link>

            <Nav.Link href="#skills" className={"navbar-link"}>
              Skills
            </Nav.Link>

            <Nav.Link href="#projects" className={"navbar-link"}>
              Projects
            </Nav.Link>

            <Nav.Link href="#contact" className={"navbar-link"}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
