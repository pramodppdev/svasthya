import React from 'react';
import './css/card.css';
import Fitness from './imgs/fitness.jpeg'
import Blood from './imgs/blood.jpeg'
import Medicine from './imgs/medicine.png'

const CardView = () => {
  return (
    <div className="card-container-land">
      <a href='/blog'>
      <div className="card-land">
        <div className="card-row">
          <img src={Fitness} alt="Card Image" />
        </div>
        <div className="card-row">
          <h2>Fitness Activites</h2>
        </div>
      </div>
      </a>
      <a href='/blood'>
      <div className="card-land">
        <div className="card-row">
          <img src={Blood} alt="Card Image" />
        </div>
        <div className="card-row">
          <h2>Blood Donation</h2>
        </div>
      </div>
      </a>
      <a href='/medicine'>
      <div className="card-land">
        <div className="card-row">
          <img src={Medicine} alt="Card Image" />
        </div>
        <div className="card-row">
          <h2>Medicine Helpline</h2>
        </div>
      </div>
      </a>
    </div>
  );
};

export default CardView;
