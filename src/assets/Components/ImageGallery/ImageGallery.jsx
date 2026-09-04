import React, { useState } from 'react';
import './ImageGallery.css';
import ScrollRow from '../ScrollRow/ScrollRow';
import theTrumpet from '../../images/the_trumpet.jpg';
import timelessParagon from '../../images/timeless_paragon.jpg';
import wordAtWork from '../../images/word_at_work.jpg';
import drPrashanti from '../../images/dr_prashanti.jpg';
import prayWithMe from '../../images/pray_with_me.jpg';
import duskTillDawn from '../../images/dusk_till_dawn.jpg';
import craftingBeads from '../../images/crafting_beads.jpg';
import craftingFaithHost from '../../images/crafting_faith_host.jpg';
import moneyMatters from '../../images/money_matters.jpg';

const ImageGallery = ({ onNavigateProgrammes }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { id: 1, src: theTrumpet, title: 'The Trumpet – Deacon Vijay Bansode', category: 'TALK SHOWS', caption: 'Inspiring insights and prophetic conversations on faith, ministry, and current events.' },
    { id: 2, src: timelessParagon, title: 'Timeless Paragon – Kids Show', category: 'KIDS', caption: 'Fun, engaging studio episodes empowering children with scripture wisdom and faith values.' },
    { id: 3, src: wordAtWork, title: 'Word At Work – Studio Broadcast', category: 'TALK SHOWS', caption: 'Inspired, equipped, and empowered — panel discussions exploring God’s Word in action.' },
    { id: 4, src: drPrashanti, title: 'Dr. Prashanti – Health & Wellness', category: 'HEALTH', caption: 'Inspiring health, wellness, and medical guidance from a faith-filled perspective.' },
    { id: 5, src: prayWithMe, title: 'Pray With Me – Global Intercession', category: 'PRAYER', caption: 'Lifting nations in fervent prayer and spiritual intercession across the globe.' },
    { id: 6, src: duskTillDawn, title: 'Dusk Till Dawn Studio Talk Show', category: 'TALK SHOWS', caption: 'Engaging conversations, uplifting testimonies, and late-night heart-to-heart discussions.' },
    { id: 7, src: craftingBeads, title: 'Crafting Faith – Creative Workshop', category: 'PROGRAMMES', caption: 'Inspiring craft sessions that blend creativity with faith.' },
    { id: 8, src: craftingFaithHost, title: 'Crafting Faith – Studio Show', category: 'PROGRAMMES', caption: 'Create · Inspire · Glorify — faith through art and craft.' },
    { id: 9, src: moneyMatters, title: 'Money Matters – Biblical Wisdom', category: 'PROGRAMMES', caption: 'Biblical stewardship and financial freedom on LBN.' }
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

        {/* 4 In A Row Scroll Row with OTT Arrow Navigation */}
        <ScrollRow className="gallery-grid">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setSelectedImage(item)}
            >
              <div className="gallery-img-wrapper">
                <img src={item.src} alt={item.title} className="gallery-img" />
                <div className="gallery-overlay">
                  <span className="gallery-cat-pill">{item.category}</span>
                  <h3 className="gallery-card-title">{item.title}</h3>
                  <p className="gallery-card-caption">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </ScrollRow>

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
            <img src={selectedImage.src} alt={selectedImage.title} className="lightbox-img" />
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
