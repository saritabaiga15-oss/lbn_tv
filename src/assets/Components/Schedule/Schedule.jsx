import React, { useEffect, useState, useRef } from 'react';
import './Schedule.css';
import { scheduleData, categories, getSlotStartMinutes } from '../../data/scheduleData';

const getIndiaDay = () => new Date().toLocaleDateString('en-US', { weekday: 'long', timeZone: 'Asia/Kolkata' });

const getIndiaNow = () => {
  const now = new Date();
  const istString = now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
  return new Date(istString);
};

const getCurrentSlot = (slots, currentMinutes) => slots.find((slot) => {
  const startMinutes = getSlotStartMinutes(slot.time);
  const durationMinutes = parseInt(slot.duration, 10);
  return currentMinutes >= startMinutes && currentMinutes < startMinutes + durationMinutes;
});

const Schedule = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [selectedDay, setSelectedDay] = useState(getIndiaDay);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [reminderSet, setReminderSet] = useState({});
  const [currentTime, setCurrentTime] = useState(getIndiaNow);
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState('coverflow'); // 'coverflow' | 'list'
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth <= 768);

  const stageRef = useRef(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);
  const isSwiping = useRef(false);

  const mouseStartX = useRef(0);
  const isMouseDown = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFullscreen = () => {
    if (!stageRef.current) return;
    if (!document.fullscreenElement) {
      if (stageRef.current.requestFullscreen) {
        stageRef.current.requestFullscreen().catch(() => {
          setIsFullscreen(prev => !prev);
        });
      } else {
        setIsFullscreen(prev => !prev);
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => { });
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentTime(getIndiaNow()), 30000);
    return () => clearInterval(intervalId);
  }, []);

  const toggleReminder = (id) => {
    setReminderSet(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const currentList = scheduleData[selectedDay] || [];
  const currentDay = currentTime.toLocaleDateString('en-US', { weekday: 'long' });
  const currentSlot = selectedDay === currentDay
    ? getCurrentSlot(currentList, currentTime.getHours() * 60 + currentTime.getMinutes())
    : null;
  const filteredList = activeCategory === 'ALL'
    ? currentList
    : currentList.filter(item => item.category === activeCategory);

  // Sync activeIndex when day, category, or current slot changes
  useEffect(() => {
    if (filteredList.length === 0) {
      setActiveIndex(0);
      return;
    }
    if (selectedDay === currentDay && currentSlot) {
      const liveIdx = filteredList.findIndex(item => item.title === currentSlot.title && item.time === currentSlot.time);
      if (liveIdx !== -1) {
        setActiveIndex(liveIdx);
        return;
      }
    }
    setActiveIndex(0);
  }, [selectedDay, activeCategory]);

  // Keep active index within bounds
  useEffect(() => {
    if (activeIndex >= filteredList.length && filteredList.length > 0) {
      setActiveIndex(filteredList.length - 1);
    }
  }, [filteredList.length, activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (viewMode !== 'coverflow') return;
      if (e.key === 'ArrowLeft') {
        setActiveIndex(prev => (prev === 0 ? filteredList.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveIndex(prev => (prev === filteredList.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredList.length, viewMode]);

  const handlePrev = () => {
    if (filteredList.length === 0) return;
    setActiveIndex(prev => (prev === 0 ? filteredList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (filteredList.length === 0) return;
    setActiveIndex(prev => (prev === filteredList.length - 1 ? 0 : prev + 1));
  };

  const goToIndex = (index) => {
    if (index >= 0 && index < filteredList.length) {
      setActiveIndex(index);
    }
  };

  const jumpToNow = () => {
    if (selectedDay !== currentDay) {
      setSelectedDay(currentDay);
    }
    if (currentSlot) {
      const idx = currentList.findIndex(item => item.title === currentSlot.title && item.time === currentSlot.time);
      if (idx !== -1) {
        setActiveCategory('ALL');
        setActiveIndex(idx);
      }
    }
  };

  // Mobile Touch Handlers
  const handleTouchStart = (e) => {
    if (!e.touches || !e.touches[0]) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
    isSwiping.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isSwiping.current || !e.touches || !e.touches[0]) return;
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (!isSwiping.current) return;
    isSwiping.current = false;
    const diffX = touchStartX.current - touchEndX.current;
    const diffY = touchStartY.current - touchEndY.current;
    const minDistance = 25; // 25px threshold

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) >= minDistance) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const handleTouchCancel = () => {
    isSwiping.current = false;
  };

  // Mouse Drag Handlers for Desktop Testing
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    if (e.target.closest('button') || e.target.closest('a')) return;
    isMouseDown.current = true;
    mouseStartX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (!isMouseDown.current) return;
    isMouseDown.current = false;
    const diffX = mouseStartX.current - e.clientX;
    if (Math.abs(diffX) >= 30) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const handleMouseLeave = () => {
    isMouseDown.current = false;
  };

  const activeSlot = filteredList[activeIndex] || null;

  // Compute 3D Cover Flow transformation for each card (Mobile responsive)
  const getCardStyle = (index) => {
    const total = filteredList.length;
    let offset = index - activeIndex;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    const absOffset = Math.abs(offset);

    // On mobile screens, hide cards beyond ±2 to keep screen focused, uncluttered, and performant
    const maxVisibleOffset = isMobile ? 2 : 3;
    if (absOffset > maxVisibleOffset) {
      return {
        opacity: 0,
        pointerEvents: 'none',
        visibility: 'hidden',
        transform: `translateX(${offset > 0 ? 140 : -140}%) scale(0.35) rotateY(${offset > 0 ? -45 : 45}deg)`
      };
    }

    if (offset === 0) {
      return {
        transform: isMobile
          ? 'translateX(0%) translateZ(25px) scale(1.0) rotateY(0deg)'
          : 'translateX(0%) translateZ(70px) scale(1.03) rotateY(0deg)',
        zIndex: 12,
        opacity: 1,
        filter: 'brightness(1)',
        cursor: 'default'
      };
    }

    if (offset === -1) {
      return {
        transform: isMobile
          ? 'translateX(calc(-54% - 6px)) translateZ(-15px) scale(0.78) rotateY(18deg)'
          : 'translateX(calc(-56% - 22px)) translateZ(10px) scale(0.86) rotateY(28deg)',
        zIndex: 9,
        opacity: isMobile ? 0.72 : 0.88,
        filter: 'brightness(0.68)',
        cursor: 'pointer'
      };
    }
    if (offset === 1) {
      return {
        transform: isMobile
          ? 'translateX(calc(54% + 6px)) translateZ(-15px) scale(0.78) rotateY(-18deg)'
          : 'translateX(calc(56% + 22px)) translateZ(10px) scale(0.86) rotateY(-28deg)',
        zIndex: 9,
        opacity: isMobile ? 0.72 : 0.88,
        filter: 'brightness(0.68)',
        cursor: 'pointer'
      };
    }

    if (offset === -2) {
      return {
        transform: isMobile
          ? 'translateX(calc(-88% - 10px)) translateZ(-50px) scale(0.60) rotateY(26deg)'
          : 'translateX(calc(-102% - 38px)) translateZ(-70px) scale(0.72) rotateY(38deg)',
        zIndex: 6,
        opacity: isMobile ? 0.35 : 0.58,
        filter: 'brightness(0.4)',
        cursor: 'pointer'
      };
    }
    if (offset === 2) {
      return {
        transform: isMobile
          ? 'translateX(calc(88% + 10px)) translateZ(-50px) scale(0.60) rotateY(-26deg)'
          : 'translateX(calc(102% + 38px)) translateZ(-70px) scale(0.72) rotateY(-38deg)',
        zIndex: 6,
        opacity: isMobile ? 0.35 : 0.58,
        filter: 'brightness(0.4)',
        cursor: 'pointer'
      };
    }

    if (offset === -3) {
      return {
        transform: 'translateX(calc(-140% - 48px)) translateZ(-140px) scale(0.60) rotateY(46deg)',
        zIndex: 4,
        opacity: 0.28,
        filter: 'brightness(0.32)',
        cursor: 'pointer'
      };
    }
    if (offset === 3) {
      return {
        transform: 'translateX(calc(140% + 48px)) translateZ(-140px) scale(0.60) rotateY(-46deg)',
        zIndex: 4,
        opacity: 0.28,
        filter: 'brightness(0.32)',
        cursor: 'pointer'
      };
    }

    return {};
  };

  return (
    <section id="epg" className="epg-section">
      <div className="epg-container">

        {/* Top Badge: ELECTRONIC PROGRAMME GUIDE */}
        <div className="epg-top-badge-wrap">
          <span className="epg-badge">ELECTRONIC PROGRAMME GUIDE</span>
        </div>

        {/* ── 3D COVERFLOW SHOWCASE (EPG FRONT PAGE) ── */}
        {viewMode === 'coverflow' && (
          <div
            ref={stageRef}
            className={`coverflow-stage-outer ${isFullscreen ? 'is-fullscreen' : ''}`}
          >
            {/* Fullscreen Expand/Exit Toggle Button */}
            <button
              className="coverflow-fullscreen-btn"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? 'Exit Fullscreen' : 'Full Screen'}
              title={isFullscreen ? 'Exit Fullscreen' : 'Full Screen'}
            >
              {isFullscreen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                </svg>
              )}
            </button>

            {/* Ambient blurred backdrop echoing current program artwork */}
            <div
              className="coverflow-ambient-bg"
              style={{
                backgroundImage: activeSlot ? `url("${activeSlot.image}")` : 'none'
              }}
            />
            <div className="coverflow-ambient-vignette" />

            {/* Stage Container */}
            <div
              className="coverflow-stage"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchCancel}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            >
              {/* Left Arrow Navigation Button */}
              <button
                className="coverflow-nav-arrow prev"
                onClick={handlePrev}
                aria-label="Previous Programme"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              {/* Right Arrow Navigation Button */}
              <button
                className="coverflow-nav-arrow next"
                onClick={handleNext}
                aria-label="Next Programme"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>

              {/* Cards 3D Perspective Track */}
              <div className="coverflow-cards-track">
                {filteredList.map((slot, index) => {
                  const isCurrent = index === activeIndex;
                  const slotId = `${selectedDay}-${index}`;
                  const isReminder = reminderSet[slotId];
                  const isLive = slot.live && slot === currentSlot;
                  const cardStyle = getCardStyle(index);

                  return (
                    <div
                      key={index}
                      className={`coverflow-card ${isCurrent ? 'is-active' : ''} ${isLive ? 'is-live' : ''}`}
                      style={{
                        ...cardStyle,
                        backgroundImage: `url("${slot.image}")`
                      }}
                      onClick={() => !isCurrent && goToIndex(index)}
                    >
                      {/* Gradient overlay to ensure text contrast */}
                      <div className="coverflow-card-scrim" />

                      {/* CENTERED CONTENT - Exactly as shown in reference image */}
                      {isCurrent ? (
                        <div className="coverflow-card-center-content">
                          <span className="coverflow-card-hashtag">#{slot.category}</span>

                          <h2 className="coverflow-card-title">{slot.title}</h2>

                          <div className="coverflow-card-divider" />

                          <div className="coverflow-card-timing">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span>{slot.time} • {slot.duration}</span>
                          </div>

                          <p className="coverflow-card-host">Hosted by {slot.host}</p>

                          <div className="coverflow-card-actions">
                            <button
                              className={`coverflow-reminder-btn ${isReminder ? 'set' : ''}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleReminder(slotId);
                              }}
                            >
                              {isReminder ? '✓ REMINDER SET' : '+ SET REMINDER'}
                            </button>

                            {isLive && (
                              <button
                                className="coverflow-watch-btn"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  const liveTab = document.querySelector('[data-tab="live"]');
                                  if (liveTab) liveTab.click();
                                  else window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                              >
                                <span className="live-dot-pulse"></span>
                                <span>LIVE NOW</span>
                              </button>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div className="coverflow-side-card-pill">
                          <span>{slot.time}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Scrubber & Info Bar */}
            <div className="coverflow-bottom-bar">
              <div className="coverflow-counter">
                <span className="counter-current">{activeIndex + 1}</span>
                <span className="counter-sep">/</span>
                <span className="counter-total">{filteredList.length}</span>
                <span className="counter-label">PROGRAMMES</span>
              </div>

              {/* Quick Dots Pagination */}
              <div className="coverflow-dots">
                {filteredList.map((_, i) => (
                  <button
                    key={i}
                    className={`coverflow-dot ${i === activeIndex ? 'active' : ''}`}
                    onClick={() => goToIndex(i)}
                    aria-label={`Jump to Programme ${i + 1}`}
                  />
                ))}
              </div>

              {/* Jump to Live Button if applicable */}
              {currentSlot && (
                <button className="coverflow-jump-live-btn" onClick={jumpToNow}>
                  <span className="live-dot-pulse"></span>
                  <span>JUMP TO ON-AIR</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Day Selector Tabs (Positioned directly below the Coverflow front page) */}
        <div className="epg-days-bar">
          {days.map((day) => (
            <button
              key={day}
              className={`epg-day-btn ${selectedDay === day ? 'active' : ''}`}
              onClick={() => setSelectedDay(day)}
            >
              <span className="day-name">{day.substring(0, 3).toUpperCase()}</span>
              <span className="day-full">{day}</span>
            </button>
          ))}
        </div>

        {/* Filter Categories & View Switcher */}
        <div className="epg-filters-bar-wrapper">
          <div className="epg-filters-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`epg-filter-chip ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="epg-view-mode-toggle">
            <button
              className={`view-mode-btn ${viewMode === 'coverflow' ? 'active' : ''}`}
              onClick={() => setViewMode('coverflow')}
              title="3D Coverflow View"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="6" height="18" rx="2" />
                <rect x="9" y="1" width="6" height="22" rx="2" />
                <rect x="16" y="3" width="6" height="18" rx="2" />
              </svg>
              <span>3D Coverflow</span>
            </button>
            <button
              className={`view-mode-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              title="Timeline List View"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" strokeWidth="3" />
                <line x1="3" y1="12" x2="3.01" y2="12" strokeWidth="3" />
                <line x1="3" y1="18" x2="3.01" y2="18" strokeWidth="3" />
              </svg>
              <span>List View</span>
            </button>
          </div>
        </div>

        {/* ── TIMELINE LIST VIEW (Accessible via View Switcher or Secondary) ── */}
        {viewMode === 'list' && (
          <div className="epg-timeline">
            {filteredList.map((slot, index) => {
              const slotId = `${selectedDay}-${index}`;
              const isReminder = reminderSet[slotId];
              const isLive = slot.live && slot === currentSlot;

              return (
                <div key={index} className={`epg-slot-card ${isLive ? 'is-live' : ''}`}>
                  <div className="epg-slot-time-col">
                    <span className="slot-time">{slot.time}</span>
                    <span className="slot-duration">{slot.duration}</span>
                  </div>

                  <div className="epg-slot-img-col" style={{ backgroundImage: `url("${slot.image}")` }}>
                    {isLive && <span className="live-pill">&bull; LIVE NOW</span>}
                  </div>

                  <div className="epg-slot-info-col">
                    <div className="epg-slot-meta">
                      <span className="slot-category">{slot.category}</span>
                      <span className="slot-host">Hosted by {slot.host}</span>
                    </div>
                    <h3 className="slot-title">{slot.title}</h3>
                  </div>

                  <div className="epg-slot-action-col">
                    <button
                      className={`reminder-btn ${isReminder ? 'set' : ''}`}
                      onClick={() => toggleReminder(slotId)}
                    >
                      {isReminder ? '✓ REMINDER SET' : '+ SET REMINDER'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

export default Schedule;
