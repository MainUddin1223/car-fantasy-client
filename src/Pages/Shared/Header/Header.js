import { signOut } from 'firebase/auth';
import React from 'react';
import { BeakerIcon, UserAddIcon, UserIcon } from '@heroicons/react/solid'
import { Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.PNG'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };
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

                        {
                            user ? <NavDropdown title="Profile" id="collasible-nav-dropdown">
                                <button onClick={logout}>Sign Out</button>
                                <UserIcon></UserIcon>
                                {/* <Link>Login</Link> */}
                            </NavDropdown> : <Link to="/login">Sign In</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;