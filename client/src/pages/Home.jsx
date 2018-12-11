import React from 'react';
import { Jumbotron,  Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "../../src/styles.css";


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
        <Jumbotron className="jumbotron title">
        <div className="display-flex justify-content-center">
         <Navbar id="navbarthick" color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem className="nav-item2">
                <NavLink href="/Forum/">Forum</NavLink>
              </NavItem>

              <NavItem className="nav-item2">
                <NavLink href="/FAQ/">FAQs</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar className="nav-item2">
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

              <NavItem className="nav-item2">
                <NavLink href="https://github.com/reactstrap/reactstrap">VetFinder</NavLink>
              </NavItem>

              <NavItem className="nav-item2">
                <NavLink href="/LostAndFound/">Lost/Found</NavLink>
              </NavItem>
             
            </Nav>
          </Collapse>
        </Navbar>

      </div>
        <div className="titletext">
          <h1 className="display-3">Man's Best Friend</h1>
          <p className="lead">animal care for animal lovers</p>
        </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;