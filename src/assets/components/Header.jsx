import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
import { IoBag } from 'react-icons/io5';
import "./Header.css"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">TRENDS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = {Link} to="/">Home</Nav.Link>
            <Nav.Link as = {Link} to ="/products">Products</Nav.Link>
             <Nav.Link as = {Link} to="/about">About Us</Nav.Link>
              <Nav.Link as = {Link} to="/contact">Contact Us</Nav.Link>
            
          </Nav>

           <Nav className="ms-auto">
            <Nav.Link as = {Link} to="/login">Log In</Nav.Link>
            <Nav.Link as = {Link} to="/cart">
                <IoBag size={20}/>
                </Nav.Link>
             <Nav.Link as = {Link}to="/profile">
                <FaUserAlt size={20}/>
             </Nav.Link>
             
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;