import React, { Component } from "react";
import Jumbotron2 from "../components/Jumbotron2";
import VetFinderCard from "../components/VetFinderCard";
import { Collection } from "mongoose";

class VetFinder extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Jumbotron2
          page={"Vet Finder"}
          other={"Find Vets for checkups or emergencies."}
        />
        <VetFinderCard />
      </div>
    );
  }
}

export default VetFinder;
