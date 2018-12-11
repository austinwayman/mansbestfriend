import React, { Component } from "react";

import LostDogCard from "../components/LostDogCard/dogCard"
import LostDogForm from "../components/LostDogForm/LostForm"
import ThreadAddBtn from "../components/ThreadAddBtn/ThreadAddBtn"
import API from "../utils/API";
import Jumbotron2 from "../components/Jumbotron2";

class Lost extends Component {
    state = {
        list: [],
        name: "",
        breed: "",
        image: "",
        description: ""
    }

    componentDidMount() {
        this.getAllLost()
    }

    getAllLost = () => {
        API.getLostAnimals(this.props.match.params.name).then (
            result => this.setState({list: result.data})
        )
    }
    constructor(props) {
        super(props);
      }


      render () {
          return (
              <Jumbotron2 page={"Lost & Found"} other={"Find or Post a missing loved one."} />   
          )
      }
}

export default Lost;