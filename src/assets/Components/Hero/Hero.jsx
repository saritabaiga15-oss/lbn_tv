import React, { useState, useEffect } from 'react';
import './Hero.css';
import Shows from '../../images/Shows.jpeg';
import img2 from '../../images/image2.png';
import igniteImg from '../../images/ignite.jpg';
import drPrashanti from '../../images/dr_prashanti.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    { id: 0, image: Shows, title: 'Showing Now' },
    { id: 1, image: img2, title: 'Song of Praise' },
    { id: 2, image: igniteImg, title: 'Ignite Show' },
    { id: 3, image: drPrashanti, title: 'Dr. Prashanti' }
  ];

  // Auto-play slider every 4 seconds (pauses on user hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const setSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      id="home"
      className="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Navigation Arrows */}
      <button className="hero-arrow prev" onClick={handlePrev} aria-label="Previous Slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button className="hero-arrow next" onClick={handleNext} aria-label="Next Slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Slider Track with all 3 slides */}
      <div
        className="slider-track"
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${(currentSlide * 100) / slides.length}%)`
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="slide"
            style={{
              width: `${100 / slides.length}%`,
              backgroundImage: `url("${slide.image}")`
            }}
          >
            {/* Clean presentation with baked-in flyer artwork */}
          </div>
        ))}
      </div>

      {/* Slide Indicators: Dots */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setSlide(index)}
            aria-label={`Go to Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Mobile-only bottom anchor: WHY LBNTV */}
      <div
        className="hero-mobile-badge"
        onClick={() => {
          const el = document.getElementById('why-lbntv');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="hero-mobile-badge-text">WHY LBNTV</span>
        <svg
          className="hero-mobile-badge-chevron"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
  );
};

export default Hero;