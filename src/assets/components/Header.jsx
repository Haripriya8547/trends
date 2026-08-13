import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
import { IoBag } from 'react-icons/io5';
import "./Header.css"

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">TRENDS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
             <Nav.Link href="#link">About Us</Nav.Link>
              <Nav.Link href="#link">Contact Us</Nav.Link>
            
          </Nav>

           <Nav className="ms-auto">
            <Nav.Link href="#home">Log In</Nav.Link>
            <Nav.Link href="#link">
                <IoBag size={20}/>
                </Nav.Link>
             <Nav.Link href="#link">
                <FaUserAlt size={20}/>
             </Nav.Link>
             
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;