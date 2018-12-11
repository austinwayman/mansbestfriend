import React from "react";


export function LostDogCard(props) {
    return (
        <div>
            <div className="row">
                <div className="card">
                        <div className="card-body">
                            <img src ={props.image}></img>
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.comment}</p>
                        </div>
                    </div>
                </div>
            </div>
                
  
            );
        }

export default LostDogCard;