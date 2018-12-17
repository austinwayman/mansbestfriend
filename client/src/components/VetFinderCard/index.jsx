import React from "react";
import {
  CardBody,
  CardText,
} from "reactstrap";
import "./style.css";

const VetFinderCard = props => {
  return (
    <div class="container mt-40">
      <div class="row mt-30">
        <div class="col-md-4 col-sm-6">
          <div class="box5">
            <img
              src="https://animalhospitalaurora.net/wp-content/uploads/2018/05/internal-vet-clinic-lobby.jpg"
              alt=""
            />
            <ul class="icon">
              <li>
                {" "}
                <a href="#" i class="fas fa-mobile-alt" />
              </li>
              <li>
                {" "}
                <a href="#" i class="fas fa-home" />
              </li>
            </ul>
            <div class="box-content">
              <h3 class="title">Dr. Daniel Burke</h3>
            </div>
          </div>
         
          <CardBody className="tiff"><CardText className="bird">Caring Hearts Animal Clinic</CardText>
          </CardBody>
          
          
        </div>

        <div class="col-md-4 col-sm-6">
          <div class="box5">
            <img
              src="https://philipsveterinaryhospital.com/wp-content/uploads/2014/01/pv6-300x200.jpg"
              alt=""
            />

            <ul class="icon">
              <li>
                {" "}
                <a href="#" i class="fas fa-mobile-alt" />
              </li>
              <li>
                {" "}
                <a href="#" i class="fas fa-home" />
              </li>
            </ul>

            <div class="box-content">
              <h3 class="title">Dr. Jennifer Jones</h3>
            </div>
          </div>
          <CardBody className="tiff"><CardText className="bird">Seville Veterinary Hospital</CardText>
          </CardBody>
          
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="box5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18N0QElcaclRNTyqdDwmjO_IvHBtapdiJqIpFP2reu7WoQwsogA"
              alt=""
            />

            <ul class="icon">
              <li>
                {" "}
                <a href="#" i class="fas fa-mobile-alt" />
              </li>
              <li>
                {" "}
                <a href="#" i class="fas fa-home" />
              </li>
            </ul>

            <div class="box-content">
              <h3 class="title">Dr. Sam Hunt</h3>
            </div>
          </div>
          <CardBody className="tiff"><CardText className="bird">Val Vista Animal Hospital</CardText>
          </CardBody>
          
        </div>
      </div>
    </div>
  );
};

export default VetFinderCard;
