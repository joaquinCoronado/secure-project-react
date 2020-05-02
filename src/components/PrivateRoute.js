import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuth } from "../Utils/authUtils";

class PrivateRoute extends Component {
  render() {
    let { children, exact } = this.props;
    return (
      <Route
        exact={exact}
        render={({ location }) =>
          isAuth() ? (
            children
          ) : (
            <Redirect to={{ pathname: "/login", state: { from: location } }} />
          )
        }
      />
    );
  }
}

export default PrivateRoute;
