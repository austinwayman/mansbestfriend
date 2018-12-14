import React from 'react';
import Jumbotron2 from "../components/Jumbotron2";
import Nav2 from "../components/Nav";
import FAQinfo from "../components/FAQinfo"


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
              <div>
               <Jumbotron2 page={"FAQ"} other={"this is the FAQ page"} >
                  <Nav2 />
              </Jumbotron2>
              <FAQinfo />
              </div>
              
          )
      }
}

export default FAQ;



