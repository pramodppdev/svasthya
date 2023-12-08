import React from 'react';
import Sidebar from './Sidebar';
import './dashboard.css'


const DonateBlood= () => {
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
          <th>Donation Date</th>
          <th>Hospital</th>
        </tr>
      </thead>
      <tbody>
     
        <tr>
          <td data-label="Name">Raghu</td>
          <td data-label="Blood Type">B+</td>
          <td data-label="Quantity">3</td>
          <td data-label="Donation Date">08-12-2023</td>
          <td data-label="Hospital">District Hospital</td>
        </tr>
        <tr>
          <td data-label="Name">Pramod Raj</td>
          <td data-label="Blood Type">O +ve</td>
          <td data-label="Quantity">2</td>
          <td data-label="Donation Date">2023-02-20</td>
          <td data-label="Hospital">Community Medical Center</td>
        </tr>
   
      </tbody>
    </table>
  </div>
    </main>
  </div>
   
  );
};

export default DonateBlood;
