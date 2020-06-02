import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

const UnauthenticatedMenu = () => {
    return(
        <Navbar bg="light">
            <LinkContainer to="/">
                    <Navbar.Brand>HomeBrew.pub</Navbar.Brand>
                </LinkContainer>
            <Nav className="mr-auto">
                <NavLink  to="/recipes" className="nvbar-link">Recipes</NavLink>
            </Nav>
            <Nav className="ml-auto">
                <NavLink to="/signup" className="navbar-link">Signup</NavLink>
                <NavLink to="/login" className="navbar-link">Login</NavLink>
            </Nav>
        </Navbar>
    )
}

export default UnauthenticatedMenu;