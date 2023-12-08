import React from 'react';
import './css/nav.css'
import { Link } from 'react-router-dom'


const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="left-column">
        <span className="name">Svasthya</span>
      </div>
      <div className="right-column">
        <ul className="menu-list">
          <Link to="/"><li>Home</li></Link>
          <Link to="/blog"><li>Blog</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/dashboard"><li>Dashboard</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
