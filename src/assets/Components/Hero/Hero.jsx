import React, { useState, useEffect } from 'react';
import './Hero.css';
import img2 from '../../images/image2.png';
import img3 from '../../images/image3.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider every 3 seconds as requested
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const setSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id="home" className="hero-slider">
      <div className="slider-track" style={{ transform: `translateX(-${currentSlide * 50}%)` }}>
        {/* Slide 1: SONG OF PRAISE */}
        <div className="slide" style={{ backgroundImage: `url("${img2}")` }}>
          {/* No text overlay - using baked-in image design */}
        </div>

        {/* Slide 2: IGNITE TALK SHOW */}
        <div className="slide" style={{ backgroundImage: `url("${img3}")` }}>
          {/* No text overlay - using baked-in image design */}
        </div>
      </div>

      {/* Slide Indicators: Dots */}
      <div className="slider-dots">
        <button className={`dot ${currentSlide === 0 ? 'active' : ''}`} onClick={() => setSlide(0)} aria-label="Go to Slide 1"></button>
        <button className={`dot ${currentSlide === 1 ? 'active' : ''}`} onClick={() => setSlide(1)} aria-label="Go to Slide 2"></button>
      </div>
    </div>
  );
};

export default Hero;