import React from "react";
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import "./style.css";

function Nav2() {
  return (
    <Navbar id="navbarthick" color="light" light expand="md">
    <NavbarToggler/>
    <Collapse navbar>
      <Nav className="ml-auto" navbar>

        <NavItem>
          <NavLink href="/Forum/">Forum</NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="/FAQ/">FAQs</NavLink>
        </NavItem>

        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Care & Wellness
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">VetFinder</NavLink>
        </NavItem>

        <NavItem>
          <NavLink href="/LostAndFound/">Lost/Found</NavLink>
        </NavItem>
       
      </Nav>
    </Collapse>
  </Navbar>
  );
}

export default Nav2;