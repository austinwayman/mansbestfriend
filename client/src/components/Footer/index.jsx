import React from "react";
import { Col, Row, Container } from 'reactstrap';
import "../../styles.css";

function Footer() {
    return (
        <div className="footer">
          <Container>
            <Row>
              <Col id="footerText">
                FAAT Industries
          </Col>
            </Row>
          </Container>
        </div>
    )
};

export default Footer;