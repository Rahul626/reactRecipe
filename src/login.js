import React ,{ Component }from 'react';
import './login.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


class Login extends Component {

//   handleOnSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted!');
//   };
//  onSubmit={this.handleOnSubmit}
  render() {
    return (
        <form className="container con" style={styles.form}>
          <h4>Welcome Back!</h4>
          <div className='form-group row'>
            <input className='input' type='text' placeholder='Email'/>
          </div>
          <div className='form-group row'>
            <input className='input' type='password' placeholder='Password'/>
          </div>
          <div className='form-group row'>
            <button className='btnlogin' type='submit'>Log In</button>
          </div>
          <div className='form-group row'>
          
              
              <Link className='loginbutton fb' to="/signup" type='submit'>Signup  With  Email id</Link>
             
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
  


export default Login