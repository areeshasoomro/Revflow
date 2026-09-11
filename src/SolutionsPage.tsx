import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './SolutionsPage.css';
import Footer from './Footer';

interface SolutionCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  linkText: string;
  dotColor: string;
}

interface ChallengeModalData {
  title: string;
  description: string;
  checkpoints: string[];
  ctaText: string;
}

export const SolutionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'industry' | 'challenge'>('industry');
  const [selectedChallenge, setSelectedChallenge] = useState<ChallengeModalData | null>(null);
  const navigate = useNavigate();

  const industrySolutions: SolutionCard[] = [
    {
      id: 'wholesale-distribution',
      title: 'Wholesale & Distribution',
      description: 'Bulk warehouse management, multi-branch stock transfers, & custom client pricing tiers.',
      icon: '/Inventory-icon.png',
      linkText: 'Explore More →',
      dotColor: '#2b7a9e',
    },
    {
      id: 'light-manufacturing',
      title: 'Light Manufacturing',
      description: 'Internal asset tracking, resource allocation, and general ledger reconciliation.',
      icon: '/fbr-invoice.png',
      linkText: 'Explore more →',
      dotColor: '#2b7a9e',
    },
    {
      id: 'retail-pos',
      title: 'Retail & POS Enterprise Suite',
      description: 'Fast counter checkouts, barcode scanning, and out-of-the-box FBR POS compliance.',
      icon: '/FBR-POS.png',
      linkText: 'Explore More →',
      dotColor: '#2b7a9e',
    },
  ];

  const challengeSolutions: SolutionCard[] = [
    {
      id: 'spreadsheet-automation',
      title: 'Inventory Chaos',
      description: 'Stop losing track of stock, transfers, and reorders across locations.',
      icon: '/Inventory-icon.png',
      linkText: 'Explore Solution →',
      dotColor: '#E8912D',
    },
    {
      id: 'fbr-compliance',
      title: 'FBR & Tax Compliance',
      description: 'Simplify invoicing, POS compliance, and tax reporting in one place.',
      icon: '/fbr-invoice.png',
      linkText: 'Explore Solution →',
      dotColor: '#E8912D',
    },
    {
      id: 'scattered-data',
      title: 'Scattered Business Data',
      description: 'Bring sales, finance, inventory, and operations together.',
      icon: '/CRM.png',
      linkText: 'Explore Solution →',
      dotColor: '#E8912D',
    },
    {
      id: 'spreadsheet-chaos',
      title: 'Too Many Spreadsheets',
      description: 'Replace manual tracking with connected workflows and automation.',
      icon: '/Accounting-icon.png',
      linkText: 'Explore Solution →',
      dotColor: '#E8912D',
    },
    {
      id: 'multi-branch',
      title: 'Multi-Branch Complexity',
      description: 'Manage branches, stock, users, and performance from one dashboard.',
      icon: '/Multibranch-icon.png',
      linkText: 'Explore Solution →',
      dotColor: '#E8912D',
    },
    {
      id: 'manual-ops',
      title: 'Slow Manual Operations',
      description: 'Automate repetitive work so your team can focus on growth.',
      icon: '/HR-icon.png',
      linkText: 'Explore Solution →',
      dotColor: '#E8912D',
    },
  ];

  const challengeModalMap: Record<string, ChallengeModalData> = {
    'spreadsheet-automation': {
      title: 'Spreadsheet-to-Automation Workspace',
      description: 'Replace error-prone manual tracking with connected workflows and automated data pipelines.',
      checkpoints: [
        'Automated Data Pipelines',
        'Custom Workflow Triggers',
        'Error-Proof Entry Forms',
        'Historical Audit Trails'
      ],
      ctaText: 'Migrate from Spreadsheets'
    },
    'fbr-compliance': {
      title: 'FBR & Tax Automation Suite',
      description: 'Stay seamlessly compliant with automated digital invoicing and real-time FBR fiscal server integration.',
      checkpoints: [
        'Real-Time FBR Invoice Stamping',
        'Automated Tax Ledger Sync',
        'Built-in QR Code Generator',
        'One-Click Audit Reports'
      ],
      ctaText: 'Secure Your Compliance'
    },
    'scattered-data': {
      title: 'Unified Business Hub',
      description: 'Bring sales, inventory, accounting, and multi-branch data together into a single master control system.',
      checkpoints: [
        'Centralized Data Synchronization',
        'Cross-Department Visibility',
        'Unified General Ledger',
        'Live Executive Dashboards'
      ],
      ctaText: 'Unify Your Data'
    },
    'spreadsheet-chaos': {
      title: 'Advanced Workflow Automation',
      description: 'Eliminate disconnected spreadsheets and transition your entire team to synchronized cloud databases.',
      checkpoints: [
        'Cloud-Based Real-Time Records',
        'Role-Based User Permissions',
        'Automated Stock Alerts',
        'Integrated Financial Statements'
      ],
      ctaText: 'Upgrade Your Workflows'
    },
    'multi-branch': {
      title: 'Multi-Branch Enterprise Control',
      description: 'Monitor store performance, oversee inventory transfers, and govern branch permissions effortlessly.',
      checkpoints: [
        'Inter-Branch Stock Transfers',
        'Consolidated P&L Statements',
        'Branch-Specific User Access',
        'Centralized POS Management'
      ],
      ctaText: 'Scale Your Branches'
    },
    'manual-ops': {
      title: 'Operations Acceleration Suite',
      description: 'Automate repetitive daily tasks, customer communications, and billing loops so your team focuses on growth.',
      checkpoints: [
        'Automated Billing & Invoicing',
        'Smart Reorder Triggers',
        'Streamlined Counter Checkouts',
        'Performance Analytics Reports'
      ],
      ctaText: 'Automate Operations'
    }
  };

  const handleCardClick = (card: SolutionCard) => {
    if (activeTab === 'industry') {
      navigate(`/solutions/${card.id}`);
    } else {
      const modalInfo = challengeModalMap[card.id];
      if (modalInfo) {
        setSelectedChallenge(modalInfo);
      }
    }
  };

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
                <img 
                  src={card.icon} 
                  alt={card.title} 
                  style={{ width: '48px', height: '48px', objectFit: 'contain' }} 
                />
              </div>

              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>

              <button 
                onClick={() => handleCardClick(card)} 
                className="explore-link" 
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left' }}
              >
                {card.linkText}
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Challenge Solution Modal Popup */}
      {selectedChallenge && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(15, 23, 42, 0.45)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px',
          boxSizing: 'border-box'
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '28px',
            maxWidth: '640px',
            width: '100%',
            padding: '45px 40px',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15)',
            position: 'relative',
            boxSizing: 'border-box',
            textAlign: 'center'
          }}>
            {/* Close Button */}
            <button 
              onClick={() => setSelectedChallenge(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.6rem',
                color: '#1b365d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                transition: 'background 0.2s'
              }}
            >
              ✕
            </button>

            <h2 style={{
              fontFamily: "'Caveat', cursive",
              fontSize: '2.8rem',
              color: '#1b365d',
              margin: '0 0 12px 0',
              lineHeight: '1.1'
            }}>
              {selectedChallenge.title}
            </h2>

            <p style={{
              fontSize: '0.95rem',
              color: '#475569',
              lineHeight: '1.6',
              maxWidth: '480px',
              margin: '0 auto 35px auto'
            }}>
              {selectedChallenge.description}
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
              textAlign: 'left',
              maxWidth: '460px',
              margin: '0 auto 40px auto'
            }}>
              {selectedChallenge.checkpoints.map((point, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    background: '#1b365d',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '0.9rem',
                    flexShrink: 0
                  }}>✓</div>
                  <span style={{ fontSize: '1.02rem', color: '#1e293b', fontWeight: '600' }}>{point}</span>
                </div>
              ))}
            </div>

            <button className="cta-button" style={{ margin: '0 auto', padding: '10px 10px 10px 26px', fontSize: '1rem' }} onClick={() => setSelectedChallenge(null)}>
              <span>{selectedChallenge.ctaText}</span>
              <span className="cta-icon-circle">↗</span>
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default SolutionsPage;