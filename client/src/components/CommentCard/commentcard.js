import React from "react";
import { Button} from 'reactstrap';
import "./comment1.css"


export function CommentCard(props) {

    return (
        <div className = {props.className}>
           
                            <i className="threadline"></i>
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.comment}</p>
                            <Button className = {props.className1} onClick={props.toggle} value={props.value} color="primary">Reply</Button>
                            <hr></hr>
            </div>

                
  
            );
        }

export default CommentCard;
        
