import React, { useState } from 'react';
import pesa2Image from '../assets/3.png';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Navegar() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
      <div className="container">
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          <img src={pesa2Image} alt="Pesa" className="pesa2-image" />
          MernGYM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" onClick={toggleNavbar} />
        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/productos" onClick={() => setExpanded(false)}>
              Productos
            </Nav.Link>
            <Nav.Link as={Link} to="/runing" onClick={() => setExpanded(false)}>
              Runing
            </Nav.Link>
            <Nav.Link as={Link} to="/formulario" onClick={() => setExpanded(false)}>
              Formulario
            </Nav.Link>
         
            <Nav.Link as={Link} to="/faq" onClick={() => setExpanded(false)}>
              Faq
            </Nav.Link>
            <Nav.Link as={Link} to="/login" onClick={() => setExpanded(false)}>
              Inicio de sesión
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navegar;
