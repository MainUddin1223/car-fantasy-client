import React from 'react';
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.PNG'
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img className='logo' src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='header-items' to="/home">Home</Link>
                        <Link className='header-items' to="/inventory">Inventory</Link>
                        <Link className='header-items' to="/home">Services</Link>
                        <Link className='header-items' to="/home">About</Link>
                        <Link className='header-items' to="/home">Home</Link>
                    </Nav>
                    <Nav>

                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item to="/login">Login</NavDropdown.Item>
                            {/* <Link>Login</Link> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;