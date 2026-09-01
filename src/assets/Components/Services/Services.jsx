import React, { useRef, useState, useEffect } from 'react';
import './Services.css';
import serviceHeroBg from '../../images/service_hero_bg.jpg';
import propCustomSets from '../../images/prop_custom_sets.jpg';
import propFurnitureDecor from '../../images/prop_furniture_decor.png';
import propLightingRigs from '../../images/prop_lighting_rigs.jpg';
import propBackdrops from '../../images/prop_backdrops.png';
import package24hr from '../../images/package_24hr_operations.jpg';
import packageMovie from '../../images/package_movie_production.png';
import packageShortMovie from '../../images/package_short_movie.png';
import serviceVideoStudio from '../../images/service_video_studio.png';
import serviceChromaStudio from '../../images/service_chroma_studio.png';
import servicePodcastStudio from '../../images/service_podcast_studio.jpg';
import serviceAcousticDubbing from '../../images/service_acoustic_dubbing.png';
import serviceSoundMixing from '../../images/service_sound_mixing.jpg';
import Voiceover from '../../images/Voiceover.png';

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
        <div
          className="services-hero"
          style={{
            backgroundImage: `linear-gradient(rgba(13, 13, 20, 0.72), rgba(13, 13, 20, 0.86)), url(${serviceHeroBg})`
          }}
        >
          <div className="services-hero-content">
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
              <div className="service-card-img-wrap">
                <img src={serviceVideoStudio} alt="Video Production Studios" className="service-card-img" />
                <div className="service-card-overlay"></div>
              </div>
              <div className="service-card-body">
                <h3>Video Production Studios</h3>
                <p>
                  Multi-camera broadcast stages configured for live shows, talk shows, and high-end studio productions.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-img-wrap">
                <img src={serviceChromaStudio} alt="Chroma Recording Studio" className="service-card-img" />
                <div className="service-card-overlay"></div>
              </div>
              <div className="service-card-body">
                <h3>Chroma Recording Studio</h3>
                <p>
                  High-grade green screen facilities with full overhead truss lighting for seamless VFX and virtual sets.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-img-wrap">
                <img src={servicePodcastStudio} alt="Podcast Recording Studio" className="service-card-img" />
                <div className="service-card-overlay"></div>
              </div>
              <div className="service-card-body">
                <h3>Podcast Recording Studio</h3>
                <p>
                  Acoustic-treated studio with multi-angle 4K cameras and broadcast mics for audio-visual podcasts.
                </p>
              </div>
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
              <div className="service-card-img-wrap">
                <img src={serviceAcousticDubbing} alt="Acoustic Sound Proof Audio Dubbing Studio" className="service-card-img" />
                <div className="service-card-overlay"></div>
              </div>
              <div className="service-card-body">
                <h3>Acoustic Sound Proof Audio Dubbing Studio</h3>
                <p>
                  Isolated acoustic recording environment with premium studio microphones and pristine monitoring.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-img-wrap">
                <img src={serviceSoundMixing} alt="Sound Dubbing and Mixing Studio" className="service-card-img" />
                <div className="service-card-overlay"></div>
              </div>
              <div className="service-card-body">
                <h3>Sound Dubbing and Mixing Studio</h3>
                <p>
                  Multi-track mixing consoles and professional DAWs for mastering, dialogue sync, and broadcast audio.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-img-wrap">
                <img src={Voiceover} alt="Voice Over Recording Studio" className="service-card-img" />
                <div className="service-card-overlay"></div>
              </div>
              <div className="service-card-body">
                <h3>Voice Over Recording Studio</h3>
                <p>
                  Crystal clear voice-over recording booth for narration, commercials, podcasts, and character dubbing.
                </p>
              </div>
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
              src="/Videos/ProductionVideo.mp4"
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
                src="C:\Users\admin\Downloads\Production Vidoe.mp4"

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
              <img src={propFurnitureDecor} alt="Custom Sets" className="prop-card-img" />
              <div className="prop-card-overlay">
                <span className="prop-title">Custom Sets</span>
              </div>
            </div>

            <div className="prop-card">
              <img src={propBackdrops} alt="Furniture & Decor" className="prop-card-img" />
              <div className="prop-card-overlay">
                <span className="prop-title">Furniture & Decor</span>
              </div>
            </div>

            <div className="prop-card">
              <img src={propLightingRigs} alt="Lighting Rigs" className="prop-card-img" />
              <div className="prop-card-overlay">
                <span className="prop-title">Lighting Rigs</span>
              </div>
            </div>

            <div className="prop-card">
              <img src={propCustomSets} alt="Backdrops" className="prop-card-img" />
              <div className="prop-card-overlay">
                <span className="prop-title">Backdrops</span>
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
              <div className="package-card-img-wrap">
                <img src={package24hr} alt="24-Hour Operations" className="package-card-img" />
                <div className="package-card-overlay"></div>
                <span className="package-badge-icon">⏱️</span>
              </div>

              <div className="package-card-body">
                <h3>24-Hour Operations</h3>
                <p>
                  Round-the-clock facility access for tight
                  production schedules.
                </p>
              </div>
            </div>

            <div className="package-card">
              <div className="package-card-img-wrap">
                <img src={packageMovie} alt="Movie Production" className="package-card-img" />
                <div className="package-card-overlay"></div>
                <span className="package-badge-icon">🎬</span>
              </div>

              <div className="package-card-body">
                <h3>Movie Production</h3>
                <p>
                  End-to-end support and facilities for
                  feature-length films.
                </p>
              </div>
            </div>

            <div className="package-card">
              <div className="package-card-img-wrap">
                <img src={packageShortMovie} alt="Short Movie Production" className="package-card-img" />
                <div className="package-card-overlay"></div>
                <span className="package-badge-icon">🎥</span>
              </div>

              <div className="package-card-body">
                <h3>Short Movie Production</h3>
                <p>
                  Tailored, cost-effective packages for
                  short films and indie projects.
                </p>
              </div>
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