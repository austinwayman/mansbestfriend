import React from 'react';
import Jumbotron2 from "../components/Jumbotron2";
import Nav2 from "../components/Nav";
import FAQinfo from "../components/FAQinfo";
import Footer from "../components/Footer";


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
               <Jumbotron2 page={"FAQ"} other={"Frequently Asked Questions"} >
                  <Nav2 />
              </Jumbotron2>
              <FAQinfo />
              <Footer />
              </div>
              
          )
      }
}

export default FAQ;



