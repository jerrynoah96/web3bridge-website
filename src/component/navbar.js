import React from 'react';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap';
import logo from '../images/logo.svg';
import {Link} from 'react-scroll';

import '../App.css';

const NavBar=(props)=> {
  const switchToForm = (e)=> {
    props.formLoader(e);
    setTimeout(() => {
      props.switchToForm(e);
     }, 3000)
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav-bar">
        <Navbar.Brand href="#home"> <img src={logo}/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                <NavDropdown title="Home" id="collasible-nav-dropdown">
                    <NavDropdown.Divider  className="dropDown-divider"/>
                    <NavDropdown.Item className="dropDown-item" href="#action/3.1">
                    <Link className="nav-link" to="header" smooth={true} duration={500}>About</Link>

                    </NavDropdown.Item>
                    <NavDropdown.Divider className="dropDown-divider" />
                    <NavDropdown.Item  className="dropDown-item"  href="#action/3.4">
                    <Link className="nav-link" to="footer" smooth={true} duration={500}>Contact</Link>
                    </NavDropdown.Item>
                </NavDropdown>
                <Link className="nav-link" to="team" smooth={true} duration={500}>Team</Link>
                <Link className="nav-link" to="vision" smooth={true} duration={500}>Our Vision</Link>
                <Link className="nav-link" to="achievement-target" smooth={true} duration={500}>Achievement/Target</Link>
                <Link  className="nav-link" to="alumni" smooth={true} duration={500}>Alumni</Link>
                <Link className="nav-link" to="trusted" smooth={true} duration={500}>Partners</Link>
                <button className="nav-link" className="rg-btn" onClick={switchToForm}>Register</button>
                
                
                </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;