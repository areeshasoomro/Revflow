// src/FeaturesPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Features.css';
import { Footer } from './Footer';

interface Feature {
  id: string;
  iconUrl: string;
  title: string;
  description: string;
  learnMoreLink: string;
}

const coreFeatures: Feature[] = [
  {
    id: 'inventory',
    iconUrl: '/Inventory-icon.png',
    title: 'Inventory',
    description: 'Catalogs, stock in/out, reorder alerts.',
    learnMoreLink: '#',
  },
  {
    id: 'hr',
    iconUrl: '/HR-icon.png',
    title: 'HR Management',
    description: 'Employee records, leave approvals, payroll.',
    learnMoreLink: '#',
  },
  {
    id: 'branch',
    iconUrl: '/Multibranch-icon.png',
    title: 'Multi-Branch',
    description: 'Branch-scoped security, role templates.',
    learnMoreLink: '#',
  },
  {
    id: 'sales',
    iconUrl: '/Sales-icon.png',
    title: 'Sales',
    description: 'Quotations, automated invoicing, price lists.',
    learnMoreLink: '#',
  },
  {
    id: 'accounting',
    iconUrl: '/Accounting-icon.png',
    title: 'Accounting',
    description: 'Charts of Accounts, auto entries, P&L.',
    learnMoreLink: '#',
  },
];

const specializedExtensions: Feature[] = [
  {
    id: 'fbr-pos',
    iconUrl: '/FBR-POS.png', // Fallback filename or your exact icon filename
    title: 'FBR POS',
    description: 'Automate compliant reporting.',
    learnMoreLink: '#',
  },
  {
    id: 'hr-payroll',
    iconUrl: '/hr-payroll.png',
    title: 'HR & Payroll',
    description: 'Automate salaries & payslips.',
    learnMoreLink: '#',
  },
  {
    id: 'shopify-sync',
    iconUrl: '/shopify.png', // Added as requested
    title: 'Shopify Sync',
    description: 'Sync products & orders.',
    learnMoreLink: '#',
  },
  {
    id: 'whatsapp',
    iconUrl: '/whatsapp.png',
    title: 'Whatsapp',
    description: 'Send updates automatically.',
    learnMoreLink: '#',
  },
  {
    id: 'fbr-invoicing',
    iconUrl: '/fbr-invoice.png',
    title: 'FBR Invoicing',
    description: 'Create compliant e-invoices.',
    learnMoreLink: '#',
  },
  {
    id: 'crm',
    iconUrl: '/CRM.png',
    title: 'CRM',
    description: 'Manage leads & follow-ups.',
    learnMoreLink: '#',
  },
];

export const FeaturesPage: React.FC = () => {
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
          <a href="#solutions" className="nav-link">Solutions</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#compliance" className="nav-link">FBR Compliance Hub</a>
        </div>
        <button className="cta-button">
          <span>Get Started</span>
          <span className="cta-icon-circle">↗</span>
        </button>
      </nav>

      {/* Main Content Section */}
      <main className="features-main">
        {/* Core Modules Header */}
        <header className="features-header">
          <h1 className="features-title">
            <span className="highlight-text">Modules built</span> around what <span className="highlight-text">your business</span> <br />
            actually uses
          </h1>
          <p className="features-subtitle">
            RevFlow uses independent, collaborative modules. Start with what you need<br />
            and add capabilities as you grow. No bloat, just business.
          </p>
        </header>

        {/* Bento Grid Layout (Core Features) */}
        <div className="features-grid">
          {coreFeatures.map((feature) => (
            <article key={feature.id} className="feature-card">
              <div className="card-accent-bar" />
              <div className="card-content">
                <div className="icon-circle">
                  <img 
                    src={feature.iconUrl} 
                    alt={`${feature.title} icon`} 
                    className="feature-icon"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                  />
                </div>
                <h2 className="card-title">{feature.title}</h2>
                <p className="card-description">{feature.description}</p>
                <a href={feature.learnMoreLink} className="learn-more-link">
                  Learn More &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Specialized Extensions Section */}
        <section className="specialized-section">
          <div className="features-header specialized-header">
            <h2 className="features-title">
              Specialised extensions for <span className="highlight-text">compliance</span> & <br />
              growth.
            </h2>
            <p className="features-subtitle">
              Choose the specialised tools you need to stay compliant, simplify<br />
              operations, and grow your business without unnecessary complexity.
            </p>
          </div>

          {/* Specialized Extensions 3x2 Grid */}
          <div className="features-grid">
            {specializedExtensions.map((extension) => (
              <article key={extension.id} className="feature-card">
                <div className="card-accent-bar" />
                <div className="card-content">
                  <div className="icon-circle">
                    <img 
                      src={extension.iconUrl} 
                      alt={`${extension.title} icon`} 
                      className="feature-icon"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                    />
                  </div>
                  <h3 className="card-title">{extension.title}</h3>
                  <p className="card-description">{extension.description}</p>
                  <a href={extension.learnMoreLink} className="learn-more-link">
                    Learn More &rarr;
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;