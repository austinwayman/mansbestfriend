import React, { Component } from "react";

import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



export function LostDogForm(props) {
    return (
        <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="dogName">Dog Name</Label>
              <Input type="email" name="animal" id="dogName" placeholder="Animals Name" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="breed">Dog Breed</Label>
              <Input type="text" name="breed" id="examplePassword" placeholder="Golden Retreiver" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="address">Last Seen Where</Label>
          <Input type="text" name="address" id="address" placeholder="1234 Main St"/>
        </FormGroup>
        <FormGroup>
          <Label for="lastSeen">Last Seen When</Label>
          <Input type="text" name="where" id="lastSeen" placeholder="Today?"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input type="textarea" name="description" id="exampleCity"/>
            </FormGroup>
          </Col>
          <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        </Row>
        <Button>Sign in</Button>
      </Form>
    );
}

export default LostDogForm;