
import React, { useState, useEffect, useRef } from 'react';
import './HealingStreamsModal.css';

// Import images
import HSLHSWPC from '../../images/HealingImages/HSLHSWPC.jpeg';
import HS1 from '../../images/HealingImages/HS1.jpeg';
import HS2 from '../../images/HealingImages/HS2.jpeg';
import HS3 from '../../images/HealingImages/HS3.jpeg';
import HS4 from '../../images/HealingImages/HS4.jpeg';
import HS5 from '../../images/HealingImages/HS5.jpeg';
import HS6 from '../../images/HealingImages/HS6.jpeg';

const TOTAL_PAGES = 5;

// All Healing Streams Images for the Left Image Gallery Showcase
const ALL_GALLERY_IMAGES = [
  {
    id: 'cover',
    src: HSLHSWPC,
    caption: 'Official Broadcast Flyer & Registration',
    tag: 'OCTOBER 23–25, 2026'
  },
  {
    id: 'hs1',
    src: HS1,
    caption: 'Pastor Chris Oyakhilome Ministering Live',
    tag: 'OUTPOURING OF GRACE'
  },
  {
    id: 'hs2',
    src: HS2,
    caption: 'Atmosphere of Prayer, Faith & Miracles',
    tag: 'HEALING SERVICE'
  },
  {
    id: 'hs3',
    src: HS3,
    caption: 'Demonstrations of the Power of the Holy Spirit',
    tag: 'SUPERNATURAL TOUCH'
  },
  {
    id: 'hs4',
    src: HS4,
    caption: 'Millions Reached Across Continents and Languages',
    tag: 'GLOBAL IMPACT'
  },
  {
    id: 'hs5',
    src: HS5,
    caption: 'Substantiated Recoveries & Miracle Testimonies',
    tag: 'TESTIMONIES'
  },
  {
    id: 'hs6',
    src: HS6,
    caption: 'Unprecedented Global Manifestation of God’s Mercy',
    tag: 'FINAL 2026 EDITION'
  }
];

