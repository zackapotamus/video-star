import React from "react";
// import jwt from "jsonwebtoken";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  if (isLoggedIn) {
    console.log("user is logged in. render the page");
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } else {
    console.log("user is not logged in");
    return <Redirect to="/" />;
  }
};

export default PrivateRoute;