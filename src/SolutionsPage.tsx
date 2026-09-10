import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './SolutionsPage.css';
import Footer from './Footer';

interface SolutionCard {
  title: string;
  description: string;
  icon: string;
  linkText: string;
  dotColor: string;
}

export const SolutionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'industry' | 'challenge'>('industry');

  const industrySolutions: SolutionCard[] = [
    {
      title: 'Wholesale & Distribution',
      description: 'Bulk warehouse management, multi-branch stock transfers, & custom client pricing tiers.',
      icon: '📦',
      linkText: 'Explore More →',
      dotColor: '#2b7a9e',
    },
    {
      title: 'Light Manufacturing',
      description: 'Internal asset tracking, resource allocation, and general ledger reconciliation.',
      icon: '⚙️',
      linkText: 'Explore more →',
      dotColor: '#2b7a9e',
    },
    {
      title: 'Retail & POS.',
      description: 'Fast counter checkouts, barcode scanning, and out-of-the-box FBR POS compliance.',
      icon: '💻',
      linkText: 'Explore More →',
      dotColor: '#2b7a9e',
    },
  ];

  const challengeSolutions: SolutionCard[] = [
    {
      title: 'Inventory Chaos',
      description: 'Stop losing track of stock, transfers, and reorders across locations.',
      icon: '📦',
      linkText: 'Explore Solution →',
      dotColor: '#E8912D',
    },
    {
      title: 'FBR & Tax Compliance',
      description: 'Simplify invoicing, POS compliance, and tax reporting in one place.',
      icon: '🛡️',
      linkText: 'Explore Solution →',
      dotColor: '#E8912D',
    },
    {
      title: 'Scattered Business Data',
      description: 'Bring sales, finance, inventory, and operations together.',
      icon: '🔗',
      linkText: 'Explore Solution →',
      dotColor: '#E8912D',
    },
    {
      title: 'Too Many Spreadsheets',
      description: 'Replace manual tracking with connected workflows and automation.',
      icon: '📊',
      linkText: 'Explore Solution →',
      dotColor: '#E8912D',
    },
    {
      title: 'Multi-Branch Complexity',
      description: 'Manage branches, stock, users, and performance from one dashboard.',
      icon: '🌐',
      linkText: 'Explore Solution →',
      dotColor: '#E8912D',
    },
    {
      title: 'Slow Manual Operations',
      description: 'Automate repetitive work so your team can focus on growth.',
      icon: '⏱️',
      linkText: 'Explore Solution →',
      dotColor: '#E8912D',
    },
  ];

  const currentCards = activeTab === 'industry' ? industrySolutions : challengeSolutions;

  return (
    <div className="solutions-page">
      <div className="solutions-wrapper">
        
        {/* Navigation Header */}
        <nav className="revflow-navbar">
          <div className="nav-logo-wrapper">
            <Link to="/">
              <img src="/logo.png" alt="RevFlow Logo" className="logo-image" />
            </Link>
          </div>
          
          <div className="nav-links">
            <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Home
            </NavLink>
            <NavLink to="/features" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Features
            </NavLink>
            <NavLink to="/solutions" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Solutions
            </NavLink>
            <NavLink to="/pricing" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Pricing
            </NavLink>
            <NavLink to="/compliance" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              FBR Compliance Hub
            </NavLink>
          </div>

          <button className="cta-button">
            <span>Get Started</span>
            <span className="cta-icon-circle">↗</span>
          </button>
        </nav>

        {/* Left-Aligned Back Button */}
        <div className="back-link-container">
          <Link to="/" className="back-button">←</Link>
        </div>

        {/* Hero Header Area */}
        <div className="solutions-header">
          <h1 className="solutions-main-title">
            Built for how you <span className="script-highlight">actually</span> work
          </h1>
          <p className="solutions-subtitle">
            Explore solutions designed around your industry and the challenges that matter most to your business.
          </p>

          {/* Toggle Tab Pills */}
          <div className="toggle-tab-container">
            <button 
              className={`toggle-pill ${activeTab === 'industry' ? 'active' : ''}`}
              onClick={() => setActiveTab('industry')}
            >
              By Industry Type
            </button>
            <button 
              className={`toggle-pill ${activeTab === 'challenge' ? 'active' : ''}`}
              onClick={() => setActiveTab('challenge')}
            >
              By Business Challenge
            </button>
          </div>
        </div>

        {/* Dynamic Section Heading */}
        <div className="section-heading-block">
          {activeTab === 'industry' ? (
            <h2 className="section-title">
              Different <span className="script-highlight">industries.</span> Specific <span className="script-highlight">needs.</span>
            </h2>
          ) : (
            <h2 className="section-title">
              Solve the problems <span className="script-highlight">slowing your</span> <br />
              <span className="script-highlight">business</span> down.
            </h2>
          )}
        </div>

        {/* Cards Grid */}
        <div className={`solutions-cards-grid ${activeTab === 'challenge' ? 'challenge-grid' : ''}`}>
          {currentCards.map((card, idx) => (
            <div key={idx} className={`solution-card card-${idx + 1}`}>
              <div 
                className="card-dot-connector" 
                style={{ backgroundColor: card.dotColor }}
              ></div>
              
              <div className="card-icon-box">
                <span className="emoji-icon">{card.icon}</span>
              </div>

              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>

              <a href="#explore" className="explore-link">
                {card.linkText}
              </a>
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default SolutionsPage;