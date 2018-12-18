import React, { Component } from "react";
import Jumbotron2 from "../components/Jumbotron2";
import "../../src/styles.css";
import {
    Card, CardImg, CardBody,
    Container, Row, Col
} from 'reactstrap';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";


class ForumPage extends Component {

    render() {
        return (
            <div>
                {/* Jumbotron Start */}
                <Jumbotron2 page="Forum" other="This is the forum." />
                {/* Jumbotron End */}


                {/* Forum Container Start */}
                <div className="forumContainer">
                    <Container>
                        <Row>
                            <Col>
                            <Card className="cardResize" tag={Link} to="/forum/dogs">
                                    <CardImg top width="100%" src="/images/puppy.png" alt="Card image cap" />
                                    <CardBody>
                                        {/* <CardTitle></CardTitle> */}
                                    </CardBody>
                            </Card>
                            </Col>

                            <Col>
                            <Card className="cardResize" tag={Link} to="/forum/cats">
                                    <CardImg top width="100%" src="/images/kitten.png" alt="Card image cap" />
                                    <CardBody>
                                        {/* <CardTitle></CardTitle> */}
                                    </CardBody>
                            </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* Forum Container End */}
<Footer />
            </div>
        )
    }







}

export default ForumPage