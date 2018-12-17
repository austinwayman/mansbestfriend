import React from 'react';
import { Jumbotron } from 'reactstrap';
// import "./style.css";
import Nav2 from "../../components/Nav";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";


class Jumbotron2 extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="jumbotron2">
        <Jumbotron className="mainjumbotron">

          {/* logo image */}
          <div id="logoAlign"><Link to="/">
            <img src="/images/logo_transparent.png" alt="Mylogo" id="logoimg"></img>
          </Link></div>
          <Nav2 />
          <Animated animationIn="fadeIn" animationInDelay="5" isVisible={true}>
            <div className="title">
              <h1 className="display-3">{this.props.page}</h1>
              <p className="lead">{this.props.other}</p>
            </div>
          </Animated>
        </Jumbotron>
      </div>
    );
  }
}

export default Jumbotron2;