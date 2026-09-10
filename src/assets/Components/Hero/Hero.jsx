import React, { useState, useEffect } from 'react';
import './Hero.css';
import theTrumpet from '../../images/Trumpet.png';
import wordAtWork from '../../images/Word at work.png';
import craftingFaith from '../../images/Crafting Faith.png';
import moneyMatters from '../../images/MONEY MATTERS (1).png';
import wholeness from '../../images/Wholeness (1).png';
import teevablazeBanner from '../../images/teevablaze_banner.jpg';
import voiceOfPraise from '../../images/voice_of_praise.jpg';
import ETHS from '../../images/ETHS.png';
import healthyLiving from '../../images/healthy_living.jpg';
import timelessParagonNew from '../../images/timeless_paragon_new.jpg';
import Pst_Chris_Teaching1 from '../../images/Pst_Chris_Teaching1.jpg';
import Just_believe_banner from '../../images/Just_believe_banner .png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    { id: 0, image: theTrumpet, title: 'The Trumpet' },
    { id: 1, image: teevablazeBanner, title: 'TEEVABLAZE' },
    { id: 2, image: voiceOfPraise, title: 'Voice of Praise' },
    { id: 3, image: wordAtWork, title: 'Word At Work' },
    {id:  4, image: Pst_Chris_Teaching1, title: 'Pastor Chris Teaching'},
    { id: 5, image: timelessParagonNew, title: 'Timeless Paragon' },
    { id: 6, image: craftingFaith, title: 'Crafting Faith' },
    { id: 7, image: moneyMatters, title: 'Money Matters' },
    { id: 8, image: ETHS, title: 'ETHS' },
    { id: 9, image: wholeness, title: 'Wholeness with Dr. Prashanti' },
    { id: 10, image: Just_believe_banner, title: 'Just Believe' },
    { id: 11, image: healthyLiving, title: 'Healthy Living' }
   
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

      {/* Slider Track with all 6 image slides */}
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