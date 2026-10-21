import React from 'react';
import './GlobalProgrammes.css';
import HSLHSWPC from '../../images/HSLHSWPC.jpeg';
import OCT_GPAF from '../../images/OCT_GPAF.png';


const GlobalPrograms = ({ onOpenHealingStreams }) => {
  const programs = [
    {
      id: 1,
      image: HSLHSWPC,
      title: 'Healing Streams Live Healing Service with Pastor Chris',
      badge: 'LIVE BROADCAST',
      isSpecialModal: true
    },
    {
      id: 2,
      image: OCT_GPAF,
      title: 'Global Prayer And Fasting with Pastor Chris',
      badge: 'LIVE BROADCAST',
      isSpecialModal: false
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
              className={`global-program-card ${prog.isSpecialModal ? 'clickable-program-card' : ''}`}
              onClick={() => {
                if (prog.isSpecialModal && onOpenHealingStreams) {
                  onOpenHealingStreams();
                }
              }}
              role={prog.isSpecialModal ? 'button' : undefined}
              tabIndex={prog.isSpecialModal ? 0 : undefined}
              onKeyDown={(e) => {
                if (prog.isSpecialModal && (e.key === 'Enter' || e.key === ' ') && onOpenHealingStreams) {
                  e.preventDefault();
                  onOpenHealingStreams();
                }
              }}
            >
              <div className="global-program-img-wrapper">
                <img src={prog.image} alt={prog.title} className="global-program-img" />
                {prog.isSpecialModal && (
                  <div className="global-program-card-overlay">
                    <span className="global-program-overlay-btn">
                      <span>View Full Details</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPrograms;
