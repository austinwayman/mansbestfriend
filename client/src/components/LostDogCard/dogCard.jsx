import React from "react";


export function LostDogCard(props) {
    const {
        image
    } = props
    return (
        <div>
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <img src={props.image}></img>
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LostDogCard;