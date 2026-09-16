import { useState, useEffect, useRef } from 'react';
import './ImageGallery.css';
import theTrumpet from '../../images/Trumpet.png';
import wordAtWork from '../../images/TheWordatWork.png';
import craftingFaith from '../../images/Crafting Faith.png';
import moneyMatters from '../../images/MONEY MATTERS (1).png';
import teevablaze from '../../images/TEEVABLAZE .png';
import drPrashanti from '../../images/Wholeness (1).png';
import igniteImg from '../../images/YOUTHIgnite.png';
import timelessParagon from '../../images/timeless_paragon_new.jpg';

const ImageGallery = ({ onNavigateProgrammes }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { id: 1, src: theTrumpet, video: '/Videos/THE_TRUMPET_NEW.mp4', title: 'The Trumpet – Vijay Bansode', category: 'TALK SHOWS', caption: 'Inspiring insights and prophetic conversations on faith, ministry, and current events.' },
    { id: 2, src: wordAtWork, video: '/Videos/TheWordAtWork.mp4', title: 'Word At Work – Studio Broadcast', category: 'TALK SHOWS', caption: 'Inspired, equipped, and empowered — panel discussions exploring God’s Word in action.' },
    { id: 3, src: craftingFaith, video: '/CRAFTING%20FAITH.mp4', title: 'Crafting Faith – Studio & Creative Show', category: 'PROGRAMMES', caption: 'Create · Believe · Inspire — faith through art and hands-on creativity.' },
    { id: 4, src: moneyMatters, video: '/Videos/MoneyMatters.mp4', title: 'Money Matters – Biblical Wisdom', category: 'PROGRAMMES', caption: 'Biblical stewardship, financial intelligence, and freedom on LBN.' },
    { id: 5, src: teevablaze,video: '/Videos/Teevablaze.mp4', title: 'TEEV-Blaze – Youth Broadcast', category: 'TEENS & YOUTH', caption: 'Dynamic faith, contemporary discussions, and youth inspiration.' },
    { id: 7, src: drPrashanti, video: '/Videos/WholenessWithDrPrashanti.mp4', title: 'Wholeness with Dr. Prashanti', category: 'HEALTH', caption: 'Mind · Body · Purpose — divine health and vitality from a faith-filled perspective.' },
    { id: 8, src: igniteImg, video: '/Videos/Ignite.mp4', title: 'Ignite Show – Youth & Culture', category: 'TEENS & YOUTH', caption: 'Exploring the intersection of youth culture, adolescence, and vibrant faith.' },
    { id: 9, src: timelessParagon, video: '/Videos/TIMELESS.mp4', title: 'Timeless Paragon – Kids Show', category: 'KIDS', caption: 'Fun, engaging studio episodes empowering children with scripture wisdom and faith values.' }
  ];

  // All items visible in horizontal scroll row
  const visibleItems = galleryItems;

  const currentIndex = selectedImage
    ? visibleItems.findIndex((item) => item.id === selectedImage.id)
    : -1;

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    setSelectedImage(visibleItems[prevIndex]);
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % visibleItems.length;
    setSelectedImage(visibleItems[nextIndex]);
  };

  // Keyboard navigation for lightbox (ArrowLeft / ArrowRight / Escape)
  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  // Touch swipe support for lightbox modal on mobile
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const handleModalTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    }
  };

  const handleModalTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    if (e.changedTouches && e.changedTouches[0]) {
      const diffX = touchStartX.current - e.changedTouches[0].clientX;
      const diffY = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
        if (diffX > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const handleSeeMore = () => {
    if (onNavigateProgrammes) {
      onNavigateProgrammes();
    } else {
      const progSection = document.getElementById('programmes');
      if (progSection) {
        progSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">

        {/* Header */}
        <div className="gallery-header">
          <div className="gallery-header-row">
            <div>
              <span className="gallery-badge">NETWORK HIGHLIGHTS</span>
              <h2 className="gallery-title">BROADCAST MOMENTS &amp; HIGHLIGHTS</h2>
              <p className="gallery-subtitle">
                Explore snapshots from our live broadcasts, talk shows, kids specials, and uplifting faith programs.
              </p>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Grid (Clean touch & mouse scroll, without floating arrow button) */}
        <div className="gallery-grid">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setSelectedImage(item)}
            >
              <div className="gallery-img-wrapper">
                <img
                  src={item.src}
                  alt={item.title}
                  className="gallery-img"
                  loading="lazy"
                  decoding="async"
                />
                <span className="gallery-cat-pill-overlay">{item.category}</span>
                {item.video && (
                  <span className="gallery-video-badge">
                    ▶ VIDEO PROMO
                  </span>
                )}
              </div>
              <div className="gallery-card-info">
                <h3 className="gallery-card-title">{item.title}</h3>
                <p className="gallery-card-caption">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* See More connected directly to Programmes Section Page */}
        <div className="gallery-more-container">
          <button
            className="gallery-see-more-btn"
            onClick={handleSeeMore}
            title="Explore all broadcast programmes and guide"
          >
            <span>SEE MORE IN PROGRAMMES</span>
            <svg
              className="see-more-arrow-right"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={() => setSelectedImage(null)}
          onTouchStart={handleModalTouchStart}
          onTouchEnd={handleModalTouchEnd}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {/* Back / Close Cross Button on Left Side */}
            <button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Back / Close">
              &times;
            </button>
            
            {/* Promo Counter Badge on Right Side */}
            {currentIndex !== -1 && (
              <div className="lightbox-promo-counter">
                <span>PROMO {currentIndex + 1} OF {visibleItems.length}</span>
              </div>
            )}

            {selectedImage.video ? (
              <div className="lightbox-video-container">
                <video
                  key={selectedImage.video}
                  src={selectedImage.video}
                  poster={selectedImage.src}
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="lightbox-video-player"
                  ref={(el) => {
                    if (el) {
                      el.muted = true;
                      el.playsInline = true;
                    }
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <img src={selectedImage.src} alt={selectedImage.title} className="lightbox-img" />
            )}

            <div className="lightbox-info">
              <div className="lightbox-meta-row">
                <span className="lightbox-cat">{selectedImage.category}</span>
                {currentIndex !== -1 && (
                  <span className="lightbox-index-pill">{currentIndex + 1} / {visibleItems.length}</span>
                )}
              </div>
              <h3 className="lightbox-title">{selectedImage.title}</h3>
              <p className="lightbox-caption">{selectedImage.caption}</p>

              <div className="lightbox-footer-row">
                <button className="lightbox-programme-link" onClick={() => { setSelectedImage(null); handleSeeMore(); }}>
                  View in Programmes Guide &rarr;
                </button>
                <div className="lightbox-inline-nav">
                  <button className="lightbox-inline-nav-btn prev" onClick={handlePrev} title="Previous Promo">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                    <span>PREV</span>
                  </button>
                  <button className="lightbox-inline-nav-btn next" onClick={handleNext} title="Next Promo">
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
      )}
    </section>
  );
};

export default ImageGallery;
