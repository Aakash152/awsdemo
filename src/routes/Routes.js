import React from "react";
import Header from "../components/Header";
import WatchList from "../components/WatchList";
import Watched from "../components/Watched";
import Add from "../components/Add";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Routes = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Add}></Route>
          <Route exact path="/wl" component={WatchList}></Route>
          <Route exact path="/wt" component={Watched}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
