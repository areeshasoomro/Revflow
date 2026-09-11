import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

interface SubFeature {
  title: string;
  description: string;
  icon: string; 
}

interface SolutionDetailProps {
  titleHighlight: string;
  titleRest: string;
  subtitle: string;
  heroImage: string;
  overviewDescription: string;
  sectionTitleHighlight: string;
  sectionTitleRest: string;
  subFeatures: SubFeature[];
}

const renderSolutionIcon = (iconName: string) => {
  const color = "#2E86AB";
  const name = iconName?.toLowerCase() || '';
  
  if (name.includes('speed') || name.includes('lightning') || name.includes('pos')) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    );
  } else if (name.includes('shield') || name.includes('tax') || name.includes('fbr')) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    );
  } else if (name.includes('inventory') || name.includes('sync') || name.includes('box')) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    );
  } else {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    );
  }
};

export const SolutionDetailPage: React.FC<SolutionDetailProps> = ({
  titleHighlight,
  titleRest,
  subtitle,
  heroImage,
  overviewDescription,
  sectionTitleHighlight,
  sectionTitleRest,
  subFeatures,
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
          <Link to="/features" className="nav-link">Features</Link>
          <Link to="/solutions" className="nav-link active">Solutions</Link>
          <a href="/#pricing" className="nav-link">Pricing</a>
          <a href="/#compliance" className="nav-link">FBR Compliance Hub</a>
        </div>
        <button className="cta-button">
          <span>Get Started</span>
          <span className="cta-icon-circle">↗</span>
        </button>
      </nav>

      {/* Main Content Section */}
      <main className="features-main" style={{ paddingTop: '0px', paddingBottom: '10px' }}>
        
      

        {/* Top Hero Section - Moved upwards and increased gap between headline and subtitle */}
        <header className="features-header" style={{ marginBottom: '36px', marginTop: '-12px' }}>
          <h1 className="features-title" style={{ fontFamily: "'Caveat', cursive", fontSize: '60.8px', color: '#1b365d', marginBottom: '18px', lineHeight: '1.1' }}>
            <span className="highlight-text" style={{ color: '#2E86AB' }}>{titleHighlight}</span> <span style={{ color: '#1b365d' }}>{titleRest}</span>
          </h1>
          <p className="features-subtitle" style={{ fontSize: '0.95rem', color: '#475569', maxWidth: '560px', margin: '0 auto', lineHeight: '1.35' }}>{subtitle}</p>
        </header>

        {/* Hero Mockup Image */}
        <div style={{ width: '100%', maxWidth: '820px', margin: '0 auto 42px auto', padding: '0 20px', boxSizing: 'border-box', textAlign: 'center' }}>
          <img src={heroImage} alt="Solution Dashboard Preview" style={{ width: '100%', height: 'auto', borderRadius: '14px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }} />
        </div>

        {/* Overview Description Paragraph */}
        <div style={{ maxWidth: '750px', margin: '0 auto 36px auto', padding: '0 20px', textAlign: 'center', boxSizing: 'border-box' }}>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#334155', fontWeight: '400', margin: 0 }}>
            {overviewDescription}
          </p>
        </div>

        {/* Core Pillars Section */}
        <section className="specialized-section" style={{ marginTop: '0', maxWidth: '750px', margin: '0 auto 10px auto', padding: '0 20px', boxSizing: 'border-box' }}>
          <div className="features-header specialized-header" style={{ marginBottom: '40px', textAlign: 'center' }}>
            <h2 className="features-title" style={{ fontFamily: "'Caveat', cursive", fontSize: '60.8px', color: '#1b365d', margin: 0 }}>
              <span className="highlight-text" style={{ color: '#2E86AB' }}>{sectionTitleHighlight}</span> {sectionTitleRest}
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '52px' }}>
            {subFeatures.map((item, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', background: 'transparent' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(46, 134, 171, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px'
                }}>
                  {renderSolutionIcon(item.icon)}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '600', color: '#1b365d', marginBottom: '4px', textAlign: 'left' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: '1.45', margin: 0, textAlign: 'left' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default SolutionDetailPage;