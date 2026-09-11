import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Footer from './Footer';
import './RevFlowHero.css'; // Reusing your global navbar and theme styles

export const FBRCompliancePage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#EDF2F7', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* Inline styles for the traveling flow animation and card stacking/fanning */}
      <style>{`
        @keyframes flowPulse {
          0% {
            left: 0%;
            opacity: 0.2;
            transform: translateY(-50%) scale(0.8);
          }
          50% {
            opacity: 1;
            transform: translateY(-50%) scale(1.2);
          }
          100% {
            left: 100%;
            opacity: 0.2;
            transform: translateY(-50%) scale(0.8);
          }
        }
        .step-connection-line {
          position: absolute;
          top: 40px;
          left: calc(50% + 40px);
          width: calc(100% - 80px);
          height: 2px;
          border-top: 2px dashed #2b7a9e;
          z-index: 1;
        }
        .flow-traveler {
          position: absolute;
          top: 50%;
          width: 10px;
          height: 10px;
          background-color: #2b7a9e;
          border-radius: 50%;
          box-shadow: 0 0 10px #2b7a9e;
          animation: flowPulse 2.5s infinite linear;
        }

        /* Stacked to Fanned-Out Transition Container */
        .security-stack-container {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
          height: 480px;
          perspective: 1000px;
        }

        .security-card {
          background: #e4eff7;
          border-radius: 24px;
          padding: 44px 36px;
          textAlign: left;
          box-shadow: 0 12px 30px rgba(27, 54, 93, 0.08);
          border: 1px solid #d0e2f2;
          position: absolute;
          width: 340px;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: visible;
        }

        /* Default Stacked State (Offset & Overlapping) */
        .security-stack-container:not(:hover) .sec-card-1 {
          transform: translateX(-60px) scale(0.95);
          z-index: 1;
          opacity: 0.85;
        }
        .security-stack-container:not(:hover) .sec-card-2 {
          transform: translateX(0px) scale(0.98);
          z-index: 2;
          opacity: 0.93;
        }
        .security-stack-container:not(:hover) .sec-card-3 {
          transform: translateX(60px) scale(1);
          z-index: 3;
          opacity: 1;
        }

        /* Hovered / Expanded State (Clean 3-Column Spread) */
        .security-stack-container:hover .sec-card-1 {
          transform: translateX(-360px) scale(1);
          z-index: 3;
          opacity: 1;
        }
        .security-stack-container:hover .sec-card-2 {
          transform: translateX(0px) scale(1);
          z-index: 3;
          opacity: 1;
        }
        .security-stack-container:hover .sec-card-3 {
          transform: translateX(360px) scale(1);
          z-index: 3;
          opacity: 1;
        }
      `}</style>

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
                marginBottom: '24px',
                boxShadow: '0 8px 20px rgba(43, 122, 158, 0.1)',
                position: 'relative',
                zIndex: 2
              }}>
                1
              </div>
              <div className="step-connection-line">
                <div className="flow-traveler" style={{ animationDelay: '0s' }}></div>
              </div>
              <div style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <img src="/fbr-pos1.png" alt="POS Transaction" style={{ maxHeight: '64px', objectFit: 'contain' }} />
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
                marginBottom: '24px',
                boxShadow: '0 8px 20px rgba(43, 122, 158, 0.1)',
                position: 'relative',
                zIndex: 2
              }}>
                2
              </div>
              <div className="step-connection-line">
                <div className="flow-traveler" style={{ animationDelay: '1.25s' }}></div>
              </div>
              <div style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <img src="/fbr-data.png" alt="Data Formatting" style={{ maxHeight: '64px', objectFit: 'contain' }} />
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
                marginBottom: '24px',
                boxShadow: '0 8px 20px rgba(43, 122, 158, 0.1)',
                position: 'relative',
                zIndex: 2
              }}>
                3
              </div>
              <div style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <img src="/fbr-irn.png" alt="FBR Validation & IRN" style={{ maxHeight: '64px', objectFit: 'contain' }} />
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

          {/* 3 Tilted Cards Grid with Larger Hanging Dots */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', maxWidth: '1100px', margin: '0 auto', alignItems: 'center' }}>
            
            {/* Card 1 */}
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '40px 30px',
              textAlign: 'left',
              boxShadow: '0 16px 40px rgba(27, 54, 93, 0.08)',
              border: '1px solid #e2e8f0',
              transform: 'rotate(-3deg)',
              position: 'relative',
              marginTop: '15px'
            }}>
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', width: '24px', height: '24px', background: '#2b7a9e', borderRadius: '50%', boxShadow: '0 4px 10px rgba(43, 122, 158, 0.4)' }} />
              <div style={{ height: '60px', display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <img src="/fbr-builtinpos.png" alt="Built-In POS Integration" style={{ maxHeight: '52px', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#1b365d', fontWeight: '700', marginBottom: '12px' }}>Built-In POS Integration</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6' }}>
                Compliant receipt layouts, device registration, offline caching.
              </p>
            </div>

            {/* Card 2 */}
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '40px 30px',
              textAlign: 'left',
              boxShadow: '0 16px 40px rgba(27, 54, 93, 0.08)',
              border: '1px solid #e2e8f0',
              transform: 'rotate(0deg)',
              position: 'relative',
              marginBottom: '30px'
            }}>
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', width: '24px', height: '24px', background: '#2b7a9e', borderRadius: '50%', boxShadow: '0 4px 10px rgba(43, 122, 158, 0.4)' }} />
              <div style={{ height: '60px', display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <img src="/fbr-einvoicing.png" alt="Automated E-Invoicing" style={{ maxHeight: '52px', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#1b365d', fontWeight: '700', marginBottom: '12px' }}>Automated E-Invoicing</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6' }}>
                Tax invoice transmission with automated retry handling.
              </p>
            </div>

            {/* Card 3 */}
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '40px 30px',
              textAlign: 'left',
              boxShadow: '0 16px 40px rgba(27, 54, 93, 0.08)',
              border: '1px solid #e2e8f0',
              transform: 'rotate(3deg)',
              position: 'relative',
              marginTop: '15px'
            }}>
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', width: '24px', height: '24px', background: '#2b7a9e', borderRadius: '50%', boxShadow: '0 4px 10px rgba(43, 122, 158, 0.4)' }} />
              <div style={{ height: '60px', display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <img src="/fbr-auditready.png" alt="Audit-Ready Reports" style={{ maxHeight: '52px', objectFit: 'contain' }} />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#1b365d', fontWeight: '700', marginBottom: '12px' }}>Audit-Ready Reports</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6' }}>
                GST registers and compliance audit logs.
              </p>
            </div>

          </div>
        </div>

        {/* Section: Security, Data Privacy & Certification Badges (Stacked & Hover to Fan Out) */}
        <div style={{ textAlign: 'center', marginBottom: '0px', marginTop: '120px' }}>
          <h2 style={{ fontFamily: "'Caveat', cursive", fontSize: '60.8px', color: '#1b365d', fontWeight: '700', lineHeight: '1.1', marginBottom: '12px' }}>
            Security, Data Privacy & <br />
            <span style={{ fontStyle: 'italic', color: '#2b7a9e' }}>Certification Badges</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '640px', margin: '0 auto 60px auto', lineHeight: '1.6' }}>
            Compliance and security go hand in hand. Hover over the stack to explore our enterprise-grade infrastructure.
          </p>

          {/* Interactive Stacked Security Cards Container */}
          <div className="security-stack-container">
            
            {/* Security Card 1 */}
            <div className="security-card sec-card-1">
              <div style={{
                position: 'absolute',
                top: '90px',
                left: '0px',
                width: '10px',
                height: '84px',
                background: '#2b7a9e',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '12px',
                boxShadow: '2px 0 8px rgba(43, 122, 158, 0.2)',
                zIndex: 3
              }} />
              
              <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.85)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '28px',
                boxShadow: '0 6px 16px rgba(43, 122, 158, 0.08)'
              }}>
                <img src="/fbr-storage.png" alt="Encrypted Storage" style={{ maxHeight: '48px', objectFit: 'contain' }} />
              </div>
              
              <h3 style={{ fontSize: '1.4rem', color: '#1b365d', fontWeight: '700', marginBottom: '12px' }}>Encrypted Storage</h3>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.6' }}>
                Your data is encrypted in transit and at rest with industry protocols.
              </p>
            </div>

            {/* Security Card 2 */}
            <div className="security-card sec-card-2">
              <div style={{
                position: 'absolute',
                top: '90px',
                left: '0px',
                width: '10px',
                height: '84px',
                background: '#2b7a9e',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '12px',
                boxShadow: '2px 0 8px rgba(43, 122, 158, 0.2)',
                zIndex: 3
              }} />
              
              <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.85)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '28px',
                boxShadow: '0 6px 16px rgba(43, 122, 158, 0.08)'
              }}>
                <img src="/fbr-tenant.png" alt="Tenant Isolation" style={{ maxHeight: '48px', objectFit: 'contain' }} />
              </div>
              
              <h3 style={{ fontSize: '1.4rem', color: '#1b365d', fontWeight: '700', marginBottom: '12px' }}>Tenant Isolation</h3>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.6' }}>
                Each business stays completely separate, with secure, isolated tenancy.
              </p>
            </div>

            {/* Security Card 3 */}
            <div className="security-card sec-card-3">
              <div style={{
                position: 'absolute',
                top: '90px',
                left: '0px',
                width: '10px',
                height: '84px',
                background: '#2b7a9e',
                borderTopLeftRadius: '12px',
                borderBottomLeftRadius: '12px',
                boxShadow: '2px 0 8px rgba(43, 122, 158, 0.2)',
                zIndex: 3
              }} />
              
              <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.85)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '28px',
                boxShadow: '0 6px 16px rgba(43, 122, 158, 0.08)'
              }}>
                <img src="/fbr-backup.png" alt="Automated Backups" style={{ maxHeight: '48px', objectFit: 'contain' }} />
              </div>
              
              <h3 style={{ fontSize: '1.4rem', color: '#1b365d', fontWeight: '700', marginBottom: '12px' }}>Automated Backups</h3>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.6' }}>
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