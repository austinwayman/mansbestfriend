import React, { Component } from "react";
import { Button, Modal, Form, FormGroup, Label, ModalHeader, ModalBody, ModalFooter, Input, Container, Row, Col } from 'reactstrap';
import API from "../utils/API";
import axios from "axios"; 



class SignUpIn extends Component {

    state = {
        username: "",
        password: ""
    }

    componentWillMount = () => {
        console.log(axios.defaults.headers.common)
    }

    handleusername = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handlepassword = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSignUp = (event) => {
        console.log("working")
        const obj = {
            email: this.state.username,
            password: this.state.password
        }

        API.signUp(obj).then(res => this.props.history.push("/"))
    }

    handleLogin = () =>{

        const obj = {
            email: this.state.username,
            password: this.state.password
        }

        API.signIn(obj).then(res => {
            console.log(res.data.token)

            axios.defaults.headers.common['authorization'] = res.data.token;

            localStorage.setItem("userToken", res.data.token)

        
            this.props.history.push("/")
        })

    }



    render() {
        return (

            <Form>
                <FormGroup>
                    <Label for="exampleEmail">UserName</Label>
                    <Input type="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleusername}
                        placeholder="Username"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handlepassword}
                        placeholder="password" />
                </FormGroup>

                <Button color="primary" onClick={this.handleSignUp}> Sign Up</Button>

                <Button color="primary" onClick={this.handleLogin}
                > Login</Button>

            </Form>


        )
    }

}

export default SignUpIn

