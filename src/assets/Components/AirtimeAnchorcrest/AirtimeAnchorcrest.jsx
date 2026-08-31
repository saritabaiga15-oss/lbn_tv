import React, { useState } from 'react';
import './AirtimeAnchorcrest.css';

const AirtimeAnchorcrest = () => {
  const [selectedTier, setSelectedTier] = useState('5000');
  const [customAmount, setCustomAmount] = useState('');
  const [copiedField, setCopiedField] = useState(null);
  const [filterCategory, setFilterCategory] = useState('ALL');

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const courses = [
    {
      id: 1,
      title: 'Videography',
      category: 'PRODUCTION',
      icon: '📹',
      duration: '8 Weeks',
      level: 'Beginner to Pro',
      desc: 'Cinematic framing, camera movement, composition, lens selection, and dynamic visual storytelling techniques.'
    },
    {
      id: 2,
      title: 'Video Editing',
      category: 'POST-PRODUCTION',
      icon: '✂️',
      duration: '8 Weeks',
      level: 'Industry Standard',
      desc: 'Non-linear editing in Premiere & DaVinci, pacing, multi-camera syncing, color grading, and broadcast mastering.'
    },
    {
      id: 3,
      title: 'Sound Production',
      category: 'AUDIO',
      icon: '🎧',
      duration: '6 Weeks',
      level: 'Studio & Live',
      desc: 'Studio acoustic capturing, field audio recording, wireless mic rigging, multi-track mixing, and compression.'
    },
    {
      id: 4,
      title: 'Camera Operations',
      category: 'PRODUCTION',
      icon: '🎥',
      duration: '6 Weeks',
      level: 'Hands-on',
      desc: 'Multi-cam broadcast pedestal rigs, PTZ operations, robotic jibs, handheld gimbal stabilization, and live feeds.'
    },
    {
      id: 5,
      title: 'Studio Lighting',
      category: 'TECHNICAL',
      icon: '💡',
      duration: '4 Weeks',
      level: 'Cinematic',
      desc: 'Three-point lighting, overhead grid rigging, RGB LED panel mapping, DMX controllers, and mood design.'
    },
    {
      id: 6,
      title: 'Stage Design & Setup',
      category: 'TECHNICAL',
      icon: '🎭',
      duration: '6 Weeks',
      level: 'Creative Set',
      desc: 'Broadcast set architecture, acoustic backdrop installations, LED video wall setup, and spatial aesthetics.'
    },
    {
      id: 7,
      title: 'Media Production',
      category: 'PRODUCTION',
      icon: '🎬',
      duration: '10 Weeks',
      level: 'Executive',
      desc: 'End-to-end production workflow, live show directing, floor management, rundown timing, and broadcast delivery.'
    },
    {
      id: 8,
      title: 'Mixing MCR / PCR',
      category: 'TECHNICAL',
      icon: '🎛️',
      duration: '8 Weeks',
      level: 'Advanced Broadcast',
      desc: 'Master Control Room (MCR) & Production Control Room (PCR) live vision switching, automation, and stream routing.'
    },
    {
      id: 9,
      title: 'Scripting',
      category: 'CREATIVE',
      icon: '✍️',
      duration: '4 Weeks',
      level: 'Content Craft',
      desc: 'TV talk show scripting, teleprompter drafting, documentary storyboarding, and faith-based narrative writing.'
    },
    {
      id: 10,
      title: 'Casting & Operations',
      category: 'PRODUCTION',
      icon: '👥',
      duration: '4 Weeks',
      level: 'Logistics',
      desc: 'Talent scouting, on-camera audition coordination, production scheduling, call sheets, and studio crew logistics.'
    },
    {
      id: 11,
      title: 'Voice Over Artist',
      category: 'CREATIVE',
      icon: '🎙️',
      duration: '6 Weeks',
      level: 'Vocal Master',
      desc: 'Vocal modulation, diction, accent training, commercial voiceovers, documentary narration, and booth techniques.'
    },
    {
      id: 12,
      title: 'Video Presenter',
      category: 'CREATIVE',
      icon: '📺',
      duration: '6 Weeks',
      level: 'On-Camera Star',
      desc: 'On-screen confidence, live show hosting, teleprompter mastery, interview agility, and body language coaching.'
    },
    {
      id: 13,
      title: 'New Media Technology / Podcast',
      category: 'DIGITAL',
      icon: '📡',
      duration: '6 Weeks',
      level: 'Next-Gen',
      desc: 'Live streaming OTT infrastructure, podcast acoustic booth setup, multi-platform simulcasting, and AI tools.'
    },
    {
      id: 14,
      title: 'Social Media',
      category: 'DIGITAL',
      icon: '📱',
      duration: '4 Weeks',
      level: 'Growth & Reach',
      desc: 'Short-form viral content (Reels/Shorts), algorithm optimization, digital branding, community engagement, and analytics.'
    },
    {
      id: 15,
      title: 'Makeup Artist & Movie Scene Makeup',
      category: 'CREATIVE',
      icon: '💄',
      duration: '6 Weeks',
      level: 'HD & Cinematic',
      desc: 'HD broadcast studio makeup, cinematic character transformation, prosthetic FX, lighting-compatible cosmetics, and touch-ups.'
    }
  ];

  const categories = ['ALL', 'PRODUCTION', 'POST-PRODUCTION', 'AUDIO', 'TECHNICAL', 'CREATIVE', 'DIGITAL'];

  const filteredCourses = filterCategory === 'ALL'
    ? courses
    : courses.filter(c => c.category === filterCategory);

  const sponsorshipTiers = [
    {
      amount: '5000',
      label: 'Sponsor 1 Student',
      tag: 'POPULAR SEED',
      impact: 'Covers full tuition, practical studio gear access, and training materials for 1 passionate youth.'
    },
    {
      amount: '10000',
      label: 'Sponsor 2 Students',
      tag: 'DOUBLE IMPACT',
      impact: 'Empowers 2 young people with comprehensive hands-on media skills and live studio production sessions.'
    },
    {
      amount: '25000',
      label: 'Sponsor A Crew (5 Students)',
      tag: 'COMMUNITY SEED',
      impact: 'Sponsors a complete multi-discipline media production crew (Camera, Audio, Lighting, Director, Editor).'
    },
    {
      amount: '50000',
      label: 'Cohort Builder (10 Students)',
      tag: 'KINGDOM BUILDER',
      impact: 'Funds an entire training cohort, equipping the next generation of creative media leaders for the Gospel.'
    }
  ];

  const activeAmount = customAmount ? customAmount : selectedTier;

  return (
    <div className="airtime-anchorcrest-page">

      {/* Hero Section */}
      <section className="aa-hero">
        <div className="aa-hero-glow"></div>
        <div className="aa-container">
          <div className="aa-badge-group">
            <span className="aa-badge gold">ANCHORCREST FOUNDATION</span>
            <span className="aa-badge-divider">•</span>
            <span className="aa-badge purple">LOVEWORLD BROADCASTING NETWORK</span>
          </div>

          <h1 className="aa-hero-title">
            EMPOWERING YOUTH THROUGH <br />
            <span className="aa-gold-text">MEDIA EXCELLENCE</span> &amp; <span className="aa-cyan-text">AIRTIME ON LBN</span>
          </h1>

          <p className="aa-hero-mission">
            "Join us to impact young people all over by sponsoring them to attend our media training courses for free."
          </p>

          <div className="aa-ecosystem-card">
            <div className="ecosystem-icon-box">🌟</div>
            <div className="ecosystem-text">
              <h3>An Opportunity to Work in the LoveWorld Ecosystem</h3>
              <p>Graduates gain direct pathways to intern, produce, and work across Loveworld India &amp; global media facilities.</p>
            </div>
          </div>

          <div className="aa-hero-actions">
            <a href="#sponsor-section" className="aa-btn primary">
              <span>SPONSOR A STUDENT</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="#courses-section" className="aa-btn secondary">
              EXPLORE 15 COURSES
            </a>
            <a href="#airtime-section" className="aa-btn outline">
              AIRTIME ON LBN
            </a>
          </div>
        </div>
      </section>

      {/* Key Highlights Ribbon */}
      <section className="aa-ribbon">
        <div className="aa-container aa-ribbon-grid">
          <div className="ribbon-item">
            <div className="ribbon-num">100%</div>
            <div className="ribbon-label">Free Sponsored Training for Youth</div>
          </div>
          <div className="ribbon-item">
            <div className="ribbon-num">15+</div>
            <div className="ribbon-label">Specialized Broadcast Media Courses</div>
          </div>
          <div className="ribbon-item">
            <div className="ribbon-num">100+</div>
            <div className="ribbon-label">Hours of Live Studio Practical Work</div>
          </div>
          <div className="ribbon-item">
            <div className="ribbon-num">GLOBAL</div>
            <div className="ribbon-label">Loveworld Network Career Pathway</div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses-section" className="aa-courses-section">
        <div className="aa-container">
          <div className="section-header center">
            <span className="section-subtitle">ACADEMY CURRICULUM</span>
            <h2 className="section-title">COMPREHENSIVE MEDIA TRAINING COURSES</h2>
            <p className="section-desc">
              Every course is engineered with cutting-edge equipment, high-definition broadcast studios, and real-time production sets.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="course-filters-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`course-filter-pill ${filterCategory === cat ? 'active' : ''}`}
                onClick={() => setFilterCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 15 Courses Grid */}
          <div className="courses-grid">
            {filteredCourses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-top-row">
                  <span className="course-icon">{course.icon}</span>
                  <span className="course-cat-tag">{course.category}</span>
                </div>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-desc">{course.desc}</p>
                <div className="course-footer">
                  <div className="course-meta">
                    <span className="meta-item">⏱️ {course.duration}</span>
                    <span className="meta-item">🎯 {course.level}</span>
                  </div>
                  <a href="#sponsor-section" className="course-sponsor-link">
                    Sponsor This Course &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Career Pathway Infographic */}
      <section className="aa-pathway-section">
        <div className="aa-container">
          <div className="pathway-card">
            <div className="pathway-header">
              <span className="pathway-pill">CAREER GATEWAY</span>
              <h2>HOW ANCHORCREST TRANSFORMS LIVES</h2>
              <p>From underprivileged talent to certified broadcast professionals in the global Loveworld network.</p>
            </div>

            <div className="pathway-steps-grid">
              <div className="pathway-step">
                <div className="step-badge">STEP 1</div>
                <div className="step-icon">🤝</div>
                <h4>Free Sponsorship</h4>
                <p>Generous partners sponsor candidates, giving them 100% free tuition and gear access.</p>
              </div>
              <div className="pathway-arrow">&rarr;</div>

              <div className="pathway-step">
                <div className="step-badge">STEP 2</div>
                <div className="step-icon">🎥</div>
                <h4>Studio Mastery</h4>
                <p>Intensive hands-on training inside LBN TV's real-time broadcast and MCR facilities.</p>
              </div>
              <div className="pathway-arrow">&rarr;</div>

              <div className="pathway-step">
                <div className="step-badge">STEP 3</div>
                <div className="step-icon">🏆</div>
                <h4>Live Experience</h4>
                <p>Students operate live cameras, edit TV shows, and mix audio for actual satellite broadcasts.</p>
              </div>
              <div className="pathway-arrow">&rarr;</div>

              <div className="pathway-step">
                <div className="step-badge">STEP 4</div>
                <div className="step-icon">🚀</div>
                <h4>Ecosystem Placement</h4>
                <p>Direct hiring and career placements within Loveworld media productions across India &amp; globally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship & Bank Details Section */}
      <section id="sponsor-section" className="aa-sponsor-section">
        <div className="aa-container">
          <div className="section-header center">
            <span className="section-subtitle">BECOME A KINGDOM SPONSOR</span>
            <h2 className="section-title">SPONSOR A YOUTH TODAY</h2>
            <p className="section-desc">
              Your donation empowers eager young minds to learn high-income digital and broadcast skills for free.
            </p>
          </div>

          <div className="sponsor-layout-grid">

            {/* Left: Interactive Tiers */}
            <div className="sponsor-tiers-col">
              <h3 className="tiers-heading">1. Select A Sponsorship Seed</h3>

              <div className="tiers-grid">
                {sponsorshipTiers.map((tier) => (
                  <div
                    key={tier.amount}
                    className={`tier-card ${selectedTier === tier.amount && !customAmount ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedTier(tier.amount);
                      setCustomAmount('');
                    }}
                  >
                    <div className="tier-header">
                      <span className="tier-tag">{tier.tag}</span>
                      <div className="tier-price">₹{parseInt(tier.amount).toLocaleString()}</div>
                    </div>
                    <h4 className="tier-title">{tier.label}</h4>
                    <p className="tier-impact">{tier.impact}</p>
                    <div className="tier-radio">
                      <span className={`radio-indicator ${selectedTier === tier.amount && !customAmount ? 'checked' : ''}`}></span>
                      <span>Select This Tier</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Custom Seed Input */}
              <div className="custom-seed-box">
                <label className="seed-label">OR ENTER ANY CUSTOM SPONSORSHIP AMOUNT (INR ₹)</label>
                <div className="custom-seed-input-wrapper">
                  <span className="currency-prefix">₹</span>
                  <input
                    type="number"
                    placeholder="Enter amount (e.g. 15000)"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="custom-seed-input"
                  />
                </div>
              </div>
            </div>

            {/* Right: Bank Details Card */}
            <div className="sponsor-bank-col">
              <div className="bank-details-card">
                <div className="bank-card-badge">DIRECT BANK TRANSFER</div>
                <h3 className="bank-card-title">ACCOUNT DETAILS FOR SPONSORSHIP</h3>
                <p className="bank-card-note">
                  Kindly use the official Anchorcrest Foundation banking details below to complete your sponsorship seed:
                </p>

                <div className="bank-data-list">

                  <div className="bank-data-row">
                    <div className="bank-data-label">Account Name</div>
                    <div className="bank-data-value-group">
                      <span className="bank-data-val highlight">ANCHORCREST FOUNDATION</span>
                      <button
                        type="button"
                        className="copy-btn"
                        onClick={() => copyToClipboard('ANCHORCREST FOUNDATION', 'name')}
                        title="Copy Account Name"
                      >
                        {copiedField === 'name' ? '✓ Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>

                  <div className="bank-data-row">
                    <div className="bank-data-label">Account Number</div>
                    <div className="bank-data-value-group">
                      <span className="bank-data-val mono">923010049345208</span>
                      <button
                        type="button"
                        className="copy-btn"
                        onClick={() => copyToClipboard('923010049345208', 'account')}
                        title="Copy Account Number"
                      >
                        {copiedField === 'account' ? '✓ Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>

                  <div className="bank-data-row">
                    <div className="bank-data-label">IFSC Code</div>
                    <div className="bank-data-value-group">
                      <span className="bank-data-val mono">UTIB0000269</span>
                      <button
                        type="button"
                        className="copy-btn"
                        onClick={() => copyToClipboard('UTIB0000269', 'ifsc')}
                        title="Copy IFSC Code"
                      >
                        {copiedField === 'ifsc' ? '✓ Copied' : 'Copy'}
                      </button>
                    </div>
                  </div>

                  <div className="bank-data-row">
                    <div className="bank-data-label">Bank Name</div>
                    <div className="bank-data-value-group">
                      <span className="bank-data-val">Axis Bank</span>
                    </div>
                  </div>

                  <div className="bank-data-row">
                    <div className="bank-data-label">Branch</div>
                    <div className="bank-data-value-group">
                      <span className="bank-data-val">Kalyani Nagar Branch Pune</span>
                    </div>
                  </div>

                </div>

                <div className="bank-selected-summary">
                  <div className="summary-left">
                    <span className="sum-tag">Current Sponsorship Amount</span>
                    <span className="sum-figure">₹{parseInt(activeAmount || '0').toLocaleString()}</span>
                  </div>
                </div>

                {/* WhatsApp Notification confirmation */}
                <div className="bank-action-area">
                  <a
                    href={`https://wa.me/919529607156?text=Hello%20Anchorcrest%20Foundation,%20I%20have%20sponsored%20₹${activeAmount || '5000'}%20for%20the%20Youth%20Media%20Training%20Program.%20Here%20is%20my%20sponsorship%20detail.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-notify-btn"
                  >
                    <span>💬 Share Payment Reference via WhatsApp</span>
                  </a>
                  <span className="whatsapp-hint">
                    Click to confirm transfer reference with our foundation team for your official blessing receipt.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Airtime On LBN Section */}
      <section id="airtime-section" className="aa-airtime-section">
        <div className="aa-container">
          <div className="airtime-feature-card">

            <div className="airtime-left-content">
              <div className="airtime-icon-badge">
                <span className="broadcast-icon">📺</span>
                <span className="airtime-badge-title">Airtime On LBN</span>
              </div>

              <h2 className="airtime-main-title">
                EXPAND YOUR REACH ON <br />
                <span className="aa-gold-text">LOVEWORLD BROADCASTING NETWORK</span>
              </h2>

              <p className="airtime-desc-p">
                LBN Marketing Services includes the purchase of advertisement spots and airtime packages for TV programs produced externally by other organisations. We thrive on the challenge to produce premium class media content that fits within your allocated time and budget lines.
              </p>

              <div className="airtime-rates-box">
                <h4>For rates and information on airtime, advertising and sponsorship opportunities:</h4>
                <div className="airtime-contact-lines">
                  <div className="contact-line-item">
                    <span className="contact-icon">📞</span>
                    <div className="contact-detail">
                      <strong>Call:</strong>{' '}
                      <a href="tel:+919529607156">+91 9529607156</a>,{' '}
                      <a href="tel:+2349085900344">+234 9085900344</a>
                    </div>
                  </div>

                  <div className="contact-line-item">
                    <span className="contact-icon">💬</span>
                    <div className="contact-detail">
                      <strong>SMS or WhatsApp:</strong>{' '}
                      <a href="https://wa.me/919529607156" target="_blank" rel="noopener noreferrer">+91 9529607156</a>
                    </div>
                  </div>

                  <div className="contact-line-item">
                    <span className="contact-icon">✉️</span>
                    <div className="contact-detail">
                      <strong>Email:</strong>{' '}
                      <a href="mailto:info@lbntv.org">info@lbntv.org</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="airtime-right-packages">
              <div className="package-feature-card">
                <div className="p-feat-icon">⚡</div>
                <h4>Commercial Ad Spots</h4>
                <p>Targeted 30s &amp; 60s prime-time spots during high-impact devotional and music broadcasts.</p>
              </div>

              <div className="package-feature-card">
                <div className="p-feat-icon">🌐</div>
                <h4>Program Airtime Slots</h4>
                <p>Weekly 30-min and 60-min broadcast blocks for ministry programs, documentaries, and youth shows.</p>
              </div>

              <div className="package-feature-card">
                <div className="p-feat-icon">📡</div>
                <h4>Live Event Transmission</h4>
                <p>Round-the-clock live satellite &amp; OTT streaming for global crusades, conferences, and conventions.</p>
              </div>

              <div className="package-feature-card cta-box">
                <h4>Custom Media Package?</h4>
                <p>Speak directly with our broadcast marketing team to tailor an airtime schedule that fits your vision.</p>
                <a href="tel:+919529607156" className="call-now-btn">
                  Book Airtime Call &rarr;
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AirtimeAnchorcrest;
