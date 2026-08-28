import React from 'react';
import './GlobalProgrammes.css';
import craftingFaithHost from '../../images/crafting_faith_host.jpg';
import global2 from '../../images/global2.jpeg';
import global3 from '../../images/global3.png';
import global4 from '../../images/global4.png';

const GlobalPrograms = () => {
  const programs = [
    {
      id: 1,
      image: craftingFaithHost, // Large vertical: Crafting Faith host
      title: 'Crafting Faith',
      badge: 'LIFESTYLE SHOW',
      gridClass: 'card-large'
    },
    {
      id: 2,
      image: global2, // Square top-left: Communion Service
      title: 'Global Communion Service',
      badge: 'MONTHLY SERVICE',
      gridClass: 'card-square-1'
    },
    {
      id: 3,
      image: global3, // Square top-right: Rhapathon
      title: 'Rhapathon',
      badge: 'SPECIAL CONTENT',
      gridClass: 'card-square-2'
    },
    {
      id: 4,
      image: global4, // Wide bottom: Healing Streams
      title: 'Healing Streams Live Healing Services',
      badge: 'HEALING SERVICE',
      gridClass: 'card-wide'
    }
  ];

  return (
    <section className="global-programs-section">
      <div className="global-programs-container">
        <div className="global-programs-header">
          <span className="global-programs-label">LIVE BROADCASTS</span>
          <h2 className="global-programs-title">UPCOMING GLOBAL PROGRAMS</h2>
          <p className="global-programs-desc">
            Join millions of viewers worldwide for our premier live services, communion feeds, and global healing crusades. 
            These special broadcasts bring together international ministries to share messages of faith, hope, and spiritual renewal.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="bento-grid">
          {programs.map((prog) => (
            <div 
              key={prog.id} 
              className={`bento-card ${prog.gridClass}`}
              style={{ backgroundImage: `url("${prog.image}")` }}
            >
              {/* Clean layout - flyer artwork has baked-in typography */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPrograms;
