import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link
            to={"/"}
            style={{
              margin: "0px 20px",
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            style={{
              margin: "0px 20px",
            }}
          >
            About
          </Link>
          <Link
            to="/contact"
            style={{
              margin: "0px 20px",
            }}
          >
            Contact
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
