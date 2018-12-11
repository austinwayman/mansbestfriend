import React, { Component } from "react";


import LostDogCard from "../components/LostDogCard/dogCard"
import LostDogForm from "../components/LostDogForm/LostForm"
import ThreadAddBtn from "../components/ThreadAddBtn/ThreadAddBtn"
import API from "../utils/API";

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



}