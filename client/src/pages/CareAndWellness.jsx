import React, { Component } from "react";
import API from "../utils/API";
import { Button, Modal, Form, FormGroup, Label, ModalHeader, ModalBody, ModalFooter, Input, Container, Row, Col } from 'reactstrap';
import Card from "../components/PostCards/PostCards"
import Jumbotron2 from "../components/Jumbotron2";
import axios from 'axios'
import ArticleCard from "../components/ArticleCard/articleacrd"


class Articles extends Component {

    state = {
        articles: [],
        singleArticle: [],
        modal: false
    }

    componentDidMount = () => {
        this.getArticles()
    }

    getArticles = () => {
        API.scrapeInitial(0).then(result => this.setState({ articles: result.data }))
    }

    changeArticles = (e) => {

        const{value} = e.target

        API.scrapeInitial(value).then(result => this.setState({ articles: result.data }))

    }

    toggle = (event) => {

        const {value} = event.target

        console.log(value)

        API.getThatArticle(value).then(results => this.setState({singleArticle : results.data}))
        
        .then(() => this.setState({
            modal: !this.state.modal
          }))
        
      }

      toggleClose = () => this.setState({
            modal: !this.state.modal
          })
        
      

    render() {

        { console.log(this.state.articles) }

        return (

            <div>

                <Container>
                    <Button value = "0" onClick={this.changeArticles}>New Pet Owners</Button>
                    <Button value = "1" onClick={this.changeArticles}>Basic Pet Care</Button>
                    <Button value = "2" onClick={this.changeArticles}>Pet Nutrition</Button>
                    <Button value = "3" onClick={this.changeArticles}>Pet Care Tips</Button>
                    <Button value = "4" onClick={this.changeArticles}>Prevent Lost of Pets</Button>
                </Container>

                <Container>

                    <Row>
                    {
                        this.state.articles.map(article => {
                            return (
                                <Col>
                                <ArticleCard
                                    image={article.image}
                                    title={article.title}
                                    summary={article.summary}
                                    link={article.link} 
                                    toggle={this.toggle}/>
                                </Col>
                            )
                        })
                    }

                    </Row>









                </Container>

                <Modal isOpen={this.state.modal}>
                    <ModalHeader>Add Reply</ModalHeader>
                    <ModalBody>

                        {
                            <div dangerouslySetInnerHTML={{ __html: this.state.singleArticle.article }} />
                           
                        }
 
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggleClose}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </div>








        )






    }





}

export default Articles