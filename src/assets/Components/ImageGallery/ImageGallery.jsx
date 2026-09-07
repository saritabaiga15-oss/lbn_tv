import React, { useState } from 'react';
import './ImageGallery.css';
import theTrumpet from '../../images/Trumpet.png';
import wordAtWork from '../../images/Word at work.png';
import craftingFaith from '../../images/Crafting Faith.png';
import moneyMatters from '../../images/MONEY MATTERS (1).png';
import teevablaze from '../../images/TEEVABLAZE (1).png';
import drPrashanti from '../../images/Wholeness (1).png';
import igniteImg from '../../images/YOUTHIgnite.png';
import timelessParagon from '../../images/timeless_paragon.jpg';
import prayWithMe from '../../images/pray_with_me.jpg';

const ImageGallery = ({ onNavigateProgrammes }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { id: 1, src: theTrumpet, video: '/Videos/THE_TRUMPET_NEW.mp4', title: 'The Trumpet – Deacon Vijay Bansode', category: 'TALK SHOWS', caption: 'Inspiring insights and prophetic conversations on faith, ministry, and current events.' },
    { id: 2, src: wordAtWork, video: '/Videos/TheWordAtWork.mp4', title: 'Word At Work – Studio Broadcast', category: 'TALK SHOWS', caption: 'Inspired, equipped, and empowered — panel discussions exploring God’s Word in action.' },
    { id: 3, src: craftingFaith, title: 'Crafting Faith – Studio & Creative Show', category: 'PROGRAMMES', caption: 'Create · Believe · Inspire — faith through art and hands-on creativity.' },
    { id: 4, src: moneyMatters, title: 'Money Matters – Biblical Wisdom', category: 'PROGRAMMES', caption: 'Biblical stewardship, financial intelligence, and freedom on LBN.' },
    { id: 5, src: teevablaze, title: 'TEEV-Blaze – Youth Broadcast', category: 'TEENS & YOUTH', caption: 'Dynamic faith, contemporary discussions, and youth inspiration.' },
    { id: 7, src: drPrashanti, title: 'Wholeness with Dr. Prashanti', category: 'HEALTH', caption: 'Mind · Body · Purpose — divine health and vitality from a faith-filled perspective.' },
    { id: 8, src: igniteImg, video: '/Videos/Ignite.mp4', title: 'Ignite Show – Youth & Culture', category: 'TEENS & YOUTH', caption: 'Exploring the intersection of youth culture, adolescence, and vibrant faith.' },
    { id: 9, src: timelessParagon, video: '/Videos/TIMELESS.mp4', title: 'Timeless Paragon – Kids Show', category: 'KIDS', caption: 'Fun, engaging studio episodes empowering children with scripture wisdom and faith values.' },
    { id: 10, src: prayWithMe, title: 'Pray With Me – Global Intercession', category: 'PRAYER', caption: 'Lifting nations in fervent prayer and spiritual intercession across the globe.' }
  ];

  // All items visible in horizontal scroll row
  const visibleItems = galleryItems;

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
                <img src={item.src} alt={item.title} className="gallery-img" />
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
        <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>&times;</button>
            {selectedImage.video ? (
              <div className="lightbox-video-container">
                <video
                  key={selectedImage.video}
                  src={selectedImage.video}
                  poster={selectedImage.src}
                  controls
                  autoPlay
                  playsInline
                  className="lightbox-video-player"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <img src={selectedImage.src} alt={selectedImage.title} className="lightbox-img" />
            )}
            <div className="lightbox-info">
              <span className="lightbox-cat">{selectedImage.category}</span>
              <h3 className="lightbox-title">{selectedImage.title}</h3>
              <p className="lightbox-caption">{selectedImage.caption}</p>
              <button className="lightbox-programme-link" onClick={() => { setSelectedImage(null); handleSeeMore(); }}>
                View in Programmes Guide &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
