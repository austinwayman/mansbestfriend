import React, { Component } from "react";
import Jumbotron2 from "../components/Jumbotron2";
import VetFinderCard from "../components/VetFinderCard";
import { Button, Modal, Form, FormGroup, Label, ModalHeader, ModalBody, ModalFooter, Input, Container, Row, Col } from 'reactstrap';
import API from "../utils/API";

class VetFinder extends Component {

    state = {
        yelp: [],
        search: ""
    }

    handleLocationChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleYelpSubmit = () => {

        API.findVet(this.state.search).then(result => this.setState({yelp : result.data.jsonBody.businesses}))

    }


    render() {

        {console.log(this.state.yelp)}

        return (

            <div>
                <Jumbotron2 page={"VetFinder"} other={"Finding Vets for checkups or emergencies."} />
                <Container>
                    <Form>
                        <FormGroup>
                            <Input
                                name="search"
                                value={this.state.search}
                                onChange={this.handleLocationChange}
                                placeholder="Enter zipcode here to search for closest vets"
                            />
                        </FormGroup>
                    </Form>
                    <Button color="primary"
                     onClick={this.handleYelpSubmit} >
                     Search</Button>

                     <Row>


                     {
                         this.state.yelp.map(yelp => {


                            return(

                                
                                    <Col>
                                     <VetFinderCard 
                                     name={yelp.name}
                                     title={yelp.categories[0].title}
                                     rating={yelp.rating}
                                     image={yelp.image_url}
                                     address={yelp.location.address1 + ", " + yelp.location.address2 + ", " + yelp.location.city + ", " + yelp.location.country}
                                     phone={yelp.phone}
                                     link={yelp.url}/>
                                    </Col>
                                


                            )

                         })
                     }

                    </Row>

                       
                </Container>
            </div>
        )
    }
}

export default VetFinder;