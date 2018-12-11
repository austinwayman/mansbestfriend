import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Input from "../Input/Input"
import "./comment1.css"


export function CommentCard(props) {
    console.log("COMMENT CARD TOP LVL:", props.id)
    return (
        <div className = "overall1" className = {props.className}>
            <div className="row">
                <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.comment}</p>
                            <Button onClick={props.toggle} value = {props.value} color="primary">Reply</Button>
                        </div>
                    </div>
                </div>

         {/* <Modal isOpen={props.modal2}>
                        <ModalHeader>Add Repl</ModalHeader>
                        <ModalBody>
                            <Input name="name2" value = {props.nameVal} onChange = {props.handleName2Change} placeholder="Name" />
                            <Input name="comment2" value = {props.commentVal} onChange = {props.handleComment2Change} placeholder="Comment" />
                            </ModalBody>
                        <ModalFooter>
                            <Button value = {props.id} color="primary" onClick={(e) => {
                                console.log("COMMENT CARD:", props.id);
                                e.preventDefault();
                                // props.handleComment2Submit(props.id)
                            }}>Post Comment</Button>{' '}
                            <Button color="secondary" onClick={props.toggle2}>Cancel</Button>
                        </ModalFooter>
                    </Modal> */}
            </div>

                
  
            );
        }

export default CommentCard;
        
