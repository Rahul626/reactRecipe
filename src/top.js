import React, { Component } from "react";
import { Button, Navbar, Form, Nav } from "react-bootstrap";
class Top extends Component {
  render() {
    return (
      <div>
        <Navbar fixed="top" style={{ backgroundColor: "#ffb6b9" }} expand="lg">
          <Navbar.Brand href="/">Fast Truck Foodie</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Form inline>
              <Nav.Link href="/timer">TimerApp</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>

              <Button style={{ backgroundColor: "lightcoral" }}>SIGN IN</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Top;
