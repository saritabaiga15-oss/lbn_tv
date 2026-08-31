import React, { useState } from 'react';
import './AnchorcrestFoundation.css';

const AnchorcrestFoundation = () => {
  const [selectedTier, setSelectedTier] = useState('5000');
  const [customAmount, setCustomAmount] = useState('');
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const courses = [
    {
      id: 1,
      title: 'Videography',
      icon: '📹',
      duration: '8 Weeks',
      level: 'Beginner to Pro',
      desc: 'Cinematic framing, camera movement, composition, lens selection, and dynamic visual storytelling techniques.'
    },
    {
      id: 2,
      title: 'Editing',
      icon: '✂️',
      duration: '8 Weeks',
      level: 'Industry Standard',
      desc: 'Non-linear editing in Premiere & DaVinci, pacing, multi-camera syncing, color grading, and broadcast mastering.'
    },
    {
      id: 3,
      title: 'Sound Production',
      icon: '🎧',
      duration: '6 Weeks',
      level: 'Studio & Live',
      desc: 'Studio acoustic capturing, field audio recording, wireless mic rigging, multi-track mixing, and compression.'
    },
    {
      id: 4,
      title: 'Camera Operations',
      icon: '🎥',
      duration: '6 Weeks',
      level: 'Hands-on Rigging',
      desc: 'Multi-cam broadcast pedestal rigs, PTZ operations, robotic jibs, handheld gimbal stabilization, and live feeds.'
    },
    {
      id: 5,
      title: 'Studio Lighting',
      icon: '💡',
      duration: '4 Weeks',
      level: 'Cinematic Grid',
      desc: 'Three-point lighting, overhead grid rigging, RGB LED panel mapping, DMX controllers, and mood design.'
    },
    {
      id: 6,
      title: 'Stage Design and Setup',
      icon: '🎭',
      duration: '6 Weeks',
      level: 'Creative Set',
      desc: 'Broadcast set architecture, acoustic backdrop installations, LED video wall setup, and spatial aesthetics.'
    },
    {
      id: 7,
      title: 'Media Production',
      icon: '🎬',
      duration: '10 Weeks',
      level: 'Executive Workflow',
      desc: 'End-to-end production workflow, live show directing, floor management, rundown timing, and broadcast delivery.'
    },
    {
      id: 8,
      title: 'Mixing MCR/PCR',
      icon: '🎛️',
      duration: '8 Weeks',
      level: 'Advanced Control Room',
      desc: 'Master Control Room (MCR) & Production Control Room (PCR) live vision switching, automation, and stream routing.'
    },
    {
      id: 9,
      title: 'Scripting',
      icon: '✍️',
      duration: '4 Weeks',
      level: 'Narrative Craft',
      desc: 'TV talk show scripting, teleprompter drafting, documentary storyboarding, and faith-based narrative writing.'
    },
    {
      id: 10,
      title: 'Casting and Operations',
      icon: '👥',
      duration: '4 Weeks',
      level: 'Studio Logistics',
      desc: 'Talent scouting, on-camera audition coordination, production scheduling, call sheets, and studio crew logistics.'
    },
    {
      id: 11,
      title: 'Voice Over Artist',
      icon: '🎙️',
      duration: '6 Weeks',
      level: 'Vocal Mastery',
      desc: 'Vocal modulation, diction, accent training, commercial voiceovers, documentary narration, and booth techniques.'
    },
    {
      id: 12,
      title: 'Video Presenter',
      icon: '📺',
      duration: '6 Weeks',
      level: 'On-Camera Hosting',
      desc: 'On-screen confidence, live show hosting, teleprompter mastery, interview agility, and body language coaching.'
    },
    {
      id: 13,
      title: 'New Media Technology / Podcast',
      icon: '📡',
      duration: '6 Weeks',
      level: 'Digital & Streaming',
      desc: 'Live streaming OTT infrastructure, podcast acoustic booth setup, multi-platform simulcasting, and AI tools.'
    },
    {
      id: 14,
      title: 'Social Media',
      icon: '📱',
      duration: '4 Weeks',
      level: 'Viral Growth',
      desc: 'Short-form viral content (Reels/Shorts), algorithm optimization, digital branding, community engagement, and analytics.'
    },
    {
      id: 15,
      title: 'Make Artist and Movie Scene Makeup',
      icon: '💄',
      duration: '6 Weeks',
      level: 'HD & Cinematic SFX',
      desc: 'HD broadcast studio makeup, cinematic character transformation, prosthetic FX, lighting-compatible cosmetics, and touch-ups.'
    }
  ];

  const sponsorshipTiers = [
    {
      amount: '5000',
      label: 'Sponsor 1 Youth',
      tag: 'POPULAR SEED',
      impact: 'Covers full practical training, studio gear access, and course materials for 1 student for free.'
    },
    {
      amount: '10000',
      label: 'Sponsor 2 Youths',
      tag: 'DOUBLE IMPACT',
      impact: 'Empowers 2 young people with comprehensive hands-on media skills and live studio production sessions.'
    },
    {
      amount: '25000',
      label: 'Sponsor A Crew (5 Youths)',
      tag: 'COMMUNITY SEED',
      impact: 'Sponsors a complete multi-discipline media production crew (Camera, Audio, Lighting, Director, Editor).'
    },
    {
      amount: '50000',
      label: 'Broadcast Fellowship (10 Youths)',
      tag: 'TRANSFORMATION',
      impact: 'Establishes a certified training batch with global media portfolio creation and career placement support.'
    }
  ];

  const activeAmount = customAmount ? customAmount : selectedTier;

  return (
    <div className="anchorcrest-page">
      {/* Hero Section */}
      <section className="anchorcrest-hero">
        <div className="anchorcrest-hero-glow"></div>
        <div className="anchorcrest-hero-container">
          <span className="anchorcrest-badge">EMPOWERING THE NEXT GENERATION</span>
          <h1 className="anchorcrest-title">
            ANCHORCREST <span className="gold-text">FOUNDATION</span>
          </h1>
          <p className="anchorcrest-subtitle">
            Join us to impact young people all over by sponsoring them to attend our media training courses for free.
          </p>

          <div className="hero-ecosystem-banner">
            <div className="eco-star">🌟</div>
            <div className="eco-info">
              <h3>An Opportunity to Work in the Loveworld Ecosystem</h3>
              <p>Graduates gain direct pathways to intern, produce, and work across Loveworld India &amp; global media facilities.</p>
            </div>
          </div>

          <div className="hero-action-row">
            <a href="#sponsor-section" className="sponsor-btn-main">
              <span>SPONSOR A YOUTH TODAY</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="#courses-grid" className="explore-btn-main">
              VIEW 15 MEDIA COURSES
            </a>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses-grid" className="courses-section">
        <div className="anchorcrest-container">
          <div className="section-head-box">
            <span className="section-tag">FREE VOCATIONAL MEDIA TRAINING</span>
            <h2 className="section-title">COURSES INCLUDED</h2>
            <p className="section-desc">
              Industry-standard, hands-on training equipping youth with high-value technical and creative broadcast skills.
            </p>
          </div>

          <div className="courses-grid-cards">
            {courses.map((course, idx) => (
              <div key={course.id} className="course-card-item">
                <div className="course-card-header">
                  <span className="course-number">#{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                  <span className="course-card-icon">{course.icon}</span>
                </div>
                <h3 className="course-card-title">{course.title}</h3>
                <p className="course-card-desc">{course.desc}</p>
                <div className="course-card-footer">
                  <span className="course-meta-tag">⏳ {course.duration}</span>
                  <span className="course-meta-tag">🎯 {course.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LoveWorld Ecosystem Highlight */}
      <section className="ecosystem-spotlight">
        <div className="anchorcrest-container">
          <div className="ecosystem-card-box">
            <div className="eco-left">
              <span className="eco-tag">CAREER GATEWAY</span>
              <h2>An Opportunity to Work in the Loveworld Ecosystem</h2>
              <p>
                Anchorcrest Foundation doesn't just train — we launch careers. Qualified graduates from our free media courses gain preferential access to internships, full-time production roles, and live broadcast crew deployments across Loveworld India studios and our worldwide satellite networks.
              </p>
              <div className="eco-perks-list">
                <div className="perk-item">✓ Live Studio Hands-On Experience</div>
                <div className="perk-item">✓ Mentorship by Senior Broadcast Directors</div>
                <div className="perk-item">✓ Global Satellite Production Portfolio</div>
              </div>
            </div>
            <div className="eco-right">
              <a href="#sponsor-section" className="eco-sponsor-btn">
                Sponsor A Youth Now &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship & Account Details Section */}
      <section id="sponsor-section" className="sponsorship-section">
        <div className="anchorcrest-container">
          <div className="section-head-box">
            <span className="section-tag">MAKE AN ETERNAL IMPACT</span>
            <h2 className="section-title">SPONSORSHIP DETAILS</h2>
            <p className="section-desc">
              For sponsorship kindly use the account details below. Every seed directly funds tuition, studio equipment, and practical materials for deserving youth.
            </p>
          </div>

          <div className="sponsorship-grid-layout">

            {/* Left: Tiers Selection */}
            <div className="sponsorship-tiers-box">
              <h3 className="tier-box-heading">1. Choose Sponsorship Tier</h3>
              <div className="tiers-list-grid">
                {sponsorshipTiers.map((tier) => (
                  <div
                    key={tier.amount}
                    className={`tier-card-btn ${selectedTier === tier.amount && !customAmount ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedTier(tier.amount);
                      setCustomAmount('');
                    }}
                  >
                    <div className="tier-tag-pill">{tier.tag}</div>
                    <div className="tier-price-row">
                      <span className="currency">₹</span>
                      <span className="amount-num">{parseInt(tier.amount).toLocaleString('en-IN')}</span>
                    </div>
                    <div className="tier-title-label">{tier.label}</div>
                    <p className="tier-impact-text">{tier.impact}</p>
                  </div>
                ))}
              </div>

              <div className="custom-seed-box">
                <label>Or Enter Custom Sponsorship Amount (₹):</label>
                <div className="custom-input-group">
                  <span className="currency-symbol">₹</span>
                  <input
                    type="number"
                    placeholder="Enter any amount (e.g. 15000)"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Right: Bank Transfer Account Details */}
            <div className="bank-details-box">
              <h3 className="tier-box-heading">2. Official Sponsorship Account</h3>
              <p className="bank-sub-text">
                For sponsorship kindly use the verified bank transfer details below:
              </p>

              <div className="bank-info-cards-list">

                <div className="bank-row-card">
                  <div className="b-label">ACCOUNT NAME</div>
                  <div className="b-val-group">
                    <span className="b-val highlight">LOVEWORLD BROADCASTING NETWORK INDIA PRIVATE LIMITED</span>
                    <button
                      className={`copy-btn ${copiedField === 'name' ? 'copied' : ''}`}
                      onClick={() => copyToClipboard('LOVEWORLD BROADCASTING NETWORK INDIA PRIVATE LIMITED', 'name')}
                    >
                      {copiedField === 'name' ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="bank-row-card">
                  <div className="b-label">BANK NAME</div>
                  <div className="b-val-group">
                    <span className="b-val">HDFC BANK</span>
                    <button
                      className={`copy-btn ${copiedField === 'bank' ? 'copied' : ''}`}
                      onClick={() => copyToClipboard('HDFC BANK', 'bank')}
                    >
                      {copiedField === 'bank' ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="bank-row-card">
                  <div className="b-label">ACCOUNT NUMBER</div>
                  <div className="b-val-group">
                    <span className="b-val mono-num">50200085444983</span>
                    <button
                      className={`copy-btn ${copiedField === 'acc' ? 'copied' : ''}`}
                      onClick={() => copyToClipboard('50200085444983', 'acc')}
                    >
                      {copiedField === 'acc' ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="bank-row-card">
                  <div className="b-label">IFSC CODE</div>
                  <div className="b-val-group">
                    <span className="b-val mono-num">HDFC0000080</span>
                    <button
                      className={`copy-btn ${copiedField === 'ifsc' ? 'copied' : ''}`}
                      onClick={() => copyToClipboard('HDFC0000080', 'ifsc')}
                    >
                      {copiedField === 'ifsc' ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="bank-row-card">
                  <div className="b-label">BRANCH</div>
                  <div className="b-val-group">
                    <span className="b-val">PUNE</span>
                  </div>
                </div>

              </div>

              {/* WhatsApp Payment Reference Confirmation */}
              <div className="whatsapp-receipt-box">
                <a
                  href={`https://wa.me/919529607156?text=Hello%20Anchorcrest%20Foundation,%20I%20have%20sponsored%20₹${activeAmount || '5000'}%20for%20the%20Youth%20Media%20Training%20Program.%20Here%20is%20my%20sponsorship%20receipt/reference.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wa-confirm-btn"
                >
                  <span>💬 Share Transfer Receipt on WhatsApp</span>
                </a>
                <span className="wa-help-note">
                  Click to notify our foundation coordinator for your official acknowledgement and certificate of sponsorship.
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AnchorcrestFoundation;
