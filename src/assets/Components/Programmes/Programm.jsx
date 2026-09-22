import { useState, useEffect, useRef } from 'react';
import './Programm.css';
import theTrumpet from '../../images/Trumpet.png';
import wordAtWork from '../../images/TheWordatWork.png';
import craftingFaith from '../../images/Crafting Faith.png';
import moneyMatters from '../../images/MoneyMatter.jpeg';
import TEEVABLAZE from '../../images/TEEVABLAZE .png';
import timelessParagonNew from '../../images/timeless_paragon_new.jpg';
import voiceOfPraise from '../../images/voice_of_praise.jpg';
import healthyLiving from '../../images/healthy_living.jpg';
import drPrashanti from '../../images/Wholeness (1).png';
import igniteImg from '../../images/YOUTHIgnite.png';
import justBelieveBanner from '../../images/Just_believe_banner .png';

const BG_PROMOS = [
  { id: 'trumpet', title: 'The Trumpet – Vijay Bansode', src: '/Videos/THE_TRUMPET_NEW.mp4' },
  { id: 'timeless', title: 'Timeless Paragon – Kids Show', src: '/Videos/TIMELESS.mp4' },
  { id: 'wordAtWork', title: 'The Word At Work – Studio Broadcast', src: '/Videos/TheWordAtWork.mp4' },
  { id: 'wholeness', title: 'WHOLENESS with Dr. Prashanti', src: '/Videos/WHOLENESS.mp4' },
  { id: 'ignite', title: 'Ignite Show', src: '/Videos/Ignite.mp4' },
  { id: 'craftingFaith', title: 'Crafting Faith', src: '/CRAFTING%20FAITH.mp4' },
  { id: 'moneyMatters', title: 'Money Matters', src: '/Videos/MoneyMatters.mp4' },
  { id: 'Teevablaze', title: 'Teevablaze', src: '/Videos/Teevablaze.mp4' },
  { id: 'healthyLiving', title: 'Healthy Living', src: '/Videos/HL INTRO.mp4' },
  { id: 'voiceOfPraise', title: 'Voice of Praise', src: '/Videos/VoiceOfPraise.mp4' },
  {id: 'justBelieve', title: 'Just Believe', src: '/Videos/JustBelieve.mp4'},
  { id: 'enoch', title: 'LoveWorld India Special', src: '/Videos/ENOCH_PROMO_FINAL.mp4' }
];

const PROMO_INTERVAL = 20000; // 20 seconds per promo

