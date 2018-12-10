import React, { Component } from "react";


class ForumPage extends Component {



    render() {

        return (

            <div className="container">
            <div className="row">
                <div className="col col-xl-6">
                <a href="/forum/dogs">
                    <div className="card">
                        <div className="card-body">
                            Dogs
                        </div>
                    </div>
                </a>
                </div>
                <div className="col col-xl-6">
                <a href="/forum/cats">
                    <div className="card">
                        <div className="card-body">
                            Cats
                        </div>
                    </div>
                </a>
                </div>
            </div>
        </div>





        )


    }







}

export default ForumPage