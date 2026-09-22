import React from 'react';
import './GlobalProgrammes.css';
import gdop from '../../images/gdop.png';
import GPAF from '../../images/GPAF.png';

const GlobalPrograms = () => {
  const programs = [
    {
      id: 1,
      image: gdop,
      title: 'Global Day Of Prayer with Pastor Chris',
      badge: 'LIVE BROADCAST'
    },
    {
      id: 2,
      image: GPAF,
      title: 'Global Prayer and Fasting with Pastor Chris',
      badge: 'LIVE SPECIAL'
    }
  ];

  return (
    <section className="global-programs-section">
      <div className="global-programs-container">
        <div className="global-programs-header">
          <span className="global-programs-label">LIVE BROADCASTS</span>
          <h2 className="global-programs-title">UPCOMING GLOBAL PROGRAMS</h2>
          <p className="global-programs-desc">
            Experience inspiring moments from around the world, featuring impactful messages, uplifting music, and special live events. Stay connected, stay inspired, and be part of what’s happening across our global network.
          </p>
        </div>

        {/* 2-Column Showcase Grid */}
        <div className="global-programs-grid">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className="global-program-card"
            >
              <div className="global-program-img-wrapper">
                <img src={prog.image} alt={prog.title} className="global-program-img" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPrograms;
