// AboutUs.js

import React from 'react';
import './css/about.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="content">
        <h2>Health and Wellness</h2>
        <p>
        Wellness encompasses the holistic balance of physical, mental, and emotional well-being. It involves conscious choices and practices that promote a healthy lifestyle, including regular exercise, nutritious eating, and adequate rest. Prioritizing wellness fosters resilience, reduces stress, and enhances overall quality of life. By nurturing both mind and body, individuals can achieve a state of harmony that positively impacts their daily experiences and long-term health. 
        </p>
        <p>
        Embracing wellness is a journey towards self-care and self-discovery.        </p>
        <h3>Benefits:</h3>
          <p>Improved physical health</p>
          <p>Mental well-being</p>
          <p>Increased energy levels</p>
          <p>Better sleep quality</p>
          {/* Add more benefits as needed */}
      </div>
    </div>
  );
};

export default AboutUs;
