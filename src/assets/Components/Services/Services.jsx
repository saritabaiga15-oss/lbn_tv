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
  const [selectedSetup, setSelectedSetup] = useState(null);
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [copiedText, setCopiedText] = useState(null);

  const copyToClipboard = (text, label) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setCopiedText(label);
        setTimeout(() => setCopiedText(null), 2500);
      }).catch(() => {
        setCopiedText(label);
        setTimeout(() => setCopiedText(null), 2500);
      });
    } else {
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2500);
    }
  };

  const propsStudioData = [
    {
      id: 'custom-sets',
      meta: 'STAGE ARCHITECTURE',
      title: 'CUSTOM SETS',
      titleColor: '',
      tagline: 'TAILORED BROADCAST STAGE DESIGNS AND ARCHITECTURAL STUDIO SETUPS FOR ANY PRODUCTION.',
      image: propCustomSets,
      status: 'Ready For Booking',
      overview: 'Our custom broadcast stages and architectural setups are engineered for multi-camera live television, talk shows, corporate keynotes, and high-end episodic series. Built with modular scenic walls, acoustic dampening materials, integrated LED lighting coves, and premium materials designed specifically to minimize glare and camera reflections.',
      specs: [
        { label: 'Studio Capacity', value: 'Up to 50 Guests' },
        { label: 'Camera Setup', value: 'Multi-Camera Production' },
        { label: 'Live Streaming', value: 'Broadcast-Ready' },
        { label: 'Production Support', value: 'Technical Crew Available' }
      ],
      features: [
        'Modular architectural set walls with interchangeable textures & finishes',
        'Built-in broadcast confidence monitor mounts & teleprompter setups',
        'Dynamic RGB stage backlight integration with DMX console control',
        'Custom corporate and television show branded podiums & set elements',
        'Direct access to backstage talent green rooms and hair/makeup stations',
        'Ultra-quiet broadcast HVAC climate control system'
      ],
      idealFor: ['Live Broadcast Shows', 'Talk Shows & Interviews', 'Award Ceremonies', 'Product Launches', 'Feature Film Scenes']
    },
    {
      id: 'furniture-decor',
      meta: 'STUDIO STYLING',
      title: 'FURNITURE & DECOR',
      titleColor: 'title-gold',
      tagline: 'CURATED EXECUTIVE ARMCHAIRS, INTERVIEW TABLES, AND BESPOKE SET FURNISHINGS.',
      image: propFurnitureDecor,
      status: 'Ready For Booking',
      overview: 'Transform your studio atmosphere with our expansive, curated inventory of broadcast-ready furniture and set styling props. From executive leather armchairs and contemporary interview sofas to glass accent tables, architectural foliage, and minimalist studio backdrops, each item is vetted for optimal ergonomics and camera color reproduction.',
      specs: [
        { label: 'Inventory', value: '150+ Curated Items' },
        { label: 'Styles', value: 'Modern, Classic & Tech' },
        { label: 'Materials', value: 'Anti-Glare Fabrics & Woods' },
        { label: 'Stylist Support', value: 'On-site Set Dressing' }
      ],
      features: [
        'Curated executive armchairs, lounge seating, and conversation setups',
        'Modern interview tables with hidden cable management for microphones',
        'Bespoke studio decor, geometric partition screens, and architectural plants',
        'Customizable color schemes to match your brand identity',
        'Quick turn-around reconfiguration between recording sessions',
        'Professional set dressing team available upon request'
      ],
      idealFor: ['Executive Interviews', 'Panel Discussions', 'Podcast Studios', 'Brand Storytelling', 'Lifestyle Shoots']
    },
    {
      id: 'lighting-rigs',
      meta: 'OVERHEAD TRUSS',
      title: 'LIGHTING RIGS',
      titleColor: '',
      tagline: 'HEAVY-DUTY MOTORIZED TRUSSING AND DYNAMIC RGB STAGE ILLUMINATION GRIDS.',
      image: propLightingRigs,
      status: 'Ready For Booking',
      overview: 'State-of-the-art overhead motorized box trussing system with complete 360-degree illumination coverage. Equipped with cinema-grade softlights, motorized moving heads, dynamic RGB pixel tubes, and precision profile spots controlled by industry-standard digital lighting consoles with instant scene recall.',
      specs: [
        { label: 'Grid System', value: 'Motorized Box Truss' },
        { label: 'Control Protocol', value: 'ArtNet / DMX 512' },
        { label: 'Color Rendering', value: 'CRI 97+ Cinema LEDs' },
        { label: 'Dimming', value: 'Flicker-Free to 0.1%' }
      ],
      features: [
        'Motorized electronic chain hoists for fast, safe fixture adjustments',
        'High-CRI panel softlights for natural, flattering skin tones',
        'Dynamic RGB and bi-color stage lighting with custom scene programming',
        'Spotlights, fresnels, and ellipsoidal fixtures for razor-sharp edge lighting',
        'Emergency UPS backup power ensuring continuous filming uninterrupted',
        'Certified lighting director and gaffer support on standby'
      ],
      idealFor: ['Cinema & Commercials', 'Music Videos', 'High-Speed Filming', 'Virtual Production', 'Broadcast Television']
    },
    {
      id: 'backdrops',
      meta: 'SCENIC BACKGROUNDS',
      title: 'BACKDROPS',
      titleColor: '',
      tagline: 'HIGH-RESOLUTION SEAMLESS SCENIC CYCLORAMAS, ACOUSTIC CURTAINS, AND CUSTOM PRINTS.',
      image: propBackdrops,
      status: 'Ready For Booking',
      overview: 'Versatile backdrop systems including seamless infinity cyclorama walls, heavy black velour acoustic drape tracks, ultra-flat chroma green screens, and bespoke high-resolution photographic prints. Engineered to give your production limitless visual depth and flawless sound isolation.',
      specs: [
        { label: 'Cyclorama', value: '3-Wall Seamless Curve' },
        { label: 'Drapes', value: '32oz Heavy Black Velour' },
        { label: 'Chroma Key', value: 'Digital Green & Blue' },
        { label: 'Width', value: 'Up to 40 ft Seamless' }
      ],
      features: [
        'Pre-lit seamless white & chroma green infinity cyclorama walls',
        'Track-mounted 32oz heavy sound-absorbing acoustic black velour curtains',
        'Custom large-format fabric and canvas printed scenic backdrops',
        'Rapid track interchange system for instant backdrop swaps',
        'Floor-to-ceiling seamless transitions for realistic perspective depth',
        'Specialty textured backdrops including industrial, brick, and wood panels'
      ],
      idealFor: ['Chroma Keying & VFX', 'Fashion & Commercials', 'Music Videos', 'Corporate Video', 'Product Photography']
    }
  ];

  const handleBookStudioClick = (e) => {
    e.preventDefault();
    setSelectedSetup(propsStudioData[0]);
    setShowContactInfo(true);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedSetup(null);
      }
    };
    if (selectedSetup) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedSetup]);

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
            <a 
              href="#props-studio-setup" 
              className="services-btn primary"
              onClick={handleBookStudioClick}
            >
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
        <section className="service-category props-studio-section" id="props-studio-setup">

          <div className="service-category-header">
            <h2 className="service-category-title">
              PROPS & STUDIO SETUP
            </h2>

            <div className="service-category-line"></div>
          </div>

          <div className="service-cards-grid">
            {propsStudioData.map((item) => (
              <div 
                key={item.id} 
                className="service-card service-setup-card"
                onClick={() => setSelectedSetup(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelectedSetup(item); }}
              >
                <div className="service-card-img-wrap">
                  <img src={item.image} alt={item.title} className="service-card-img" />
                  <div className="service-card-overlay"></div>
                </div>
                <div className="service-card-content">
                  <span className="service-card-meta">{item.meta}</span>
                  <h3 className={`service-card-title ${item.titleColor || ''}`}>
                    {item.title}
                  </h3>
                  <p className="service-card-tagline">
                    "{item.tagline}"
                  </p>
                  
                  <button 
                    type="button" 
                    className="service-card-pop-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSetup(item);
                    }}
                    aria-label={`View details and specs for ${item.title}`}
                  >
                    <span>VIEW SETUP DETAILS</span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
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
                CALL NOW: +91 9529607156
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Studio & Setup Details Modal */}
      {selectedSetup && (
        <div 
          className="studio-modal-backdrop"
          onClick={() => setSelectedSetup(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-setup-title"
        >
          <div 
            className="studio-modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="studio-modal-close-btn"
              onClick={() => setSelectedSetup(null)}
              aria-label="Close details"
            >
              &times;
            </button>
            <div className="studio-modal-top-bar">
              <span className="studio-modal-kicker-badge">PROPS & STUDIO SETUP</span>
              <div className="studio-modal-setup-pills">
                {propsStudioData.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`studio-setup-pill ${selectedSetup.id === item.id ? 'active' : ''}`}
                    onClick={() => setSelectedSetup(item)}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="studio-modal-grid">
              {/* Left column: Visuals & technical specs */}
              <div className="studio-modal-visual-col">
                <div className="studio-modal-img-wrapper">
                  <img 
                    src={selectedSetup.image} 
                    alt={selectedSetup.title} 
                    className="studio-modal-img" 
                  />
                  <div className="studio-modal-img-gradient"></div>
                  <div className="studio-modal-badge-group">
                    <span className="modal-status-pill">
                      <span className="pulse-dot"></span>
                      {selectedSetup.status}
                    </span>
                    <span className="modal-category-pill">{selectedSetup.meta}</span>
                  </div>
                </div>

                <div className="studio-modal-specs-grid">
                  {selectedSetup.specs.map((spec, i) => (
                    <div key={i} className="studio-spec-card">
                      <span className="spec-card-label">{spec.label}</span>
                      <strong className="spec-card-value">{spec.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column: Info, features & booking actions */}
              <div className="studio-modal-info-col">
                <div className="studio-modal-header">
                  <span className="studio-modal-kicker">{selectedSetup.meta} SPECIFICATIONS</span>
                  <h2 id="modal-setup-title" className="studio-modal-title">{selectedSetup.title}</h2>
                  <p className="studio-modal-tagline">"{selectedSetup.tagline}"</p>
                </div>

                <div className="studio-modal-body">
                  <div className="studio-modal-section">
                    <h4>STUDIO SETUP OVERVIEW</h4>
                    <p>{selectedSetup.overview}</p>
                  </div>

                  <div className="studio-modal-section">
                    <h4>INCLUDED EQUIPMENT & HIGHLIGHTS</h4>
                    <ul className="studio-features-list">
                      {selectedSetup.features.map((feat, idx) => (
                        <li key={idx}>
                          <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="studio-modal-section">
                    <h4>RECOMMENDED PRODUCTIONS</h4>
                    <div className="studio-ideal-tags">
                      {selectedSetup.idealFor.map((item, idx) => (
                        <span key={idx} className="ideal-tag">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Attractive Direct Contact Numbers Panel */}
                {showContactInfo && (
                  <div className="studio-contact-reveal-panel">
                    <div className="contact-panel-header">
                      <div className="status-indicator-live">
                        <span className="live-dot"></span>
                        <span className="live-status-text">DIRECT STUDIO BOOKING LINES</span>
                      </div>
                      <span className="contact-panel-sub">Reach our production coordinator directly</span>
                    </div>

                    <div className="contact-cards-grid">
                      {/* India Line & WhatsApp */}
                      <div className="contact-card-box highlight">
                        <div className="contact-card-icon-wrap">
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                          </svg>
                        </div>
                        <div className="contact-card-details">
                          <span className="contact-region-tag">STUDIO LINE (INDIA)</span>
                          <span className="contact-phone-number">+91 9529607156</span>
                        </div>
                        <div className="contact-card-actions">
                          <button 
                            type="button" 
                            className="contact-copy-btn"
                            onClick={() => copyToClipboard('+919529607156', 'india')}
                            title="Copy number to clipboard"
                          >
                            {copiedText === 'india' ? '✓ Copied!' : 'Copy'}
                          </button>
                        </div>
                      </div>

                      {/* International Line */}
                      <div className="contact-card-box">
                        <div className="contact-card-icon-wrap">
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="2" y1="12" x2="22" y2="12"/>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                          </svg>
                        </div>
                        <div className="contact-card-details">
                          <span className="contact-region-tag">INTERNATIONAL LINE (AFRICA / GLOBAL)</span>
                          <span className="contact-phone-number">+234 9085900344</span>
                        </div>
                        <div className="contact-card-actions">
                          <button 
                            type="button" 
                            className="contact-copy-btn"
                            onClick={() => copyToClipboard('+2349085900344', 'intl')}
                            title="Copy number to clipboard"
                          >
                            {copiedText === 'intl' ? '✓ Copied!' : 'Copy'}
                          </button>
                        </div>
                      </div>

                      {/* Email Line */}
                      <div className="contact-card-box">
                        <div className="contact-card-icon-wrap">
                          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="4" width="20" height="16" rx="2"/>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                          </svg>
                        </div>
                        <div className="contact-card-details">
                          <span className="contact-region-tag">OFFICIAL PRODUCTION EMAIL</span>
                          <span className="contact-phone-number">info@lbntv.org</span>
                        </div>
                        <div className="contact-card-actions">
                          <button 
                            type="button" 
                            className="contact-copy-btn"
                            onClick={() => copyToClipboard('info@lbntv.org', 'email')}
                            title="Copy email to clipboard"
                          >
                            {copiedText === 'email' ? '✓ Copied!' : 'Copy'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Modal footer actions */}
                <div className="studio-modal-actions">
                  <button 
                    type="button"
                    className={`modal-action-btn primary ${showContactInfo ? 'active-glow' : ''}`}
                    onClick={() => setShowContactInfo(!showContactInfo)}
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span>{showContactInfo ? 'HIDE CONTACT NUMBERS' : 'BOOK STUDIO NOW — VIEW CONTACTS'}</span>
                  </button>


                  <a 
                    href={`mailto:info@lbntv.org?subject=Studio%20Booking%20Inquiry%20-%20${encodeURIComponent(selectedSetup.title)}`}
                    className="modal-action-btn outline"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                    <span>EMAIL</span>
                  </a>

                  <button 
                    type="button" 
                    className="modal-action-btn secondary"
                    onClick={() => {
                      setSelectedSetup(null);
                      setShowContactInfo(false);
                    }}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;