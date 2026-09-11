import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';
import './Features.css';

interface SubFeature {
  title: string;
  description: string;
  icon: string; 
}

interface FeatureDetailProps {
  titleHighlight: string;
  titleRest: string;
  subtitle: string;
  heroImage: string;
  sectionTitleHighlight: string;
  sectionTitleRest: string;
  sectionSubtitle: string;
  subFeatures: SubFeature[];
  analyticsTitleHighlight: string;
  analyticsTitleRest: string;
  analyticsSubtitle: string;
  analyticsCheckpoints: string[];
  analyticsImages: string[];
}

// Helper function that maps strings or keywords to distinct, relevant vector icons
const renderFeatureIcon = (iconName: string) => {
  const color = "#2E86AB";
  const name = iconName?.toLowerCase() || '';
  
  if (name.includes('user') || name.includes('hr') || name.includes('team') || name.includes('customer')) {
    // Users / Team icon
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    );
  } else if (name.includes('sale') || name.includes('chart') || name.includes('analytic') || name.includes('revenue')) {
    // Analytics / Sales chart icon
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    );
  } else if (name.includes('setting') || name.includes('config') || name.includes('branch') || name.includes('gear')) {
    // Settings / Gear icon
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    );
  } else if (name.includes('shield') || name.includes('fbr') || name.includes('tax') || name.includes('secure')) {
    // Security / Compliance shield icon
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    );
  } else if (name.includes('inventory') || name.includes('stock') || name.includes('product') || name.includes('catalog')) {
    // Inventory / Box icon
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    );
  } else if (name.includes('account') || name.includes('invoice') || name.includes('payment') || name.includes('money')) {
    // Accounting / Dollar / File text icon
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
      </svg>
    );
  } else {
    // Default document check icon
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <polyline points="9 15 11 17 15 13"></polyline>
      </svg>
    );
  }
};

export const FeatureDetailPage: React.FC<FeatureDetailProps> = ({
  titleHighlight,
  titleRest,
  subtitle,
  heroImage,
  sectionTitleHighlight,
  sectionTitleRest,
  sectionSubtitle,
  subFeatures,
  analyticsTitleHighlight,
  analyticsTitleRest,
  analyticsSubtitle,
  analyticsCheckpoints,
  analyticsImages,
}) => {
  return (
    <div className="features-page-container">
      {/* Navigation Header */}
      <nav className="revflow-navbar">
        <div className="nav-logo-wrapper">
          <Link to="/">
            <img src="/logo.png" alt="RevFlow Logo" className="logo-image" />
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/features" className="nav-link active">Features</Link>
          <Link to="/solutions" className="nav-link">Solutions</Link>
          <a href="/#pricing" className="nav-link">Pricing</a>
          <a href="/#compliance" className="nav-link">FBR Compliance Hub</a>
        </div>
        <button className="cta-button">
          <span>Get Started</span>
          <span className="cta-icon-circle">↗</span>
        </button>
      </nav>

      {/* Main Content Section */}
      <main className="features-main">
        
        {/* Top Hero Section */}
        <header className="features-header">
          <h1 className="features-title">
            <span className="highlight-text">{titleHighlight}</span> {titleRest}
          </h1>
          <p className="features-subtitle">{subtitle}</p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '30px' }}>
            <button className="cta-button main-cta" style={{ padding: '8px 8px 8px 24px' }}>
              <span>Get Started</span>
              <span className="cta-icon-circle">↗</span>
            </button>
            <Link to="/features" className="cta-button" style={{ backgroundColor: 'transparent', color: '#1b365d', border: '2px solid #1b365d', textDecoration: 'none' }}>
              <span>Back to Features</span>
              <span className="cta-icon-circle" style={{ background: '#1b365d', color: '#fff' }}>↗</span>
            </Link>
          </div>
        </header>

        {/* Hero Mockup Image */}
        <div style={{ width: '100%', maxWidth: '1000px', margin: '20px auto 80px auto', textAlign: 'center' }}>
          <img src={heroImage} alt="Feature Dashboard Preview" style={{ width: '100%', height: 'auto', borderRadius: '24px' }} />
        </div>

        {/* Grid Section: What the Module Offers */}
        <section className="specialized-section" style={{ marginTop: '0' }}>
          <div className="features-header specialized-header">
            <h2 className="features-title">
              What <span className="highlight-text">{sectionTitleHighlight}</span> {sectionTitleRest}
            </h2>
            <p className="features-subtitle">{sectionSubtitle}</p>
          </div>

          <div className="features-grid">
            {subFeatures.map((item, index) => (
              <article key={index} className="feature-card">
                <div className="card-accent-bar" />
                <div className="card-content">
                  <div className="icon-circle" style={{ background: 'rgba(46, 134, 171, 0.08)' }}>
                    {renderFeatureIcon(item.icon)}
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-description">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Advanced Reporting & Analytics Section */}
        <section className="specialized-section" style={{ marginTop: '120px' }}>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', gap: '50px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '300px', textAlign: 'left' }}>
              <h2 className="features-title" style={{ textAlign: 'left' }}>
                <span className="highlight-text">{analyticsTitleHighlight}</span> {analyticsTitleRest}
              </h2>
              <p className="features-subtitle" style={{ textAlign: 'left', margin: '0 0 30px 0' }}>
                {analyticsSubtitle}
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {analyticsCheckpoints.map((text, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ width: '28px', height: '28px', background: '#2E86AB', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.9rem', flexShrink: 0 }}>✓</div>
                    <span style={{ fontSize: '1.05rem', color: '#1e293b', fontWeight: '500' }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Analytics Images stack */}
            <div style={{ flex: '1', minWidth: '325px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {analyticsImages.map((imgSrc, imgIdx) => (
                <img key={imgIdx} src={imgSrc} alt="Analytics Preview" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }} />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default FeatureDetailPage;