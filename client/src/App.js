import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import FAQ from "./pages/FAQ";
import VetFinder from "./pages/VetFinder";
import LostAndFound from "./pages/LostAndFound";
import CareAndWellness from "./pages/CareAndWellness";
import NoMatch from "./pages/NoMatch";

function App () {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
          <Route exact path="/forum" component={Forum} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/lostandfound" component={LostAndFound} />
          <Route exact path="/careandwellness" component={CareAndWellness} />
          <Route exact path="/vetfinder" component={VetFinder} />
          <Route component={NoMatch} />
      </Switch>
    </Router>
  )
};

export default App;
