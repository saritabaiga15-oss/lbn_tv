import React, { useRef, useState, useEffect } from 'react';
import './Services.css';

const Services = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;

      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.log(
              'Autoplay prevented or waiting for interaction:',
              err
            );
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      const newMuted = !videoRef.current.muted;

      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="services-page-section">
      <div className="services-container">

        {/* Hero Section */}
        <div className="services-hero">
          <span className="services-badge">OUR SERVICES</span>

          <h1 className="services-title">
            Everything You Need.
            <br />
            One Production Facility.
          </h1>

          <div className="services-hero-actions">
            <a href="#contact" className="services-btn primary">
              Book a Studio
            </a>

            <a href="#contact" className="services-btn secondary">
              Contact Us
            </a>
          </div>
        </div>

        {/* Video Production */}
        <section className="service-category">
          <div className="service-category-header">
            <h2 className="service-category-title">
              VIDEO PRODUCTION
            </h2>

            <div className="service-category-line"></div>
          </div>

          <div className="service-cards-grid">

            <div className="service-card">
              <h3>Studio</h3>
              <p>
                State-of-the-art video recording studios equipped
                for any scale of production.
              </p>
            </div>

            <div className="service-card">
              <h3>Chroma</h3>
              <p>
                High-quality green screen facilities for immersive
                virtual backgrounds and VFX.
              </p>
            </div>

            <div className="service-card">
              <h3>Podcast</h3>
              <p>
                Dedicated acoustic-treated podcast setups for
                professional audio-visual recording.
              </p>
            </div>

          </div>
        </section>

        {/* Audio Production */}
        <section className="service-category">
          <div className="service-category-header">
            <h2 className="service-category-title">
              AUDIO PRODUCTION
            </h2>

            <div className="service-category-line"></div>
          </div>

          <div className="service-cards-grid">

            <div className="service-card">
              <h3>Dubbing</h3>
              <p>
                Professional dubbing and ADR services across
                multiple languages.
              </p>
            </div>

            <div className="service-card">
              <h3>Mixing</h3>
              <p>
                Industry-standard audio mixing and mastering
                for broadcast and film.
              </p>
            </div>

            <div className="service-card">
              <h3>Voice Over</h3>
              <p>
                Crystal clear voice-over recording booths with
                premium microphones.
              </p>
            </div>

          </div>
        </section>

        {/* HD Production Video Showcase */}
        <section className="service-video-showcase">

          <div className="service-video-glow"></div>

          <div className="service-video-header">

            <div className="service-video-title-wrap">

              <div className="service-video-badge">
                <span className="hd-tag">
                  HD 1080p
                </span>

                <span>
                  PRODUCTION SHOWCASE
                </span>
              </div>

              <h2 className="service-video-title">
                SEE OUR PRODUCTION FACILITY IN ACTION
              </h2>

              <p className="service-video-subtitle">
                Take an exclusive high-definition look at our
                state-of-the-art studios, equipment, and
                broadcast operations.
              </p>

            </div>

            <div className="service-video-controls-quick">

              <button
                type="button"
                className="service-sound-toggle-btn"
                onClick={toggleSound}
                aria-label={
                  isMuted ? 'Unmute Audio' : 'Mute Audio'
                }
              >
                {isMuted
                  ? '🔇 Unmute Audio'
                  : '🔊 Sound On'}
              </button>

            </div>

          </div>

          {/* Video */}
          <div className="service-video-frame">

            <video
              ref={videoRef}
              src="/Videos/Production Video.mp4"
              className="service-hd-video-player"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="auto"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source
                src="/Videos/ProductionVideo.mp4"
                type="video/mp4"
              />

              Your browser does not support the video tag.
            </video>

            {/* Floating Sound Button */}
            <button
              type="button"
              className="video-float-sound-btn"
              onClick={toggleSound}
              title={
                isMuted
                  ? 'Click to enable sound'
                  : 'Click to mute'
              }
            >
              {isMuted
                ? '🔇 Tap for Sound'
                : '🔊 Audio Active'}
            </button>

          </div>

        </section>

        {/* Equipment Lease */}
        <section className="service-category">

          <div className="service-category-header">
            <h2 className="service-category-title">
              EQUIPMENT LEASE
            </h2>

            <div className="service-category-line"></div>
          </div>

          <div className="service-tags-container">

            <span className="service-tag">Cameras</span>
            <span className="service-tag">Audio</span>
            <span className="service-tag">Lights</span>
            <span className="service-tag">Genset</span>
            <span className="service-tag">Video Editing</span>
            <span className="service-tag">Grip Equipment</span>
            <span className="service-tag">Lenses</span>
            <span className="service-tag">Monitors</span>

          </div>

        </section>

        {/* Props & Studio Setup */}
        <section className="service-category">

          <div className="service-category-header">
            <h2 className="service-category-title">
              PROPS & STUDIO SETUP
            </h2>

            <div className="service-category-line"></div>
          </div>

          <div className="props-gallery">

            <div className="prop-card">
              <div className="prop-placeholder">
                Custom Sets
              </div>
            </div>

            <div className="prop-card">
              <div className="prop-placeholder">
                Furniture & Decor
              </div>
            </div>

            <div className="prop-card">
              <div className="prop-placeholder">
                Lighting Rigs
              </div>
            </div>

            <div className="prop-card">
              <div className="prop-placeholder">
                Backdrops
              </div>
            </div>

          </div>

        </section>

        {/* Additional Facilities */}
        <section className="service-category">

          <div className="service-category-header">
            <h2 className="service-category-title">
              ADDITIONAL FACILITIES
            </h2>

            <div className="service-category-line"></div>
          </div>

          <div className="service-cards-grid">

            <div className="service-card">
              <h3>Green Room</h3>
              <p>
                Comfortable, private spaces for talent
                preparation and relaxation.
              </p>
            </div>

            <div className="service-card">
              <h3>Backup</h3>
              <p>
                Uninterrupted power and secure data backup
                systems for peace of mind.
              </p>
            </div>

            <div className="service-card">
              <h3>Parking</h3>
              <p>
                Ample secure parking space for cast, crew,
                and production vehicles.
              </p>
            </div>

          </div>

        </section>

        {/* Custom Packages */}
        <section className="service-category">

          <div className="service-category-header">
            <h2 className="service-category-title">
              CUSTOM PACKAGES
            </h2>

            <div className="service-category-line"></div>
          </div>

          <div className="packages-grid">

            <div className="package-card">
              <div className="package-icon">
                ⏱️
              </div>

              <h3>24-Hour Operations</h3>

              <p>
                Round-the-clock facility access for tight
                production schedules.
              </p>
            </div>

            <div className="package-card">
              <div className="package-icon">
                🎬
              </div>

              <h3>Movie Production</h3>

              <p>
                End-to-end support and facilities for
                feature-length films.
              </p>
            </div>

            <div className="package-card">
              <div className="package-icon">
                🎥
              </div>

              <h3>Short Movie Production</h3>

              <p>
                Tailored, cost-effective packages for
                short films and indie projects.
              </p>
            </div>

          </div>

        </section>

        {/* Bottom CTA */}
        <div
          className="services-cta-section"
          id="contact"
        >

          <div className="services-cta-box">

            <h2>
              READY TO BRING YOUR PROJECT TO LIFE?
            </h2>

            <p>
              Our team of experts is here to help you
              create something extraordinary.
            </p>

            <div className="services-cta-actions">

              <a
                href="tel:+919529607156"
                className="services-btn primary"
              >
                CALL NOW
              </a>

              <a
                href="mailto:info@lbntv.org"
                className="services-btn secondary outline"
              >
                SEND ENQUIRY
              </a>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Services;