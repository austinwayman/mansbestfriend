import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForumPage from "./pages/ForumStarting"
import Forum from "./pages/Forum"
import Post from "./pages/Posting/Posting"
import Home from "./pages/Home";
import Faq from "./pages/FAQ";
import VetFinder from "./pages/VetFinder";
import LostAndFound from "./pages/LostAndFound";
import CareAndWellness from "./pages/CareAndWellness";
import NoMatch from "./pages/NoMatch";
import SignUpIn from "./pages/SignIn"
import Articles from "./pages/CareAndWellness"



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
          <Route exact path="/login-sign" component={SignUpIn} />
          <Route exact path="/vetfinder" component={VetFinder} />
          <Route exact path="/lostandfound" component={LostAndFound} />
          <Route exact path="/careAware" component={Articles} />
          <Route exact path="/faq" component={Faq} />
          <Route component={NoMatch} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
