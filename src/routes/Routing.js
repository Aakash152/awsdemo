import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/Login";

const Routing = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routing;
