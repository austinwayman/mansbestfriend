import React from "react";
import {
  Row,
  Col,
  Container, 
} from "reactstrap";
import "./style.css";

const Footer = props => {
  return (
    
    <div className="footer"> 
    <Container >
      <Row>
        <Col>
          <div className= "footerText" FAAT Industries>FAAT Industries</div>
        </Col> 
      </Row>

       <Row>
        <Col>
                <div class="icons sm=2">
                    <i class="fab fa-facebook-square fa-3x icon"></i>
                    <i class="fab fa-twitter-square fa-3x icon"></i>
                    {/* <i class="fab fa-youtube-square fa-3x icon"></i> */}
                    <i class="fab fa-instagram fa-3x icon"></i>
                    
                </div>
          </Col> 
      </Row>
      </Container>
      </div>
  );
};

export default Footer; 