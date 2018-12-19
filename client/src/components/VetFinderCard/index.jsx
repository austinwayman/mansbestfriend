import React from "react";
import {
 
  CardText,
  CardBody,

} from "reactstrap";
import "./style.css";

const VetFinderCard = props => {
  return (
    <div class="container mt-40">
      <div class="row mt-30">
        <div class="col-md-4 col-sm-6">
          <div class="box5">
            <img className= "yelpImage" 
            src={props.image} />
            <ul class="icon listitem">
              <li>

                <span><i class="fas fa-mobile-alt" /> {props.phone}</span> 
              </li>
              <li>
    
                <span><i class="fas fa-home" /> {props.address}</span> 
              </li>
            </ul>
            <div className="box-content card-title title bam">
            <a href={props.link}>Enter Site</a>
            </div>
          </div>
          <CardBody className="clinic"><CardText className="cards">{props.name}</CardText>
          </CardBody>  
        </div>
      </div>
    </div>
  );
};

export default VetFinderCard;