const HealingStreamsModal = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0); // 0 to 4
  const [activeImageIndex, setActiveImageIndex] = useState(0); // 0 to 6 (all images)
  const [expandedPages, setExpandedPages] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false
  });

  const togglePageExpand = (pageIdx) => {
    setExpandedPages((prev) => ({
      ...prev,
      [pageIdx]: !prev[pageIdx]
    }));
  };

  const renderReadMoreBtn = (pageIdx) => {
    const isExpanded = Boolean(expandedPages[pageIdx]);
    return (
      <div className="hs-read-more-wrapper">
        <button
          type="button"
          className={`hs-read-more-btn ${isExpanded ? 'expanded' : ''}`}
          onClick={() => togglePageExpand(pageIdx)}
        >
          <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {isExpanded ? (
              <polyline points="18 15 12 9 6 15"></polyline>
            ) : (
              <polyline points="6 9 12 15 18 9"></polyline>
            )}
          </svg>
        </button>
      </div>
    );
  };

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isSwiping = useRef(false);

  // Sync active image with current page when page changes
  useEffect(() => {
    const pageImageMap = [0, 1, 2, 4, 6];
    setActiveImageIndex(pageImageMap[currentPage] ?? 0);
  }, [currentPage]);

  // Close on Escape key and handle ArrowLeft/ArrowRight
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === 'ArrowRight') {
        setCurrentPage((prev) => (prev < TOTAL_PAGES - 1 ? prev + 1 : prev));
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrevPage = (e) => {
    if (e) e.stopPropagation();
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = (e) => {
    if (e) e.stopPropagation();
    setCurrentPage((prev) => Math.min(TOTAL_PAGES - 1, prev + 1));
  };

  const goToPage = (index) => {
    setCurrentPage(index);
  };

  // Image Gallery Next/Prev Handlers (User can browse all images anytime)
  const handlePrevImage = (e) => {
    if (e) e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? ALL_GALLERY_IMAGES.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    if (e) e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % ALL_GALLERY_IMAGES.length);
  };

  // Touch handlers for horizontal swipe between pages
  const handleTouchStart = (e) => {
    if (!e.touches || !e.touches[0]) return;
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    isSwiping.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isSwiping.current || !e.touches || !e.touches[0]) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isSwiping.current) return;
    isSwiping.current = false;
    const diffX = touchStartX.current - touchEndX.current;
    if (Math.abs(diffX) >= 45) {
      if (diffX > 0 && currentPage < TOTAL_PAGES - 1) {
        handleNextPage();
      } else if (diffX < 0 && currentPage > 0) {
        handlePrevPage();
      }
    }
  };


  // Current active media component to render on the left
  const currentPhoto = ALL_GALLERY_IMAGES[activeImageIndex] || ALL_GALLERY_IMAGES[0];

  // Reusable Media Column Render (Square Photo Container requested by user)
  const renderMediaColumn = () => (
    <div className="hs-page-media-col">
      {/* LANDSCAPE PHOTO FRAME — fills entire left column */}
      <div className="hs-landscape-image-wrapper">
        <img
          src={currentPhoto.src}
          alt={currentPhoto.caption}
          className="hs-landscape-image"
        />

        {/* Prev/Next arrows */}
        <button
          type="button"
          className="hs-square-arrow-btn prev"
          onClick={handlePrevImage}
          aria-label="Previous image"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <button
          type="button"
          className="hs-square-arrow-btn next"
          onClick={handleNextImage}
          aria-label="Next image"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Bottom overlay caption bar */}
        <div className="hs-landscape-caption-bar">
          <span className="hs-landscape-caption-dot"></span>
          <div className="hs-landscape-caption-text">
            <span className="hs-landscape-caption-title">{currentPhoto.tag}</span>
            <span className="hs-landscape-caption-sub">{currentPhoto.caption}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="hs-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="hs-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Top Header Bar */}
        <header className="hs-modal-header">
          <div className="hs-modal-header-left">
            <span className="hs-badge-live">
              <span className="hs-live-dot"></span> LIVE BROADCAST
            </span>
            <span className="hs-modal-header-subtitle">
              Healing Streams Live Healing Services • Special Program
            </span>
          </div>

          <div className="hs-modal-header-actions">
            <a
              href="https://healingstreams.org/?r=LWIN"
              target="_blank"
              rel="noopener noreferrer"
              className="hs-header-cta-btn"
            >
              Register Free
            </a>
            <button
              className="hs-modal-close-btn"
              onClick={onClose}
              aria-label="Close dialog"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </header>

        {/* Carousel / Side Scrollable Pages Container */}
        <div
          className="hs-pages-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="hs-pages-track"
            style={{
              transform: `translateX(-${(currentPage * 100) / TOTAL_PAGES}%)`
            }}
          >
            {/* =========================================================================
                PAGE 1: GLOBAL EXPECTATION & AN OPEN INVITATION TO THE WORLD
               ========================================================================= */}
            <div className="hs-page-slide">
              <div className="hs-page-card">
                {renderMediaColumn()}

                {/* RIGHT CONTENT COLUMN: Scrollable */}
                <div className="hs-page-content-col">
                  <div className="hs-page-scrollable-inner">
                    <span className="hs-page-kicker">SPECIAL GLOBAL EDITION</span>
                    <h1 className="hs-page-title">
                      GLOBAL EXPECTATION SOARS AS HEALING STREAMS RETURNS FOR FINAL 2026 EDITION
                    </h1>

                    <div className="hs-doc-meta-strip">
                      <span className="hs-meta-pill"><strong>Convener:</strong> <strong className="hs-gold-name">Pastor Chris Oyakhilome</strong></span>
                      <span className="hs-meta-pill"><strong>Daily:</strong> 2:00 PM (GMT+1) / 6:30 PM (IST)</span>
                      <span className="hs-meta-pill"><strong>Platform:</strong> Healing Streams TV</span>
                    </div>

                    <p className="hs-page-lead">
                      The <strong>Healing Streams Live Healing Services</strong> with <strong className="hs-gold-name">Pastor Chris Oyakhilome</strong> returns this month, from October 23 to 25, at 2:00 PM (GMT+1) daily, heightening global expectations for another magnificent outpouring of the healing power of God. Building on the remarkable precedent of previous editions, the three-day global event is set to usher in an extraordinary wave of miraculous healings, with people from all walks of life experiencing instantaneous and remarkable changes in their bodies and circumstances.
                    </p>

                    <p className="hs-page-p">
                      The significance of this final edition of 2026 is not lost on many, making the occasion even more momentous as billions seize the opportunity to experience the love and visceral mercies of God made manifest.
                    </p>

                    {/* Mobile Read More toggle & Quick Next */}
                    <div className="hs-mobile-mid-actions">
                      {renderReadMoreBtn(0)}
                      <button className="hs-mobile-quick-next-btn" onClick={handleNextPage}>
                        Next →
                      </button>
                    </div>

                    <div className={`hs-expandable-section ${expandedPages[0] ? 'open' : ''}`}>
                      <div className="hs-page-divider"></div>

                      <h2 className="hs-page-subtitle">
                        <span className="hs-sub-icon">🌐</span> AN OPEN INVITATION TO THE WORLD
                      </h2>

                      <p className="hs-page-p">
                        Registration is free and open to everyone worldwide at{' '}
                        <a
                          href="https://healingstreams.org/?r=LWIN"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hs-highlight-link"
                        >
                          healingstreams.org
                        </a>
                        . Registrants are encouraged to indicate if they or their loved ones need healing so they can receive tailored guidance and access preparatory faith classes and materials designed to help them prepare for their miracle.
                      </p>

                      <p className="hs-page-p">
                        The invitation, however, extends far beyond those who are sick. Pastor Chris Oyakhilome, convener of the event, has repeatedly emphasized that everyone needs God's Word, making the program an opportunity for people of every age and circumstance to encounter the message of Christ, strengthen their faith, and experience the blessings of God's presence.
                      </p>

                      <div className="hs-page-action-row">
                        <button className="hs-card-btn-gold" onClick={handleNextPage}>
                          Next: One Message, Every Language →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================================
                PAGE 2: ONE MESSAGE & “WE CAN CHANGE THEIR WORLD”
               ========================================================================= */}
            <div className="hs-page-slide">
              <div className="hs-page-card">
                {renderMediaColumn()}

                <div className="hs-page-content-col">
                  <div className="hs-page-scrollable-inner">
                    <span className="hs-page-kicker">WORLDWIDE UNITY</span>
                    <h2 className="hs-page-title">
                      ONE MESSAGE, EVERY LANGUAGE, EVERY NATION
                    </h2>

                    <p className="hs-page-lead">
                      As is customary, the edition will be streamed live and translated into all languages and major dialects, bringing people of diverse cultures and backgrounds together in a landmark, unified experience of the Word. Across towns, villages, communities, hospitals, streets, prisons, orphanages, neighborhoods, homes, cities, states, and nations, millions of Healing Centers have been established in preparation for the event, creating easy access for people to participate as groups, families, or individuals.
                    </p>

                    {/* Mobile Read More toggle & Quick Next */}
                    <div className="hs-mobile-mid-actions">
                      {renderReadMoreBtn(1)}
                      <button className="hs-mobile-quick-next-btn" onClick={handleNextPage}>
                        Next →
                      </button>
                    </div>

                    <div className={`hs-expandable-section ${expandedPages[1] ? 'open' : ''}`}>
                      <div className="hs-page-divider"></div>

                      <h2 className="hs-page-subtitle">
                        <span className="hs-sub-icon">📣</span> “WE CAN CHANGE THEIR WORLD” — A GLOBAL CALL FROM PASTOR CHRIS
                      </h2>

                      <p className="hs-page-p">
                        Underscoring the import of the edition, Pastor Chris Oyakhilome has issued a stirring call for an unprecedented global mobilization. Speaking recently at the Global Communion Service, he stated:
                      </p>

                      <blockquote className="hs-quote-callout">
                        <div className="hs-quote-icon">“</div>
                        <p className="hs-quote-message">
                          It’s just a few more days; we will have the Healing Streams Live Healing Services, and it is going to be huge. By the power of the Holy Spirit, the healing graces of God, the Angels of God, will cover this world, and many will be healed; especially in this month of mercies.
                        </p>
                        <cite className="hs-quote-author">— Pastor Chris Oyakhilome</cite>
                      </blockquote>

                      <p className="hs-page-p">
                        He emphasized the significance of the program for the many for whom this is their only hope of getting well, urging ministers of the Gospel worldwide to work together to make the event a major global outreach:
                      </p>

                      <blockquote className="hs-quote-callout gold-border">
                        <div className="hs-quote-icon">“</div>
                        <p className="hs-quote-message">
                          We have to mobilize all that the Lord has given us authority to control and to influence. Get everyone ready for Healing Streams. We can change their world.
                        </p>
                        <cite className="hs-quote-author">— Pastor Chris Oyakhilome</cite>
                      </blockquote>

                      <p className="hs-page-p">
                        Pastor Chris further pointed to the dramatic healings witnessed during previous editions, averring that:
                      </p>

                      <blockquote className="hs-quote-callout">
                        <div className="hs-quote-icon">“</div>
                        <p className="hs-quote-message">
                          This is something that will bring so much blessing to old and young alike. Think about babies, children who have never walked because of some debilitating disease. And during the Healing Streams, they will begin to walk. The deaf will hear, the dumb will speak, the blind will see; God’s going to change their world completely because of the Healing Streams. Even the dead will be raised.
                        </p>
                        <cite className="hs-quote-author">— Pastor Chris Oyakhilome</cite>
                      </blockquote>

                      <p className="hs-page-p">
                        He concluded with a call for people everywhere to look forward to the program and prepare for what he described as a global manifestation of God’s glory:
                      </p>

                      <blockquote className="hs-quote-callout gold-border">
                        <div className="hs-quote-icon">“</div>
                        <p className="hs-quote-message">
                          I want you to look forward to Healing Streams, prepare for it, plan for it; because the glory of God will be made manifest around the world.
                        </p>
                        <cite className="hs-quote-author">— Pastor Chris Oyakhilome</cite>
                      </blockquote>

                      <div className="hs-page-action-row">
                        <button className="hs-card-btn-ghost" onClick={handlePrevPage}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                          </svg>
                          <span>Prev</span>
                        </button>
                        <button className="hs-card-btn-gold" onClick={handleNextPage}>
                          Next: Testimonies & Expectations →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================================
                PAGE 3: A LEGACY OF PHENOMENAL TESTIMONIES & EXPECTATIONS ACROSS NATIONS
               ========================================================================= */}
            <div className="hs-page-slide">
              <div className="hs-page-card">
                {renderMediaColumn()}

                <div className="hs-page-content-col">
                  <div className="hs-page-scrollable-inner">
                    <span className="hs-page-kicker">DIVINE EVIDENCE</span>
                    <h2 className="hs-page-title">
                      A LEGACY OF PHENOMENAL TESTIMONIES
                    </h2>

                    <p className="hs-page-lead">
                      Since its inception, the program has recorded millions of substantiated testimonies of remarkable healings and supernatural transformations, including recoveries from life-threatening conditions, as well as dramatic changes in the circumstances and affairs of participants.
                    </p>

                    <p className="hs-page-p">
                      These testimonies, from different nations and diverse backgrounds, continue to fuel global expectation for each new edition, making the Healing Streams an epitome of God’s healing grace manifested to humanity today.
                    </p>

                    <div className="hs-legacy-stats-grid">
                      <div className="hs-stat-card">
                        <span className="hs-stat-id">01</span>
                        <span className="hs-stat-number">Billions</span>
                        <span className="hs-stat-label">Global Viewers Reached</span>
                        <p className="hs-stat-sub">Across 200+ countries & territories</p>
                      </div>

                      <div className="hs-stat-card">
                        <span className="hs-stat-id">02</span>
                        <span className="hs-stat-number">Millions</span>
                        <span className="hs-stat-label">Substantiated Miracles</span>
                        <p className="hs-stat-sub">From paralysis, cancer, blindness & more</p>
                      </div>

                      <div className="hs-stat-card">
                        <span className="hs-stat-id">03</span>
                        <span className="hs-stat-number">7,000+</span>
                        <span className="hs-stat-label">Languages & Dialects</span>
                        <p className="hs-stat-sub">Simultaneous live translations</p>
                      </div>

                      <div className="hs-stat-card">
                        <span className="hs-stat-id">04</span>
                        <span className="hs-stat-number">Millions</span>
                        <span className="hs-stat-label">Healing Centers</span>
                        <p className="hs-stat-sub">Established globally in communities</p>
                      </div>
                    </div>

                    {/* Mobile Read More toggle & Quick Next */}
                    <div className="hs-mobile-mid-actions">
                      {renderReadMoreBtn(2)}
                      <button className="hs-mobile-quick-next-btn" onClick={handleNextPage}>
                        Next →
                      </button>
                    </div>

                    <div className={`hs-expandable-section ${expandedPages[2] ? 'open' : ''}`}>
                      <div className="hs-page-divider"></div>

                      <span className="hs-page-kicker">FAITH AT FEVER PITCH</span>
                      <h2 className="hs-page-title">
                        EXPECTATIONS SOAR ACROSS THE NATIONS
                      </h2>

                      <p className="hs-page-lead">
                        With just a few days to go, global preparations and expectations are reaching a fever pitch, with millions daring to believe that the seemingly impossible will become possible.
                      </p>

                      <div className="hs-editorial-quotes-list">
                        {/* Sakshi Telure */}
                        <div className="hs-editorial-person-card">
                          <div className="hs-person-top">
                            <span className="hs-person-flag-round">🇮🇳</span>
                            <div className="hs-person-id">
                              <span className="hs-person-name">Sakshi Telure</span>
                              <span className="hs-person-location">India</span>
                            </div>
                          </div>
                          <p className="hs-person-statement">
                            “I’m filled with expectation for this edition of the Healing Streams Live Healing Services. I believe even more amazing things are going to happen this time, and I’m excited to share the news with everyone I know. I encourage you to share it with your friends and family because I believe that, whether you need healing, restoration, or a breakthrough in any area of your life, you can receive your miracle. I’m so excited and full of expectation for what God is going to do. I believe many people will experience the Lord’s grace, mercy, and love through the Healing Streams Live Healing Services. Praise the Lord!”
                          </p>
                        </div>

                        {/* Shabib */}
                        <div className="hs-editorial-person-card">
                          <div className="hs-person-top">
                            <span className="hs-person-flag-round">🇳🇬</span>
                            <div className="hs-person-id">
                              <span className="hs-person-name">Shabib</span>
                              <span className="hs-person-location">Nigeria</span>
                            </div>
                          </div>
                          <p className="hs-person-statement">
                            “I’m expecting a miracle in my health and finances in this edition. I believe the pain I have suffered for many years due to a spinal injury will finally leave me permanently, along with the high blood pressure and weakness that have plagued me. My faith is high, and my expectation shall not be cut off.”
                          </p>
                        </div>

                        {/* Vanessa */}
                        <div className="hs-editorial-person-card">
                          <div className="hs-person-top">
                            <span className="hs-person-flag-round">🇨🇦</span>
                            <div className="hs-person-id">
                              <span className="hs-person-name">Vanessa</span>
                              <span className="hs-person-location">Canada</span>
                            </div>
                          </div>
                          <p className="hs-person-statement">
                            “I’m expecting this Healing Streams to reach people who may have lost hope and their way, especially in my country. I believe many will encounter the healing power of God and experience miracles they never thought possible, and, most importantly, receive salvation.”
                          </p>
                        </div>

                        {/* Steve */}
                        <div className="hs-editorial-person-card">
                          <div className="hs-person-top">
                            <span className="hs-person-flag-round">🇩🇪</span>
                            <div className="hs-person-id">
                              <span className="hs-person-name">Steve</span>
                              <span className="hs-person-location">Germany</span>
                            </div>
                          </div>
                          <p className="hs-person-statement">
                            “I expect that this edition will surpass everything we have witnessed before. I’m looking forward to countless testimonies of healing, restoration, and salvation from people across the nations.”
                          </p>
                        </div>
                      </div>

                      <div className="hs-page-action-row">
                        <button className="hs-card-btn-ghost" onClick={handlePrevPage}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                          </svg>
                          <span>Prev</span>
                        </button>
                        <button className="hs-card-btn-gold" onClick={handleNextPage}>
                          Next: Global Mobilisation →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================================
                PAGE 4: GLOBAL MOBILISATION & ROAD TO HEALING STREAMS S18
               ========================================================================= */}
            <div className="hs-page-slide">
              <div className="hs-page-card">
                {renderMediaColumn()}

                <div className="hs-page-content-col">
                  <div className="hs-page-scrollable-inner">
                    <span className="hs-page-kicker">MOMENTUM BUILDING</span>
                    <h2 className="hs-page-title">
                      A GLOBAL MOBILISATION AT FULL FORCE
                    </h2>

                    <p className="hs-page-lead">
                      Daily, millions of individuals around the world herald the news of the program to the doorsteps of many more, determined to ensure that no one who needs healing is left behind in accessing this final edition of the year.
                    </p>

                    <p className="hs-page-p">
                      From the establishment of Healing Centers in communities and locations around the world to strengthening faith and expectation through the <em>Healing to the Nations</em> magazines, preparations are intensifying on every front. Meanwhile, the ongoing 24/7 prayer chain continues to fill the atmosphere with the fervent prayers of countless Christians around the world as they intercede for the sick and make tremendous power available for all who will participate.
                    </p>

                    {/* Mobile Read More toggle & Quick Next */}
                    <div className="hs-mobile-mid-actions">
                      {renderReadMoreBtn(3)}
                      <button className="hs-mobile-quick-next-btn" onClick={handleNextPage}>
                        Next →
                      </button>
                    </div>

                    <div className={`hs-expandable-section ${expandedPages[3] ? 'open' : ''}`}>
                      <div className="hs-page-divider"></div>

                      <h2 className="hs-page-subtitle">
                        <span className="hs-sub-icon">📺</span> ROAD TO HEALING STREAMS RETURNS WITH SEASON 18
                      </h2>

                      <p className="hs-page-p">
                        Crowning the global mobilization is <strong>Road to Healing Streams Live Healing Services S18</strong>, a special daily broadcast documenting the remarkable preparations, inspiring testimonies, and growing wave of faith unfolding worldwide ahead of the event.
                      </p>

                      <div className="hs-broadcast-schedule-box">
                        <div className="hs-sched-badge">EXCLUSIVE BROADCAST HOURS</div>
                        <div className="hs-sched-details">
                          <span className="hs-sched-channel">Healing Streams TV</span>
                          <span className="hs-sched-time">Daily at 12:00 Noon & 4:00 PM (GMT+1)</span>
                          <span className="hs-sched-date">Broadcasting until Thursday, October 22</span>
                        </div>
                      </div>

                      <p className="hs-page-p">
                        The program offers viewers an exclusive look at the activities of ministries, churches, organizations, volunteers, and individuals across the globe as they prepare their communities through healing crusades, evangelism campaigns, strategic prayer initiatives, Healing Center mobilization, community outreaches, and other faith-building activities.
                      </p>

                      <p className="hs-page-p">
                        The broadcast also features inspiring testimonies from participants and recipients already experiencing remarkable miracles as they prepare through prayer, faith, and the application of God’s Word.
                      </p>

                      <div className="hs-page-action-row">
                        <button className="hs-card-btn-ghost" onClick={handlePrevPage}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                          </svg>
                          <span>Prev</span>
                        </button>
                        <button className="hs-card-btn-gold" onClick={handleNextPage}>
                          Next: Miracles & Global Experience →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================================
                PAGE 5: MIRACULOUS MOMENTS FROM JULY & JOIN THE EXPERIENCE
               ========================================================================= */}
            <div className="hs-page-slide">
              <div className="hs-page-card">
                {renderMediaColumn()}

                <div className="hs-page-content-col">
                  <div className="hs-page-scrollable-inner">
                    <span className="hs-page-kicker">RECENT MANIFESTATIONS</span>
                    <h2 className="hs-page-title">
                      MIRACULOUS MOMENTS FROM THE JULY EDITION
                    </h2>

                    <div className="hs-miracles-collection">
                      <div className="hs-miracle-entry">
                        <div className="hs-miracle-badge-pill">PANAMÁ 🇵🇦</div>
                        <h4 className="hs-miracle-person">José Marín</h4>
                        <p className="hs-miracle-desc">
                          José Marín had suffered severe pain and limited mobility in his leg and spine for two years following an accident. During the July Healing Streams, he received his healing as Pastor Chris prayed for the sick. The pain disappeared completely, his strength was restored, and he can now move freely without discomfort.
                        </p>
                      </div>

                      <div className="hs-miracle-entry">
                        <div className="hs-miracle-badge-pill">VIETNAM 🇻🇳</div>
                        <h4 className="hs-miracle-person">Cheany’s Son</h4>
                        <p className="hs-miracle-desc">
                          Cheany’s son had spent 28 days on a ventilator after his right lung collapsed. While participating in the Healing Streams from his hospital bedside, Cheany laid hands on him as Pastor Chris prayed. She subsequently reported significant improvement in her son’s condition.
                        </p>
                      </div>

                      <div className="hs-miracle-entry">
                        <div className="hs-miracle-badge-pill">CANADA 🇨🇦</div>
                        <h4 className="hs-miracle-person">Vanessa</h4>
                        <p className="hs-miracle-desc">
                          Vanessa had lived with type 2 diabetes for five years, alongside neuropathy, vision problems, and severe pain and swelling in her feet. Following her participation in the July Healing Streams, she reported that the burning, tingling, and swelling had disappeared and that she could walk, sit, and stand comfortably.
                        </p>
                      </div>

                      <div className="hs-miracle-entry">
                        <div className="hs-miracle-badge-pill">NIGERIA 🇳🇬</div>
                        <h4 className="hs-miracle-person">Pauline Atu — Cross River</h4>
                        <p className="hs-miracle-desc">
                          Pauline Atu from Cross River had suffered from arthritis for a year, making it difficult to walk, run, jump, sit, or sleep without pain. During the Healing Streams, she received her healing and can now walk, run, and jump freely.
                        </p>
                      </div>

                      <div className="hs-miracle-entry">
                        <div className="hs-miracle-badge-pill">ECUADOR 🇪🇨</div>
                        <h4 className="hs-miracle-person">Adiel (Age 5)</h4>
                        <p className="hs-miracle-desc">
                          Five-year-old Adiel had been unable to speak properly since birth. His mother brought him to the Healing Streams Crusade center, believing God for a miracle. Right there, as Pastor Chris ministered to the sick, Adiel began speaking clearly for the first time and is now communicating fluently.
                        </p>
                      </div>
                    </div>

                    {/* Mobile Read More toggle & Quick Next */}
                    <div className="hs-mobile-mid-actions">
                      {renderReadMoreBtn(4)}
                      <button className="hs-mobile-quick-next-btn" onClick={() => goToPage(0)}>
                        Back to Start
                      </button>
                    </div>

                    <div className={`hs-expandable-section ${expandedPages[4] ? 'open' : ''}`}>
                      <div className="hs-page-divider"></div>

                      <h2 className="hs-page-subtitle">
                        <span className="hs-sub-icon">🌐</span> JOIN THE GLOBAL EXPERIENCE
                      </h2>

                      <p className="hs-page-p">
                        The stage is set as the world prepares for the miracles. The live services begin at <strong>2:00 PM (GMT+1) daily</strong> and will be streamed live on <strong>Healing Streams TV</strong>, all <strong>LoveWorld Networks</strong>, and select terrestrial television and radio stations worldwide.
                      </p>

                      <div className="hs-contact-block">
                        <div className="hs-contact-row-top">
                          <span className="hs-contact-brand">Healing Streams Communications</span>
                          <a href="mailto:info@healingstreams.tv" className="hs-contact-email-link">
                            ✉ info@healingstreams.tv
                          </a>
                        </div>

                        <div className="hs-phones-compact-grid">
                          <div className="hs-phone-cell"><span>South Africa:</span> <a href="tel:+27799675852">+27 799 675 852</a></div>
                          <div className="hs-phone-cell"><span>Nigeria:</span> <a href="tel:+23418885066">+234 (1) 888 5066</a></div>
                          <div className="hs-phone-cell"><span>USA:</span> <a href="tel:+18327249390">+1 832 724 9390</a></div>
                          <div className="hs-phone-cell"><span>Canada:</span> <a href="tel:+12896221634">+1 289 622 1634</a></div>
                          <div className="hs-phone-cell"><span>UK:</span> <a href="tel:+4403331880710">+44 (0) 333 188 0710</a></div>
                          <div className="hs-phone-cell"><span>Asia:</span> <a href="tel:+919650096633">+91 96500 96633</a></div>
                          <div className="hs-phone-cell"><span>India:</span> <a href="tel:+917794993762">+91 77949 93762</a></div>
                        </div>

                        <div className="hs-final-cta-group">
                          <a
                            href="https://healingstreams.org/?r=LWIN"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hs-primary-register-btn"
                          >
                            Register Free on healingstreams.org
                          </a>
                          <a
                            href="https://healingstreams.tv"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hs-secondary-portal-btn"
                          >
                            Visit healingstreams.tv ↗
                          </a>
                        </div>
                      </div>

                      <div className="hs-page-action-row">
                        <button className="hs-card-btn-ghost" onClick={handlePrevPage}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                          </svg>
                          <span>Prev</span>
                        </button>
                        <button className="hs-card-btn-gold" onClick={() => goToPage(0)}>
                          Back to Start
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER WITH ROUND CIRCLE PROGRESS INDICATOR */}
        <footer className="hs-modal-footer">
          <button
            className={`hs-nav-arrow-btn prev ${currentPage === 0 ? 'disabled' : ''}`}
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            aria-label="Previous Page"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <span className="hs-nav-arrow-text">Prev</span>
          </button>

          {/* EXACT ROUND CIRCLES PROGRESS INDICATOR (MATCHING USER REFERENCE IMAGE) */}
          <div className="hs-circles-progress-wrapper" role="tablist" aria-label="Page Progress">
            {Array.from({ length: TOTAL_PAGES }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`hs-progress-circle-dot ${currentPage === idx ? 'active' : ''}`}
                onClick={() => goToPage(idx)}
                aria-label={`Go to page ${idx + 1}`}
                role="tab"
                aria-selected={currentPage === idx}
              >
                <span className="hs-circle-inner-dot"></span>
              </button>
            ))}
          </div>

          <div className="hs-footer-right-group">
            <span className="hs-page-indicator-text">
              Page <strong className="hs-current-num">{currentPage + 1}</strong> of {TOTAL_PAGES}
            </span>

            <button
              className={`hs-nav-arrow-btn next ${currentPage === TOTAL_PAGES - 1 ? 'disabled' : ''}`}
              onClick={handleNextPage}
              disabled={currentPage === TOTAL_PAGES - 1}
              aria-label="Next Page"
            >
              <span className="hs-nav-arrow-text">Next</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HealingStreamsModal;


