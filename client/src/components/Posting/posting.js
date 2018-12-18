import React from "react";
import { Button} from 'reactstrap';
import "./posting.css"




export function Posting(props) {
    return (
        <div>
         
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.category}</p>
                        <p className="card-text">{props.animals}</p>
                        <p className="card-text">{props.content}</p>
                        <Button onClick={props.toggle} modal = {props.modal} value= {props.value} color="primary">Reply</Button>
                        <hr className="break"></hr>
   
        </div>

    );
}

export default Posting;

