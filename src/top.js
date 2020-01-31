import React, { Component } from "react";
import { Button, Navbar, Form, Nav } from "react-bootstrap";
import { FiUserPlus } from "react-icons/fi";
import { IoIosTimer } from "react-icons/io";
import { GiFoodTruck } from "react-icons/gi";

class Top extends Component {
  render() {
    return (
      <div>
        <Navbar fixed="top" style={{ backgroundColor: "#ffb6b9" }} expand="lg">
          <Navbar.Brand href="/">
            Fast Truck Foodie <span>&nbsp;&nbsp;</span>
            <GiFoodTruck size={70} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Form inline>
<<<<<<< HEAD
              <Nav.Link href="/timer"><IoIosTimer size={30}/>TIMER APP</Nav.Link>
              <Nav.Link href="/contact">CONTACT ME</Nav.Link>
              <Nav.Link href="/about">ABOUT ME</Nav.Link>

              <Button  href="/login" style={{ backgroundColor: "lightcoral" }}><FiUserPlus size={30}/>Sign In</Button>
=======
              <Nav.Link href="/timer">
                <IoIosTimer size={30} />
                TimerApp
              </Nav.Link>
              <Nav.Link href="/contact">Contact Me</Nav.Link>
              <Nav.Link href="/about">About Me</Nav.Link>

              <Button style={{ backgroundColor: "lightcoral" }}>
                <FiUserPlus size={30} />
                Sign In
              </Button>
>>>>>>> dee43b1be97114139e508ce7d7ec1eb9f721de5f
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Top;
