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
          <div class="name"><h4>Blood donated</h4></div>
          <div class="num"><h4>100</h4></div>
        </div>

      </div>
      </main>
    </div>
  );
};

export default Dashboard;
