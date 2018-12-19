import React from 'react';
import { Jumbotron, Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, Col, Row, Container } from 'reactstrap';
import "../../src/styles.css";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; //
// import API from '../utils/API';
// import axios from "axios";


class Home extends React.Component {
  constructor(props) {
    super(props);
    AOS.init();

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

                  <NavItem>
                    <NavLink tag={Link} to="/Forum">Forum</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink tag={Link} to="/FAQ/">FAQs</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink tag={Link} to="/CareAware/">Care & Wellness</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink tag={Link} to="/VetFinder/">VetFinder</NavLink>
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
          </div>
          {/* Navbar end */}

          {/* Jumbotron Text Start */}
          <Animated animationIn="fadeIn" isVisible={true}>
          <div className="titletext">
            <h1 className="display-3">MyBestFriend</h1>
            <p className="lead">animal info for animal lovers</p>
          </div>
          </Animated>
          {/* Jumbotron Text End */}
        </Jumbotron>
        {/* End of Jumbotron */}


        {/* Start of Purpose */}
        <div className="purposeContainer">
          <div data-aos="fade-right" data-aos-duration="2000">
            <Container>
              <Row>
                <Col m="4" xl="4">
                  <h1>Purpose</h1>
                  <p>MyBestFriend is an online community designed to give informational support for those caring for pets. Many members have experienced what it's like to bring a furry best friend home for the first time. We understand that many unknown's are ahead for a new pet owner. Our community knows what it is like to have a pet show unusual signs of sickness or behavioral problems. </p>
                  <p>Many have found their lost pet utilizing our site as well. Make sure to register to join the community and actively participate in the forum discussions. We openly welcome you to our online pet-parenthood neighborhood!</p>
                </Col>
                <Col m="8" xl="8"><img src="/images/cat.png" alt="petimage" width="100%"></img></Col>
              </Row>
            </Container>
          </div>
        </div>
        {/* End of Purpose */}




        {/* Footer Start */}
        <div className="footer">
          <Container>
            <Row>
              <Col id="footerText">
                FAAT Industries
          </Col>
            </Row>
          </Container>
        </div>
        {/* Footer End */}

      </div>

    );
  }
}

export default Home;
