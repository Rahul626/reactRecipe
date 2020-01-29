import React,{ Component } from "react";
import './contact.css';

class Contact extends Component {
  
    render() { 
        return ( 
            <div>
               <div className="container">
				<div className="row input-container">
				<h1 className="text-center">Contact Me</h1>
			<h4 className="text-center">I'd love to hear from you!</h4>
			<div className="col-xs-12">
				<div className="styled-input wide">
					<input type="text" required />
					<label>Name</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input">
					<input type="text" required />
					<label>Email</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input">
					<input type="text" required />
					<label>Phone Number</label> 
				</div>
			</div>
			<div className="col-xs-12">
				<div className="styled-input wide">
					<textarea required></textarea>
					<label>Message</label>
				</div>
			</div>
			<div className="col-xs-12">
				<div className="btn-lrg submit-btn">Send Message</div>
			</div>
			</div>
			</div>
			</div>
		

           
         );
    }
}
 
export default Contact;