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
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text">{props.breed}</p>
                        <hr />
                        <p className="card-text">{props.summary}</p>
                        <p className="card-text">{props.contact}</p>
                        <Button className="crdColor" value ={props.link} onClick={props.toggle}>Learn More</Button>
                    </div>
                </div>

            </div>
  




            )}

export default ArticleCard;
