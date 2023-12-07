// Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>Name</h4>
        <p>Your Name</p>
        <p>Your Address</p>
      </div>
      <div className="footer-column">
        <h4>Quote</h4>
        <p>"Your Quote"</p>
      </div>
      <div className="footer-column">
        <h4>Follow Us</h4>
        <div className="social-icons">
          {/* Add your social media icons here */}
          <a href="#" className="social-icon">
            {/* Facebook icon */}
          </a>
          <a href="#" className="social-icon">
            {/* Instagram icon */}
          </a>
          <a href="#" className="social-icon">
            {/* Twitter icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
