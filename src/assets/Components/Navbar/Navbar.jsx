import React, { useState, useEffect } from 'react';
import './Navbar.css';
import image from '../../images/LWI_logo.png';

const Navbar = ({ activeTab, onTabChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (tab, hash = null) => {
    onTabChange(tab);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isHomePage = activeTab === 'home';
  const isTransparent = isHomePage && !scrolled;

  return (
    <header className={`site-header ${isTransparent ? 'is-transparent' : 'is-solid'}`}>
      <div className="header-container">
        {/* Left Side: Brand Logo */}
        <div className="header-logo">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="logo-link">
            <img src={image} alt="LoveWorld India LBNTV" className="navbar-logo-img" />
          </a>
        </div>

        {/* Middle: Navigation Links (Desktop) */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a
                href="#home"
                onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
                className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about-us"
                onClick={(e) => { e.preventDefault(); handleNavClick('about-us'); }}
                className={`nav-link ${activeTab === 'about-us' ? 'active' : ''}`}
              >
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#programmes"
                onClick={(e) => { e.preventDefault(); handleNavClick('programmes'); }}
                className={`nav-link ${activeTab === 'programmes' ? 'active' : ''}`}
              >
                PROGRAMMES
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#epg"
                onClick={(e) => { e.preventDefault(); handleNavClick('epg'); }}
                className={`nav-link ${activeTab === 'epg' ? 'active' : ''}`}
              >
                EPG
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}
                className={`nav-link ${activeTab === 'services' ? 'active' : ''}`}
              >
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#airtime-on-lbn"
                onClick={(e) => { e.preventDefault(); handleNavClick('airtime-on-lbn'); }}
                className={`nav-link ${activeTab === 'airtime-on-lbn' ? 'active' : ''}`}
              >
                Airtime On LBN
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#anchorcrest-foundation"
                onClick={(e) => { e.preventDefault(); handleNavClick('anchorcrest-foundation'); }}
                className={`nav-link ${activeTab === 'anchorcrest-foundation' ? 'active' : ''}`}
              >
                Anchorcrest foundation
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Side: CTA Button & Hamburger */}
        <div className="header-actions">
          <a
            href="#live"
            onClick={(e) => { e.preventDefault(); handleNavClick('live'); }}
            className={`cta-button ${activeTab === 'live' ? 'active' : ''}`}
          >
            <span className="live-dot"></span>
            WATCH LIVE
          </a>
          <button
            className={`hamburger-menu ${mobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-backdrop" onClick={toggleMobileMenu}></div>
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <a href="#home" onClick={(e) => { e.preventDefault(); toggleMobileMenu(); handleNavClick('home'); }} className="logo-link">
              <img src={image} alt="LoveWorld India LBNTV" className="navbar-logo-img" />
            </a>
          </div>
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              <li>
                <a
                  href="#home"
                  onClick={(e) => { e.preventDefault(); toggleMobileMenu(); handleNavClick('home'); }}
                  className={activeTab === 'home' ? 'active' : ''}
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  onClick={(e) => { e.preventDefault(); toggleMobileMenu(); handleNavClick('about-us'); }}
                  className={activeTab === 'about-us' ? 'active' : ''}
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  href="#programmes"
                  onClick={(e) => { e.preventDefault(); toggleMobileMenu(); handleNavClick('programmes'); }}
                  className={activeTab === 'programmes' ? 'active' : ''}
                >
                  PROGRAMMES
                </a>
              </li>
              <li>
                <a
                  href="#epg"
                  onClick={(e) => { e.preventDefault(); toggleMobileMenu(); handleNavClick('epg'); }}
                  className={activeTab === 'epg' ? 'active' : ''}
                >
                  EPG
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => { e.preventDefault(); toggleMobileMenu(); handleNavClick('services'); }}
                  className={activeTab === 'services' ? 'active' : ''}
                >
                  SERVICES
                </a>
              </li>
              <li>
                <a
                  href="#airtime-on-lbn"
                  onClick={(e) => { e.preventDefault(); toggleMobileMenu(); handleNavClick('airtime-on-lbn'); }}
                  className={activeTab === 'airtime-on-lbn' ? 'active' : ''}
                >
                  Airtime On LBN
                </a>
              </li>
              <li>
                <a
                  href="#anchorcrest-foundation"
                  onClick={(e) => { e.preventDefault(); toggleMobileMenu(); handleNavClick('anchorcrest-foundation'); }}
                  className={activeTab === 'anchorcrest-foundation' ? 'active' : ''}
                >
                  Anchorcrest foundation
                </a>
              </li>
              <li>
                <a
                  href="#live"
                  className="mobile-cta"
                  onClick={(e) => { e.preventDefault(); toggleMobileMenu(); handleNavClick('live'); }}
                >
                  <span className="live-dot"></span> WATCH LIVE
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
