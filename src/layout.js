import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Top from "./top";
import Foot from "./foot";
import About from "./about";
import Profile from "./profile";

class Layout extends Component {
  render() {
    return (
      <Router>
        <Top />
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/about" Component={About} />
          <Route path="/profile" Component={Profile} />
        </Switch>
        <Foot />
      </Router>
    );
  }
}

export default Layout;
