import React, { Component } from 'react';
import { Jumbotron, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForumPage from "./pages/ForumStarting"
import Forum from "./pages/Forum"
import Post from "./pages/Posting"
import Home from "./pages/Home";
import Faq from "./pages/FAQ";
import VetFinder from "./pages/VetFinder";
import LostAndFound from "./pages/LostAndFound";
import CareAndWellness from "./pages/CareAndWellness";
import NoMatch from "./pages/NoMatch";


class App extends Component {

  render() {
    return (
      <Router>
        <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/forum" component={ForumPage} />
          <Route exact path="/forum/:animal" component={Forum} />
          <Route exact path="/posts/:postID" component={Post} />
  
          <Route exact path="/faq" component={Faq} />
          {/* <Route exact path="/lostandfound" component={LostAndFound} /> */}
          {/* <Route exact path="/careandwellness" component={CareAndWellness} /> */}
          {/* <Route exact path="/vetfinder" component={VetFinder} /> */}
          <Route component={NoMatch} />
        </Switch>
       
      
        

        </div>
      </Router>
    );
  }
}

export default App;
