import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Input from "../Input/Input"
import "./comment3.css"


export function CommentCard3(props) {
    return (
        <div className = "overall3">
            <div className="row">
                <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.comment}</p>
                        </div>
                    </div>
                </div>
            </div>

                
  
            );
        }

export default CommentCard3;
        
