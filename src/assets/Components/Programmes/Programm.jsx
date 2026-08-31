import React, { useState } from 'react';
import './Programm.css';
import img3 from '../../images/image3.png';
import moneyMatters from '../../images/money_matters.jpg';
import craftingBeads from '../../images/crafting_beads.jpg';
import theTrumpet from '../../images/the_trumpet.jpg';
import timelessParagon from '../../images/timeless_paragon.jpg';
import wordAtWork from '../../images/word_at_work.jpg';
import drPrashanti from '../../images/dr_prashanti.jpg';
import prayWithMe from '../../images/pray_with_me.jpg';
import duskTillDawn from '../../images/dusk_till_dawn.jpg';

const Programmes = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedShow, setSelectedShow] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const filters = ['ALL', 'TALK SHOWS', 'PRAYER', 'HEALTH', 'TEENS & YOUTH', 'KIDS',];

  const programList = [
    {
      id: 1,
      title: 'THE TRUMPET – DEACON VIJAY BANSODE',
      category: 'TALK SHOW',
      image: theTrumpet,
      video: '/Vidoes/THE_TRUMPET_NEW.mp4',
      schedule: 'Wednesdays at 8:00 PM',
      duration: '60 mins',
      tagline: 'Prophetic conversations, truth, and faith.',
      description: 'Inspiring insights and prophetic conversations on faith, ministry, and current events hosted by Deacon Vijay Bansode with anointed guest speakers.'
    },
    {
      id: 2,
      title: 'TIMELESS PARAGON – KIDS SHOW',
      category: 'KIDS',
      image: timelessParagon,
      schedule: 'Saturdays at 10:00 AM',
      duration: '45 mins',
      tagline: 'Empowering children with scripture wisdom.',
      description: 'Fun, engaging studio episodes empowering children with scripture wisdom, character-building stories, and timeless faith values for growing minds.'
    },
    {
      id: 3,
      title: 'WORD AT WORK – STUDIO BROADCAST',
      category: 'TALK SHOWS',
      image: wordAtWork,
      schedule: 'Thursdays at 6:30 PM',
      duration: '60 mins',
      tagline: 'Inspired, equipped, and empowered.',
      description: 'Panel discussions exploring God’s Word in action, equipping believers with practical application of biblical truths and life-transforming revelations.'
    },
    {
      id: 4,
      title: 'DR. PRASHANTI – HEALTH & WELLNESS',
      category: 'HEALTH',
      image: drPrashanti,
      schedule: 'Tuesdays at 9:30 AM',
      duration: '30 mins',
      tagline: 'Divine health guidance from a faith perspective.',
      description: 'Inspiring health, wellness, and medical guidance from a faith-filled perspective with Dr. Prashanti, equipping you to live in divine vitality.'
    },
    {
      id: 5,
      title: 'PRAY WITH ME – GLOBAL INTERCESSION',
      category: 'PRAYER',
      image: prayWithMe,
      schedule: 'Thursdays at 12:00 PM',
      duration: '30 mins',
      tagline: 'Fervent prayer shaking the nations.',
      description: 'Lifting nations, families, and churches in fervent prayer and spiritual intercession across the globe alongside devoted prayer leaders.'
    },
    {
      id: 6,
      title: 'DUSK TILL DAWN STUDIO TALK SHOW',
      category: 'TEENS & YOUTH',
      image: duskTillDawn,
      schedule: 'Fridays at 11:30 PM',
      duration: '60 mins',
      tagline: 'Heart-to-heart late-night faith talks.',
      description: 'Engaging conversations, uplifting real-life testimonies, and late-night heart-to-heart discussions exploring faith and triumph over difficulties.'
    },
    {
      id: 7,
      title: 'IGNITE SHOW',
      category: 'TEENS & YOUTH',
      image: img3,
      video: '/Vidoes/Ignite.mp4',
      schedule: 'Sundays at 3:00 PM',
      duration: '60 mins',
      tagline: 'We Burn.',
      description: 'Ignite explores the real-life intersection of culture, lifestyle, and faith. Engaging discussions, young panels, and inspiring stories show how faith lights the way through life’s trials.'
    },
    {
      id: 8,
      title: 'CRAFTING FAITH ',
      category: 'TALK SHOW',
      image: craftingBeads,
      schedule: 'Wednesdays at 4:00 PM',
      duration: '30 mins',
      tagline: 'Creative faith through hands-on fun.',
      description: 'Inspiring craft workshops where kids create faith-inspired art projects while learning scripture stories in fun, memorable ways.'
    },
    {
      id: 9,
      title: 'MONEY MATTERS',
      category: 'TALK SHOWS',
      image: moneyMatters,
      schedule: 'Mondays at 7:00 PM',
      duration: '45 mins',
      tagline: 'Biblical wisdom for financial growth.',
      description: 'Practical insights and spiritual guidance on stewardship, financial intelligence, and prosperity according to biblical principles.'
    }
  ];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setShowAll(false);
  };

  const filteredPrograms = activeFilter === 'ALL'
    ? programList
    : programList.filter(prog => prog.category === activeFilter);

  // Keep two rows (3 columns * 2 rows = 6 items) initially
  const displayedPrograms = showAll ? filteredPrograms : filteredPrograms.slice(0, 6);

  const getCategoryClass = (category) => {
    return 'cat-' + category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  };

  return (
    <section id="programmes" className="programmes-section">
      <div className="programmes-container">
        <div className="programmes-header">
          <span className="programmes-label">NETWORK GUIDE</span>
          <h2 className="programmes-title">OUR PROGRAMMES</h2>
          <p className="programmes-desc">
            Explore our diverse slate of faith-filled television programming designed to inspire, educate, and empower viewers across all generations.
          </p>

          {/* Dynamic Filter Categories Bar */}
          <div className="programmes-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => handleFilterChange(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid: 2 rows (6 cards) initially */}
        <div className="programmes-grid">
          {displayedPrograms.map((prog) => (
            <div
              key={prog.id}
              className="programme-card"
              onClick={() => setSelectedShow(prog)}
            >
              <div className="programme-card-img-wrapper">
                <img src={prog.image} alt={prog.title} className="programme-card-img" />
                <div className="programme-card-overlay"></div>
                <span className={`programme-card-category ${getCategoryClass(prog.category)}`}>
                  {prog.category}
                </span>
                {prog.video && (
                  <span className="programme-video-badge">
                    <span className="play-triangle">▶</span> VIDEO PROMO
                  </span>
                )}
              </div>
              <div className="programme-card-content">
                <span className="programme-card-schedule">{prog.schedule}</span>
                <h3 className="programme-card-title">{prog.title}</h3>
                <p className="programme-card-tagline">"{prog.tagline}"</p>
                <button className="programme-card-btn">
                  {prog.video ? '▶ WATCH PROMO' : 'VIEW DETAILS'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* See More / See Less Button */}
        {filteredPrograms.length > 6 && (
          <div className="programmes-more-container">
            <button
              className="programmes-see-more-btn"
              onClick={() => setShowAll((prev) => !prev)}
            >
              <span>{showAll ? 'SEE LESS' : 'SEE MORE'}</span>
              <svg
                className={`see-more-arrow ${showAll ? 'expanded' : ''}`}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Details & Video Player Modal */}
      {selectedShow && (
        <div className="programmes-modal" onClick={() => setSelectedShow(null)}>
          <div className="programmes-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="programmes-modal-close" onClick={() => setSelectedShow(null)}>&times;</button>
            <div className="programmes-modal-grid">

              <div className="programmes-modal-img-col">
                {selectedShow.video ? (
                  <div className="programmes-modal-video-wrapper">
                    <video
                      key={selectedShow.video}
                      src={selectedShow.video}
                      poster={selectedShow.image}
                      controls
                      autoPlay
                      playsInline
                      className="programmes-modal-video-player"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div
                    className="programmes-modal-bg-cover"
                    style={{ backgroundImage: `url("${selectedShow.image}")` }}
                  >
                    <div className="programmes-modal-img-overlay"></div>
                  </div>
                )}
              </div>

              <div className="programmes-modal-info-col">
                <span className="programmes-modal-schedule-tag">{selectedShow.schedule} &bull; {selectedShow.duration}</span>
                <h2 className="programmes-modal-show-title">{selectedShow.title}</h2>
                <h4 className="programmes-modal-show-subtitle">{selectedShow.category} CATEGORY</h4>
                <p className="programmes-modal-show-tagline">"{selectedShow.tagline}"</p>
                <p className="programmes-modal-show-desc">{selectedShow.description}</p>

                <div className="programmes-modal-actions-container">
                  {selectedShow.video ? (
                    <button
                      className="programmes-modal-action-watch"
                      onClick={() => {
                        const v = document.querySelector('.programmes-modal-video-player');
                        if (v) {
                          v.currentTime = 0;
                          v.play();
                        }
                      }}
                    >
                      ▶ REPLAY PROMO
                    </button>
                  ) : (
                    <button className="programmes-modal-action-watch" onClick={() => setSelectedShow(null)}>
                      WATCH LATEST
                    </button>
                  )}
                  <button className="programmes-modal-action-back" onClick={() => setSelectedShow(null)}>
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

export default Programmes;
