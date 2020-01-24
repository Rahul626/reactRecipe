
import React,{Component} from 'react';
import { Button,Navbar,Form, Nav} from 'react-bootstrap';
import Contact  from './contact';

let imgurl = "https://picsum.photos/50";
class Top extends Component {

  
    render() { 
        return ( 
            <div>
 <Navbar fixed="top"  style={{backgroundColor:'#ffb6b9'}} expand="lg">
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
</div>

         );
    }
}
const styles = {
    navarea: {
        paddingTop: '50px',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: '30px',
      color: '#b8a7d1',
   
    },
}

export default Top;






