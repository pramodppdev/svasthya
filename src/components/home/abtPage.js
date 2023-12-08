import React from 'react';
import './css/index.css';
import TopNavbar from './nav';
import Footer from './footer';
import AboutUs from './about';

const AboutPage = () => {
  return (
    <div className="container-wrapper">
      <div className="container">
        <TopNavbar/>
   
      </div>
      <div className="container">
        <AboutUs/>
      </div>

    

      <div className="container">
        <Footer/>


      </div>

    </div>
  );
};

export default AboutPage;
