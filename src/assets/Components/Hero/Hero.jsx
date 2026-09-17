import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';
import theTrumpet from '../../images/Trumpet.png';
import TheWordatWork from '../../images/TheWordatWork.png';
import craftingFaith from '../../images/Crafting Faith.png';
import moneyMatters from '../../images/MONEY MATTERS (1).png';
import wholeness from '../../images/Wholeness (1).png';
import TEEVABLAZE from '../../images/TEEVABLAZE .png';
import voiceOfPraise from '../../images/voice_of_praise.jpg';
import ETHS from '../../images/ETHS.png';
import healthyLiving from '../../images/healthy_living.jpg';
import timelessParagonNew from '../../images/timeless_paragon_new.jpg';
import Pst_Chris_Teaching1 from '../../images/Pst_Chris_Teaching1.jpg';
import Just_believe_banner from '../../images/Just_believe_banner .png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);
  const isSwiping = useRef(false);

  const mouseStartX = useRef(0);
  const isMouseDown = useRef(false);

  const slides = [
    { id: 0, image: theTrumpet, title: 'The Trumpet' },
    { id: 1, image: TEEVABLAZE, title: 'TEEVABLAZE' },
    { id: 2, image: voiceOfPraise, title: 'Voice of Praise' },
    { id: 3, image: TheWordatWork, title: 'Word At Work' },
    { id: 4, image: Pst_Chris_Teaching1, title: 'Your Loveworld Specials S12P4' },
    { id: 5, image: timelessParagonNew, title: 'Timeless Paragon' },
    { id: 6, image: craftingFaith, title: 'Crafting Faith' },
    { id: 7, image: moneyMatters, title: 'Money Matters' },
    { id: 8, image: ETHS, title: 'ETHS' },
    { id: 9, image: wholeness, title: 'Wholeness with Dr. Prashanti' },
    { id: 10, image: Just_believe_banner, title: 'Just Believe' },
    { id: 11, image: healthyLiving, title: 'Healthy Living' }
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const setSlide = (index) => {
    setCurrentSlide(index);
  };

  // Touch event handlers for mobile swiping
  const handleTouchStart = (e) => {
    if (!e.touches || !e.touches[0]) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
    isSwiping.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isSwiping.current || !e.touches || !e.touches[0]) return;
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (!isSwiping.current) return;
    isSwiping.current = false;
    const diffX = touchStartX.current - touchEndX.current;
    const diffY = touchStartY.current - touchEndY.current;
    const minDistance = 25; // 25px touch swipe threshold

    // Ensure horizontal swipe is dominant over vertical scroll
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) >= minDistance) {
      if (diffX > 0) {
        handleNext(); // Swiped left -> next slide
      } else {
        handlePrev(); // Swiped right -> prev slide
      }
    }
  };

  const handleTouchCancel = () => {
    isSwiping.current = false;
  };

  // Mouse drag handlers for desktop testing
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    if (e.target.closest('button') || e.target.closest('a')) return;
    isMouseDown.current = true;
    mouseStartX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (!isMouseDown.current) return;
    isMouseDown.current = false;
    const diffX = mouseStartX.current - e.clientX;
    if (Math.abs(diffX) >= 35) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const handleMouseLeave = () => {
    isMouseDown.current = false;
  };

  return (
    <div
      id="home"
      className="hero-slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
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

      {/* Slider Track with all 12 image slides */}
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