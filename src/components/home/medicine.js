import React from 'react';
import './css/index.css';
import TopNavbar from './nav';
import Footer from './footer';
import MedicineRequestForm from './medicineReq';

const MedicinePage = () => {
  return (
    <div className="container-wrapper">
      <div className="container">
        <TopNavbar/>
   
      </div>

      <div className="container">
        <h3>Medicine Request</h3>
        <MedicineRequestForm/>
      </div>

      <div className="container">
        <Footer/>


      </div>

    </div>
  );
};

export default MedicinePage;
