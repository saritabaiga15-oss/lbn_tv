import React, { useState, useEffect } from 'react';
import './Navbar.css';
import image from '../../images/LWI_logo.png';

const Navbar = ({ activeTab, onTabChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll class to navbar when scrolled for premium feel
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
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

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
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
          </ul>
        </nav>

        {/* Right Side: CTA Button & Hamburger */}
        <div className="header-actions">
          <a href="#live" className="cta-button">
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
            <button className="close-btn" onClick={toggleMobileMenu}>&times;</button>
          </div>
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              <li>
                <a
                  href="#home"
                  onClick={(e) => { e.preventDefault(); toggleMobileMenu(); handleNavClick('home'); }}
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  onClick={(e) => { e.preventDefault(); toggleMobileMenu(); handleNavClick('about-us'); }}
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  href="#programmes"
                  onClick={(e) => { e.preventDefault(); toggleMobileMenu(); handleNavClick('programmes'); }}
                >
                  PROGRAMMES
                </a>
              </li>
              <li>
                <a
                  href="#epg"
                  onClick={(e) => { e.preventDefault(); toggleMobileMenu(); handleNavClick('epg'); }}
                >
                  EPG
                </a>
              </li>
              <li>
                <a href="#live" className="mobile-cta" onClick={toggleMobileMenu}>
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
