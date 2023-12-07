import React from 'react';
import './css/nav.css'

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="left-column">
        <span className="name">Svasthya</span>
        
      </div>
      <div className="right-column">
        <ul className="menu-list">
          <li>Home</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
