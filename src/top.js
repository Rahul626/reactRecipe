import React, { Component } from "react";
import { Button, Navbar, Form, Nav } from "react-bootstrap";
import { FiUserPlus } from "react-icons/fi";
import {IoIosTimer} from 'react-icons/io';
import { GiFoodTruck } from "react-icons/gi";

class Top extends Component {
  render() {
    return (
      <div>
        <Navbar fixed="top" style={{ backgroundColor: "#ffb6b9" }} expand="lg">
          <Navbar.Brand href="/">Fast Truck Foodie <span>&nbsp;&nbsp;</span><GiFoodTruck size={70}/></Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Form inline>
              <Nav.Link href="/timer"><IoIosTimer size={30}/>TIMER APP</Nav.Link>
              <Nav.Link href="/contact">CONTACT ME</Nav.Link>
              <Nav.Link href="/about">ABOUT ME</Nav.Link>

              <Button  href="/login" style={{ backgroundColor: "lightcoral" }}><FiUserPlus size={30}/>Sign In</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Top;
