import React, { useState } from 'react';
import './ImageGallery.css';
import praiseimage from '../../images/praiseimage.jpeg';
import comm_image from '../../images/comm_image.jpeg';
import healingimage from '../../images/healingimage.jpeg';
import LWS from '../../images/LWS.jpeg';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';
import image4 from '../../images/image4.png';
import image5 from '../../images/image5.png';
import global3 from '../../images/global3.png';
import craftingBeads from '../../images/crafting_beads.jpg';
import craftingFaithHost from '../../images/crafting_faith_host.jpg';
import moneyMatters from '../../images/money_matters.jpg';
import herbalHealing from '../../images/herbal_healing.jpg';

const ImageGallery = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { id: 1, src: praiseimage, title: 'Praise Night Live Concert', category: 'WORSHIP', caption: 'Thousands gather in high worship and global celebration.' },
    { id: 2, src: comm_image, title: 'Global Communion Service', category: 'EVENTS', caption: 'Pastor Chris leading millions in communion and word revelation.' },
    { id: 3, src: healingimage, title: 'Healing Streams Live Miracle Service', category: 'EVENTS', caption: 'Demonstration of divine healing power broadcast worldwide.' },
    { id: 4, src: LWS, title: 'LoveWorld Studio (LWS) Special', category: 'STUDIOS', caption: 'State-of-the-art HD broadcasting suite and production set.' },
    { id: 5, src: craftingBeads, title: 'Crafting Faith – Creative Workshop', category: 'PROGRAMMES', caption: 'Inspiring craft sessions that blend creativity with faith.' },
    { id: 6, src: craftingFaithHost, title: 'Crafting Faith – Studio Show', category: 'PROGRAMMES', caption: 'Create · Inspire · Glorify — faith through art and craft.' },
    { id: 7, src: moneyMatters, title: 'Money Matters – Biblical Wisdom', category: 'PROGRAMMES', caption: 'Biblical stewardship and financial freedom on LBN.' },
    { id: 8, src: herbalHealing, title: 'Herbal Healing Garden – Wellness Show', category: 'PROGRAMMES', caption: 'Holistic health and wellness from a faith-based perspective.' },
    { id: 9, src: global3, title: 'Rhapathon Global Broadcast', category: 'EVENTS', caption: 'Celebrating global impact and distribution of Rhapsody of Realities.' },
    { id: 10, src: image2, title: 'Song of Praise Studio Session', category: 'WORSHIP', caption: 'Behind the scenes at LoveWorld India Production Studio.' },
    { id: 11, src: image3, title: 'Ignite Youth Broadcast', category: 'TALK SHOWS', caption: 'Youth leaders engaging in interactive discussions on faith.' },
    { id: 12, src: image4, title: 'Teens Talent & Art Festival', category: 'STUDIOS', caption: 'Teenagers expressing faith through music, art, and poetry.' },
    { id: 13, src: image5, title: 'LoveWorld Digital Media Center', category: 'STUDIOS', caption: 'Satellite transponder transmission and digital control center.' }
  ];

  const categories = ['ALL', 'WORSHIP', 'EVENTS', 'PROGRAMMES', 'STUDIOS', 'TALK SHOWS'];

  const filteredItems = activeCategory === 'ALL'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

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

        {/* Category Filters */}
        <div className="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
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
