import React from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";
// import "./style.css";

function Nav2() {
  return (
    <Navbar id="navbarthick" color="light" light expand="md">
      <NavbarToggler />
      <Collapse navbar> 
        <Nav className="ml-auto" navbar>

          <NavItem>
            <NavLink tag={Link} to="/Forum/">Forum</NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to="/FAQ/">FAQs</NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to="/CareAware/">Care & Wellness</NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to="/vetfinder/">VetFinder</NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to="/LostAndFound/">Lost Animals</NavLink>
          </NavItem>

          <NavItem>
            <NavLink tag={Link} to="/login-sign">Sign Up/Login</NavLink>
          </NavItem>

        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Nav2;