const Programmes = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedShow, setSelectedShow] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  // Background promo flash rotation state
  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
  const [activeSlot, setActiveSlot] = useState('A');
  const [slotASrc, setSlotASrc] = useState(BG_PROMOS[0].src);
  const [slotBSrc, setSlotBSrc] = useState(BG_PROMOS[1].src);
  const [isFlashing, setIsFlashing] = useState(false);
  const [bgMuted, setBgMuted] = useState(true);

  const videoRefA = useRef(null);
  const videoRefB = useRef(null);
  const sectionRef = useRef(null);
  const promoVideoRef = useRef(null);

  const activeSlotRef = useRef('A');
  const promoIndexRef = useRef(0);
  const bgMutedRef = useRef(true);
  const isSectionVisibleRef = useRef(true);

  useEffect(() => {
    activeSlotRef.current = activeSlot;
  }, [activeSlot]);

  useEffect(() => {
    promoIndexRef.current = currentPromoIndex;
  }, [currentPromoIndex]);

  useEffect(() => {
    bgMutedRef.current = bgMuted;
  }, [bgMuted]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initial playback for Slot A - ensure Slot B is strictly muted & paused
  useEffect(() => {
    const videoA = videoRefA.current;
    const videoB = videoRefB.current;
    if (videoB) {
      videoB.muted = true;
      videoB.pause();
    }
    if (videoA) {
      videoA.muted = bgMutedRef.current;
      videoA.play().catch(() => {});
    }
  }, []);

  // 10-second promo rotation with strict audio isolation (NO AUDIO MIXING)
  useEffect(() => {
    if (selectedShow) return;

    const interval = setInterval(() => {
      if (!isSectionVisibleRef.current) return;

      const nextIndex = (promoIndexRef.current + 1) % BG_PROMOS.length;
      const currentSlot = activeSlotRef.current;
      const targetSlot = currentSlot === 'A' ? 'B' : 'A';
      const incomingVideo = targetSlot === 'A' ? videoRefA.current : videoRefB.current;
      const outgoingVideo = currentSlot === 'A' ? videoRefA.current : videoRefB.current;

      // 1. IMMEDIATELY mute and pause outgoing video so audios NEVER mix!
      if (outgoingVideo) {
        outgoingVideo.muted = true;
        outgoingVideo.pause();
      }

      // 2. Start incoming video with audio strictly according to user's mute state
      if (incomingVideo) {
        incomingVideo.currentTime = 0;
        incomingVideo.muted = bgMutedRef.current;
        incomingVideo.play().catch((err) => {
          console.log('Next promo play error:', err);
        });
      }

      // 3. Trigger broadcast flash transition
      setIsFlashing(true);
      setTimeout(() => setIsFlashing(false), 250);

      // 4. Switch active slot and index
      setActiveSlot(targetSlot);
      setCurrentPromoIndex(nextIndex);

      // 5. Preload next promo in the background
      setTimeout(() => {
        const preloadIndex = (nextIndex + 1) % BG_PROMOS.length;
        if (targetSlot === 'B') {
          setSlotASrc(BG_PROMOS[preloadIndex].src);
        } else {
          setSlotBSrc(BG_PROMOS[preloadIndex].src);
        }
      }, 500);
    }, PROMO_INTERVAL);

    return () => clearInterval(interval);
  }, [selectedShow]);

  // IntersectionObserver to pause/resume background video based on viewport visibility
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isSectionVisibleRef.current = entry.isIntersecting;
          const currentSlot = activeSlotRef.current;
          const activeVideo = currentSlot === 'A' ? videoRefA.current : videoRefB.current;
          const inactiveVideo = currentSlot === 'A' ? videoRefB.current : videoRefA.current;

          if (entry.isIntersecting && !selectedShow) {
            if (inactiveVideo) {
              inactiveVideo.muted = true;
              inactiveVideo.pause();
            }
            if (activeVideo) {
              activeVideo.muted = bgMutedRef.current;
              activeVideo.play().catch(() => {});
            }
          } else {
            if (videoRefA.current) {
              videoRefA.current.muted = true;
              videoRefA.current.pause();
            }
            if (videoRefB.current) {
              videoRefB.current.muted = true;
              videoRefB.current.pause();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [selectedShow]);

  // Pause background videos when a modal opens, resume when closed
  useEffect(() => {
    if (selectedShow) {
      if (videoRefA.current) {
        videoRefA.current.muted = true;
        videoRefA.current.pause();
      }
      if (videoRefB.current) {
        videoRefB.current.muted = true;
        videoRefB.current.pause();
      }
    } else if (isSectionVisibleRef.current) {
      const currentSlot = activeSlotRef.current;
      const activeVideo = currentSlot === 'A' ? videoRefA.current : videoRefB.current;
      const inactiveVideo = currentSlot === 'A' ? videoRefB.current : videoRefA.current;
      if (inactiveVideo) {
        inactiveVideo.muted = true;
        inactiveVideo.pause();
      }
      if (activeVideo) {
        activeVideo.muted = bgMutedRef.current;
        activeVideo.play().catch(() => {});
      }
    }
  }, [selectedShow]);

  // Immediately autoplay modal promo video with audio enabled when a programme card is clicked
  useEffect(() => {
    if (selectedShow && selectedShow.video) {
      const timer = setTimeout(() => {
        if (promoVideoRef.current) {
          promoVideoRef.current.currentTime = 0;
          promoVideoRef.current.muted = false;
          promoVideoRef.current.volume = 1.0;
          const playPromise = promoVideoRef.current.play();
          if (playPromise !== undefined) {
            playPromise.catch((err) => {
              console.warn('Autoplay with sound fallback:', err);
              if (promoVideoRef.current) {
                promoVideoRef.current.muted = true;
                promoVideoRef.current.play().then(() => {
                  const enableAudio = () => {
                    if (promoVideoRef.current) promoVideoRef.current.muted = false;
                  };
                  window.addEventListener('click', enableAudio, { once: true });
                  window.addEventListener('touchstart', enableAudio, { once: true });
                }).catch(() => {});
              }
            });
          }
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [selectedShow]);

  const handleToggleMute = () => {
    const nextMuted = !bgMuted;
    setBgMuted(nextMuted);
    bgMutedRef.current = nextMuted;
    const currentSlot = activeSlotRef.current;
    const activeVideo = currentSlot === 'A' ? videoRefA.current : videoRefB.current;
    const inactiveVideo = currentSlot === 'A' ? videoRefB.current : videoRefA.current;
    if (inactiveVideo) {
      inactiveVideo.muted = true;
      inactiveVideo.pause();
    }
    if (activeVideo) {
      activeVideo.muted = nextMuted;
    }
  };

  const filters = ['ALL', 'TALK SHOWS','HEALTH', 'WORSHIP', 'TEENS & YOUTH', 'KIDDIES',];

  const programList = [
    {
      id: 1,
      title: 'THE TRUMPET –  VIJAY BANSODE',
      category: 'TALK SHOWS',
      image: theTrumpet,
      video: '/Videos/THE_TRUMPET_NEW.mp4',
      schedule: 'Tuesday to Friday at 11:00 AM',
      duration: '60 mins',
      tagline: 'Prophetic conversations, truth, and faith.',
      description: 'Inspiring insights and prophetic conversations on faith, ministry, and current events hosted by  Vijay Bansode with anointed guest speakers.'
    },
    {
      id: 2,
      title: 'TIMELESS PARAGON – KIDDIES SHOW',
      category: 'KIDDIES',
      image: timelessParagonNew,
      video: '/Videos/TIMELESS.mp4',
      schedule: 'Saturdays at 10:00 AM',
      duration: '45 mins',
      tagline: 'Empowering children with scripture wisdom.',
      description: 'Fun, engaging studio episodes empowering children with scripture wisdom, character-building stories, and timeless faith values for growing minds.'
    },
    {
      id: 3,
      title: 'THE WORD AT WORK – STUDIO BROADCAST',
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
      video: '/Videos/WHOLENESS.mp4',
      schedule: 'Tuesdays at 9:30 AM',
      duration: '30 mins',
      tagline: 'Mind. Body. Purpose.',
      description: 'Inspiring health, wellness, and divine vitality from a faith-filled perspective with Dr. Prashanti, equipping you to live in wholeness across mind, body, and purpose.'
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
      video: '/CRAFTING%20FAITH.mp4',
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
      video: '/Videos/MoneyMatters.mp4',
      schedule: 'Mondays at 7:00 PM',
      duration: '45 mins',
      tagline: 'Biblical wisdom for financial growth.',
      description:  'Practical insights and spiritual guidance on stewardship, financial intelligence, and prosperity according to biblical principles.'
    },
    {
      id: 10,
      title: 'TEEVABLAZE',
      category: 'TEENS & YOUTH',
      image: TEEVABLAZE,
      video: '/Videos/Teevablaze.mp4',
      schedule: 'Monday to Friday at 11:30 AM',
      duration: '30 mins',
      tagline: 'Igniting the youth with vibrant faith and purpose.',
      description: 'An electrifying youth-centric broadcast celebrating youth culture, energetic discussions, faith testimonies, and talent for teens and young adults.'
    },
    {
      id: 11,
      title: 'VOICE OF PRAISE',
      category: 'WORSHIP',
      image: voiceOfPraise,
      video: '/Videos/VoiceOfPraise.mp4',
      schedule: 'Weekly on LBN',
      duration: '30 mins',
      tagline: 'Where worship meets the heart.',
      description: 'A soul-stirring worship and praise programme featuring anointed singers and musicians lifting voices in adoration and faith-filled music ministry.'
    },
    {
      id: 12,
      title: 'HEALTHY LIVING',
      category: 'HEALTH',
      image: healthyLiving,
      video: '/Videos/HL INTRO.mp4',
      schedule: 'Weekly on LBN',
      duration: '30 mins',
      tagline: 'Faith, wellness, and wholeness.',
      description: 'Practical guidance on nutrition, natural health, and holistic wellness from a faith-based perspective — inspiring viewers to live well in spirit, soul, and body.'
    },
    {
      id: 13,



      title: 'JUST BELIEVE',
      category: 'TALK SHOWS',
      image: justBelieveBanner,
      video: '/Videos/JustBelieve.mp4',
      schedule: 'Weekly on LBN',
      duration: '30 mins',
      tagline: 'Faith that inspires hope and action.',
      description: 'An uplifting programme encouraging viewers to trust God, strengthen their faith, and believe for the possibilities ahead.'
    }
  ];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setShowAll(false);
  };

  const filteredPrograms = activeFilter === 'ALL'
    ? programList
    : programList.filter(prog => prog.category === activeFilter);

  const currentShowIdx = selectedShow
    ? filteredPrograms.findIndex(p => p.id === selectedShow.id)
    : -1;

  const handlePrevShow = (e) => {
    if (e) e.stopPropagation();
    if (currentShowIdx === -1 || filteredPrograms.length === 0) return;
    const prevIdx = (currentShowIdx - 1 + filteredPrograms.length) % filteredPrograms.length;
    setSelectedShow(filteredPrograms[prevIdx]);
  };

  const handleNextShow = (e) => {
    if (e) e.stopPropagation();
    if (currentShowIdx === -1 || filteredPrograms.length === 0) return;
    const nextIdx = (currentShowIdx + 1) % filteredPrograms.length;
    setSelectedShow(filteredPrograms[nextIdx]);
  };

  // Keyboard navigation for programme modal
  useEffect(() => {
    if (!selectedShow) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrevShow();
      } else if (e.key === 'ArrowRight') {
        handleNextShow();
      } else if (e.key === 'Escape') {
        setSelectedShow(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedShow, currentShowIdx, filteredPrograms]);

  // 4 items on mobile (2x2) initially, 6 items on desktop (2x3) initially
  const initialLimit = isMobile ? 4 : 6;
  const displayedPrograms = showAll ? filteredPrograms : filteredPrograms.slice(0, initialLimit);

  const getCategoryClass = (category) => {
    return 'cat-' + category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  };

  return (
    <section id="programmes" className="programmes-section" ref={sectionRef}>
      {/* Background Video with Double-Buffering & 5-Second Promo Flash Rotation */}
      <div className="programmes-bg-video-wrapper">
        <video
          ref={videoRefA}
          src={slotASrc}
          loop
          muted={activeSlot === 'A' ? bgMuted : true}
          playsInline
          preload="auto"
          className={`programmes-bg-video ${activeSlot === 'A' ? 'active' : 'inactive'}`}
        />
        <video
          ref={videoRefB}
          src={slotBSrc}
          loop
          muted={activeSlot === 'B' ? bgMuted : true}
          playsInline
          preload="auto"
          className={`programmes-bg-video ${activeSlot === 'B' ? 'active' : 'inactive'}`}
        />
        <div className={`programmes-promo-flash-fx ${isFlashing ? 'flashing' : ''}`} />
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
            <button
              className={`programmes-bg-mute-btn ${!bgMuted ? 'unmuted' : ''}`}
              onClick={handleToggleMute}
              title={bgMuted ? 'Unmute promo audio' : 'Mute promo audio'}
              aria-label={bgMuted ? 'Unmute promo audio' : 'Mute promo audio'}
            >
              {bgMuted ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </button>
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
                {prog.video ? (
                  <span className="programme-video-badge">
                    <span className="play-triangle">▶</span> VIDEO PROMO
                  </span>
                ) : (
                  <span className="programme-coming-soon-badge">
                    COMING SOON
                  </span>
                )}
              </div>
              <div className="programme-card-content">
                <span className="programme-card-schedule">{prog.schedule}</span>
                <h3 className="programme-card-title">{prog.title}</h3>
                <p className="programme-card-tagline">"{prog.tagline}"</p>
                {prog.video && (
                  <button
                    className="programme-card-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedShow(prog);
                    }}
                  >
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
            {/* Back Icon Button on Top-Left */}
            <button className="programmes-modal-close" onClick={() => setSelectedShow(null)} aria-label="Go back" title="Go back">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>

            {/* Promo Counter Badge on Top-Right */}
            {currentShowIdx !== -1 && (
              <div className="programmes-modal-promo-counter">
                <span>SHOW {currentShowIdx + 1} OF {filteredPrograms.length}</span>
              </div>
            )}

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
                      preload="auto"
                      className="programmes-modal-video-player"
                      ref={(el) => {
                        promoVideoRef.current = el;
                        if (el) {
                          el.muted = false;
                          el.volume = 1.0;
                          el.play().catch(() => {});
                        }
                      }}
                      onLoadedData={(e) => {
                        const v = e.currentTarget;
                        v.muted = false;
                        v.volume = 1.0;
                        v.play().catch(() => {});
                      }}
                      onCanPlay={(e) => {
                        const v = e.currentTarget;
                        v.muted = false;
                        v.volume = 1.0;
                        v.play().catch(() => {});
                      }}
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
                        const v = promoVideoRef.current;
                        if (v) {
                          v.currentTime = 0;
                          v.play().catch((error) => {
                            console.error('Unable to play programme promo:', error);
                          });
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
                  <div className="programmes-modal-nav-pair">
                    <button className="programmes-modal-action-nav prev" onClick={handlePrevShow} title="Previous Programme">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                      </svg>
                      <span>PREV</span>
                    </button>
                    <button className="programmes-modal-action-nav next" onClick={handleNextShow} title="Next Programme">
                      <span>NEXT</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </button>
                  </div>
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
