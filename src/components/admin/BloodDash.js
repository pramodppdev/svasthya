import React from 'react';
import Sidebar from './Sidebar';
import './dashboard.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const BloodDash = () => {
  return (
   
    <div className="dashboard-container">
    <Sidebar />
    <main className="main-content">
     <div class="cards">
        <Link to="/request">
      <div class="card">
        <div class="name"><span>Requested blood</span></div>
      </div>
      </Link>
      <Link to="/donate">
      <div class="card">
        <div class="name"><span>Blood donated</span></div>
      </div>
      </Link>
     </div>
    </main>
  </div>
   
  );
};

export default BloodDash;
