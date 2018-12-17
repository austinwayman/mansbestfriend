import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardSubtitle,
  CardImg,
  CardImgOverlay,
  Container,
  Row,
  Col,
  CardLink
} from "reactstrap";
import "./style.css";
import { Animated } from "react-animated-css";

const VetFinderCard = props => {
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
