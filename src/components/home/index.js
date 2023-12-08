import React from 'react';
import './css/index.css';
import TopNavbar from './nav';
import CardView from './card_view';
import Footer from './footer';

const Index = () => {
  return (
    <div className="container-wrapper">
      <div className="container">
        <TopNavbar/>
   
      </div>

      <div className="container">
        <CardView/>
      </div>

      <div className="container">
        <Footer/>


      </div>

    </div>
  );
};

export default Index;
