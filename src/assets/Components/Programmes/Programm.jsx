import React, { useState, useEffect, useRef } from 'react';
import './Programm.css';
import theTrumpet from '../../images/Trumpet.png';
import wordAtWork from '../../images/Word at work.png';
import craftingFaith from '../../images/Crafting Faith.png';
import moneyMatters from '../../images/MONEY MATTERS (1).png';
import teevablaze from '../../images/TEEVABLAZE (1).png';
import timelessParagon from '../../images/timeless_paragon.jpg';
import drPrashanti from '../../images/Wholeness (1).png';
import prayWithMe from '../../images/pray_with_me.jpg';
import igniteImg from '../../images/YOUTHIgnite.png';

const Programmes = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedShow, setSelectedShow] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );
  const bgVideoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // IntersectionObserver to guarantee background video autoplays smoothly when section enters viewport
  // Ensure background video autoplays reliably on load and viewport intersection
  useEffect(() => {
    const video = bgVideoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playVideo = () => {
      if (video) {
        video.muted = true;
        const promise = video.play();
        if (promise !== undefined) {
          promise.catch((err) => {
            console.log('Programmes background video autoplay deferred:', err);
          });
        }
      }
    };

    playVideo();

    video.addEventListener('canplay', playVideo);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            playVideo();
          }
        });
      },
      { threshold: 0.01 }
    );

    observer.observe(video);

    return () => {
      video.removeEventListener('canplay', playVideo);
      observer.disconnect();
    };
  }, []);

  const filters = ['ALL', 'TALK SHOWS', 'PRAYER', 'HEALTH', 'TEENS & YOUTH', 'KIDS',];

  const programList = [
    {
      id: 1,
      title: 'THE TRUMPET – DEACON VIJAY BANSODE',
      category: 'TALK SHOWS',
      image: theTrumpet,
      video: '/Videos/THE_TRUMPET_NEW.mp4',
      schedule: 'Tuesday to Friday at 11:00 AM',
      duration: '60 mins',
      tagline: 'Prophetic conversations, truth, and faith.',
      description: 'Inspiring insights and prophetic conversations on faith, ministry, and current events hosted by Deacon Vijay Bansode with anointed guest speakers.'
    },
    {
      id: 2,
      title: 'TIMELESS PARAGON – KIDS SHOW',
      category: 'KIDS',
      image: timelessParagon,
      video: '/Videos/TIMELESS.mp4',
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
      video: '/Videos/TheWordAtWork.mp4',
      schedule: 'Thursdays at 8:30 PM',
      duration: '60 mins',
      tagline: 'Inspired, equipped, and empowered.',
      description: 'Panel discussions exploring God’s Word in action, equipping believers with practical application of biblical truths and life-transforming revelations.'
    },
    {
      id: 4,
      title: 'WHOLENESS WITH DR. PRASHANTI',
      category: 'HEALTH',
      image: drPrashanti,
      schedule: 'Tuesdays at 9:30 AM',
      duration: '30 mins',
      tagline: 'Mind. Body. Purpose.',
      description: 'Inspiring health, wellness, and divine vitality from a faith-filled perspective with Dr. Prashanti, equipping you to live in wholeness across mind, body, and purpose.'
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
      id: 7,
      title: 'IGNITE SHOW',
      category: 'TEENS & YOUTH',
      image: igniteImg,
      video: '/Videos/Ignite.mp4',
      schedule: 'Sundays at 3:00 PM',
      duration: '60 mins',
      tagline: 'We Burn.',
      description: 'Ignite explores the real-life intersection of culture, lifestyle, and faith. Engaging discussions, young panels, and inspiring stories show how faith lights the way through life’s trials.'
    },
    {
      id: 8,
      title: 'CRAFTING FAITH',
      category: 'TALK SHOWS',
      image: craftingFaith,
      schedule: 'Wednesdays at 4:00 PM',
      duration: '30 mins',
      tagline: 'Create · Believe · Inspire — faith through art and craft.',
      description: 'Inspiring craft workshops where faith and creativity unite. Create, believe, and inspire through practical artistic projects and scripture insights.'
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
    },
    {
      id: 10,
      title: 'TEEV-BLAZE',
      category: 'TEENS & YOUTH',
      image: teevablaze,
      schedule: 'Monday to Friday at 11:30 AM',
      duration: '30 mins',
      tagline: 'Igniting the youth with vibrant faith and purpose.',
      description: 'An electrifying youth-centric broadcast celebrating youth culture, energetic discussions, faith testimonies, and talent for teens and young adults.'
    }
  ];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setShowAll(false);
  };

  const filteredPrograms = activeFilter === 'ALL'
    ? programList
    : programList.filter(prog => prog.category === activeFilter);

  // 4 items on mobile (2x2) initially, 6 items on desktop (2x3) initially
  const initialLimit = isMobile ? 4 : 6;
  const displayedPrograms = showAll ? filteredPrograms : filteredPrograms.slice(0, initialLimit);

  const getCategoryClass = (category) => {
    return 'cat-' + category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  };

  return (
    <section id="programmes" className="programmes-section">
      {/* Background Video with Gradient Overlay */}
      <div className="programmes-bg-video-wrapper">
        <video
          ref={bgVideoRef}
          src="/Videos/ENOCH_PROMO_FINAL.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="programmes-bg-video"
        />
        <div className="programmes-bg-gradient-top"></div>
        <div className="programmes-bg-gradient-bottom"></div>
        <div className="programmes-bg-overlay"></div>
      </div>

      <div className="programmes-container">
        <div className="programmes-header">
          <span className="programmes-label">NETWORK GUIDE</span>
          <h2 className="programmes-title">OUR PROGRAMMES</h2>
          <p className="programmes-desc">
            Explore our diverse slate of faith-filled television programming designed to inspire, educate, and empower viewers across all generations.
          </p>

          {/* Dynamic Filter Categories Bar */}
          <div className="programmes-filters-wrapper">
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
        </div>

        {/* Dynamic Grid */}
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
                {prog.video && (
                  <button className="programme-card-btn">
                    ▶ WATCH PROMO
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* See More / See Less Button */}
        {filteredPrograms.length > initialLimit && (
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
