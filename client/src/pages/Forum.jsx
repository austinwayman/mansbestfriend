import React, { Component } from "react";
import API from "../utils/API";
import { Button, Modal, Form, FormGroup, Label, ModalHeader, ModalBody, ModalFooter, Input, Container, Row, Col } from 'reactstrap';
import Card from "../components/PostCards/PostCards"
import ThreadAddBtn from "../components/ThreadAddBtn/ThreadAddBtn"


class Forum extends Component {
    state = {
        posts: [],
        modal: false,
        title: "",
        category: "",
        animal: "",
        content: ""
    }


    componentWillMount() {
        this.getFirstPosts()
    }

    handleTitleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleCategoryChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleAnimalChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleContentChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleThreadSubmit = event => {

        event.preventDefault();

        this.newPost = {
            title: this.state.title,
            category: this.state.category,
            animal: this.state.animal,
            content: this.state.content
        }

        API.postThread(this.newPost)
            .then(res => this.getFirstPosts())
            .catch(err => console.log(err));
    };



    getFirstPosts = () => {


        console.log("working")

        API.animalInitialPosts(this.props.match.params.animal).then(result => this.setState({ posts: result.data, modal: false }));

    }

    toggle = () => {

        API.checkAuth()
            .then(result => { console.log(result) })
            .catch(err => {

                if (err.response.status === 401) {

                    this.props.history.push("/login-sign")
                }

                else {
                    this.setState({
                        modal: !this.state.modal
                    })
                }


            })

    }

    /* button navs */

    petTraining = (event) => {
        const { value } = event.target


        API.animalChosenPost(this.props.match.params.animal, value)
            .then(result => this.setState({ posts: result.data, modal: false }))

    }

    breeding = (event) => {

        const { value } = event.target


        API.animalChosenPost(this.props.match.params.animal, value)
            .then(result => this.setState({ posts: result.data, modal: false }))


    }

    healthAndNut = (event) => {

        const { value } = event.target
        API.animalChosenPost(this.props.match.params.animal, value)
            .then(result => this.setState({ posts: result.data, modal: false }))

    }

    rescueAndAdop = (event) => {

        const { value } = event.target
        API.animalChosenPost(this.props.match.params.animal, value)
            .then(result => this.setState({ posts: result.data, modal: false }))

    }

    showsAndEvents = (event) => {

        const { value } = event.target
        API.animalChosenPost(this.props.match.params.animal, value)
            .then(result => this.setState({ posts: result.data, modal: false }))

    }


    /* end button navs */




    render() {

        return (

            <div>

                {console.log(this.state.posts)}

                <ThreadAddBtn toggle={this.toggle} />

                <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader>Add Thread</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label for="title">Title of Thread : </Label>
                                    <Input name="title" value={this.state.title} onChange={this.handleTitleChange} placeholder="Title Of Your Thread" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="category">Category</Label>
                                    <Input type="select" id="exampleSelect" name="category" value={this.state.category} onChange={this.handleCategoryChange} placeholder="Category Of Your Thread">
                                        <option>Health and Nutrition</option>
                                        <option>Pet Training</option>
                                        <option>Breeding</option>
                                        <option>Rescue & Adoption</option>
                                        <option>Shows & Events</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="category">Animal</Label>
                                    <Input type="select" id="exampleSelect" name="animal" value={this.state.animal} onChange={this.handleAnimalChange} placeholder="Type of Animal">
                                        <option>cats</option>
                                        <option>dogs</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="category">Content</Label>
                                    <Input name="content" value={this.state.content} onChange={this.handleContentChange} placeholder="Content" />
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.handleThreadSubmit}>Post Thread</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>

                <Container>
                    <Row>
                        <Col xl="6">
                            <p><Button color="secondary" value="Health and Nutrition" onClick={this.healthAndNut}>Health and Nutrition</Button></p>
                            <p><Button color="secondary" value="Pet Training" onClick={this.petTraining}>Pet Training</Button></p>
                            <p><Button color="secondary" value="Breeding" onClick={this.breeding}>Breeding</Button></p>
                            <p><Button color="secondary" value="Rescue & Adoption" onClick={this.rescueAndAdop}>Rescue & Adoption</Button></p>
                            <p><Button color="secondary" value="Shows & Events" onClick={this.showsAndEvents}>Shows & Events</Button></p>

                        </Col>
                        <Col xl="6">

                            {

                                this.state.posts.map(post => {

                                    return (
                                        <Card title={post.title} category={post.category} content={post.content} id={post._id} />
                                    )
                                })

                            }

                        </Col>
                    </Row>
                </Container>







            </div>

        )

    }

}

export default Forum
