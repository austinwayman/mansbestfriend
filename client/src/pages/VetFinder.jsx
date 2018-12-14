import React, { Component } from "react";
import Jumbotron2 from "../components/Jumbotron2";
import VetFinderCard from "../components/VetFinderCard"; 

class VetFinder extends Component {

    constructor(props) {
        super(props);
      }
      render () {
          return (
              <div>
              <Jumbotron2 page={"VetFinder"} other={"Finding Vets for checkups or emergencies."} />
              <VetFinderCard />
              </div>
          )
      }
}

export default VetFinder;