import React, { useState } from 'react';
import './AboutUs.css';
import aboutHeroImg from '../../images/about_hero.jpg';

const AboutUs = () => {
  const [glanceExpanded, setGlanceExpanded] = useState(false);
  const [deliverExpanded, setDeliverExpanded] = useState(false);

  const stats = [
    { id: '01', number: '30+', label: 'Years of Broadcasting', value: 'Over two decades of dedication, spiritual impact, and excellence.' },
    { id: '02', number: '250+', label: 'Digital Channels', value: 'Multi-language feeds broadcasting hope 24/7 across various platforms.' },
    { id: '03', number: '50+', label: 'Studios', value: 'State-of-the-art production studios located across major Indian hubs.' },
    { id: '04', number: '1000+', label: 'Global Live Events', value: 'Massive broadcasts connecting millions in prayer, worship, and healing.' }
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
                {/* Always visible first line */}
                <p className="about-glance-text expanded">
                  Loveworld Broadcasting Network is a faith and lifestyle television network and a professional media production company operating under one roof.
                </p>

                {/* READ MORE — only shown when collapsed */}
                {!glanceExpanded && (
                  <button
                    className="about-readmore-btn"
                    onClick={() => setGlanceExpanded(true)}
                  >
                    READ MORE ▼
                  </button>
                )}

                {/* Extra text — only shown when expanded */}
                {glanceExpanded && (
                  <>
                    <p className="about-glance-text expanded" style={{ marginTop: '16px' }}>
                      Our broadcast division carries a clear mandate: to promote life and love, and to carry the message of Christ' love into nations through original programming in faith, teaching, leadership, family, lifestyle, prayer and worship.
                    </p>
                    <p className="about-glance-text expanded" style={{ marginTop: '16px' }}>
                      Our production division serves clients outside our own schedule — and inside it. We are a working studio with the infrastructure, crew and post-production discipline to take a project from concept to completed delivery.
                    </p>

                    {/* SHOW LESS — at the very bottom of expanded content */}
                    <button
                      className="about-readmore-btn"
                      onClick={() => setGlanceExpanded(false)}
                      style={{ marginTop: '12px' }}
                    >
                      SHOW LESS ▲
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Decorative divider */}
            <div className="about-divider"></div>

          </div>

          <div className="about-hero-img-col">
            <img src={aboutHeroImg} alt="LBN TV Production Studio" className="about-hero-img" />
            <div className="about-hero-img-overlay"></div>
          </div>
        </div>

        <div className="about-deliver-section">
          <div className="about-deliver-header">
            <span className="about-section-tag accent-gold">WHAT WE DELIVER</span>
          </div>

          {/* Always-visible first 3 blocks */}
          <div className="about-deliver-content expanded">
            <div className="about-deliver-block">
              <h3>Broadcast &amp; Original Programming</h3>
              <p>
                Faith, lifestyle, leadership, family, teaching, prayer and worship content — developed, produced and broadcast on LBN's platforms, with reach across India and into the global diaspora.
              </p>
            </div>

            <div className="about-deliver-block">
              <h3>Film &amp; Video Production</h3>
              <p>
                Feature films, documentaries, brand films, music videos and corporate video. Script development, production management, direction, cinematography, editing, colour, grading and final master — handled end to end.
              </p>
            </div>

            <div className="about-deliver-block">
              <h3>Podcast &amp; Studio Recording</h3>
              <p>
                Purpose-built podcast and recording studios, professional capture, editing and mastering, formatted for release across every major platform.
              </p>
            </div>
          </div>

          {/* READ MORE button — only shown when collapsed */}
          {!deliverExpanded && (
            <button
              className="about-readmore-btn accent-gold"
              onClick={() => setDeliverExpanded(true)}
            >
              READ MORE ▼
            </button>
          )}

          {/* Expandable additional blocks */}
          {deliverExpanded && (
            <div className="about-deliver-content expanded" style={{ marginTop: '22px' }}>
              <div className="about-deliver-block">
                <h3>Audio Production</h3>
                <p>
                  Jingles, adverts, theme music, albums, audiobooks and full audio branding, produced to broadcast specification.
                </p>
              </div>

              <div className="about-deliver-block">
                <h3>Voice &amp; Localisation</h3>
                <p>
                  Our AI voice assistant and cloning is designed to adapt across accents, languages and registers — corporate narration, character, devotional reads, dubbing and subtitling.
                </p>
              </div>

              <div className="about-deliver-block">
                <h3>Post-Production Services</h3>
                <p>
                  Editing, sound design, mixing, colour grading, motion graphics and mastering for clients who only need the final mile — and for those who need the whole road.
                </p>
              </div>

              <div className="about-deliver-full-width">
                <h3>Why Clients Choose LBN</h3>
                <ul>
                  <li>One accountable partner. Concept, production and post under a single roof, with one point of responsibility for delivery.</li>
                  <li>Broadcast-standard discipline. Our work is built for air, not just for a folder — specifications, QC and consistency as default.</li>
                  <li>Modern infrastructure. Studios, control rooms and edit suites that meet current delivery requirements.</li>
                  <li>Experienced hands. Producers, directors, engineers and editors who have worked at scale, in a culture that does not accept anything short of excellent.</li>
                  <li>A defined audience. Our clients reach an engaged, values-driven viewership that most commercial platforms cannot offer.</li>
                </ul>
              </div>

              <div className="about-deliver-block">
                <h3>Who We Work With</h3>
                <p>
                  Ministries and faith-based organisations · Corporate brands and agencies · Film and music producers · Podcasters and digital creators · Event organisers and institutions.
                </p>
              </div>

              <div className="about-deliver-block">
                <h3>Our Conviction</h3>
                <p>
                  You were created for a purpose — and on purpose. Everything we produce is designed to help you recognise that purpose, develop your potential, and accomplish what you were sent to do.
                </p>
              </div>

              <div className="about-deliver-block">
                <h3>Let's Begin</h3>
                <p>
                  Brief us on your project and we will come back with a scope, a schedule and a cost. Walk in with your script; leave with a production your market will respect.
                </p>
                <p>
                  Subscribe to the LBN bulletin for programme premieres, studio openings and client opportunities.
                </p>
              </div>

              {/* SHOW LESS button at the bottom of the expanded section */}
              <button
                className="about-readmore-btn accent-gold"
                onClick={() => setDeliverExpanded(false)}
                style={{ marginTop: '2px' }}
              >
                SHOW LESS ▲
              </button>
            </div>
          )}

        </div>

        {/* Section 2: Metrics Grid */}
        <div className="about-metrics-intro">
          <div className="metrics-intro-left">
            <span className="metric-box-num-tag">01</span>
          </div>
          <div className="metrics-intro-right">
            <h3 className="metrics-intro-heading">
              We bring together the perfect blend of <span className="txt-gold">total human experience</span> be it spirituality,
              educational, musical, morality, economic etc. A beautiful <span className="txt-blue">broadcast quality</span>, and optimized <span className="txt-red">digital accessibility</span>.
              An experience you&apos;d never forget.
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

        {/*
        Section 3: Milestones Footer
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
        */}

      </div>
    </section>
  );
};

export default AboutUs;
