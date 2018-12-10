import React from 'react';
import { Jumbotron } from 'reactstrap';
// import "./style.css";

function Jumbotron2(props) {
  return (
    <div className="jumbotron2">
    <Jumbotron>
      {props.children}
      <div className="title">
        <h1 className="display-3">Hello World</h1>
        <p className="lead">This is my website.</p>
      </div>
    </Jumbotron>
    </div>
  );
}

export default Jumbotron2;