import React from 'react';
import './css/index.css';
import TopNavbar from './nav';
import Footer from './footer';
import MedicineRequestForm from './medicineReq';

const MedicinePage = () => {
  return (
    <div className="container-wrapper-land">
      <div className="container-land">
        <TopNavbar/>
   
      </div>

      <div className="container-land">
        <h3>Medicine Request</h3>
        <MedicineRequestForm/>
      </div>

      <div className="container-land">
        <Footer/>


      </div>

    </div>
  );
};

export default MedicinePage;
