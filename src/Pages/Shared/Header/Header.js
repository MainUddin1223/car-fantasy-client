import { signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { BeakerIcon, UserAddIcon, UserIcon } from '@heroicons/react/solid'
import { Card, Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.PNG'
import './Header.css'

const Header = () => {
    const navigate=useNavigate()
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        navigate('/login')

    };
    let userImage;
    if (user?.photoURL === null) {
        userImage = <UserIcon className='user-icon'></UserIcon>
    }
    else {
        const image = <img className='user-image' src={user?.photoURL} />
        userImage = image
    }
    let userName;
    if (user?.displayName === null) {
        userName = 'User';
    }
    else {
        userName = user?.displayName;
    }
    return (
        <div className='nav-bar'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand href="#home">
                        <img className='logo' src={logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='header-items' to="/home">Home</Link>
                            <Link className='header-items' to="/inventory">Inventory</Link>
                            <Link className='header-items' to="/inventory">Blogs</Link>
                            <Link className='header-items' to="/home">About</Link>

                        </Nav>

                        {
                            user && <Nav>
                                <Link className='header-items' to="/removeItems">Manage Items</Link>
                                <Link className='header-items' to="/MyItems">My Items</Link>
                                <Link className='header-items' to="/additem">Add Items</Link>
                            </Nav>
                        }

                        <Nav>

                            {
                                user ? <NavDropdown title="Profile" id="collasible-nav-dropdown">
                                    <Card >
                                        <Card.Body className='text-center'>
                                            <p className=''>{userImage}</p>
                                            <Card.Title>{userName}</Card.Title>
                                            <Card.Title>{user.email}</Card.Title>
                                            <button className='logout-button' onClick={logout}>Sign Out</button>
                                        </Card.Body>
                                    </Card>
                                </NavDropdown> : <Link className='header-items' to="/login">Sign In</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;