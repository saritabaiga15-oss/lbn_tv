import React from 'react';
import './Features.css';

const Features = () => {
  const reasonCards = [
    {
      id: 1,
      title: 'Stream Anywhere',
      desc: 'Watch live satellite streams and continuous broadcasts on your phone, tablet, laptop, and smart TV.',
      accent: 'blue',
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="M17 9l-4-3v6l4-3z" fill="currentColor" opacity="0.3" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Interactive EPG',
      desc: 'Browse our detailed weekly guide, check timeslots, hosts, and configure reminders for your favorite live slots.',
      accent: 'gold',
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="M8 14h2v2H8zm4 0h2v2h-2zm4 0h2v2h-2z" fill="currentColor" opacity="0.4" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Youth & Kids Hubs',
      desc: 'Explore faith-building animated stories, talent programs, and interactive talk shows tailored for kids and teenagers.',
      accent: 'red',
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <path d="M9 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor" opacity="0.3" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Faith & Renewal',
      desc: 'Access continuous, value-based Christian programming and live global prayer slots designed to nurture your soul.',
      accent: 'gold',
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
          <polygon points="12 2 22 7 12 12 2 7" fill="currentColor" opacity="0.3" />
        </svg>
      )
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        
        {/* Header */}
        <div className="features-header">
          <span className="features-label">WHY LBNTV</span>
          <h2 className="features-title">MORE REASONS TO WATCH</h2>
        </div>

        {/* 4-column Grid matching reference style */}
        <div className="features-grid">
          {reasonCards.map((card) => (
            <div key={card.id} className={`features-card accent-${card.accent}`}>
              <div className="features-card-content">
                <h3 className="features-card-title">{card.title}</h3>
                <p className="features-card-desc">{card.desc}</p>
              </div>
              <div className="features-card-icon-box">
                {card.icon}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
