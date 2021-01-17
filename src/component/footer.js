import React from 'react';
import logo from '../images/logo.svg';
import {Link} from 'react-scroll';

import '../App.css';

const Footer=()=> {

  return (
        <div className="footer" id="footer">

            <div className="footer-logo-div">
                <img src={logo} className="footer-logo" alt="logo"/>

            </div>
            <div className="footer-links">
                <Link to="header" className="footer-link">Home</Link>
                <div class="divider"></div>
                <Link to="header" className="footer-link">About Us</Link>
                <div class="divider"></div>
                <Link to="footer" className="footer-link">Contact Us</Link>

            </div>

            <div className="blog-sub-comp">
                <div className="sub blog-sub-comp-child">
                    <h3> Subscribe</h3>
                    <div className="sub-input">
                        <input />
                        <button>Subscribe</button>

                    </div>
                </div>

                <div className="blog blog-sub-comp-child">
                    <h3> Blog Info</h3>
                    <span className="blog-text"><a target="_blank" rel="noreferrer" href="https://t.co/AtioNE3eFz?amp=1">View blog here</a>  </span>

                </div>
                <div className="company-info blog-sub-comp-child">
                    <h3> Company Info</h3>
                    <span> support@web3bridge.com</span>
                    <span> Lagos, Nigeria</span>

                </div>

            </div>
        </div>
  );
}

export default Footer;