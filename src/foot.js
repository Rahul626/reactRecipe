import React, { Component } from "react";
import "./foot.css";
class foot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="footer-middle" style={{backgroundColor : '#FFB6B9'}} >
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-12">
              <div class="footer-pad">
                <h4> Worked</h4>
                <ul class="list-unstyled">
                  <li>
                    <a href="#"></a>
                  </li>
                  <li>
                    <a href="#">Template</a>
                  </li>
              
                  <li>
                    <a href="#">Fixing web issue  </a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">SEO</a>
                  </li>

                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-12">
              <div class="footer-pad">
                <h4>I love</h4>
                <ul class="list-unstyled">
                  <li>
                    <a href="#">UI Design</a>
                  </li>
                  <li>
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <a href="#">Admin Panel Design</a>
                  </li>
                  <li>
                    <a href="#">Portfolio</a>
                  </li>
                
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="footer-pad">
                <h4>I WORK </h4>
                <ul class="list-unstyled">
                  <li>
                    <a href="#">Web (ANGULAR & REACT ) </a>
                  </li>
                  <li>
                    <a href="#">App (React Native )</a>
                  </li>
                  <li>
                    <a href="#">Front end DESIGN </a>
                  </li>
                  
                 
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <h4>Find Me</h4>
              <ul class="social-network social-circle">
                <li>
                  <a href="https://www.instagram.com/i_am_rahul_rj/" className="icoFacebook" title="Facebook">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/jamaluddin-mondal-00630310b/" className="icoLinkedin" title="Linkedin">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/iam_rahul_rj/" className="icotwitter" title="Linkedin">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/917602571325" target="_blank" className="icoWhatsapp" title="Linkedin">
                    <i className="fa fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-md-12 copy">
              <p className="text-center">
                &copy; Copyright 2020 Rahul RJ
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default foot;
