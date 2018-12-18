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

const VetFinderCard = props => {
  return (
    <div class="container mt-40">
      <div class="row mt-30">
        <div class="col-md-4 col-sm-6">
          <div class="box5">
          
            <img className= "yelpImage" 
            src="/images/pawsHeart.jpg" alt="petimage" />

            <ul class="icon">
              <li>
                {" "}
                <a href={props.phone} i class="fas fa-mobile-alt" />
              </li>
              <li>
                {" "}
                <a href={props.location} i class="fas fa-home" />
              </li>
            </ul>
            <div class="box-content card-title title">
            <a href={props.url}>Enter Site</a>
            </div>
          </div>
         
          <CardBody className="tiff"><CardText className="bird">{props.name}</CardText>
          </CardBody>
                
        </div>

      </div>
    </div>
    
      
      // <Card>
      //   <CardBody>
      //     <CardTitle>Hostital: {props.name}</CardTitle>
      //     <CardSubtitle>Title: {props.title}</CardSubtitle>
      //     <CardSubtitle>Rating: {props.rating}</CardSubtitle>
      //   </CardBody>
      //   <img className="myImg" src={props.image} alt="Card image cap" />
      //   <CardBody>
      //     <CardText>Address: {props.address}</CardText>
      //     <CardText>Phone: {props.phone}</CardText>
      //     <CardLink href={props.link}>Go to their website</CardLink>
      //   </CardBody>
      // </Card>
  
  
  );
};

export default VetFinderCard;
