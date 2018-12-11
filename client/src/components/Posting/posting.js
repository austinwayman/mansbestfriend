import React from "react";
import { Button} from 'reactstrap';




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

        </div>

    );
}

export default Posting;

