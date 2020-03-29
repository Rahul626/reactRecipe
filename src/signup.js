
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
