import React from 'react';
import Sidebar from './Sidebar';
import './dashboard.css'


const Request= () => {
  return (
   
    <div className="dashboard-container">
    <Sidebar />
    <main className="main-content">
    <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Blood Type</th>
          <th>Quantity (units)</th>
          <th>Hospital</th>
        </tr>
      </thead>
      <tbody>
     
        <tr>
          <td data-label="Name">John Doe</td>
          <td data-label="Blood Type">O+</td>
          <td data-label="Quantity">3</td>
          <td data-label="Hospital">City Hospital</td>
        </tr>
        <tr>
          <td data-label="Name">Jane Smith</td>
          <td data-label="Blood Type">A-</td>
          <td data-label="Quantity">2</td>
          <td data-label="Hospital">Community Medical Center</td>
        </tr>
   
      </tbody>
    </table>
  </div>
    </main>
  </div>
   
  );
};

export default Request;
