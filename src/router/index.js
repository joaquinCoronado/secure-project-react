import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UserProvider } from "../context/UserContext";
import PrivateRoute from "../components/PrivateRoute";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Configuration from "../pages/Configuration";
import Profile from "../pages/Profile";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* Se suscribe la aplicación al contexto "UserContext" */}
        <UserProvider>
          {/* Plantilla personalizada para agregar el menú */}
          <Layout>
            <Switch>
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/">
                <Home />
              </PrivateRoute>
              <PrivateRoute exact path="/configuration">
                <Configuration />
              </PrivateRoute>
              <PrivateRoute exact path="/profile">
                <Profile />
              </PrivateRoute>
            </Switch>
          </Layout>
        </UserProvider>
      </BrowserRouter>
    );
  }
}

export default Router;
