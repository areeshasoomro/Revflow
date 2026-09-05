// src/Footer.tsx
import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-section-wrapper">
      {/* Call to Action Banner */}
      <div className="footer-cta-container">
        <h2 className="footer-cta-title">
          Ready to replace your <span className="highlight-text">messy spreadsheets</span> <br />
          and <span className="highlight-text">automate your taxes</span>?
        </h2>
        <p className="footer-cta-subtitle">
          Join thousands of founders who save time, money and run<br />
          smarter businesses with RevFlow — all in one place.
        </p>

        <div className="footer-email-pill">
          <div className="email-input-wrapper">
            <span className="email-icon">✉</span>
            <input 
              type="email" 
              placeholder="Enter your Email Address" 
              className="footer-email-input"
            />
          </div>
          <button className="footer-get-started-btn">
            <span>Get Started</span>
            <span className="footer-btn-arrow">↗</span>
          </button>
        </div>
      </div>

      {/* Dark Navy Footer Box */}
      <div className="footer-dark-navy-box">
        <div className="footer-content-inner">
          {/* Column 1: Brand Info & Socials */}
          <div className="footer-brand-col">
            <img src="/logo.png" alt="RevFlow Logo" className="footer-brand-logo" />
            <p className="footer-brand-desc">
              The next-gen smart ERP automating<br />
              inventory, accounting, and FBR compliance.
            </p>
            <div className="footer-contact-info">
              <a href="mailto:info@revflow.com" className="footer-contact-item">
                <span>✉</span> info@revflow.com
              </a>
              <a href="tel:+923033865554" className="footer-contact-item">
                <span>&#9742;</span> +923033865554
              </a>
            </div>
            <div className="footer-social-icons">
              <a href="#" className="social-icon-btn">f</a>
              <a href="#" className="social-icon-btn">𝕏</a>
              <a href="#" className="social-icon-btn">in</a>
              <a href="#" className="social-icon-btn">▶</a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Product</h4>
            <ul>
              <li><a href="#">Inventory Management</a></li>
              <li><a href="#">POS & FBR Compliance</a></li>
              <li><a href="#">Accounting & Finance</a></li>
              <li><a href="#">Integrations & Add-ons</a></li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Solutions</h4>
            <ul>
              <li><a href="#">For Retail Stores</a></li>
              <li><a href="#">For Wholesalers</a></li>
              <li><a href="#">For Multi-Branch Businesses</a></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Large Background Watermark Text */}
        <div className="footer-watermark">REVFLOW</div>

        
      </div>
    </footer>
  );
};

export default Footer;