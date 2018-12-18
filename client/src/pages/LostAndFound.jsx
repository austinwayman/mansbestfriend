import React, { Component } from "react";
import { Button, Modal, Form, FormGroup, Label, ModalHeader, ModalBody, ModalFooter, Input, Container, Row, Col } from 'reactstrap';

import LostDogCard from "../components/LostDogCard/dogCard"
import LostDogForm from "../components/LostDogForm/LostForm"
import ThreadAddBtn from "../components/ThreadAddBtn/ThreadAddBtn"
import API from "../utils/lostAPI";
import Jumbotron2 from "../components/Jumbotron2";
import "../../src/styles.css";

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
        // console.log("Fire")
        API.getLostAnimals().then(
            result => this.setState({ list: result.data, modal: false })
        )
        console.log(this.state.list)
    };

    postNewLost = () => {
        // console.log("tester")
        let newPet = {
            name: "Pounce",
            breed: "Tabby"
        }
        API.postLostAnimal(newPet)
    };

    handleFormSubmit = event => {

        event.preventDefault();

        this.newPost = {
            name: this.state.name,
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


    render() {
        console.log(this.state.list)
        return (
            <div>
                <Jumbotron2 page={"Lost & Found"} other={"Find or Post a missing loved one."} />
                <div className="d-flex justify-items-center" style={{ textAlign: "center" }}>
                    <Button outline color="info">Add a Lost or Found Pet</Button>{' '}
                </div>
                <Modal isOpen={false}>
                    <ModalHeader>Add New Lost Pet</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="name">Name of Lost Pet</Label>
                                <Input name="name" value={this.state.name} placeholder="Scruffy" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="breed">Dog Breed</Label>
                                <Input name="breed" value={this.state.breed} placeholder="Golden Retreiver" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Description</Label>
                                <Input type="textarea" name="description" value={this.state.description} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="file">File</Label>
                                <Input type="file" name="file" value={this.state.image} />
                                {/* <FormText color="muted">
                                    This is some placeholder block-level help text for the above input.
                                    It's a bit lighter and easily wraps to a new line.
                                </FormText> */}
                            </FormGroup>
                            <FormGroup>
                                <Label for="contact">Name of Lost Pet</Label>
                                <Input name="contact" value={this.state.contact} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleFormSubmit}>Add Pet</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Container>
                    <Col xl="8">
                        {
                            this.state.list.map(post => {
                                return (
                                    <LostDogCard name={post.name} breed={post.breed} description={post.description} image={post.image} contact={post.contact}/>
                                )
                            })

                        }
                    </Col>
                </Container>




            </div>
        )
    }
}

export default Lost;