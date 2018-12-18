import React, { Component } from "react";
import API from "../../utils/API";
import Posting from "../../components/Posting/posting"
import CommentCard from "../../components/CommentCard/commentcard"
import Input from "../../components/Input/Input"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Axios from "axios";
import "./posting.css"

class Post extends Component {
  state = {
    selected: [],
    modal: false,
    name: "",
    comment: "",
    modalID: "",
    route: ""
  }

  componentWillMount() {
    this.getPost()
  }

  getPost = () => {

    API.getThisPost(this.props.match.params.postID)
      .then(result => this.setState({ selected: [result.data], modal: false }))

  }

  // API.checkAuth()
  //         .then(result => {
  //             this.setState({
  //                 modal: !this.state.modal
  //             })
  //         })
  //         .catch(err => {

  //             if (err.response.status === 401) {

  //                 this.props.history.push("/login-sign")
  //             }


  //         })

  toggle = (route) => {

    return (event) => {
      if (localStorage.getItem("userToken")) {

        const value = event.target.value;

        console.log("MODALID =" + this.state.modalID)

        this.setState({
          modal: !this.state.modal,
          modalID: value,
          route: route
        });
      } else {
        this.props.history.push("/login-sign");
      }

    }

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

  handleSubmit = () => {
    const obj = {
      name: this.state.name,
      comment: this.state.comment
    };
    API.postComment(this.state.route, obj, this.state.modalID).then(res => this.getPost())

  }

  render() {

    return (

      <div>

        <div className="container cont">

          {

            this.state.selected.map(post => {


              return (

                <div>

                  <Posting
                    title={post.title}
                    category={post.category}
                    content={post.content}
                    toggle={this.toggle("Comment1/")}
                    id={post._id}
                    nameVal={this.state.name}
                    commentVal={this.state.comment}
                    handleNameChange={this.handleNameChange}
                    handleCommentChange={this.handleCommentChange}
                    isOpen={this.state.modal}
                    handleCommentSubmit={this.handleCommentSubmit}
                    value={this.props.match.params.postID}
                    updateID={this.updateID}
                  />


                  {
                    post.comment.map(comments => {
                      console.log("POST COMMENT:", comments._id)

                      return (

                        <div>
                          <CommentCard
                            className="comment11"
                            name={comments.name}
                            comment={comments.comment}
                            modal={this.state.modal}
                            toggle={this.toggle("Comment2/")}
                            id={comments._id}
                            handleName2Change={this.handleName2Change}
                            handleComment2Change={this.handleComment2Change}
                            handleComment2Submit={this.handleComment2Submit}
                            nameVal={this.state.name}
                            commentVal={this.state.comment}
                            value={comments._id} />

                          {
                            comments.comment2.map(comments2 => {
                              return (

                                <div>

                                  <CommentCard
                                    className="comment12"
                                    name={comments2.name}
                                    comment={comments2.comment}
                                    modal={this.state.modal}
                                    toggle={this.toggle("Comment3/")}
                                    id={comments2._id}
                                    handleName3Change={this.handleName3Change}
                                    handleComment3Change={this.handleComment3Change}
                                    handleComment3Submit={this.handleComment3Submit}
                                    nameVal={this.state.name}
                                    commentVal={this.state.comment}
                                    value={comments2._id}
                                  />

                                  {

                                    comments2.comment3.map(comments3 => {

                                      return (
                                        <CommentCard className="comment13" name={comments3.name} comment={comments3.comment} className1="displayOff" />
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


        <Modal isOpen={this.state.modal}>
          <ModalHeader>Add Reply</ModalHeader>
          <ModalBody>
            <Input name="name"
              value={this.nameVal}
              onChange={this.handleNameChange}
              placeholder="Name" />
            <Input name="comment"
              value={this.commentVal}
              onChange={this.handleCommentChange}
              placeholder="Comment" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" value={this.state.modalID} onClick={(e) => {
              console.log("COMMENT CARD:", this.state);
              e.preventDefault();
              this.handleSubmit(this.state.route, this.state.modalID);
            }}>Post Comment</Button>{' '}
            <Button color="secondary" onClick={this.toggle("")}>Cancel</Button>
          </ModalFooter>
        </Modal>



      </div>

    )

  }
}

export default Post
