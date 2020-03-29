import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Top from "./top";
import Foot from "./foot";
import About from "./about";
import Logn from './login';
import Signup  from './signup';
import Home from "./home";
import Contact from "./contact";
import Timer from "./Timer/Timer";
import SignUp from "./signup";
import { Redirect } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <div>
      <Router>
        <Top />
        <br></br>
        <br></br>
        <Switch>
        
          <Route path="/recipe">
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
          <Route path="/login">
            <Logn />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route>
         <Redirect to='/home'  />
         </Route>
        </Switch>
         <Foot  />
      </Router>
     </div>
       
    );
  }
}

export default Layout;
