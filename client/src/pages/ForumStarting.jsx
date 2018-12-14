import React, { Component } from "react";
import Jumbotron2 from "../components/Jumbotron2";
import "../../src/styles.css";
import {
    Card, CardImg, CardBody,
    CardTitle, Container, Row, Col
} from 'reactstrap';


class ForumPage extends Component {

    render() {
        return (
            <div>
                {/* Jumbotron Start */}
                <Jumbotron2 page="Forum" other="This is the forum." />
                {/* Jumbotron End */}


                <div className="forumContainer">
                    <Container>
                        <Row>
                            <Col>
                            <Card>
                                <a href="/forum/dogs">
                                    <CardImg top width="100%" src="/images/puppy.png" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Dogs</CardTitle>
                                    </CardBody>
                                </a>
                            </Card>
                            </Col>

                            <Col>
                            <Card>
                                <a href="/forum/cats">
                                    <CardImg top width="100%" src="/images/kitten.png" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>Cats</CardTitle>
                                    </CardBody>
                                </a>
                            </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>






        )


    }







}

export default ForumPage