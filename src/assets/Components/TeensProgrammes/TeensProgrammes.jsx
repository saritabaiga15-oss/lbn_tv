import React, { useState } from 'react';
import './TeensProgrammes.css';
import teevablazeImg from '../../images/teevablaze_banner.jpg';
import igniteImg from '../../images/YOUTHIgnite.png';

const TeensProgrammes = () => {
  const [selectedShow, setSelectedShow] = useState(null);

  const programs = [
    {
      id: 1,
      title: 'TEEV-BLAZE',
      subtitle: 'Youth, Faith & Dynamic Talks',
      image: teevablazeImg,
      schedule: 'Monday to Friday at 11:30 AM',
      duration: '30 mins',
      tagline: 'Igniting the youth with vibrant faith and purpose.',
      description: 'An electrifying youth-centric broadcast celebrating youth culture, discussions, gospel faith testimonies, and creative talent for teens and young adults.'
    },
    {
      id: 2,
      title: 'IGNITE SHOW',
      subtitle: 'Adolescence and Faith',
      image: igniteImg,
      schedule: 'Sundays at 3:00 PM',
      duration: '60 mins',
      tagline: 'Always keep the hope alive.',
      description: 'Ignite explores the real-life intersection of youth culture, adolescence, and faith. Engaging discussions, young panels, and inspiring stories show how faith lights the way through life’s trials.'
    },
  ];

  return (
    <section id="teens-programs" className="teens-section">
      <div className="teens-container">
        <div className="teens-header">
          <span className="teens-label">TEENS CORNER</span>
          <h2 className="teens-title">YOUTH & FAITH PROGRAMS</h2>
          <p className="teens-desc">
            Empowering the next generation with truth, purpose, and creative expression. Explore our premier teen shows.
          </p>
        </div>

        {/* Show Cards Grid */}
        <div className="teens-grid">
          {programs.map((show) => (
            <div
              key={show.id}
              className="teen-card"
              onClick={() => setSelectedShow(show)}
            >
              <div className="teen-card-img-wrapper">
                <img src={show.image} alt={show.title} className="teen-card-img" />
                <div className="teen-card-overlay"></div>
                <span className="teen-card-duration">{show.duration}</span>
              </div>

              <div className="teen-card-content">
                <span className="teen-card-schedule">{show.schedule}</span>
                <h3 className="teen-card-title">{show.title}</h3>
                <p className="teen-card-tagline">"{show.tagline}"</p>
                <button className="teen-card-btn">EXPLORE SHOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mini Details Dialog / Modal */}
      {selectedShow && (
        <div className="teens-modal" onClick={() => setSelectedShow(null)}>
          <div className="teens-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="teens-modal-close" onClick={() => setSelectedShow(null)}>&times;</button>
            <div className="teens-modal-grid">
              <div className="teens-modal-img-col" style={{ backgroundImage: `url("${selectedShow.image}")` }}>
                <div className="teens-modal-img-overlay"></div>
              </div>
              <div className="teens-modal-info-col">
                <span className="modal-schedule-tag">{selectedShow.schedule} &bull; {selectedShow.duration}</span>
                <h2 className="modal-show-title">{selectedShow.title}</h2>
                <h4 className="modal-show-subtitle">{selectedShow.subtitle}</h4>
                <p className="modal-show-tagline">"{selectedShow.tagline}"</p>
                <p className="modal-show-desc">{selectedShow.description}</p>

                <div className="modal-actions-container">
                  <button className="modal-action-watch" onClick={() => setSelectedShow(null)}>
                    WATCH LATEST EPISODE
                  </button>
                  <button className="modal-action-back" onClick={() => setSelectedShow(null)}>
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

export default TeensProgrammes;
