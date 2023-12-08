import React from 'react';
import Sidebar from './Sidebar';
import './dashboard.css'

const Dashboard = () => {
  return (
   
    <div className="dashboard-container">
    <Sidebar />
    <main className="main-content">
     <div class="cards">
      <div class="card">
        <div class="name"><span>Blood donated</span></div>
        <div class="num"><span>100</span></div>
      </div>

      <div class="card">
        <div class="name"><span>Blood Requested</span></div>
        <div class="num"><span>50</span></div>
      </div>
      <div class="card">
        <div class="name"><span>Medicine Requests</span></div>
        <div class="num"><span>50</span></div>
      </div>
     </div>
    </main>
  </div>
   
  );
};

export default Dashboard;
