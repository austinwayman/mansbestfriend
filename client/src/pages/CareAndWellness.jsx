import React, { Component } from "react";
import API from "../utils/API";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';
// import Card from "../components/PostCards/PostCards";
import Jumbotron2 from "../components/Jumbotron2";
// import axios from 'axios';
import ArticleCard from "../components/ArticleCard/articleacrd";
import Footer from "../components/Footer";


class Articles extends Component {
    state = {
        articles: [],
        singleArticle: [],
        modal: false,
        backdrop: true
    }

    componentDidMount = () => {
        this.getArticles()
    }

    getArticles = () => {
        API.scrapeInitial(0).then(result => this.setState({ articles: result.data }))
    }

    changeArticles = (e) => {

        const { value } = e.target

        API.scrapeInitial(value).then(result => this.setState({ articles: result.data }))

    }

    toggle = (event) => {

        const { value } = event.target

        console.log(value)

        API.getThatArticle(value).then(results => this.setState({ singleArticle: results.data }))

            .then(() => this.setState({
                modal: !this.state.modal
            }))

    }

    toggleClose = () => this.setState({
        modal: !this.state.modal
    })

    changeBackdrop(e) {
        let value = e.target.value;
        if (value !== 'static') {
            value = JSON.parse(value);
        }
        this.setState({ backdrop: value });
    }



    render() {

        { console.log(this.state.articles) }
        const closeBtn = <button className="close" onClick={this.toggleClose}>&times;</button>;

        return (

            <div>
                <Jumbotron2 page={"Care & Wellness"} other={"Useful articles for your furry friend"} />


                {/* Navbar Start */}
                <div className="articleBody">
                    <Container className="articleTopics">
                        <Button className="btnSpace" value="0" onClick={this.changeArticles}>New Pet Owners</Button>
                        <Button className="btnSpace" value="1" onClick={this.changeArticles}>Basic Pet Care</Button>
                        <Button className="btnSpace" value="2" onClick={this.changeArticles}>Pet Nutrition</Button>
                        <Button className="btnSpace" value="3" onClick={this.changeArticles}>Pet Care Tips</Button>
                        <Button className="btnSpace" value="4" onClick={this.changeArticles}>Prevent Lost of Pets</Button>
                    </Container>
                    {/* Navbar End */}

                    {/* Articles Start */}
                    <Container>
                        <Row>
                            {this.state.articles.map(article => {
                                return (
                                    <Col>
                                        <ArticleCard
                                            image={article.image}
                                            title={article.title}
                                            summary={article.summary}
                                            link={article.link}
                                            toggle={this.toggle} />
                                    </Col>
                                )
                              })
                            }
                        </Row>
                    </Container>
                    {/* Articles End */}



                    {/* Modal Start */}
                    <Modal isOpen={this.state.modal} className={this.props.className} backdrop={this.state.backdrop}>
                        <ModalHeader toggle={this.toggle} close={closeBtn}>
                       </ModalHeader>
                        <ModalBody>

                            {
                                <div dangerouslySetInnerHTML={{ __html: this.state.singleArticle.article }} />
                            }

                        </ModalBody>
                        <ModalFooter>
                            <Button  onClick={this.toggleClose}>Close</Button>
                        </ModalFooter>
                    </Modal>
                    {/* Modal End */}
                </div>

                <Footer />
            </div>
        )
    }
};

export default Articles