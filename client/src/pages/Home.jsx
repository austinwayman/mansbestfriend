import React from 'react';
import { Jumbotron, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Col, Row, Container } from 'reactstrap';
import "../../src/styles.css";
import { Link } from "react-router-dom";


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
                    <Link to="/Forum">Forum</Link>
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
        {/* End of Jumbotron */}

        {/* Start of Purpose */}
      <div className="purposeContainer">
        <Container>
          <Row>
            <Col m="4" xl="4">
              <h1>Purpose</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eaque totam dolore necessitatibus voluptatem provident repellendus porro tempore libero pariatur ratione fugiat minima officia unde architecto, impedit quasi corrupti dicta?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et maiores cupiditate perferendis quo, molestiae laborum. Consequuntur laboriosam architecto, itaque nesciunt quam dignissimos sit eius, adipisci harum quaerat ipsam quibusdam!</p>
            </Col>
            <Col m="8" xl="8"><img src="/images/cat.png" alt="petimage" width="100%"></img></Col>
          </Row>
        </Container>
      </div>
      {/* End of Purpose */}


      {/* Footer Start */}
      <div className="footer">
        <Row>
          <Col id="footerText">
          FAAT Industries
          </Col>
        </Row>
      </div>





      </div>

    );
  }
}

export default Home;
