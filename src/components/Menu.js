import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Menu = () => {
    return(
        <Navbar bg="light">
            <Nav className="mr-auto">
                <NavLink to='/'className="navbar-brand-link">HomeBrew.haus</NavLink>
                <NavLink to='/recipes'className="navbar-brand-link">Recipes</NavLink>
            </Nav>
            <Nav className="ml-auto">
                <NavLink to="/login" className="navbar-link">Login</NavLink>
            </Nav>
        </Navbar>
    )
}

export default Menu;