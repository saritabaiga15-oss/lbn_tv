import React from 'react';
import './AirtimeOnLBN.css';

const AirtimeOnLBN = () => {
  return (
    <div className="airtime-on-lbn-page">
      <section className="airtime-hero">
        <div className="airtime-hero-glow"></div>
        <div className="airtime-hero-container">
          <span className="airtime-hero-pill">BROADCAST &amp; MEDIA OUTREACH</span>
          <h1 className="airtime-hero-title">
            AIRTIME ON <span className="gold-gradient-text">LBN</span>
          </h1>
          <p className="airtime-hero-desc">
            Loveworld Broadcasting Network
          </p>
          <div className="airtime-hero-btns">
            <a href="tel:+919529607156" className="airtime-secondary-btn">
              <span>📞 CALL US</span>
            </a>
          </div>
        </div>
      </section>

      <section className="airtime-details-section">
        <div className="airtime-container">
          <div className="airtime-grid-showcase">
            <div className="airtime-info-card">
              <div className="airtime-badge-label">LBN MARKETING SERVICES</div>
              <h2 className="airtime-heading">
                Expand Your Reach with Targeted Airtime Packages
              </h2>
              <p className="airtime-body-text">
                LBN Marketing Services includes the purchase of advertisement spots and airtime packages for TV programs produced externally by other organisations. We thrive on the challenge to broadcast premium class media content that fits within your allocated time and budget lines.
              </p>

              <div className="airtime-contact-box">
                <h3>For Rates, Schedules &amp; Custom Airtime Packages:</h3>
                <div className="contact-list">
                  <div className="contact-item">
                    <span className="c-icon">📞</span>
                    <div>
                      <strong>Call Us:</strong>{' '}
                      <a href="tel:+919529607156">+91 9529607156</a> | <a href="tel:+2349085900344">+234 9085900344</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="c-icon">💬</span>
                    <div>
                      <strong>SMS:</strong>{' '}
                      <a href="sms:+919529607156">+91 9529607156</a>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="c-icon">✉️</span>
                    <div>
                      <strong>Email:</strong>{' '}
                      <a href="mailto:info@lbntv.org">info@lbntv.org</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="airtime-packages-col">
              <div className="package-card">
                <div className="p-icon">⚡</div>
                <h3>Commercial Ad Spots</h3>
                <p>Targeted 30-second and 60-second prime-time commercial spots during high-engagement live broadcasts, music sessions, and daily devotional streams.</p>
              </div>

              <div className="package-card">
                <div className="p-icon">🌐</div>
                <h3>Program Airtime Slots</h3>
                <p>Weekly 30-minute and 60-minute recurring broadcast blocks for your ministry sermons, talk shows, documentaries, and community programs.</p>
              </div>

              <div className="package-card">
                <div className="p-icon">📡</div>
                <h3>Live Event Transmission</h3>
                <p>Comprehensive live satellite transmission and OTT multi-platform streaming for crusades, regional conferences, musical concerts, and special services.</p>
              </div>

              <div className="package-card cta">
                <div className="p-icon">✨</div>
                <h3>Tailored Broadcast Strategy</h3>
                <p>Looking for a custom seasonal package? Our media director will design an optimal airtime broadcast calendar tailored to your mission.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AirtimeOnLBN;

