<<<<<<< HEAD
import React ,{ Component }from 'react';
import './signup.css';
import {
    BrowserRouter as Router,

    Link
  } from "react-router-dom";

class Signup extends Component {

//   handleOnSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted!');
//   };
//  onSubmit={this.handleOnSubmit}
  render() {
    return (
        <form className="container con" style={styles.form}>
          <h4>Welcome Signup for full access!</h4>
          <div className='form-group row'>
            <input className='input' type='text' placeholder='Your name'/>
          </div>
          <div className='form-group row'>
            <input className='input' type='text' placeholder='Your Email'/>
          </div>
          <div className='form-group row'>
            <input className='input' type='password' placeholder='Create Password'/>
          </div>
          <div className='form-group row'>
            <input className='input' type='password' placeholder=' Confirm Password'/>
          </div>
          <div className='form-group row'>
            <button className='btnlogin' type='submit'>Register</button>
          </div>
          <div className='form-group row'>
              
             <Link className='loginbutton' to="/login">already registered?login here</Link>
            
          </div>
        </form>
      
    )
  }
}
const styles = {
    facebookBtn: {
      backgroundColor: 'rgb(51, 89, 157)'
    },
 
  }
  


export default Signup
=======
import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value,
      email: event.target.value,
      password: event.target.value
    });
  }

  handleSubmit(event) {
    alert(this.state.name);

    alert(this.state.password, this.state.email);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            email={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          email:
          <input
            type="text"
            email={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <label>
          password:
          <input
            type="text"
            email={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
>>>>>>> dee43b1be97114139e508ce7d7ec1eb9f721de5f
