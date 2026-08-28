import React, { useState } from 'react';
import './AboutNetwork.css';
import img1 from '../../images/image1.png';
import img2 from '../../images/image2.png';
import img3 from '../../images/image3.png';

const AboutNetwork = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      id: 1,
      title: 'SONG OF PRAISE',
      subtitle: 'A Production by LoveWorld Studio (LWS)',
      image: img2,
      tagline: 'Behind every song, there’s a story worth singing.',
      description: 'Song of Praise takes you behind the scenes of inspiring music. Discover the personal experiences, scripture connects, and deep stories that shape these melodies of worship. Host and artists share raw testimonies that will enrich your soul. Our weekly episodes feature different artists from across the nation, detailing how their songs were birthed from moments of trial and victory.',
      schedule: 'Saturdays at 7:00 PM',
      duration: '45 mins'
    },
    {
      id: 2,
      title: 'IGNITE SHOW',
      subtitle: 'Adolescence and Faith',
      image: img3,
      tagline: 'Always keep the hope alive.',
      description: 'Ignite explores the real-life intersection of youth culture, adolescence, and faith. Engaging discussions, young panels, and inspiring stories show how faith lights the way through life’s trials. Watch full episodes weekly as we keep hope alive. We tackle tough subjects like identity, pressure, and finding purpose with honesty, depth, and scriptural backing.',
      schedule: 'Sundays at 6:00 PM',
      duration: '60 mins'
    },
    {
      id: 3,
      title: 'LWS CINEMA SHOW',
      subtitle: 'Thrilling Stories by LoveWorld Studio',
      image: img1,
      tagline: 'Thrilling adventure that will keep you on edge.',
      description: 'LWS Cinema brings you suspenseful tales of survival, courage, and grit. Follow the journey of characters navigating life’s most intense crossroads. A gripping storytelling experience that will capture your imagination. Combining cinematic visuals with redemptive narratives, LWS Cinema is a premier dramatic series that challenges the spirit and inspires the heart.',
      schedule: 'Fridays at 9:00 PM',
      duration: '90 mins'
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? programs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === programs.length - 1 ? 0 : prev + 1));
  };

  const handleCardClick = (index, program) => {
    if (index === activeIndex) {
      setSelectedProgram(program);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="about-us" className={`about-network-section ${selectedProgram ? 'drawer-active' : ''}`}>
      {/* Top Grid: Synopsis / About Company */}
      <div className="about-network-container">
        <div className="about-left-col">
          <span className="about-label">ABOUT THE NETWORK</span>
          <h2 className="about-heading">
            LOVEWORLD INDIA <br />
            <span className="heading-highlight">BROADCASTING</span> NETWORK.
          </h2>
        </div>

        <div className="about-right-col">
          <p className="about-description">
            LoveWorld India Broadcasting Network is a premier media and broadcasting organization 
            dedicated to delivering impactful, value-based Christian programming across India and beyond. 
            Through state-of-the-art satellite networks, dynamic digital platforms, and inspirational 
            media production, we bring faith, hope, and spiritual renewal to millions of lives daily.
          </p>
        </div>
      </div>

      {/* Program Carousel Section */}
      <div className="programs-carousel-container">
        {/* Slider Navigation Arrows */}
        <button className="carousel-arrow prev-arrow" onClick={handlePrev} aria-label="Previous Program">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <button className="carousel-arrow next-arrow" onClick={handleNext} aria-label="Next Program">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Carousel Slider Track */}
        <div className="carousel-view">
          <div 
            className="carousel-track" 
            style={{ 
              transform: `translateX(calc(50% - (var(--card-width) + (var(--card-margin) * 2)) * ${activeIndex} - (var(--card-width) + (var(--card-margin) * 2)) / 2))` 
            }}
          >
            {programs.map((prog, idx) => {
              const isActive = idx === activeIndex;
              const isPrev = (idx === activeIndex - 1) || (activeIndex === 0 && idx === programs.length - 1);
              const isNext = (idx === activeIndex + 1) || (activeIndex === programs.length - 1 && idx === 0);
              
              let cardClass = 'program-card';
              if (isActive) cardClass += ' active';
              else if (isPrev) cardClass += ' prev-card';
              else if (isNext) cardClass += ' next-card';

              return (
                <div 
                  key={prog.id} 
                  className={cardClass}
                  style={{ backgroundImage: `url("${prog.image}")` }}
                  onClick={() => handleCardClick(idx, prog)}
                >
                  <div className="card-overlay"></div>
                  
                  {/* Play circle button at top right */}
                  <div className="card-play-btn">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>

                  {/* Card Content at bottom */}
                  <div className="card-content">
                    <h3 className="card-title">{prog.title}</h3>
                    <p className="card-subtitle">{prog.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full-Page Swipe Up Details Drawer */}
      <div className={`details-drawer ${selectedProgram ? 'open' : ''}`}>
        {selectedProgram && (
          <>
            {/* Background Backdrop image */}
            <div 
              className="drawer-bg-image" 
              style={{ backgroundImage: `url("${selectedProgram.image}")` }}
            >
              <div className="drawer-overlay"></div>
            </div>

            <div className="drawer-content-container">
              {/* Top Bar with Close Button */}
              <div className="drawer-header">
                <span className="drawer-handle-label">PROGRAM DESCRIPTION</span>
                <button className="drawer-close-btn" onClick={() => setSelectedProgram(null)}>
                  <span className="close-icon">&times;</span>
                  <span className="close-text">BACK TO NETWORK</span>
                </button>
              </div>

              {/* Main Content Layout */}
              <div className="drawer-body">
                <div className="drawer-text-col">
                  <span className="drawer-schedule">{selectedProgram.schedule} &bull; {selectedProgram.duration}</span>
                  <h1 className="drawer-title">{selectedProgram.title}</h1>
                  <h2 className="drawer-tagline">"{selectedProgram.tagline}"</h2>
                  <p className="drawer-desc">{selectedProgram.description}</p>
                  
                   <div className="drawer-actions">
                    <button className="action-watch-now">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                      WATCH LATEST EPISODE
                    </button>
                    <button className="action-add-list" onClick={() => setSelectedProgram(null)}>
                      BACK TO PROGRAMS
                    </button>
                  </div>
                </div>

                <div className="drawer-metadata-col">
                  <div className="meta-box">
                    <h4>STARRING</h4>
                    <p>LoveWorld India Hosts, Special Ministers & Live Bands</p>
                  </div>
                  <div className="meta-box">
                    <h4>CATEGORIES</h4>
                    <p>Faith, Worship, Talk Shows, Spiritual Growth</p>
                  </div>
                  <div className="meta-box">
                    <h4>BROADCAST NETWORK</h4>
                    <p>LoveWorld India Broadcast Studio, New Delhi</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default AboutNetwork;
