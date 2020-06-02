import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

const UnauthenticatedMenu = (props) => {
    return(
        <Navbar bg="light">
            <LinkContainer to="/">
                    <Navbar.Brand>HomeBrew.pub</Navbar.Brand>
                </LinkContainer>
            <Nav className="mr-auto">
                <NavLink  to="/recipes" className="nvbar-link">Recipes</NavLink>
            </Nav>
            <Nav className="ml-auto">
                <span>Hello, {props.user.name}!</span>
                <NavLink to={`/users/${props.user.id}/recipes`} className="navbar-link">Your Recipes</NavLink>
                <NavLink to="/logout" onClick={event => props.handleClick(event)} className="navbar-link">Logout</NavLink>
            </Nav>
        </Navbar>
    )
}

export default UnauthenticatedMenu;