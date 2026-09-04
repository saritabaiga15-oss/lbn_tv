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
import studioVideo from '../../studio.mp4';

const Services = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((err) => {
              console.log('Autoplay on scroll prevented:', err);
            });
            setIsPlaying(true);
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
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
      {/* Full-Width Hero Section */}
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

      <div className="services-container">
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
              <div className="service-card-content">
                <span className="service-card-meta">STUDIO BROADCAST</span>
                <h3 className="service-card-title">Video Production Studios</h3>
                <p className="service-card-tagline">
                  "Multi-camera broadcast stages configured for live shows, talk shows, and high-end studio productions."
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-img-wrap">
                <img src={serviceChromaStudio} alt="Chroma Recording Studio" className="service-card-img" />
                <div className="service-card-overlay"></div>
              </div>
              <div className="service-card-content">
                <span className="service-card-meta">VFX & GREEN SCREEN</span>
                <h3 className="service-card-title">Chroma Recording Studio</h3>
                <p className="service-card-tagline">
                  "High-grade green screen facilities with full overhead truss lighting for seamless VFX and virtual sets."
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-img-wrap">
                <img src={servicePodcastStudio} alt="Podcast Recording Studio" className="service-card-img" />
                <div className="service-card-overlay"></div>
              </div>
              <div className="service-card-content">
                <span className="service-card-meta">4K AUDIO-VISUAL</span>
                <h3 className="service-card-title">Podcast Recording Studio</h3>
                <p className="service-card-tagline">
                  "Acoustic-treated studio with multi-angle 4K cameras and broadcast mics for audio-visual podcasts."
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
              <div className="service-card-content">
                <span className="service-card-meta">SOUNDPROOF BOOTH</span>
                <h3 className="service-card-title">Acoustic Dubbing Studio</h3>
                <p className="service-card-tagline">
                  "Isolated acoustic recording environment with premium studio microphones and pristine monitoring."
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-img-wrap">
                <img src={serviceSoundMixing} alt="Sound Dubbing and Mixing Studio" className="service-card-img" />
                <div className="service-card-overlay"></div>
              </div>
              <div className="service-card-content">
                <span className="service-card-meta">MASTERING & DAWS</span>
                <h3 className="service-card-title">Sound Dubbing & Mixing</h3>
                <p className="service-card-tagline">
                  "Multi-track mixing consoles and professional DAWs for mastering, dialogue sync, and broadcast audio."
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-img-wrap">
                <img src={Voiceover} alt="Voice Over Recording Studio" className="service-card-img" />
                <div className="service-card-overlay"></div>
              </div>
              <div className="service-card-content">
                <span className="service-card-meta">VOICE NARRATION</span>
                <h3 className="service-card-title">Voice Over Recording Studio</h3>
                <p className="service-card-tagline">
                  "Crystal clear voice-over recording booth for narration, commercials, podcasts, and character dubbing."
                </p>
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* Cinematic Video Showcase (Full 100% x 90vh) */}
      <section className="service-video-showcase">
        {/* Cinematic Gradient Vignettes for smooth top/bottom color transitions */}
        <div className="service-video-gradient-top"></div>
        <div className="service-video-gradient-bottom"></div>

        <div className="service-video-frame">
          <video
            ref={videoRef}
            src={studioVideo}
            className="service-hd-video-player"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source
              src={studioVideo}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Floating Sound Toggle */}
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
              ? '🔇 Unmute Audio'
              : '🔊 Sound On'}
          </button>
        </div>
      </section>

      <div className="services-container">

        {/* Equipment Lease */}
        <section className="service-category">

          <div className="service-category-header">
            <h2 className="service-category-title">
              EQUIPMENT LEASE
            </h2>

            <div className="service-category-line"></div>
          </div>

          <div className="equipment-lease-grid">
            <div className="equipment-lease-card">
              <h3>Cameras</h3>
            </div>
            <div className="equipment-lease-card">
              <h3>Audio</h3>
            </div>
            <div className="equipment-lease-card">
              <h3>Lights</h3>
            </div>
            <div className="equipment-lease-card">
              <h3>Genset</h3>
            </div>
            <div className="equipment-lease-card">
              <h3>Video Editing</h3>
            </div>
            <div className="equipment-lease-card">
              <h3>Grip Equipment</h3>
            </div>
            <div className="equipment-lease-card">
              <h3>Lenses</h3>
            </div>
            <div className="equipment-lease-card">
              <h3>Monitors</h3>
            </div>
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

          <div className="service-cards-grid">

            <div className="service-card">
              <div className="service-card-img-wrap">
                <img src={propCustomSets} alt="Custom Sets" className="service-card-img" />
                <div className="service-card-overlay"></div>
              </div>
              <div className="service-card-content">
                <span className="service-card-meta">STAGE ARCHITECTURE</span>
                <h3 className="service-card-title">Custom Sets</h3>
                <p className="service-card-tagline">
                  "Tailored broadcast stage designs and architectural studio setups for any production."
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-img-wrap">
                <img src={propFurnitureDecor} alt="Furniture & Decor" className="service-card-img" />
                <div className="service-card-overlay"></div>
              </div>
              <div className="service-card-content">
                <span className="service-card-meta">STUDIO STYLING</span>
                <h3 className="service-card-title">Furniture & Decor</h3>
                <p className="service-card-tagline">
                  "Curated executive armchairs, interview tables, and bespoke set furnishings."
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-img-wrap">
                <img src={propLightingRigs} alt="Lighting Rigs" className="service-card-img" />
                <div className="service-card-overlay"></div>
              </div>
              <div className="service-card-content">
                <span className="service-card-meta">OVERHEAD TRUSS</span>
                <h3 className="service-card-title">Lighting Rigs</h3>
                <p className="service-card-tagline">
                  "Heavy-duty motorized trussing and dynamic RGB stage illumination grids."
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-img-wrap">
                <img src={propBackdrops} alt="Backdrops" className="service-card-img" />
                <div className="service-card-overlay"></div>
              </div>
              <div className="service-card-content">
                <span className="service-card-meta">SCENIC BACKGROUNDS</span>
                <h3 className="service-card-title">Backdrops</h3>
                <p className="service-card-tagline">
                  "High-resolution seamless scenic cycloramas, acoustic curtains, and custom prints."
                </p>
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

            <div className="service-card accent-gold">
              <div className="service-card-content">
                <h3 className="service-card-title">Green Room</h3>
                <p className="service-card-desc">
                  Comfortable, private spaces for talent preparation and relaxation.
                </p>
              </div>
              <div className="service-card-icon-box">
                <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" fill="currentColor" fillOpacity="0.2" />
                  <line x1="6" y1="1" x2="6" y2="4" strokeLinecap="round" />
                  <line x1="10" y1="1" x2="10" y2="4" strokeLinecap="round" />
                  <line x1="14" y1="1" x2="14" y2="4" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div className="service-card accent-gold">
              <div className="service-card-content">
                <h3 className="service-card-title">Backup Power & Data</h3>
                <p className="service-card-desc">
                  Uninterrupted power and secure data backup systems for peace of mind.
                </p>
              </div>
              <div className="service-card-icon-box">
                <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polygon points="13 6 8 13 12 13 11 18 16 11 12 11" fill="currentColor" fillOpacity="0.25" />
                </svg>
              </div>
            </div>

            <div className="service-card accent-gold">
              <div className="service-card-content">
                <h3 className="service-card-title">Dedicated Parking</h3>
                <p className="service-card-desc">
                  Ample secure parking space for cast, crew, and production vehicles.
                </p>
              </div>
              <div className="service-card-icon-box">
                <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <path d="M9 17V7h4a3 3 0 0 1 0 6H9" strokeLinecap="round" fill="currentColor" fillOpacity="0.2" />
                </svg>
              </div>
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