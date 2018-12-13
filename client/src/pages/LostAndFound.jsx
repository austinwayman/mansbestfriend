import React, { Component } from "react";
import { Button, Modal, Form, FormGroup, Label, ModalHeader, ModalBody, ModalFooter, Input, Container, Row, Col} from 'reactstrap';

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
        description: "",
        image: "",
        contact: ""
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
              <div classname="d-flex justify-items-center" style={{textAlign: "center"}}>
              <Button outline color="info">Add a Lost or Found Pet</Button>{' '}
              </div>
                <LostDogForm/>
                
              </div>   
          )
      }
}

export default Lost;