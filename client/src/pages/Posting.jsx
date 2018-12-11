import React, { Component } from "react";
import API from "../utils/API";
import Posting from "../components/Posting/posting"
import CommentCard from "../components/CommentCard/commentcard"
import Input from "../components/Input/Input"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Post extends Component {
    state = {
        selected: [],
        modal: false,
        name : "",
        comment : ""
    }


    componentWillMount() {
        this.getPost()
    }

    handleNameChange = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        }); 
    }

    handleCommentChange = (event) => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        }); 
    }

    getPost = () => {

        API.getThisPost(this.props.match.params.postID)
            .then(result => this.setState({ selected: [result.data] }))

    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {

        return (

            <div>
                  <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader>Add Thread</ModalHeader>
                        <ModalBody>
                            <Input name="name" value = {this.state.name} onChange = {this.handleNameChange} placeholder="Name" />
                            <Input name="comment" value = {this.state.comment} onChange = {this.handleCommentChange} placeholder="Comment" />
                            </ModalBody>
                        <ModalFooter>
                            <Button value = {this.props.match.params.postID} color="primary" onClick={this.handleThreadSubmit}>Post Comment</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>

                <div className="container">

                    {console.log(this.state.selected)}

                     


                    {

                        this.state.selected.map(post => {


                            return (

                                <div>

                                    <Posting title={post.title} category={post.category} content={post.content} toggle = {this.toggle} id = {post._id} />


                                    {
                                        post.comment.map(comments => {

                                            return (

                                                <div>
                                                    <CommentCard name={comments.name} comment={comments.comment} />

                                                    {
                                                        comments.comment2.map(comments2 => {
                                                            return (

                                                                <div>

                                                                    <CommentCard name={comments2.name} comment={comments2.comment} />

                                                                    {

                                                                        comments2.comment3.map(comments3 => {

                                                                            return (
                                                                                <CommentCard name={comments3.name} comment={comments3.comment} />
                                                                            )



                                                                        })


                                                                    }

                                                                </div>



                                                            )
                                                        })

                                                    }
                                                </div>

                                            )
                                        })
                                    }
                                </div>


                            )
                        })

                    }

                </div>

            </div>

        )

    }

}

export default Post
