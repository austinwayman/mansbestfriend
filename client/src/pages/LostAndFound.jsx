import React, { Component } from "react";
import { Button, Modal, Form, FormGroup, Label, ModalHeader, ModalBody, ModalFooter, Input, Container, Row, Col} from 'reactstrap';

import LostDogCard from "../components/LostDogCard/dogCard"
import LostDogForm from "../components/LostDogForm/LostForm"
import ThreadAddBtn from "../components/ThreadAddBtn/ThreadAddBtn"
import API from "../utils/lostAPI";
import Jumbotron2 from "../components/Jumbotron2";
import Footer from "../components/Footer";

class Lost extends Component {
    state = {
        list: [],
        modal: false,
        name: "",
        breed: "",
        description: "",
        image: "",
        contact: ""
    }

    componentDidMount() {
        this.getAllLost()
        // this.postNewLost()
    };

    getAllLost = () => {
        console.log("Fire")
        API.getLostAnimals().then (
            result => this.setState({list: result.data, modal: false})
            )
            console.log(this.state.list)
    };

    postNewLost = () => {
        console.log("tester")
        let newPet = {
            name: "Pounce",
            breed: "Tabby"
        }
        API.postLostAnimal(newPet) 
    };

    handleFormSubmit = event => {

        event.preventDefault();

        this.newPost = {
            name:this.state.name,
            breed: this.state.breed,
            description: this.state.description,
            image: this.state.image,
            contact: this.state.contact
        }

        API.postLastAnimal(this.newPost)
        .then(res => this.getAllLost())
        .catch(err => console.log(err));
    };

    

    constructor(props) {
        super(props);
      };


      render () {
        console.log(this.state.list)
          return (
              <div>
              <Jumbotron2 page={"Lost & Found"} other={"Find or Post a missing loved one."} />
              <div className="d-flex justify-items-center" style={{textAlign: "center"}}>
              <Button outline color="info">Add a Lost or Found Pet</Button>{' '}
              </div>
              
                <LostDogForm/>
                <Footer />
              </div>   
          )
      }
}

export default Lost;