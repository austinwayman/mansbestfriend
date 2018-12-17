import React from "react";
import "./style.css";
import { Animated } from "react-animated-css";

const VetFinderCard = props => {
  return (

    <div className="container mt-40">
    <h3 className="text-center">Hover Effect Style : Demo - 5</h3>
    <div className="col-md-4 col-sm-6">
            <div className="box5">
                <img src="http://bestjquery.com/tutorial/hover-effect/demo160/images/img-2.jpg" alt=""/>
                <ul className="icon">
                    <li><a href="#" className="fa fa-search"></a></li>
                    <li><a href="#" className="fa fa-link"></a></li>
                </ul>
                <div className="box-content">
                    <h3 className="title">Kristiana</h3>
                    <span className="post">Web Designer</span>
                </div>
            </div>
        </div>

        <div className="col-md-4 col-sm-6">
            <div className="box5">
                <img src="http://bestjquery.com/tutorial/hover-effect/demo160/images/img-2.jpg" alt=""/>
                <ul className="icon">
                    <li><a href="#" className="fa fa-search"></a></li>
                    <li><a href="#" className="fa fa-link"></a></li>
                </ul>
                <div className="box-content">
                    <h3 className="title">Kristiana</h3>
                    <span className="post">Web Designer</span>
                </div>
            </div>
        </div>

        <div className="col-md-4 col-sm-6">
            <div className="box5">
                <img src="http://bestjquery.com/tutorial/hover-effect/demo160/images/img-3.jpg" alt=""/>
                <ul className="icon">
                    <li><a href="#" className="fa fa-search"></a></li>
                    <li><a href="#" className="fa fa-link"></a></li>
                </ul>
                <div className="box-content">
                    <h3 className="title">Kristiana</h3>
                    <span className="post">Web Designer</span>
                </div>
            </div>
        </div>
    </div>

  );
};

export default VetFinderCard;
