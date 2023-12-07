import React from 'react';
import './css/foot.css';
import facebook from  './imgs/facebook.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>Svasthya</h4>
        <p>Non-Profit Organization</p>
        <p></p>
      </div>
      <div className="footer-column">
        <p>
          <a href='/dashboard'>Admin</a>
        </p>
        <p>
          <a href='/dashboard'>Carrers</a>
        </p>

      </div>
      <div className="footer-column">
        <h4>Follow Us</h4>
        <div className="social-icons">
          {/* Add your social media icons here */}
          <img src={facebook} className="social-icon">
            {/* Facebook icon */}
          </img>
          <img src={facebook} className="social-icon">
            {/* Instagram icon */}
          </img>
          <img src={facebook} className="social-icon">
            {/* Twitter icon */}
          </img>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
