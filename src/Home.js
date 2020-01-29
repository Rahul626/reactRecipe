import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  render() {
    return (<div className="home">
      <div className="center container  con">
          <h1 className="text-center pt-5" >WELCOME</h1>
    <p>eanplum is the mobile marketing platform built for engagement. We help brands like NBC, Tinder, Grab, TED, and Zynga orchestrate multi-channel campaigns — from messaging to the in-app experience — all from a single, integrated platfo</p>
  <div className="btnhome " href="./timer" >Timer APP</div>
  <div className="btnhome" href="./recipe" >Recipe APP</div> 
   <div className="btnhome" href="./contact"  >Contact Me</div>
</div>
    </div>)
  }
}

export default Home;
