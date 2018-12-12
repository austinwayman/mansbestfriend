import React from 'react';
import { Jumbotron, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Col, Row, Container } from 'reactstrap';
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
        <Jumbotron className="mainjumbotron title">

          {/* logo Nav */}
          <Container>
            <Row>
              <Col><img src="/images/logo_transparent.png" alt="Mylogo" id="logoimg"></img></Col>
            </Row>
          </Container>

          {/* Navbar start */}
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

                  <NavItem>
                    <NavLink href="/VetFinder/">VetFinder</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink href="/LostAndFound/">Lost/Found</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink href="/LostAndFound/">Sign Up/Login</NavLink>
                  </NavItem>

                </Nav>
              </Collapse>
            </Navbar>
            {/* Navbar end */}

          </div>
          {/* Jumbotron Text Start */}
          <div className="titletext">
            <h1 className="display-3">MyBestFriend</h1>
            <p className="lead">The best place for information about your new pet.</p>
          </div>
          {/* Jumbotron Text End */}
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
