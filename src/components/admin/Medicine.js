import React from 'react';
import Sidebar from './Sidebar';
import './dashboard.css'


const Medicine= () => {
  return (
   
    <div className="dashboard-container">
    <Sidebar />
    <main className="main-content">
    <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>MedicineName</th>
          <th>Doctor Name</th>
          <th>Quantity</th>
          <th>Phone </th>
        </tr>
      </thead>
      <tbody>
     
        <tr>
          <td data-label="medicine Name">Paracetomal</td>
          <td data-label="DR Name">DR Robert Downey JR </td>
          <td data-label="Quantity">3</td>
          <td data-label="Phone">+91 9483828003</td>
        </tr>
        <tr>
        <td data-label="medicine Name">Paracetomal</td>
          <td data-label="DR Name">Mark Ruffalo</td>
          <td data-label="Quantity">3</td>
          <td data-label="Phone">+91 9483828003</td>
        </tr>
   
      </tbody>
    </table>
  </div>
    </main>
  </div>
   
  );
};

export default Medicine;
