import './sidebar.css'
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Svasthya</h2>
      <ul>
      <Link to="/dashboard">
      <li>Dashboard</li>
      </Link>
      <Link to="/blooddash">
      <li>Blood</li>
      </Link>
      <Link to="/meddash">
      <li>Medicine</li>
      </Link>
   
      </ul>
      <Link to="/">
        <button className='button-dash'>Logout</button>
      </Link>
    </aside>
  );
};

export default Sidebar;
