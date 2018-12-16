import React from "react";
import { Link } from "react-router-dom";


export function Card(props) {
    return (
        
            <div className="row">
                <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">{props.category}</p>
                            <p className="card-text">{props.animals}</p>
                            <p className="card-text">{props.content}</p>


                            <Link to = {'/posts/' + props.id}>
                            <button value = {props.id} className="btn btn-primary"> Read More</button>
                            </Link>

                        

                        </div>
                    </div>
                </div>
       
          
            );
        }

export default Card;
        
