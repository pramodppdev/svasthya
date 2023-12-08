import React, { useState, useEffect } from 'react';
import './css/coursel.css';
import img1 from './imgs/im1.jpg'
import img2 from './imgs/im2.jpg'
import img3 from './imgs/im3.jpg'
import img4 from './imgs/im4.jpg'


const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    img1,img2,img3,img4,
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel-container">
      {slides.map((slide, index) => (
        <div key={index} className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}>
          <img src={slide} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
