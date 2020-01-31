import React, { Component } from "react";
import "./home.css";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

class Home extends Component {

  render() {
    return (<div className="home">
      <div className="center container  con">
          <h1 className="text-center pt-5 animated infinite bounce delay-2s" >YOU ARE WELCOME!</h1>
          <p className="animated infinite delay-2s bounceInLeft">Coming SOON!</p>
    <p id="welcome" >Kindness in the world will always be there because people like you are there to thank for it. I always look up like you people because you are truly an example for amazing people exists in this world.
      <br></br>
        You’re welcome boss for everything. You’re welcome my dear friend.</p>

  <Link   className="btnhome"
  to="/timer">Timer APP</Link>
   <Link className="btnhome" to="/recipe">Recipe APP</Link>
        
   <Link className="btnhome" to="/contact">Contact Me</Link>

</div>
    </div>)
  }
}

export default Home;
