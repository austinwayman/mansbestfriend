import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Input from "../Input/Input"



export function Posting(props) {
    return (
        <div>
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.category}</p>
                        <p className="card-text">{props.animals}</p>
                        <p className="card-text">{props.content}</p>
                        <Button onClick = {props.toggle} modal = {props.modal} value= {props.value} color="primary">Reply</Button>
                    </div>
                </div>
            </div>

            {/* <Modal isOpen={props.modal}>
                        <ModalHeader>Add Reply</ModalHeader>
                        <ModalBody>
                            <Input name="name" value = {props.nameVal} onChange = {props.handleNameChange} placeholder="Name" />
                            <Input name="comment" value = {props.commentVal} onChange = {props.handleCommentChange} placeholder="Comment" />
                            </ModalBody>
                        <ModalFooter>
                            <Button value = {props.id} color="primary" onClick={props.handleCommentSubmit}>Post Comment</Button>{' '}
                            <Button color="secondary" onClick={props.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal> */}





        </div>




    );
}

export default Posting;

