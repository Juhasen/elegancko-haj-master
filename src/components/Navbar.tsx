import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
function NavbarApp() {
  return (
    <Navbar className="app-navbar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="app-navbar-title" href="#home">
         <Link to='/'> DeepMind Co.</Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="app-navbar-ham"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link className="app-navbar-item" >
              <Link to="/gallery">Galeria</Link>
            </Nav.Link>
            <Nav.Link className="app-navbar-item" >
              <Link to="/about">Organizatorzy</Link>
            </Nav.Link>
            <Nav.Link className="app-navbar-item" >
              <Link to="/enrol">Zapisz się</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
