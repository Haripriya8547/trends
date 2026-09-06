import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserAlt } from 'react-icons/fa';
import { IoBag } from 'react-icons/io5';
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { userLogout } from '../../redux/userSlice';

function Header({ cartCount }) {

  const dispatch = useDispatch();
  const navigate =useNavigate();

  const handleLogout = () => {
    dispatch(userLogout());
    toast.success(" user logout successfully");
    navigate("/login");
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">TRENDS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>

          </Nav>

          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login">Log In</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <IoBag size={20} />
              <span>
                {cartCount}
              </span>
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              <FaUserAlt size={20} />
            </Nav.Link>


          </Nav>
        </Navbar.Collapse>
        <Dropdown>
          <Dropdown.Toggle >
            admin
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/admin/add-product">
              Add product
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/action-2">Another action</Dropdown.Item>
            <Dropdown.Item as={Link} onClick={handleLogout} to="/login">log out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
}

export default Header;