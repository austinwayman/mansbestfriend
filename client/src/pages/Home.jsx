import React from 'react';
import { Jumbotron,  Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
<<<<<<< HEAD
import "./../style.css";
=======
import "../../src/styles.css";
>>>>>>> master


class Home extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <Jumbotron className="title">
        <div className="display-flex justify-content-center">
         <Navbar className="align-self-center" color="light" light expand="md">
=======
        <Jumbotron className="jumbotron title">
        <div className="display-flex justify-content-center">
         <Navbar id="navbarthick" color="light" light expand="md">
>>>>>>> master
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

<<<<<<< HEAD
              <NavItem>
                <NavLink href="/Forum/">Forum</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/FAQ/">FAQs</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
=======
              <NavItem className="nav-item2">
                <NavLink href="/Forum/">Forum</NavLink>
              </NavItem>

              <NavItem className="nav-item2">
                <NavLink href="/FAQ/">FAQs</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar className="nav-item2">
>>>>>>> master
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

<<<<<<< HEAD
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">VetFinder</NavLink>
              </NavItem>

              <NavItem>
=======
              <NavItem className="nav-item2">
                <NavLink href="https://github.com/reactstrap/reactstrap">VetFinder</NavLink>
              </NavItem>

              <NavItem className="nav-item2">
>>>>>>> master
                <NavLink href="/LostAndFound/">Lost/Found</NavLink>
              </NavItem>
             
            </Nav>
          </Collapse>
        </Navbar>

      </div>
        <div className="titletext">
          <h1 className="display-3">Hello World</h1>
<<<<<<< HEAD
          <p className="lead">This is my website. What up?</p>
=======
          <p className="lead">This is my website.</p>
>>>>>>> master
        </div>
        </Jumbotron>
      </div>
    );
  }
}

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> master
