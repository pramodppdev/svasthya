import React from 'react';
import './css/foot.css';
import facebook from  './imgs/facebook.png'
import insta from './imgs/insta.png'
import tweet from './imgs/x.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>Svasthya</h4>
        <p>Health is Wealth</p>
        <p></p>
      </div>
      <div className="footer-column">
        <p>
          <a href='/dashboard'>Admin</a>
        </p>
        <p>
          <a href='/dashboard'>Carrers</a>
        </p>
        <p>
          <a href='/about'>About us</a>
        </p>

      </div>
      <div className="footer-column">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <img src={facebook} className="social-icon">
          </img>
          <img src={insta} className="social-icon">
          </img>
          <img src={tweet} className="social-icon">
          </img>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
