import React, { useState } from 'react';
import './VOD.css';

const VOD = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    { id: 'all', label: 'All Content' },
    { id: 'sermons', label: 'Sermons' },
    { id: 'worship', label: 'Worship' },
    { id: 'programmes', label: 'Programmes' },
    { id: 'documentary', label: 'Documentary' },
    { id: 'kids', label: 'Kids' },
  ];

  const featuredVideo = {
    id: 1,
    title: 'Rhapsody of Realities',
    subtitle: 'Special Edition – Kingdom Advance',
    description: 'An extraordinary prophetic broadcast with Pastor Chris Oyakhilome. Experience the power of the Word as it transforms lives and ignites a global revival.',
    duration: '1h 42m',
    views: '2.3M',
    category: 'sermons',
    badge: 'TRENDING',
    year: '2024',
  };

  const vodContent = [
    { id: 1, title: 'Healing School Session', subtitle: 'Pastor Chris Live', duration: '58m', views: '1.1M', category: 'sermons', badge: 'NEW', gradient: 'linear-gradient(135deg, #1a0533 0%, #3d0b6e 100%)' },
    { id: 2, title: 'Worship Night', subtitle: 'LoveWorld Singers', duration: '1h 12m', views: '876K', category: 'worship', badge: 'LIVE', gradient: 'linear-gradient(135deg, #0d1b2a 0%, #1b4f72 100%)' },
    { id: 3, title: 'Your Loveworld', subtitle: 'Special Programme', duration: '45m', views: '654K', category: 'programmes', badge: '', gradient: 'linear-gradient(135deg, #1a0d00 0%, #7a3e00 100%)' },
    { id: 4, title: 'The Wonders of Faith', subtitle: 'Documentary Series', duration: '1h 05m', views: '432K', category: 'documentary', badge: 'EXCLUSIVE', gradient: 'linear-gradient(135deg, #001a1a 0%, #005050 100%)' },
    { id: 5, title: 'KidsOwn Worship', subtitle: 'Season 6 Highlights', duration: '32m', views: '320K', category: 'kids', badge: '', gradient: 'linear-gradient(135deg, #1a0020 0%, #6b0080 100%)' },
    { id: 6, title: 'Good Morning Holy Spirit', subtitle: 'Morning Devotional Series', duration: '28m', views: '980K', category: 'sermons', badge: 'POPULAR', gradient: 'linear-gradient(135deg, #0a1a00 0%, #1e5700 100%)' },
    { id: 7, title: 'Impact Night', subtitle: 'LoveWorld Total Experience', duration: '2h 10m', views: '2.1M', category: 'worship', badge: 'HOT', gradient: 'linear-gradient(135deg, #1a0505 0%, #6b1010 100%)' },
    { id: 8, title: 'Atmosphere for Miracles', subtitle: 'Global Crusade Broadcast', duration: '1h 30m', views: '1.8M', category: 'programmes', badge: 'NEW', gradient: 'linear-gradient(135deg, #000d1a 0%, #002266 100%)' },
  ];

  const filteredContent = activeCategory === 'all' ? vodContent : vodContent.filter(v => v.category === activeCategory);
  const stats = [
    { label: 'Videos', value: '10,000+' },
    { label: 'Languages', value: '30+' },
    { label: 'Countries', value: '200+' },
    { label: 'Monthly Views', value: '50M+' },
  ];

  return (
    <div className="vod-page">
      <section className="vod-hero">
        <div className="vod-hero-bg">
          <div className="vod-hero-orb vod-orb-1" />
          <div className="vod-hero-orb vod-orb-2" />
          <div className="vod-hero-orb vod-orb-3" />
        </div>
        <div className="vod-hero-content">
          <div className="vod-hero-badge-row">
            <span className="vod-hero-eyebrow-badge">
              <span className="vod-live-pulse" />
              VIDEO ON DEMAND
            </span>
            <span className="vod-hero-tag">LBNTV STREAMING</span>
          </div>
          <h1 className="vod-hero-title">
            Watch Anytime.<br />
            <span className="vod-title-gradient">Be Transformed.</span>
          </h1>
          <p className="vod-hero-desc">
            Thousands of life-changing programmes, sermons, worship sessions, and documentaries — available on demand, free of charge, whenever you need them.
          </p>
          <div className="vod-hero-stats">
            {stats.map((s, i) => (
              <div key={i} className="vod-stat-item">
                <span className="vod-stat-value">{s.value}</span>
                <span className="vod-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="vod-hero-actions">
            <button className="vod-btn vod-btn-primary">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
              Start Watching
            </button>
            <button className="vod-btn vod-btn-outline">Browse Library</button>
          </div>
        </div>
        <div className="vod-hero-featured">
          <div className="vod-featured-card">
            <div className="vod-featured-card-glow" />
            <div className="vod-featured-visual">
              <div className="vod-featured-gradient-bg" />
              <span className="vod-featured-trending">{featuredVideo.badge}</span>
              <button className="vod-featured-play-btn" aria-label="Play">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
              </button>
              <div className="vod-featured-overlay">
                <span className="vod-featured-duration">{featuredVideo.duration}</span>
                <span className="vod-featured-views">Views: {featuredVideo.views}</span>
              </div>
            </div>
            <div className="vod-featured-body">
              <span className="vod-featured-subtitle">{featuredVideo.subtitle}</span>
              <h2 className="vod-featured-title">{featuredVideo.title}</h2>
              <p className="vod-featured-desc">{featuredVideo.description}</p>
              <button className="vod-featured-watch-btn">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
                Watch Now
              </button>
            </div>
          </div>
        </div>
        <div className="vod-hero-bottom-fade" />
      </section>

      <section className="vod-library">
        <div className="vod-library-inner">
          <div className="vod-library-header">
            <div className="vod-library-title-group">
              <span className="vod-section-kicker">CONTENT LIBRARY</span>
              <h2 className="vod-library-title">Explore Our Collection</h2>
            </div>
            <div className="vod-search-box">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input type="text" placeholder="Search videos..." className="vod-search-input" />
            </div>
          </div>
          <div className="vod-category-bar">
            {categories.map(cat => (
              <button key={cat.id} className={`vod-cat-pill ${activeCategory === cat.id ? 'active' : ''}`} onClick={() => setActiveCategory(cat.id)}>
                {cat.label}
              </button>
            ))}
          </div>
          <div className="vod-grid">
            {filteredContent.map((video) => (
              <div key={video.id} className={`vod-card ${hoveredCard === video.id ? 'hovered' : ''}`} onMouseEnter={() => setHoveredCard(video.id)} onMouseLeave={() => setHoveredCard(null)}>
                <div className="vod-card-thumb" style={{ background: video.gradient }}>
                  {video.badge && (
                    <span className={`vod-card-badge ${video.badge === 'LIVE' ? 'badge-live' : ''}`}>
                      {video.badge === 'LIVE' && <span className="vod-live-pulse-sm" />}
                      {video.badge}
                    </span>
                  )}
                  <button className="vod-card-play" aria-label="Play"><svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg></button>
                  <div className="vod-card-duration">{video.duration}</div>
                  <div className="vod-card-watermark">LBN</div>
                </div>
                <div className="vod-card-body">
                  <span className="vod-card-meta">{video.subtitle}</span>
                  <h3 className="vod-card-title">{video.title}</h3>
                  <div className="vod-card-footer">
                    <span className="vod-card-views">{video.views} views</span>
                    <button className="vod-card-watch-btn">Watch</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="vod-load-more-row">
            <button className="vod-load-more-btn">
              Load More Videos
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
            </button>
          </div>
        </div>
      </section>

      <section className="vod-cta-banner">
        <div className="vod-cta-banner-bg"><div className="vod-cta-orb" /></div>
        <div className="vod-cta-content">
          <span className="vod-cta-kicker">ALWAYS FREE. ALWAYS AVAILABLE.</span>
          <h2 className="vod-cta-title">Stream LBN TV<br />On Any Device</h2>
          <p className="vod-cta-desc">Available on your phone, tablet, smart TV, and desktop. No subscription required. Powered by faith, built for the world.</p>
          <div className="vod-cta-platform-icons">
            <div className="vod-platform-pill">Mobile</div>
            <div className="vod-platform-pill">Desktop</div>
            <div className="vod-platform-pill">Smart TV</div>
            <div className="vod-platform-pill">Tablet</div>
          </div>
          <button className="vod-btn vod-btn-primary vod-cta-main-btn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
            Watch Free Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default VOD;
