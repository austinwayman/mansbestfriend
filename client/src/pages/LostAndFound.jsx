import React, { Component } from "react";
import { Button, Modal, Form, FormGroup, Label, ModalHeader, ModalBody, ModalFooter, Input, Container, Row, Col } from 'reactstrap';
import LostDogCard from "../components/LostDogCard/dogCard"
import LostDogForm from "../components/LostDogForm/LostForm"
import ThreadAddBtn from "../components/ThreadAddBtn/ThreadAddBtn"
import lostAPI from "../utils/lostAPI";
import Jumbotron2 from "../components/Jumbotron2";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard/articleacrd"
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

    handleChanges = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    componentDidMount() {
        this.getAllLost()
        // this.postNewLost()
    };

    getAllLost = () => {
        // console.log("Fire")
        lostAPI.getLostAnimals().then(
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
        lostAPI.postLostAnimal(newPet)
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

        lostAPI.postLostAnimal(this.newPost)
            .then(res => this.getAllLost())
            .catch(err => console.log(err));
    };

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
      }


    render() {
        console.log(this.state.list)
        return (
            <div>
                <Jumbotron2 page={"Lost & Found"} other={"Find or Post a missing loved one"} />


                <div classname="d-flex justify-items-center" style={{ textAlign: "center", padding:"25px" }}>
                    <Button onClick={this.toggle} outline color="info">Add a Lost or Found Pet</Button>{' '}
                </div>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>Add New Lost Pet</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="name">Name of Lost Pet</Label>
                                <Input name="name" value={this.state.name}
                                onChange={this.handleChanges}placeholder="Scruffy" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="breed">Dog Breed</Label>
                                <Input name="breed" value={this.state.breed} onChange={this.handleChanges} placeholder="Golden Retreiver" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Description</Label>
                                <Input type="textarea" name="description" value={this.state.description} onChange={this.handleChanges} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="file">File</Label>
                                <Input type="file" name="file" value={this.state.image} onChange={this.handleChanges} />
                                {/* <FormText color="muted">
                                    This is some placeholder block-level help text for the above input.
                                    It's a bit lighter and easily wraps to a new line.
                                </FormText> */}
                            </FormGroup>
                            <FormGroup>
                                <Label for="contact">Contact info</Label>
                                <Input name="contact" value={this.state.contact} onChange={this.handleChanges} placeholder="John Smith - 555-555-5555"/>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleFormSubmit}>Add Pet</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Container>
                    <Row>

                        {
                            this.state.list.map(post => {
                                return (
                                    <Col>
                                    <ArticleCard title={post.name} breed={post.breed} summary={post.description} image={post.image} contact={post.contact}/>
                                    </Col>
                                )
                            })

                        }
                    </Row>
                </Container>



<Footer />
            </div>
        )
    }
}

export default Lost;