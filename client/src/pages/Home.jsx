import React from 'react';
import { Jumbotron,  Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./../style.css";


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
        <Jumbotron className="title">
        <div className="display-flex justify-content-center">
         <Navbar className="align-self-center" color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
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

      </div>
        <div className="titletext">
          <h1 className="display-3">Hello World</h1>
          <p className="lead">This is my website. What up?</p>
        </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
