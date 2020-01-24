import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button,Navbar,Form, Nav} from 'react-bootstrap';


export default function App() {
  return (
    <Router>
      <div>
        <nav>
        <Navbar fixed="top" bg="warning" variant="warning" expand="lg">
  <Navbar.Brand href="#home">Fast Truck Foodie</Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    
      
    </Nav>
    <Form inline>  <Nav.Link href="/contact">Contact Us</Nav.Link>
      <Nav.Link href="/">About Us</Nav.Link>
      <Button style={{ backgroundColor: 'lightcoral'}} >SIGN IN</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/contact">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
