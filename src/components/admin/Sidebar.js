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
      <Link to="/blood">
      <li>Blood</li>
      </Link>
      <Link to="/medicine">
      <li>Medicine</li>
      </Link>
   
        {/* Add more items as needed */}
      </ul>
      <Link to="/">
        <button>Logout</button>
      </Link>
    </aside>
  );
};

export default Sidebar;
