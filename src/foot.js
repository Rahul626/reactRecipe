import React, { Component } from "react";
import "./foot.css";
class foot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="footer-middle">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6">
              <div class="footer-pad">
                <h4>Heading 1</h4>
                <ul class="list-unstyled">
                  <li>
                    <a href="#"></a>
                  </li>
                  <li>
                    <a href="#">Payment Center</a>
                  </li>
                  <li>
                    <a href="#">Contact Directory</a>
                  </li>
                  <li>
                    <a href="#">Forms</a>
                  </li>
                  <li>
                    <a href="#">News and Updates</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="footer-pad">
                <h4>Heading 2</h4>
                <ul class="list-unstyled">
                  <li>
                    <a href="#">Website Tutorial</a>
                  </li>
                  <li>
                    <a href="#">Accessibility</a>
                  </li>
                  <li>
                    <a href="#">Disclaimer</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Webmaster</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="footer-pad">
                <h4>Heading 3</h4>
                <ul class="list-unstyled">
                  <li>
                    <a href="#">Parks and Recreation</a>
                  </li>
                  <li>
                    <a href="#">Public Works</a>
                  </li>
                  <li>
                    <a href="#">Police Department</a>
                  </li>
                  <li>
                    <a href="#">Fire</a>
                  </li>
                  <li>
                    <a href="#">Mayor and City Council</a>
                  </li>
                  <li>
                    <a href="#"></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <h4>Follow Us</h4>
              <ul class="social-network social-circle">
                <li>
                  <a href="#" className="icoFacebook" title="Facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="icoLinkedin" title="Linkedin">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 copy">
              <p className="text-center">
                &copy; Copyright 2018 - Company Name. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default foot;