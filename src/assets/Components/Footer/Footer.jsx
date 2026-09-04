import React from 'react';
import './Footer.css';
import footerLogo from '../../images/LWI_logo.png';

const Footer = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, tab, hash = null) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(tab, hash);
    } else {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const socials = [
    {
      id: 'kingschat',
      name: 'KingsChat',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 2C6.477 2 2 5.92 2 10.75c0 2.82 1.548 5.33 3.97 6.94-.132.835-.61 2.378-1.575 3.324 0 0-.214.21-.057.293.15.08.796-.134 1.706-.576.992-.48 2.052-1.2 2.656-1.666a11.144 11.144 0 0 0 3.3.498c5.523 0 10-3.92 10-8.75S17.523 2 12 2z"/>
        </svg>
      ),
      url: 'https://kingschat.online/user/lw_india'
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: 'https://www.facebook.com/LOVEWORLD.IND?mibextid=kFxxJD'
    },
    {
      id: 'twitter',
      name: 'Twitter (X)',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      url: 'https://x.com/loveworld_india?t=s41BsVQvKTmTFt175MCjDg&s=09'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      ),
      url: 'https://www.instagram.com/loveworld.india?igsh=MXBsNW9ldGx1dzE4eg%3D%3D'
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      url: 'https://www.youtube.com/@loveworldindia247'
    }
  ];

  return (
    <footer className="site-footer">
      <div id="contacts" className="footer-card-container">
        {/* Top: Partner with us */}
        <div className="footer-top">
          <h2 className="footer-partner-title">Partner with us</h2>
          <div className="footer-social-circles">
            {socials.map((social) => (
              <a 
                key={social.id} 
                href={social.url} 
                target="_blank"
                rel="noopener noreferrer"
                className="social-circle-link" 
                aria-label={`Follow us on ${social.name}`}
              >
                <div className="social-circle-button">
                  {social.icon}
                </div>
                <span className="social-circle-name">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Middle: Details & Links columns */}
        <div className="footer-middle">
          {/* Logo & Address info */}
          <div className="footer-info-col">
            <div 
              className="footer-brand-header"
              onClick={(e) => handleLinkClick(e, 'home')}
              style={{ cursor: 'pointer' }}
              title="Back to Homepage"
            >
              <div className="footer-logo-circle">
                <img 
                  src={footerLogo} 
                  alt="LoveWorld India Logo" 
                  className="footer-logo-img" 
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <span className="footer-logo-fallback" style={{ display: 'none' }}>LW</span>
              </div>
              <h3 className="footer-brand-title">LOVE INDIA ENTERTAINMENT PVT LTD</h3>
            </div>
            
            <div className="footer-address-details">
              <p className="address-line">
                2nd Floor, Florida Amenity, Florida Estate Rd,<br />
                Kodre Nagar, Shankar Nagar, Mundhwa,<br />
                Pune, Maharashtra 411036
              </p>
              <div className="contact-lines">
                <p><strong>Phone:</strong> +919529607156 / +234 9085900344</p>
                <p><strong>Chat:</strong> +919529607156</p>
                <p><strong>Web:</strong> <a href="https://www.lbntv.org" target="_blank" rel="noopener noreferrer">www.lbntv.org</a></p>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-links-layout">
            <div className="footer-links-col">
              <ul>
                <li>
                  <a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>
                    Homepage
                  </a>
                </li>
                <li>
                  <a href="#about-us" onClick={(e) => handleLinkClick(e, 'about-us')}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contacts" onClick={(e) => handleLinkClick(e, null, 'contacts')}>
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="footer-links-col">
              <ul>
                <li>
                  <a href="#gallery" onClick={(e) => handleLinkClick(e, 'home', 'gallery')}>
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#faq" onClick={(e) => handleLinkClick(e, 'home', 'faq')}>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#anchorcrest-foundation" onClick={(e) => handleLinkClick(e, 'anchorcrest-foundation')}>
                    Anchorcrest Foundation
                  </a>
                </li>
                <li>
                  <a href="#airtime-on-lbn" onClick={(e) => handleLinkClick(e, 'airtime-on-lbn')}>
                    Airtime On LBN
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Scroll to Top button */}
          <div className="footer-scroll-col">
            <button 
              className="scroll-top-btn" 
              onClick={scrollToTop} 
              aria-label="Scroll to Top"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="copyright-text">Copyright &copy; 2026 Love India Entertainment Pvt Ltd. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="footer-bar-sep">|</span>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
