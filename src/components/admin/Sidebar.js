import './sidebar.css'
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Svasthya</h2>
      <ul>
      <Link to="#">
      <li>Dashboard</li>
      </Link>
      <Link to="#">
      <li>Blood</li>
      </Link>
      <Link to="#">
      <li>Medicine</li>
      </Link>
        {/* Add more items as needed */}
      </ul>
    </aside>
  );
};

export default Sidebar;
