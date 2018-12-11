import React from 'react';
import { Jumbotron } from 'reactstrap';
// import "./style.css";
import Nav2 from "../../components/Nav";

class Jumbotron2 extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
  return (
    <div className="jumbotron2">
    <Jumbotron>
    <Nav2 />
      <div className="title">
        <h1 className="display-3">{this.props.page}</h1>
        <p className="lead">{this.props.other}</p>
      </div>
    </Jumbotron>
    </div>
  );
  }
}

export default Jumbotron2;