import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';
import "./style.css"; 

const VetFinderCard = (props) => {
  return (
    <Container>
      <Row>
      <Col> 
      <div>
      <Card>
        <CardBody>
          <CardTitle>Cornerstone Animal Hospital</CardTitle>
          <CardSubtitle>Dr. Daniel Burke</CardSubtitle>
        </CardBody>
        <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">1663 E Ray Rd #105, Gilbert, AZ 85296</CardLink>
          <CardLink href="#">480-857-9229</CardLink>
        </CardBody>
      </Card>
      </div>
      </Col>

      <Col> 
      <div>
      <Card>
        <CardBody>
          <CardTitle>Cornerstone Animal Hospital</CardTitle>
          <CardSubtitle>Dr. Daniel Burke</CardSubtitle>
        </CardBody>
        <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">1663 E Ray Rd #105, Gilbert, AZ 85296</CardLink>
          <CardLink href="#">480-857-9229</CardLink>
        </CardBody>
      </Card>
      </div>
      </Col>

      <Col> 
      <div>
      <Card>
        <CardBody>
          <CardTitle>Cornerstone Animal Hospital</CardTitle>
          <CardSubtitle>Dr. Daniel Burke</CardSubtitle>
        </CardBody>
        <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">1663 E Ray Rd #105, Gilbert, AZ 85296</CardLink>
          <CardLink href="#">480-857-9229</CardLink>
        </CardBody>
      </Card>
      </div>
      </Col>

      </Row> 


    </Container>
  );
};


export default VetFinderCard;