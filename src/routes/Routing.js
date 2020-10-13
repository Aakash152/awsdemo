import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/Login";
import DashBoard from "../components/DashBoard";
import ProtectedRoute from "../components/ProtectedRoute";
import PageNotFound from "../components/PageNotFound";

const Routing = () => {
  const [authenticate, Setauthenticate] = React.useState(false);

  const LoginUser = () => {
    Setauthenticate(true);
    console.log("Login");
  };

  const LogOut = () => {
    Setauthenticate(false);
  };
  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Login LoginUser={LoginUser} />}
          ></Route>
          <Route exact path="/register" component={Register}></Route>
          <ProtectedRoute
            exact
            path="/home"
            authenticate={authenticate}
            LogOut={LogOut}
            component={DashBoard}
          />
          <Route component={PageNotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routing;
