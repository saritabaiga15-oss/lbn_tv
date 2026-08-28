import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import image from '../../images/LWI_logo.png';

const Navbar = ({ activeTab, onTabChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [partnerDropdownOpen, setPartnerDropdownOpen] = useState(false);
  const [mobilePartnerOpen, setMobilePartnerOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Close dropdown on outside click if clicked
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setPartnerDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Add scroll class to navbar when scrolled
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
    setPartnerDropdownOpen(false);
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

  const isPartnerActive = activeTab === 'join-our-mission' || activeTab === 'one-time-gift';

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

            {/* Partner with Us Dropdown (Hover triggered, arrow removed) */}
            <li
              className="nav-item nav-dropdown"
              ref={dropdownRef}
              onMouseEnter={() => setPartnerDropdownOpen(true)}
              onMouseLeave={() => setPartnerDropdownOpen(false)}
            >
              <button
                type="button"
                className={`nav-link dropdown-toggle ${isPartnerActive || partnerDropdownOpen ? 'active' : ''}`}
                onClick={() => setPartnerDropdownOpen(!partnerDropdownOpen)}
              >
                <span>PARTNER WITH US</span>
              </button>

              <ul className={`dropdown-menu ${partnerDropdownOpen ? 'show' : ''}`}>
                <li className="dropdown-item-wrapper">
                  <a
                    href="#join-our-mission"
                    className={`dropdown-item-btn ${activeTab === 'join-our-mission' ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('join-our-mission');
                    }}
                  >
                    <span className="dropdown-item-title">Join Our Mission</span>
                    <span className="dropdown-item-desc">Become a monthly kingdom partner</span>
                  </a>
                </li>
                <li className="dropdown-divider-line"></li>
                <li className="dropdown-item-wrapper">
                  <a
                    href="#one-time-gift"
                    className={`dropdown-item-btn ${activeTab === 'one-time-gift' ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('one-time-gift');
                    }}
                  >
                    <span className="dropdown-item-title">One time gift</span>
                    <span className="dropdown-item-desc">Support our global broadcasts</span>
                  </a>
                </li>
              </ul>
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

              {/* Mobile Partner With Us Accordion */}
              <li className="mobile-partner-accordion">
                <div
                  className="mobile-partner-header"
                  onClick={() => setMobilePartnerOpen(!mobilePartnerOpen)}
                >
                  <span>PARTNER WITH US</span>
                  <span className="accordion-indicator">{mobilePartnerOpen ? '−' : '+'}</span>
                </div>
                {mobilePartnerOpen && (
                  <ul className="mobile-submenu">
                    <li>
                      <a
                        href="#join-our-mission"
                        className="mobile-submenu-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMobileMenu();
                          handleNavClick('join-our-mission');
                        }}
                      >
                        Join Our Mission
                      </a>
                    </li>
                    <li>
                      <a
                        href="#one-time-gift"
                        className="mobile-submenu-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMobileMenu();
                          handleNavClick('one-time-gift');
                        }}
                      >
                        One time gift
                      </a>
                    </li>
                  </ul>
                )}
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
