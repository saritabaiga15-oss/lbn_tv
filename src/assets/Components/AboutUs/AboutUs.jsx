import React, { useState } from 'react';
import './AboutUs.css';
import aboutHeroImg from '../../images/about_hero.jpg';

const AboutUs = () => {
  const [glanceExpanded, setGlanceExpanded] = useState(false);
  const [valueExpanded, setValueExpanded] = useState(false);

  const stats = [
    { id: '01', number: '25+', label: 'Years of Broadcasting', value: 'Over two decades of dedication, spiritual impact, and excellence.' },
    { id: '02', number: '10+', label: 'Digital Channels', value: 'Multi-language feeds broadcasting hope 24/7 across various platforms.' },
    { id: '03', number: '5', label: 'Regional Studios', value: 'State-of-the-art production studios located across major Indian hubs.' },
    { id: '04', number: '260+', label: 'Global Live Events', value: 'Massive broadcasts connecting millions in prayer, worship, and healing.' }
  ];

  const milestones = [
    { year: '2003', title: 'Foundation of LBNTV', desc: 'Started as a regional media initiative in New Delhi.' },
    { year: '2008', title: '24/7 Satellite Launch', desc: 'Acquired satellite transponder space for continuous broadcasting.' },
    { year: '2012', title: '50 Million Reach', desc: 'Reached a milestone of 50 million active households across Asia.' },
    { year: '2018', title: 'Digital Expansion', desc: 'Launched web streams and custom mobile apps for global convenience.' },
    { year: '2025', title: 'HD regional feeds', desc: 'Broadcasting in 8 regional languages with advanced streaming feeds.' }
  ];

  return (
    <section id="about-us-page" className="about-us-page-section">
      <div className="about-us-page-container">

        {/* Section 1: Hero Block with Stacked ABOUT / US, Glance/Value Content, and Production Studio Photo */}
        <div className="about-hero-block">
          <div className="about-hero-title-col">
            <h1 className="about-hero-large-title">
              <span className="title-about">ABOUT</span>
              <span className="title-us">US</span>
            </h1>
          </div>

          <div className="about-hero-desc-col">
            {/* ── LBN AT A GLANCE ── */}
            <div className="about-glance-block">
              <div className="about-glance-label-col">
                <span className="about-section-tag">LBN AT A GLANCE</span>
              </div>
              <div className="about-glance-content-col">
                <p className={`about-glance-text ${glanceExpanded ? 'expanded' : 'clamped'}`}>
                  LoveWorld Broadcasting Network has the mandate to impact India and Asia at large with the Gospel of our Lord and Saviour Jesus Christ through various faith-filled programmes centred on lifestyle, teachings, leadership, family, prayer, worship, and much more. You were created for a purpose, on purpose. Everything we do is designed to help you recognise your God-given purpose, develop your potential, and achieve all that God has destined for you. Are you ready to go on this journey with us? Let's get started! To make sure you don't miss a thing, be sure to subscribe to our newsletter and stay connected to inspiring programmes, uplifting messages, and life-changing content. Let's get going!
                </p>
                <button
                  className="about-readmore-btn"
                  onClick={() => setGlanceExpanded(!glanceExpanded)}
                >
                  {glanceExpanded ? 'SHOW LESS ▲' : 'READ MORE ▼'}
                </button>
              </div>
            </div>

            {/* Decorative divider */}
            <div className="about-divider"></div>

            {/* ── YOUR VALUE ── */}
            <div className="about-glance-block">
              <div className="about-glance-label-col">
                <span className="about-section-tag accent-gold">YOUR VALUE</span>
              </div>
              <div className="about-glance-content-col">
                <p className={`about-glance-text ${valueExpanded ? 'expanded' : 'clamped'}`}>
                  You were created for a purpose, and your life carries tremendous value. We are here to help you discover and fulfil that purpose by providing rich, inspiring, and faith-filled content to strengthen your faith and deepen your understanding of God's Word. Everything we're about is designed to help you recognise who you are in Christ, develop your God-given potential, and achieve all that God has prepared for you. Your purpose matters, your potential matters, and your destiny matters.
                </p>
                <button
                  className="about-readmore-btn accent-gold"
                  onClick={() => setValueExpanded(!valueExpanded)}
                >
                  {valueExpanded ? 'SHOW LESS ▲' : 'READ MORE ▼'}
                </button>
              </div>
            </div>
          </div>

          <div className="about-hero-img-col">
            <img src={aboutHeroImg} alt="LBN TV Production Studio" className="about-hero-img" />
            <div className="about-hero-img-overlay"></div>
          </div>
        </div>

        {/* Section 2: Metrics Grid */}
        <div className="about-metrics-intro">
          <div className="metrics-intro-left">
            <span className="metric-box-num-tag">01</span>
          </div>
          <div className="metrics-intro-right">
            <h3 className="metrics-intro-heading">
              We bring together the perfect blend of <span className="txt-gold">deep spiritual impact</span>, 
              beautiful <span className="txt-blue">broadcast quality</span>, and optimized <span className="txt-red">digital accessibility</span>.
            </h3>
          </div>
        </div>

        <div className="about-metrics-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="metric-card">
              <span className="metric-card-id">{stat.id}</span>
              <div className="metric-card-content">
                <span className="metric-card-number">{stat.number}</span>
                <h4 className="metric-card-label">{stat.label}</h4>
                <p className="metric-card-desc">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Section 3: Milestones Footer */}
        <div className="about-milestones-block">
          <div className="milestones-left">
            <span className="milestones-big-stat">260+</span>
          </div>
          <div className="milestones-right">
            <h3 className="milestones-block-heading">MILESTONES OF GLOBAL BROADCASTING</h3>
            <div className="milestones-list">
              {milestones.map((item, idx) => (
                <div key={idx} className="milestone-row">
                  <span className="milestone-year">{item.year}</span>
                  <div className="milestone-details">
                    <h4 className="milestone-title">{item.title}</h4>
                    <p className="milestone-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
