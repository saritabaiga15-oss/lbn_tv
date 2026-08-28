import React, { useState } from 'react';
import './KidsProgrammes.css';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';
import image4 from '../../images/image4.png';

const KidsProgrammes = () => {
  const [selectedKidShow, setSelectedKidShow] = useState(null);

  const kidShows = [
    {
      id: 1,
      title: 'KIDDIES RHAPSODY SHOW',
      subtitle: 'Faith Foundations for Kids',
      image: image2,
      schedule: 'Fridays at 3:00 PM',
      duration: '45 mins',
      tagline: 'Growing in grace and scripture wisdom.',
      description: 'An interactive exploration of the Kiddies Rhapsody devotional. With fun illustrations, easy-to-understand storytelling, daily confessions, and prayer templates, children learn the principles of faith from an early age.'
    },
    {
      id: 2,
      title: 'BIBLE ADVENTURES',
      subtitle: '3D Animated Scripture Stories',
      image: image3,
      schedule: 'Thursdays at 3:00 PM',
      duration: '60 mins',
      tagline: 'Heroes of faith come to life.',
      description: 'High-quality 3D animations telling heroic stories of Moses, Esther, David, and Daniel. These exciting adventures captivate children while teaching essential moral values, courage, and reliance on God.'
    },
    {
      id: 3,
      title: 'JOYFUL KIDS CHOIR',
      subtitle: 'Praises & Music Lessons',
      image: image4,
      schedule: 'Wednesdays at 3:00 PM',
      duration: '45 mins',
      tagline: 'Singing praise with pure joy.',
      description: 'Featuring energetic children’s choir recordings and fun music lessons. Kids learn simple melodies, choreography, and vocal tips, encouraging them to praise God with confidence.'
    }
  ];

  return (
    <section id="kids-programs" className="kids-section">
      <div className="kids-container">
        <div className="kids-header">
          <span className="kids-label">KIDS ZONE</span>
          <h2 className="kids-title">FAITH & MORAL SHOWS FOR KIDS</h2>
          <p className="kids-desc">
            Inspiring young hearts to grow in faith, wisdom, and character through fun, engaging, and premium animations.
          </p>
        </div>

        {/* Kids Grid */}
        <div className="kids-grid">
          {kidShows.map((show) => (
            <div 
              key={show.id} 
              className="kid-card"
              onClick={() => setSelectedKidShow(show)}
            >
              <div className="kid-card-img-wrapper">
                <img src={show.image} alt={show.title} className="kid-card-img" />
                <div className="kid-card-overlay"></div>
                <div className="kid-card-play-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
              
              <div className="kid-card-content">
                <span className="kid-card-schedule">{show.schedule}</span>
                <h3 className="kid-card-title">{show.title}</h3>
                <p className="kid-card-tagline">"{show.tagline}"</p>
                <button className="kid-card-explore-btn">EXPLORE SHOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      {selectedKidShow && (
        <div className="kids-modal" onClick={() => setSelectedKidShow(null)}>
          <div className="kids-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="kids-modal-close" onClick={() => setSelectedKidShow(null)}>&times;</button>
            <div className="kids-modal-grid">
              <div className="kids-modal-img-col" style={{ backgroundImage: `url("${selectedKidShow.image}")` }}>
                <div className="kids-modal-img-overlay"></div>
              </div>
              <div className="kids-modal-info-col">
                <span className="kids-modal-schedule-tag">{selectedKidShow.schedule} &bull; {selectedKidShow.duration}</span>
                <h2 className="kids-modal-show-title">{selectedKidShow.title}</h2>
                <h4 className="kids-modal-show-subtitle">{selectedKidShow.subtitle}</h4>
                <p className="kids-modal-show-tagline">"{selectedKidShow.tagline}"</p>
                <p className="kids-modal-show-desc">{selectedKidShow.description}</p>
                
                <div className="kids-modal-actions-container">
                  <button className="kids-modal-action-watch" onClick={() => setSelectedKidShow(null)}>
                    PLAY LATEST
                  </button>
                  <button className="kids-modal-action-back" onClick={() => setSelectedKidShow(null)}>
                    BACK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default KidsProgrammes;
