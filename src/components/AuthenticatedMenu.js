import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

const UnauthenticatedMenu = (props) => {
    return(
        <Navbar collapseOnSelect expand="md" bg="light">
            <LinkContainer to="/">
                <Navbar.Brand>HomeBrew.pub</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

                <Nav className="mr-auto">
                    <NavDropdown title="Recipes" id="collasible-nav-dropdown">
                        <LinkContainer to="/recipes">
                            <NavDropdown.Item className="navbar-link">All Recipes</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`/users/${props.user.id}/recipes`}>
                            <NavDropdown.Item className="navbar-link">Your Recipes</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                </Nav>
                
                <br />
                <Nav className="ml-auto">
                    <span>Hello, {props.user.name}!</span>
                    <NavLink to="/logout" onClick={event => props.handleClick(event)} className="navbar-link">Logout</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default UnauthenticatedMenu;