import React from "react";
import { Link } from "react-router-dom";
import "./postcards.css"


export function Card(props) {
    return (

        <tr>
            <td class="column1">{props.title}</td>
            <td class="column2">{props.category}</td>
            <td class="column3">{props.content}</td>
            <td class="column8"> <Link to={'/posts/' + props.id}>
                <button value={props.id} className="btn btn-primary"> Read More</button>
            </Link></td>
        
        </tr>
            );
}

export default Card;

