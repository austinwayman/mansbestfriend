import React from "react";
import { Link } from "react-router-dom"

export function ForumStartBtn() {
    return (

        <div className="container">
            <div className="row">
                <div className="col col-xl-6">
                <Link to ="#">
                    <div className="card">
                        <div className="card-body">
                            Dogs
                        </div>
                    </div>
                </Link>
                </div>
                <div className="col col-xl-6">
                <a href="#">
                    <div className="card">
                        <div className="card-body">
                            Cats
                        </div>
                    </div>
                </a>
                </div>
            </div>
        </div>



    );
}

export default ForumStartBtn;

