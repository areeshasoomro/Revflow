import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Footer from './Footer';
import './RevFlowHero.css'; // Reusing your global navbar and theme styles

export const FBRCompliancePage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#EDF2F7', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* Wrapper matching your standard layout width */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '15px 4vw 40px 4vw' }}>
        
        {/* Navigation Header */}
        <nav className="revflow-navbar" style={{ marginBottom: '60px' }}>
          <div className="nav-logo-wrapper">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
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

        {/* Hero Section: FBR Compliance, Built In */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 style={{ fontFamily: "'Caveat', cursive", fontSize: '60.8px', color: '#1b365d', fontWeight: '700', lineHeight: '1.1', marginBottom: '16px' }}>
            FBR Compliance, <span style={{ fontStyle: 'italic', color: '#2b7a9e' }}>Built In.</span>
          </h1>
          <p style={{ color: '#475569', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto 60px auto', lineHeight: '1.6' }}>
            Native local tax handling. No expensive third-party wrappers. Just a seamless, built-in system that keeps you compliant with FBR — automatically.
          </p>

          {/* 3-Step Process Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', alignItems: 'center', maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Step 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: '#e0f2fe',
                border: '2px dashed #2b7a9e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2b7a9e',
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '20px',
                boxShadow: '0 8px 20px rgba(43, 122, 158, 0.1)'
              }}>
                1
              </div>
              <div style={{
                width: '64px',
                height: '64px',
                background: '#ffffff',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                fontSize: '1.8rem'
              }}>
                🖥️
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#1b365d', fontWeight: '700', marginBottom: '8px' }}>POS Transaction</h3>
            </div>

            {/* Step 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: '#e0f2fe',
                border: '2px dashed #2b7a9e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2b7a9e',
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '20px',
                boxShadow: '0 8px 20px rgba(43, 122, 158, 0.1)'
              }}>
                2
              </div>
              <div style={{
                width: '64px',
                height: '64px',
                background: '#ffffff',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                fontSize: '1.8rem'
              }}>
                📄
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#1b365d', fontWeight: '700', marginBottom: '8px' }}>Data Formatting</h3>
            </div>

            {/* Step 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: '#e0f2fe',
                border: '2px dashed #2b7a9e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2b7a9e',
                fontSize: '2rem',
                fontWeight: '700',
                marginBottom: '20px',
                boxShadow: '0 8px 20px rgba(43, 122, 158, 0.1)'
              }}>
                3
              </div>
              <div style={{
                width: '64px',
                height: '64px',
                background: '#ffffff',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                fontSize: '1.8rem'
              }}>
                🏛️
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#1b365d', fontWeight: '700', marginBottom: '8px' }}>FBR Validation & IRN</h3>
            </div>

          </div>
        </div>

        {/* Section: Deep-Dive Compliance Features */}
        <div style={{ textAlign: 'center', marginBottom: '100px', marginTop: '120px' }}>
          <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: '60.8px', color: '#1b365d', fontWeight: '700', lineHeight: '1.1', marginBottom: '12px' }}>
            Deep-Dive <span style={{ fontStyle: 'italic', color: '#2b7a9e' }}>Compliance</span> Features
          </h2>
          <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '580px', margin: '0 auto 60px auto' }}>
            Everything you need for seamless FBR compliance, built right into your system.
          </p>

          {/* 3 Tilted Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
            
            {/* Card 1 */}
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '36px 30px',
              textAlign: 'left',
              boxShadow: '0 12px 30px rgba(27, 54, 93, 0.06)',
              border: '1px solid #e2e8f0',
              transform: 'rotate(-2deg)',
              position: 'relative',
              marginTop: '10px'
            }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', width: '16px', height: '16px', background: '#2b7a9e', borderRadius: '50%' }} />
              <div style={{ fontSize: '2.2rem', marginBottom: '16px' }}>📱</div>
              <h3 style={{ fontSize: '1.25rem', color: '#1b365d', fontWeight: '700', marginBottom: '12px' }}>Built-In POS Integration</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6' }}>
                Compliant receipt layouts, device registration, offline caching.
              </p>
            </div>

            {/* Card 2 */}
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '36px 30px',
              textAlign: 'left',
              boxShadow: '0 12px 30px rgba(27, 54, 93, 0.06)',
              border: '1px solid #e2e8f0',
              transform: 'rotate(1deg)',
              position: 'relative',
              marginBottom: '10px'
            }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', width: '16px', height: '16px', background: '#2b7a9e', borderRadius: '50%' }} />
              <div style={{ fontSize: '2.2rem', marginBottom: '16px' }}>📋</div>
              <h3 style={{ fontSize: '1.25rem', color: '#1b365d', fontWeight: '700', marginBottom: '12px' }}>Automated E-Invoicing</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6' }}>
                Tax invoice transmission with automated retry handling.
              </p>
            </div>

            {/* Card 3 */}
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '36px 30px',
              textAlign: 'left',
              boxShadow: '0 12px 30px rgba(27, 54, 93, 0.06)',
              border: '1px solid #e2e8f0',
              transform: 'rotate(2deg)',
              position: 'relative',
              marginTop: '10px'
            }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', width: '16px', height: '16px', background: '#2b7a9e', borderRadius: '50%' }} />
              <div style={{ fontSize: '2.2rem', marginBottom: '16px' }}>📈</div>
              <h3 style={{ fontSize: '1.25rem', color: '#1b365d', fontWeight: '700', marginBottom: '12px' }}>Audit-Ready Reports</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6' }}>
                GST registers and compliance audit logs.
              </p>
            </div>

          </div>
        </div>

        {/* Section: Security, Data Privacy & Certification Badges */}
        <div style={{ textAlign: 'center', marginBottom: '80px', marginTop: '120px' }}>
          <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: '60.8px', color: '#1b365d', fontWeight: '700', lineHeight: '1.1', marginBottom: '12px' }}>
            Security, Data Privacy & <br />
            <span style={{ fontStyle: 'italic', color: '#2b7a9e' }}>Certification Badges</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '640px', margin: '0 auto 60px auto', lineHeight: '1.6' }}>
            Compliance and security go hand in hand. We protect your data with enterprise-grade infrastructure and industry best practices.
          </p>

          {/* 3 Security Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
            
            {/* Security Card 1 */}
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '40px 30px',
              textAlign: 'left',
              boxShadow: '0 10px 25px rgba(27, 54, 93, 0.04)',
              border: '1px solid #e2e8f0',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: '#2b7a9e' }} />
              <div style={{ fontSize: '2.2rem', marginBottom: '20px' }}>☁️</div>
              <h3 style={{ fontSize: '1.25rem', color: '#1b365d', fontWeight: '700', marginBottom: '12px' }}>Encrypted Storage</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6' }}>
                Your data is encrypted in transit and at rest with industry protocols.
              </p>
            </div>

            {/* Security Card 2 */}
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '40px 30px',
              textAlign: 'left',
              boxShadow: '0 10px 25px rgba(27, 54, 93, 0.04)',
              border: '1px solid #e2e8f0',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: '#2b7a9e' }} />
              <div style={{ fontSize: '2.2rem', marginBottom: '20px' }}>🛡️</div>
              <h3 style={{ fontSize: '1.25rem', color: '#1b365d', fontWeight: '700', marginBottom: '12px' }}>Tenant Isolation</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6' }}>
                Each business stays completely separate, with secure, isolated tenancy.
              </p>
            </div>

            {/* Security Card 3 */}
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '40px 30px',
              textAlign: 'left',
              boxShadow: '0 10px 25px rgba(27, 54, 93, 0.04)',
              border: '1px solid #e2e8f0',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: '#2b7a9e' }} />
              <div style={{ fontSize: '2.2rem', marginBottom: '20px' }}>🗄️</div>
              <h3 style={{ fontSize: '1.25rem', color: '#1b365d', fontWeight: '700', marginBottom: '12px' }}>Automated Backups</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6' }}>
                Regular, automated backups keep your data safe and recoverable.
              </p>
            </div>

          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default FBRCompliancePage;