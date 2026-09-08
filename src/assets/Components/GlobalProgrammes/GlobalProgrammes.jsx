import React from 'react';
import './GlobalProgrammes.css';
import globalCommunion from '../../images/Growth.PNG';
import praiseNight27 from '../../images/praise_night_27.jpg';

const GlobalPrograms = () => {
  const programs = [
    {
      id: 1,
      image: globalCommunion,
      title: 'Global Communion Service with Pastor Chris',
      badge: 'LIVE BROADCAST'
    },
    {
      id: 2,
      image: praiseNight27,
      title: 'Praise Night 27 with Pastor Chris',
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
            Join millions of viewers worldwide for our premier live services, communion feeds, and global praise nights.
            These special broadcasts bring together international ministries to share messages of faith, hope, and spiritual renewal.
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
