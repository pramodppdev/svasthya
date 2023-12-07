import React from 'react';
import Sidebar from './Sidebar';
import './dashboard.css'

const Dashboard = () => {
  return (
   
    <div className="dashboard-container">
      <Sidebar />
      <main class="main-content">
      <div class="cards">
        <div class="card">
          <div class="name"><h3>Blood donated</h3></div>
          <div class="num"><h3>100</h3></div>
        </div>

      </div>
      </main>
    </div>
  );
};

export default Dashboard;
