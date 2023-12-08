import React from 'react';
import './css/index.css';
import TopNavbar from './nav';
import Footer from './footer';
import AboutUs from './about';

const AboutPage = () => {
  return (
    <div className="container-wrapper-land">
      <div className="container-land">
        <TopNavbar/>
   
      </div>
      <div className="container-land">
        <AboutUs/>
      </div>

    

      <div className="container-land">
        <Footer/>


      </div>

    </div>
  );
};

export default AboutPage;
