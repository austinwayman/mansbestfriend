import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Input from "../Input/Input"
import "./comment2.css"


export function CommentCard2(props) {
    return (
        <div className = "overall2">
            <div className="row">
                <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.comment}</p>
                            <Button onClick = {props.toggle3} color="primary">Reply</Button>
                        </div>
                    </div>
                </div>

         {/* <Modal isOpen={props.modal3}>
                        <ModalHeader>Add Replyy</ModalHeader>
                        <ModalBody>
                            <Input name="name3" value = {props.nameVal} onChange = {props.handleName3Change} placeholder="Name" />
                            <Input name="comment3" value = {props.commentVal} onChange = {props.handleComment3Change} placeholder="Comment" />
                            </ModalBody>
                        <ModalFooter>
                            <Button value = {props.id} color="primary" onClick={props.handleComment3Submit}>Post Comment</Button>{' '}
                            <Button color="secondary" onClick={props.toggle3}>Cancel</Button>
                        </ModalFooter>
                    </Modal> */}
            </div>

                
  
            );
        }

export default CommentCard2;
        
