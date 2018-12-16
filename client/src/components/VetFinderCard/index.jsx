import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';
import "./style.css"; 

const VetFinderCard = (props) => {
  return (
    
      
      <Card>
        <CardBody>
          <CardTitle>Hostital: {props.name}</CardTitle>
          <CardSubtitle>Title: {props.title}</CardSubtitle>
          <CardSubtitle>Rating: {props.rating}</CardSubtitle>
        </CardBody>
        <img className="myImg" src={props.image} alt="Card image cap" />
        <CardBody>
          <CardText>Address: {props.address}</CardText>
          <CardText>Phone: {props.phone}</CardText>
          <CardLink href={props.link}>Go to their website</CardLink>
        </CardBody>
      </Card>
  
  
  );
};


export default VetFinderCard;