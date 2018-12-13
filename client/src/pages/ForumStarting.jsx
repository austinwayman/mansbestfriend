import React, { Component } from "react";
import Jumbotron2 from "../components/Jumbotron2";
import { Link } from "react-router-dom";


class ForumPage extends Component {

    render() {
        return (
<div>
            <Jumbotron2 page="Forum" other="This is the forum." />


            <div className="container">
            <div className="row">
                <div className="col col-xl-6">
                <Link to="/forum/dogs">
                    <div className="card">
                        <div className="card-body">
                            Dogs
                        </div>
                    </div>
                </Link>
                </div>
                <div className="col col-xl-6">
                <Link to="/forum/cats">
                    <div className="card">
                        <div className="card-body">
                            Cats
                        </div>
                    </div>
                </Link>
                </div>
            </div>
        </div>
        </div>





        )


    }







}

export default ForumPage