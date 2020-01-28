import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Top from "./top";
import Foot from "./foot";
import About from "./about";
import Profile from "./profile";
import Home from "./home";
import Contact from "./contact";
import Timer from "./Timer/Timer";

class Layout extends Component {
  render() {
    return (
      <Router>
        <Top />
        <br></br>
        <br></br>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/timer">
            <Timer />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
        <Foot />
      </Router>
    );
  }
}

export default Layout;
