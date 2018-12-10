import React from "react";


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
                        <button className="btn btn-primary" value = {props.id}onClick={props.toggle}>Reply</button>
                    </div>
                </div>
            </div>





        </div>




    );
}

export default Posting;

