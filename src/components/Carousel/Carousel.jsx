import React, { useState } from 'react';
import { ofertas } from '../../data/ofertas'; // Importamos las ofertas
import './Carousel.css';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ofertas.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ofertas.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-button prev">
        &#10094;
      </button>
      <div className="carousel-slide">
        <img
          src={ofertas[currentIndex].image}
          alt={ofertas[currentIndex].name}
        />
        <div className="carousel-info">
          <h3>{ofertas[currentIndex].name}</h3>
          <div className="carousel-prices">
            <span className="old-price">{ofertas[currentIndex].oldPrice}</span>
            <span className="new-price">{ofertas[currentIndex].newPrice}</span>
          </div>
        </div>
      </div>
      <button onClick={nextSlide} className="carousel-button next">
        &#10095;
      </button>
    </div>
  );
}

export default Carousel;