import React, { useState } from 'react';
import './AnchorcrestFoundation.css';
import anchorcrestLogo from '../../images/AC_logo.png';
import videography from '../../images/videography.png';
import Editing from '../../images/Editing.png';
import SoundProduction from '../../images/SoundProduction.png';
import CameraOperartor from '../../images/CameraOperator.png';
import Lighting from '../../images/Lighting.png';
import StageDesign from '../../images/StageDesign.png';
import MediaProduction from '../../images/MediaProduction.png';
import MixingPCR from '../../images/MixingPCR.png';
import Scripting from '../../images/Scripting.jpeg';
import Casting from '../../images/Casting.png';
import Voiceover from '../../images/Voiceover.png';
import VideoPresenter from '../../images/VideoPresenter.jpeg';
import TechPodcast from '../../images/Tech&Podcast.png';
import SocialMedia from '../../images/SocialMedia.jpeg';
// Makeupartist image not yet uploaded - card will show emoji icon instead


const AnchorcrestFoundation = () => {
  const [selectedTier, setSelectedTier] = useState('5000');
  const [customAmount, setCustomAmount] = useState('');
  const [copiedField, setCopiedField] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showAllCourses, setShowAllCourses] = useState(false);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const downloadReceipt = () => {
    const amount = customAmount || selectedTier || '0';
    const receipt = [
      'ANCHORCREST FOUNDATION',
      'SPONSORSHIP RECEIPT',
      '',
      `Amount: INR ${Number(amount).toLocaleString('en-IN')}`,
      '',
      'Account Name: ANCHORCREST FOUNDATION',
      'Account Number: 923010049345208',
      'Bank: AXIS BANK',
      'Branch: Kalyani Nagar',
      'IFSC Code: UTIB0000269'
    ].join('\n');
    const receiptBlob = new Blob([receipt], { type: 'text/plain;charset=utf-8' });
    const receiptUrl = URL.createObjectURL(receiptBlob);
    const link = document.createElement('a');
    link.href = receiptUrl;
    link.download = 'anchorcrest-foundation-receipt.txt';
    link.click();
    URL.revokeObjectURL(receiptUrl);
  };

  const courses = [
    {
      id: 1,
      title: 'Videography',
      category: 'CAMERA & VISUAL',
      icon: '📹',
      image: videography,
      duration: '8 Weeks',
      level: 'Beginner to Pro',
      tagline: 'Master cinematic framing and camera artistry.',
      desc: 'Cinematic framing, camera movement, composition, lens selection, and dynamic visual storytelling techniques for broadcast.',
      topics: ['Cinematic Composition & Framing', 'Camera Movement & Gimbal Stabilizing', 'Lens Selection & Depth of Field', 'Studio & Location Filming']
    },
    {
      id: 2,
      title: 'Editing',
      category: 'POST-PRODUCTION',
      icon: '✂️',
      image: Editing,
      duration: '8 Weeks',
      level: 'Industry Standard',
      tagline: 'Craft compelling stories in the cutting room.',
      desc: 'Non-linear editing in Premiere & DaVinci, pacing, multi-camera syncing, color grading, and broadcast mastering.',
      topics: ['Premiere Pro & DaVinci Resolve', 'Multi-Cam Syncing & Cutting', 'Color Grading & LUT Workflows', 'Broadcast Export Deliverables']
    },
    {
      id: 3,
      title: 'Sound Production',
      category: 'AUDIO & SOUND',
      icon: '🎧',
      image: SoundProduction,
      duration: '6 Weeks',
      level: 'Studio & Live',
      tagline: 'Capturing and sculpting pristine broadcast audio.',
      desc: 'Studio acoustic capturing, field audio recording, wireless mic rigging, multi-track mixing, and compression techniques.',
      topics: ['Wireless Mic Rigging & Frequency Sync', 'Studio Acoustic Isolation', 'Multi-Track Mixing & EQ', 'Live Broadcast Audio Mastering']
    },
    {
      id: 4,
      title: 'Camera Operations',
      category: 'STUDIO RIGS',
      icon: '🎥',
      image: CameraOperartor,
      duration: '6 Weeks',
      level: 'Hands-on Rigging',
      tagline: 'Operate professional broadcast pedestal rigs.',
      desc: 'Multi-cam broadcast pedestal rigs, PTZ operations, robotic jibs, handheld gimbal stabilization, and live multi-angle feeds.',
      topics: ['Heavy Pedestal Camera Rigging', 'PTZ Remote Operations', 'Robotic Jib & Crane Moves', 'Live Tally & Director Cueing']
    },
    {
      id: 5,
      title: 'Studio Lighting',
      category: 'LIGHTING & VFX',
      icon: '💡',
      image: Lighting,
      duration: '4 Weeks',
      level: 'Cinematic Grid',
      tagline: 'Illuminate scenes with dramatic atmosphere.',
      desc: 'Three-point lighting, overhead grid rigging, RGB LED panel mapping, DMX controllers, and cinematic mood design.',
      topics: ['Three-Point Cinematic Setup', 'Overhead Grid Rigging & Safety', 'DMX Lighting Console Control', 'Color Temperature & Diffusion']
    },
    {
      id: 6,
      title: 'Stage Design & Setup',
      category: 'STAGE & SET',
      icon: '🎭',
      image: StageDesign,
      duration: '6 Weeks',
      level: 'Creative Set',
      tagline: 'Build immersive sets for television and film.',
      desc: 'Broadcast set architecture, acoustic backdrop installations, LED video wall setup, and spatial stage aesthetics.',
      topics: ['Television Set Architecture', 'LED Video Wall Setup & Mapping', 'Acoustic Backdrop Design', 'Spatial Layout & Prop Placement']
    },
    {
      id: 7,
      title: 'Media Production',
      category: 'EXECUTIVE',
      icon: '🎬',
      image: MediaProduction,
      duration: '10 Weeks',
      level: 'Executive Workflow',
      tagline: 'Direct and produce high-end TV broadcasts.',
      desc: 'End-to-end production workflow, live show directing, floor management, rundown timing, and broadcast delivery.',
      topics: ['Floor Management & Live Cueing', 'Rundown Timing & Script Execution', 'Multi-Camera Live Switching', 'Executive Media Workflow']
    },
    {
      id: 8,
      title: 'Mixing MCR / PCR',
      category: 'CONTROL ROOM',
      icon: '🎛️',
      image: MixingPCR,
      duration: '8 Weeks',
      level: 'Advanced Control Room',
      tagline: 'The heartbeat of live satellite television.',
      desc: 'Master Control Room (MCR) & Production Control Room (PCR) live vision switching, automation, and stream routing.',
      topics: ['Vision Mixer Board Operations', 'Automation & Media Playout Servers', 'Satellite & OTT Uplink Routing', 'Live Graphics & Lower Thirds Sync']
    },
    {
      id: 9,
      title: 'Scripting & Narrative',
      category: 'CONTENT CRAFT',
      icon: '✍️',
      image: Scripting,
      duration: '4 Weeks',
      level: 'Narrative Craft',
      tagline: 'Write words that captivate global audiences.',
      desc: 'TV talk show scripting, teleprompter drafting, documentary storyboarding, and faith-based narrative writing.',
      topics: ['Talk Show & Panel Scripting', 'Teleprompter Formatting', 'Documentary Storyboarding', 'Interview Questionnaire Design']
    },
    {
      id: 10,
      title: 'Casting & Operations',
      category: 'LOGISTICS',
      icon: '👥',
      image: Casting,
      duration: '4 Weeks',
      level: 'Studio Logistics',
      tagline: 'Coordinate talent and seamless production schedules.',
      desc: 'Talent scouting, on-camera audition coordination, production scheduling, call sheets, and studio crew logistics.',
      topics: ['Talent Scouting & Auditions', 'Call Sheets & Crew Management', 'Production Scheduling', 'Studio Operations Protocols']
    },
    {
      id: 11,
      title: 'Voice Over Artist',
      category: 'VOCAL ARTS',
      icon: '🎙️',
      image: Voiceover,
      duration: '6 Weeks',
      level: 'Vocal Mastery',
      tagline: 'Find your voice and command the microphone.',
      desc: 'Vocal modulation, diction, accent training, commercial voiceovers, documentary narration, and booth techniques.',
      topics: ['Microphone Technique & Proximity', 'Diction & Accent Modulation', 'Commercial & Promo Reads', 'Documentary Narration Pacing']
    },
    {
      id: 12,
      title: 'Video Presenter',
      category: 'ON-CAMERA HOST',
      icon: '📺',
      image: VideoPresenter,
      duration: '6 Weeks',
      level: 'On-Camera Hosting',
      tagline: 'Exude poise and charisma on live television.',
      desc: 'On-screen confidence, live show hosting, teleprompter mastery, interview agility, and body language coaching.',
      topics: ['Teleprompter Reading Naturalness', 'Live Interview Moderation', 'Body Language & Posture', 'Handling Live On-Air Changes']
    },
    {
      id: 13,
      title: 'New Media / Podcast',
      category: 'STREAMING & OTT',
      icon: '📡',
      image: TechPodcast,
      duration: '6 Weeks',
      level: 'Digital & Streaming',
      tagline: 'Pioneer the future of digital broadcasts.',
      desc: 'Live streaming OTT infrastructure, podcast acoustic booth setup, multi-platform simulcasting, and AI production tools.',
      topics: ['Podcast Studio Audio Rigging', 'Multi-Platform RTMP Streaming', 'OTT & YouTube Channel Setup', 'AI Tools for Media Production']
    },
    {
      id: 14,
      title: 'Social Media Strategy',
      category: 'DIGITAL MEDIA',
      icon: '📱',
      image: SocialMedia,
      duration: '4 Weeks',
      level: 'Viral Growth',
      tagline: 'Drive engagement with high-impact short-form media.',
      desc: 'Short-form viral content (Reels/Shorts), algorithm optimization, digital branding, community engagement, and analytics.',
      topics: ['Vertical Video (Reels/Shorts/TikTok)', 'Thumbnail & Hook Architecture', 'Algorithm & SEO Strategies', 'Analytics & Campaign Scaling']
    },
    {
      id: 15,
      title: 'Movie Scene & Studio Makeup',
      category: 'CINEMATIC SFX',
      icon: '💄',
      image: Lighting,
      duration: '6 Weeks',
      level: 'HD & Cinematic SFX',
      tagline: 'Transform actors for high-definition broadcast.',
      desc: 'HD broadcast studio makeup, cinematic character transformation, prosthetic FX, lighting-compatible cosmetics, and touch-ups.',
      topics: ['HD Lighting-Compatible Makeup', 'Character & Aging Transformations', 'SFX & Minor Prosthetics', 'On-Set Touch-Up Protocols']
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
  const visibleCourses = showAllCourses ? courses : courses.slice(0, 6);

  return (
    <div className="anchorcrest-page">
      {/* Hero Section */}
      <section
        className="anchorcrest-hero"
        style={{
          backgroundImage: `url(${anchorcrestLogo})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="anchorcrest-hero-bg-overlay"></div>
        <div className="anchorcrest-hero-glow"></div>
        <div className="anchorcrest-hero-container">
          <span className="anchorcrest-badge">EMPOWERING THE NEXT GENERATION</span>
          <h1 className="anchorcrest-title">
            ANCHORCREST <span className="gold-text">FOUNDATION</span>
          </h1>
          <p className="anchorcrest-subtitle">
            Join us in making an impact across the Loveworld Network by sponsoring young people to attend our media training courses for free
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
              <span className="btn-arrow">&rarr;</span>
            </a>
            <a href="#courses-section" className="explore-btn-main">
              VIEW 15 MEDIA COURSES
            </a>
          </div>
        </div>
      </section>

      {/* Media Courses Section - 2 Columns Grid, 3 Rows + EXPLORE MORE */}
      <section id="courses-section" className="courses-section">
        <div className="anchorcrest-container">
          <div id="courses-grid" className="courses-grid-cards">
            {visibleCourses.map((course) => (
              <div
                key={course.id}
                className="programme-card course-program-card"
                onClick={() => setSelectedCourse(course)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedCourse(course);
                  }
                }}
              >
                <div className="programme-card-img-wrapper">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="programme-card-img"
                  />
                </div>

                <div className="programme-card-content">
                  <span className="programme-card-schedule">
                    ⏳ {course.duration} &bull; 🎯 {course.level}
                  </span>

                  <h3 className="programme-card-title">
                    {course.title}
                  </h3>

                  <p className="programme-card-tagline">
                    "{course.tagline}"
                  </p>

                  <p className="course-card-brief">
                    {course.desc}
                  </p>

                  <button type="button" className="programme-card-btn">
                    VIEW DETAILS
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="courses-grid-cta-wrap">
            <button
              type="button"
              className="courses-grid-cta"
              onClick={() => setShowAllCourses(!showAllCourses)}
            >
              {showAllCourses ? 'SHOW LESS' : 'EXPLORE MORE'}
            </button>
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
                    <span className="b-val highlight">ANCHORCREST FOUNDATION</span>
                    <button
                      className={`copy-btn ${copiedField === 'name' ? 'copied' : ''}`}
                      onClick={() => copyToClipboard('ANCHORCREST FOUNDATION', 'name')}
                    >
                      {copiedField === 'name' ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="bank-row-card">
                  <div className="b-label">BANK NAME</div>
                  <div className="b-val-group">
                    <span className="b-val">AXIS BANK</span>
                    <button
                      className={`copy-btn ${copiedField === 'bank' ? 'copied' : ''}`}
                      onClick={() => copyToClipboard('AXIS BANK', 'bank')}
                    >
                      {copiedField === 'bank' ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="bank-row-card">
                  <div className="b-label">ACCOUNT NUMBER</div>
                  <div className="b-val-group">
                    <span className="b-val mono-num">923010049345208</span>
                    <button
                      className={`copy-btn ${copiedField === 'acc' ? 'copied' : ''}`}
                      onClick={() => copyToClipboard('923010049345208', 'acc')}
                    >
                      {copiedField === 'acc' ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="bank-row-card">
                  <div className="b-label">IFSC CODE</div>
                  <div className="b-val-group">
                    <span className="b-val mono-num">UTIB0000269</span>
                    <button
                      className={`copy-btn ${copiedField === 'ifsc' ? 'copied' : ''}`}
                      onClick={() => copyToClipboard('UTIB0000269', 'ifsc')}
                    >
                      {copiedField === 'ifsc' ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                </div>

                <div className="bank-row-card">
                  <div className="b-label">BRANCH</div>
                  <div className="b-val-group">
                    <span className="b-val">Kalyani Nagar</span>
                  </div>
                </div>

              </div>

              <div className="receipt-download-box">
                <button type="button" onClick={downloadReceipt} className="receipt-download-btn">
                  Receipt Download
                </button>
                <span className="receipt-help-note">
                  Click to notify our foundation coordinator for your official acknowledgement and certificate of sponsorship.
                </span>
              </div>
            </div>

          </div>
          {/* Course Details Modal (Programmes Modal Style) */}
          {selectedCourse && (
            <div className="programmes-modal" onClick={() => setSelectedCourse(null)}>
              <div className="programmes-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="programmes-modal-grid">

                  <div className="programmes-modal-img-col">
                    <div
                      className="programmes-modal-bg-cover"
                      style={{ backgroundImage: `url("${selectedCourse.image}")` }}
                    >
                      <div className="programmes-modal-img-overlay"></div>
                    </div>
                  </div>

                  <div className="programmes-modal-info-col">
                    <span className="programmes-modal-schedule-tag">
                      ⏳ {selectedCourse.duration} &bull; 🎯 {selectedCourse.level}
                    </span>
                    <h2 className="programmes-modal-show-title">{selectedCourse.title}</h2>
                    <h4 className="programmes-modal-show-subtitle">{selectedCourse.category} SPECIALIZATION</h4>
                    <p className="programmes-modal-show-tagline">"{selectedCourse.tagline}"</p>
                    <p className="programmes-modal-show-desc">{selectedCourse.desc}</p>

                    {selectedCourse.topics && (
                      <div className="course-modal-curriculum">
                        <h5>Key Practical Competencies:</h5>
                        <ul>
                          {selectedCourse.topics.map((topic, i) => (
                            <li key={i}>✓ {topic}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="programmes-modal-actions-container">
                      <a
                        href="#sponsor-section"
                        className="programmes-modal-action-watch"
                        onClick={() => setSelectedCourse(null)}
                      >
                        SPONSOR THIS COURSE &rarr;
                      </a>
                      <button className="programmes-modal-action-back" onClick={() => setSelectedCourse(null)}>
                        CLOSE
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AnchorcrestFoundation;

