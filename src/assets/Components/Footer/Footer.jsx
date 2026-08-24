import React from "react";
import "./Footer.css";
import logo from "../../LWI.png";

const Footer = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      {/* Decorative top glow line */}
      <div className="footerTopGlow"></div>

      <div className="footerInner">
        {/* ============== BRAND COLUMN ============== */}
        <div className="footerBrandCol">
          <img src={logo} alt="LoveWorld India" className="footerLogo" />
          <p className="footerTagline">
            Proclaiming the Gospel of Jesus Christ across every nation, spreading divine healing, love, and the power of God's Spirit.
          </p>

          <div className="footerSocials">
            <a href="https://www.facebook.com/loveworldindia" target="_blank" rel="noopener noreferrer" className="socialIcon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="https://www.youtube.com/@loveworldindia" target="_blank" rel="noopener noreferrer" className="socialIcon" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#020b3b" /></svg>
            </a>
            <a href="https://www.instagram.com/loveworldindia" target="_blank" rel="noopener noreferrer" className="socialIcon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            <a href="https://twitter.com/loveworldindia" target="_blank" rel="noopener noreferrer" className="socialIcon" aria-label="Twitter / X">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
          </div>
        </div>

        {/* ============== QUICK LINKS ============== */}
        <div className="footerLinksCol">
          <h4 className="footerColTitle">Quick Links</h4>
          <ul className="footerLinkList">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); onNavigate?.("home"); }}>Home</a></li>
            <li><a href="#healing-streams" onClick={(e) => { e.preventDefault(); onNavigate?.("healing-streams"); }}>Healing Streams</a></li>
            <li><a href="#programmes">Programmes</a></li>
            <li><a href="#messages">Messages</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#partner-with-us">Partner With Us</a></li>
          </ul>
        </div>

        {/* ============== WATCH ============== */}
        <div className="footerLinksCol">
          <h4 className="footerColTitle">Watch & Listen</h4>
          <ul className="footerLinkList">
            <li>
              <a href="https://healingstreams.tv" target="_blank" rel="noopener noreferrer">
                Healing Streams TV ↗
              </a>
            </li>
            <li>
              <a href="https://lbntv.org" target="_blank" rel="noopener noreferrer">
                LBN TV ↗
              </a>
            </li>
            <li>
              <a href="https://lwindia.org" target="_blank" rel="noopener noreferrer">
                LoveWorld India ↗
              </a>
            </li>
            <li>
              <a href="https://healingstreams.org" target="_blank" rel="noopener noreferrer">
                Register – healingstreams.org ↗
              </a>
            </li>
          </ul>

          {/* JioTV Channel Badge */}
          <div className="jiotvFooterBadge">
            <span className="jiotvLabel">Also on</span>
            <span className="jiotvChannel">📺 JioTV — Channel 4080</span>
          </div>
        </div>

        {/* ============== CONTACT ============== */}
        <div className="footerContactCol">
          <h4 className="footerColTitle">Contact Us</h4>

          <div className="footerContactItem">
            <span className="contactItemIcon">📍</span>
            <span>LoveWorld India Ministry, Mumbai, Maharashtra, India</span>
          </div>

          <div className="footerContactItem">
            <span className="contactItemIcon">📞</span>
            <div>
              <p>+91 96500 96633</p>
              <p>+91 77949 93762</p>
            </div>
          </div>

          <div className="footerContactItem">
            <span className="contactItemIcon">✉️</span>
            <a href="mailto:info@healingstreams.tv">info@healingstreams.tv</a>
          </div>

          {/* Live Broadcast Indicator */}
          <div className="footerLiveBadge">
            <span className="liveRedDot"></span>
            <span>24/7 Live Broadcast</span>
          </div>
        </div>
      </div>

      {/* ============== BOTTOM BAR ============== */}
      {/* ============== BOTTOM BAR ============== */}
      <div className="footerBottomBar">
        <div className="footerBottomInner">

          <span className="footerCopyright">
            © {currentYear} LoveWorld India Broadcasting Network. All Rights Reserved.
          </span>

          <div className="footerBottomLinks">
            <a href="#privacy">Privacy Policy</a>

            <span className="bottomDot">·</span>

            <a href="#terms">Terms of Use</a>

            <span className="bottomDot">·</span>

            <a
              href="https://healingstreams.tv"
              target="_blank"
              rel="noopener noreferrer"
            >
              healingstreams.tv
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;