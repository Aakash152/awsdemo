import React from "react";
import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({
  component: Component,
  authenticate,
  LogOut,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (authenticate) {
          return <Component logout={LogOut} />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    ></Route>
  );
};

export default ProtectedRoute;
