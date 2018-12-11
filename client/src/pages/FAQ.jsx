import React from 'react';
import Jumbotron2 from "../components/Jumbotron2";


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
              <Jumbotron2 page={"FAQs"} other={"this is the FAQ page"} />
            
              
          )
      }
}

export default FAQ;



