import React from 'react';
import Jumbotron2 from "../components/Jumbotron2";
import Nav2 from "../components/Nav";


class FAQ extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render () {
          return (
              <Jumbotron2>
                  <Nav2 />
              </Jumbotron2>
          )
      }
}

export default FAQ;



