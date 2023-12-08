import React from 'react';
import './css/index.css';
import TopNavbar from './nav';
import CardView from './card_view';
import Footer from './footer';
import ImageCarousel from './coursel';

const Index = () => {
  return (
    <div className="container-wrapper-land">
      <div className="container-land">
        <TopNavbar/>
   
      </div>
      <div className="container-land">
        <ImageCarousel/>
      </div>

      <div className="container-land">
        <CardView/>
      </div>

      <div className="container-land">
        <Footer/>


      </div>

    </div>
  );
};

export default Index;
