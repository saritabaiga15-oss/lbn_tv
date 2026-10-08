import React from 'react';
import './GlobalProgrammes.css';
import HSLHSWPC from '../../images/HSLHSWPC.jpeg';


const GlobalPrograms = () => {
  const programs = [
    {
      id: 1,
      image: HSLHSWPC,
      title: 'Healing Streams Live Healing Service with Pastor Chris',
      badge: 'LIVE BROADCAST'
    },
  ];

  return (
    <section className="global-programs-section">
      <div className="global-programs-container">
        <div className="global-programs-header">
          <span className="global-programs-label">LIVE BROADCASTS</span>
          <h2 className="global-programs-title">UPCOMING GLOBAL PROGRAMMES</h2>
          <p className="global-programs-desc">
            Experience inspiring moments from around the world, featuring impactful messages, uplifting music, and special live events. Stay connected, stay inspired, and be part of what’s happening across our global network.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className={`global-programs-grid ${programs.length === 1 ? 'single-program' : ''}`}>
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
