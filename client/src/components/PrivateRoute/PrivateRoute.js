import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

// Creating a PrivateRoute component
const PrivateRoute = ({ component: Component, path: path }) => (
    <Route {...path} render={(props) => (
        this.state.user
            ? <Component {...props} />
            : <Redirect to="/signup" />
    )} />
);

export default PrivateRoute;