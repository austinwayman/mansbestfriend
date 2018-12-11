import React, { Component } from "react";
import API from "../utils/API";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Card from "../components/PostCards/PostCards"
import Input from "../components/Input/Input"
import ThreadAddBtn from "../components/ThreadAddBtn/ThreadAddBtn"
import Jumbotron2 from "../components/Jumbotron2";
import Nav2 from "../components/Nav";


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

        API.animalPosts(this.props.match.params.animal).then(result => this.setState({ posts: result.data, modal: false }));

    }

    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {

        return (

            <div>
                <Jumbotron2 page={this.Capitalize(this.props.match.params.animal) + " Forum"} other={"Questions asked by users, answered by users"}>
                    <Nav2 />
                </Jumbotron2>

                {console.log(this.state.posts)}

                <ThreadAddBtn toggle={this.toggle} />

                <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader>Add Thread</ModalHeader>
                        <ModalBody>
                            <Input name="title" value={this.state.title} onChange={this.handleTitleChange} placeholder="Title Of Your Thread" />
                            <Input name="category" value={this.state.category} onChange={this.handleCategoryChange} placeholder="Category Of Your Thread" />
                            <Input name="animal" value={this.state.animal} onChange={this.handleAnimalChange} placeholder="Type of Animal" />
                            <Input name="content" value={this.state.content} onChange={this.handleContentChange} placeholder="Content" />

                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.handleThreadSubmit}>Post Thread</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>



                {

                    this.state.posts.map(post => {

                        return (
                            <Card title={post.title} category={post.category} content={post.content} id={post._id} />
                        )
                    })

                }

            </div>

        )

    }

}

export default Forum
