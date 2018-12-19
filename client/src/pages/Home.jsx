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
                    <NavLink tag={Link} to="/LostAndFound/">Lost/Found</NavLink>
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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eaque totam dolore necessitatibus voluptatem provident repellendus porro tempore libero pariatur ratione fugiat minima officia unde architecto, impedit quasi corrupti dicta?</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi et maiores cupiditate perferendis quo, molestiae laborum. Consequuntur laboriosam architecto, itaque nesciunt quam dignissimos sit eius, adipisci harum quaerat ipsam quibusdam!</p>
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
