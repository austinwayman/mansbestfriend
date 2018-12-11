import React, { Component } from "react";
import Jumbotron2 from "../components/Jumbotron2";

class VetFinder extends Component {

    constructor(props) {
        super(props);
      }
      render () {
          return (
              <Jumbotron2 page={"VetFinder"} other={"Finding Vets for checkups or emergencies."} />
          )
      }
}

export default VetFinder;