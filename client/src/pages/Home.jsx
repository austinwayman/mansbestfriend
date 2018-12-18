import React from 'react';
import { Jumbotron, Button, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Col, Row, Container } from 'reactstrap';
import "../../src/styles.css";
import {Animated} from "react-animated-css";
import { Link } from "react-router-dom";
import API from '../utils/API';
import axios from "axios"
import Footer from "../components/Footer";


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

  handleSignOut = () => {

    axios.defaults.headers.common['authorization'] = "";

    this.props.history.push("/")

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
                  {/* <NavLink>Forum</NavLink> */}
                    <Link to="/Forum">Forum</Link>
                  </NavItem>

                  <NavItem>
                    <NavLink tag ={Link} to="/FAQ/">FAQs</NavLink>
                  </NavItem>

                  <UncontrolledDropdown nav inNavbar className="nav-item2">
                    <DropdownToggle nav caret>
                      Care & Wellness
                </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                      <Link to="/careAware">Care and Awareness</Link>
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
                    <NavLink tag={Link} to="/VetFinder/">VetFinder</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink tag={Link} to="/LostAndFound/">Lost/Found</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink tag={Link} to="#">Sign Up/Login</NavLink>
                  </NavItem>

                   <NavItem>
                    <Button onClick={this.handleSignOut}>Logout</Button>
                  </NavItem>

                </Nav>
              </Collapse>
            </Navbar>
          </div>
            {/* Navbar end */}

          {/* Jumbotron Text Start */}
          <div className="titletext">
            <h1 className="display-3">MyBestFriend</h1>
            <p className="lead">animal care for animal lovers</p>
          </div>
          {/* Jumbotron Text End */}
        </Jumbotron>
        {/* End of Jumbotron */}


        {/* Start of Purpose */}
      <div className="purposeContainer">
          <Animated animationIn="fadeInLeft" animationInDelay={2} isVisible={true}>
        <Container>
          <Row>
            <Col m="4" xl="4">
              <h1 className= "sub">Our Purpose</h1>
              <p className= "purpose">MyBestFriend is an online community designed as a support for parenting our beloved pets. Many members have experienced what it's like to bring a furry best friend home for the first time. We know about all the unknown's that may happen. Many know what it's like to have thier pet show unusual signs of possible sickness or behavioral problems. Many have found thier lost pet utulizing our site as well. Make sure to register in order to utulize all the benefits of the community and actively participate in the forum discussions. We openly welcome you to our online pet-parenthood neighborhood! </p>
            </Col>
            <Col m="8" xl="8"><img className= "Neighborhood" src="/images/Cat-looking-at-dog.png" alt="petimage" width="100%"></img></Col>
          </Row>
        </Container>
          </Animated>
      </div>
      {/* End of Purpose */}

      <div> 
      <Footer/>
      </div>

      {/* Footer Start */}
      {/* <div className="footer">
        <Row>
          <Col id="footerText">
          FAAT Industries
          <div class="row">
                <div class="col">
                    <div class="icons">
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-twitter-square"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-youtube-square"></i>
                    </div>
                </div>
            </div>
          </Col>
        </Row>
      </div> */}
      {/* Footer End */}

      </div>

    );
  }
}

export default Home;
