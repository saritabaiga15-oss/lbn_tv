import React, { useState } from 'react';
import './ImageGallery.css';
import theTrumpet from '../../images/the_trumpet.jpg';
import timelessParagon from '../../images/timeless_paragon.jpg';
import wordAtWork from '../../images/word_at_work.jpg';
import drPrashanti from '../../images/dr_prashanti.jpg';
import prayWithMe from '../../images/pray_with_me.jpg';
import duskTillDawn from '../../images/dusk_till_dawn.jpg';
import craftingBeads from '../../images/crafting_beads.jpg';
import craftingFaithHost from '../../images/crafting_faith_host.jpg';
import moneyMatters from '../../images/money_matters.jpg';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);

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

  // 2 rows with 3 columns = 6 items displayed initially
  const visibleItems = showAll ? galleryItems : galleryItems.slice(0, 6);

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">

        {/* Header */}
        <div className="gallery-header">
          <span className="gallery-badge">NETWORK GALLERY</span>
          <h2 className="gallery-title">BROADCAST MOMENTS &amp; HIGHLIGHTS</h2>
          <p className="gallery-subtitle">
            Explore photos from our live broadcasts, global crusades, production studios, and special ministry events.
          </p>
        </div>

        {/* Image Grid */}
        <div className="gallery-grid">
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
        </div>

        {/* See More / See Less Button */}
        {galleryItems.length > 6 && (
          <div className="gallery-more-container">
            <button
              className="gallery-see-more-btn"
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
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImageGallery;
