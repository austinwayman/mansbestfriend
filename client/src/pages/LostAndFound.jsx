import React, { Component } from "react";

import LostDogCard from "../components/LostDogCard/dogCard"
import LostDogForm from "../components/LostDogForm/LostForm"
import ThreadAddBtn from "../components/ThreadAddBtn/ThreadAddBtn"
import API from "../utils/lostAPI";
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
            result => this.setState({list: result.data}),
            console.log(this.state)
        )
    }
    constructor(props) {
        super(props);
      }


      render () {
          return (
              <div>
              <Jumbotron2 page={"Lost & Found"} other={"Find or Post a missing loved one."} />
                <LostDogForm/>
              </div>   
          )
      }
}

export default Lost;