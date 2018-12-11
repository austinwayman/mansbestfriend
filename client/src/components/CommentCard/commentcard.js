import React from "react";
import { Button} from 'reactstrap';
import "./comment1.css"


export function CommentCard(props) {

    return (
        <div className = {props.className}>
            <div className="row">
                <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.comment}</p>
                            <Button onClick={props.toggle} value = {props.value} color="primary">Reply</Button>
                        </div>
                    </div>
                </div>

            </div>

                
  
            );
        }

export default CommentCard;
        
