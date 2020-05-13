import React from "react";
import jwt from "jsonwebtoken";
import { Route, Redirect } from "react-router-dom";

const checkForToken = () => {
  const token = localStorage.getItem("jwt");
  try {
    const decoded = jwt.verify(token, process.env.REACT_APP_SESSION_SECRET);
    return !!decoded;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  if (checkForToken()) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  } else {
    return <Redirect to="/" />;
  }
};

export default PrivateRoute;
