import React from 'react';
import './css/index.css';
import TopNavbar from './nav';
import BloodDonationApp from './Bloodinfo';
import Footer from './footer';

const Blood = () => {
  return (
    <div className="container-wrapper">
      <div className="container">
        <TopNavbar/>
   
      </div>

      <div className="container">
        <BloodDonationApp/>
      </div>

      <div className="container">
        <Footer/>


      </div>

    </div>
  );
};

export default Blood;
