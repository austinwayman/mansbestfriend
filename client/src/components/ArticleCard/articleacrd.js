import React from "react";
import { Button } from 'reactstrap';
import "./articlecard.css"

export function ArticleCard(props) {

    return (

        // // className={props.className}
        // style="width: 18rem;"

        <div>
            <div className="card overall">
                <img className="card-img-top articleimg" src={props.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.summary}</p>
                        <Button value ={props.link} onClick={props.toggle}>Learn More</Button>
                    </div>
                </div>

            </div>
  




            )}

export default ArticleCard;
