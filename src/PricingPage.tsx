import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './SolutionsPage.css';
import Footer from './Footer';

interface ModuleItem {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface AddonItem {
  id: string;
  name: string;
  price: number;
  requiredModuleId: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

export const PricingPage: React.FC = () => {
  const [selectedModules, setSelectedModules] = useState<string[]>(['inventory-mgmt', 'hr-mgmt', 'sales']);
  const [seats, setSeats] = useState<number>(4);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['fbr-pos', 'auto-invoicing', 'multi-currency']);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(3);

  const availableModules: ModuleItem[] = [
    { id: 'inventory-mgmt', name: 'Inventory Management', description: 'Manage your stock, products and inventory seamlessly.', price: 12000 },
    { id: 'hr-mgmt', name: 'HR Management', description: 'Manage your stock, products and inventory seamlessly.', price: 12000 },
    { id: 'sales', name: 'Sales', description: 'Manage your stock, products and inventory seamlessly.', price: 12000 },
    { id: 'accounting', name: 'Accounting', description: 'Manage your stock, products and inventory seamlessly.', price: 12000 },
    { id: 'inventory-extra', name: 'Inventory', description: 'Manage your stock, products and inventory seamlessly.', price: 12000 },
    { id: 'multi-branch', name: 'Multi- Branch', description: 'Manage your stock, products and inventory seamlessly.', price: 12000 },
  ];

  const availableAddons: AddonItem[] = [
    { id: 'fbr-pos', name: 'FBR POS Integration', price: 5000, requiredModuleId: 'sales' },
    { id: 'shopify-sync', name: 'Shopify Sync', price: 10000, requiredModuleId: 'inventory-mgmt' },
    { id: 'pos-terminal', name: 'POS Terminal', price: 10000, requiredModuleId: 'sales' },
    { id: 'tax-calculator', name: 'Tax Calculator', price: 10000, requiredModuleId: 'accounting' },
    { id: 'auto-invoicing', name: 'Auto - Invoicing', price: 10000, requiredModuleId: 'accounting' },
    { id: 'advanced-payroll', name: 'Advanced Payroll', price: 10000, requiredModuleId: 'hr-mgmt' },
    { id: 'multi-currency', name: 'Multi-Currency', price: 10000, requiredModuleId: 'accounting' },
  ];

  const faqList: FaqItem[] = [
    {
      question: 'Can I switch plans mid-month?',
      answer: 'Yes, you can upgrade or modify your modules and add-ons at any time. Prorated adjustments will be automatically reflected in your billing cycle.'
    },
    {
      question: 'How do additional users and branches get billed?',
      answer: 'Additional seats and branch extensions can be added dynamically using the team size counter, billed per active user seat.'
    },
    {
      question: 'Can I connect RevFlow to my existing online store?',
      answer: 'Yes, using our integration add-ons like Shopify Sync and API connectors, you can seamlessly connect your external sales channels.'
    },
    {
      question: 'How does the 20% yearly saving work?',
      answer: 'Switching the toggle to Yearly applies a discount to your monthly rate, charged as one upfront payment for the year. You can switch from monthly to yearly at any time; the reverse takes effect at renewal.'
    },
    {
      question: 'We need something beyond what\'s on this page — is that possible?',
      answer: 'Absolutely. Contact our enterprise sales team for customized infrastructure setups, dedicated servers, and custom ERP integrations.'
    }
  ];

  const toggleModule = (id: string) => {
    let updatedModules;
    if (selectedModules.includes(id)) {
      updatedModules = selectedModules.filter(m => m !== id);
    } else {
      updatedModules = [...selectedModules, id];
    }
    setSelectedModules(updatedModules);

    setSelectedAddons(prevAddons => 
      prevAddons.filter(addonId => {
        const addon = availableAddons.find(a => a.id === addonId);
        return addon ? updatedModules.includes(addon.requiredModuleId) : false;
      })
    );
  };

  const toggleAddon = (addon: AddonItem) => {
    const isRequirementMet = selectedModules.includes(addon.requiredModuleId);
    if (!isRequirementMet) return;

    if (selectedAddons.includes(addon.id)) {
      setSelectedAddons(selectedAddons.filter(a => a !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon.id]);
    }
  };

  const modulesTotal = selectedModules.reduce((sum, modId) => {
    const mod = availableModules.find(m => m.id === modId);
    return sum + (mod ? mod.price : 0);
  }, 0);

  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = availableAddons.find(a => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const seatsPricePerUnit = 750;
  const seatsTotal = seats * seatsPricePerUnit;
  const grandTotal = modulesTotal + addonsTotal + seatsTotal;

  return (
    <div className="solutions-page" style={{ backgroundColor: '#EDF2F7' }}>
      <div className="solutions-wrapper" style={{ maxWidth: '1400px', margin: '0 auto', padding: '15px 4vw 20px 4vw' }}>
        
        {/* Navigation Header matching RevFlowHero */}
        <nav className="revflow-navbar" style={{ marginBottom: '40px' }}>
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

        {/* Hero Section */}
        <div className="solutions-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 className="solutions-main-title" style={{ fontFamily: "'Caveat', cursive", fontSize: '60.8px', color: '#1b365d', lineHeight: '1.1', marginBottom: '16px', fontWeight: '700' }}>
            Precision pricing for <span className="script-highlight" style={{ fontStyle: 'italic', color: '#2b7a9e' }}>growing</span> <br />
            <span className="script-highlight" style={{ fontStyle: 'italic', color: '#2b7a9e' }}>organizations.</span>
          </h1>
          <p className="solutions-subtitle" style={{ color: '#475569', fontSize: '1rem', maxWidth: '640px', margin: '0 auto' }}>
            Configure a flexible modular workspace aligned with your team's size and operational needs—no rigid tiers, just dynamic real-time pricing.
          </p>
        </div>

        {/* Main Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 440px', gap: '40px', alignItems: 'start', position: 'relative' }}>
          
          {/* Left Column */}
          <div>
            
            {/* Modules Section */}
            <h2 style={{ fontSize: '1.6rem', color: '#1b365d', marginBottom: '20px', fontWeight: '700', textAlign: 'left' }}>Modules</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '40px' }}>
              {availableModules.map((mod) => {
                const isSelected = selectedModules.includes(mod.id);
                return (
                  <div 
                    key={mod.id}
                    onClick={() => toggleModule(mod.id)}
                    style={{
                      background: '#ffffff',
                      border: isSelected ? '1.5px solid #2b7a9e' : '1px solid #e2e8f0',
                      borderRadius: '16px',
                      padding: '22px',
                      cursor: 'pointer',
                      position: 'relative',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                      textAlign: 'left'
                    }}
                  >
                    <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '4px',
                        border: isSelected ? 'none' : '2px solid #cbd5e1',
                        background: isSelected ? '#2b7a9e' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: '12px'
                      }}>
                        {isSelected && '✓'}
                      </div>
                    </div>

                    <h3 style={{ fontSize: '1.05rem', color: '#1b365d', fontWeight: '700', marginBottom: '8px', textAlign: 'left' }}>{mod.name}</h3>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: '1.5', marginBottom: '24px', paddingRight: '15px', textAlign: 'left' }}>{mod.description}</p>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '12px' }}>
                      <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: '500', textAlign: 'left' }}>Price / Month</span>
                      <span style={{ fontSize: '0.9rem', color: '#1b365d', fontWeight: '700' }}>{mod.price.toLocaleString()} PKR</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Team Size Section */}
            <h2 style={{ fontSize: '1.6rem', color: '#1b365d', marginBottom: '20px', fontWeight: '700', textAlign: 'left' }}>Team Size</h2>
            <div style={{ 
              background: '#ffffff', 
              border: '1px solid #e2e8f0', 
              borderRadius: '16px', 
              padding: '20px 24px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              marginBottom: '40px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
            }}>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '1rem', color: '#1b365d', fontWeight: '700', textAlign: 'left' }}>Seats</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '2px', textAlign: 'left' }}>Maximum 6 Seats</div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <button 
                  onClick={() => setSeats(Math.max(1, seats - 1))}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#e2e8f0',
                    color: '#1b365d',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >-</button>
                <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1b365d', minWidth: '20px', textAlign: 'center' }}>{seats < 10 ? `0${seats}` : seats}</span>
                <button 
                  onClick={() => setSeats(Math.min(6, seats + 1))}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#e0f2fe',
                    color: '#0284c7',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >+</button>
              </div>
            </div>

            {/* Addons Section */}
            <h2 style={{ fontSize: '1.6rem', color: '#1b365d', marginBottom: '20px', fontWeight: '700', textAlign: 'left' }}>Addons</h2>
            <div style={{ 
              background: '#ffffff', 
              border: '1px solid #e2e8f0', 
              borderRadius: '16px', 
              padding: '12px 24px', 
              display: 'flex', 
              flexDirection: 'column',
              boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
              marginBottom: '60px'
            }}>
              {availableAddons.map((addon, idx) => {
                const isOn = selectedAddons.includes(addon.id);
                const isAvailable = selectedModules.includes(addon.requiredModuleId);
                const reqModule = availableModules.find(m => m.id === addon.requiredModuleId);

                return (
                  <div 
                    key={addon.id}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '16px 0',
                      borderBottom: idx !== availableAddons.length - 1 ? '1px solid #f1f5f9' : 'none',
                      opacity: isAvailable ? 1 : 0.5,
                      transition: 'opacity 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        {/* Toggle Switch */}
                        <div 
                          onClick={() => toggleAddon(addon)}
                          style={{
                            width: '46px',
                            height: '24px',
                            borderRadius: '12px',
                            background: isOn ? '#1b365d' : '#cbd5e1',
                            position: 'relative',
                            cursor: isAvailable ? 'pointer' : 'not-allowed',
                            transition: 'background 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                        >
                          <div style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: '#fff',
                            position: 'absolute',
                            top: '2px',
                            left: isOn ? '23px' : '2px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '11px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
                            transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s ease',
                            transform: isOn ? 'scale(1.1) rotate(10deg)' : 'scale(1) rotate(0deg)'
                          }}>
                            {isOn ? '👍' : ''}
                          </div>
                        </div>
                        <span style={{ fontSize: '0.92rem', color: '#1b365d', fontWeight: '600', textAlign: 'left' }}>{addon.name}</span>
                      </div>
                      <span style={{ fontSize: '0.9rem', color: '#475569', fontWeight: '600' }}>{addon.price.toLocaleString()} PKR</span>
                    </div>

                    {!isAvailable && reqModule && (
                      <span style={{ fontSize: '0.75rem', color: '#e11d48', marginTop: '6px', marginLeft: '60px', textAlign: 'left' }}>
                        * Requires core module "{reqModule.name}" to be selected.
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Sticky Summary Card */}
          <div style={{ position: 'sticky', top: '30px' }}>
            <div style={{
              background: '#1b365d',
              borderRadius: '24px',
              padding: '36px 30px',
              color: '#ffffff',
              boxShadow: '0 20px 40px rgba(27, 54, 93, 0.2)',
              textAlign: 'left'
            }}>
              <h3 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '700', marginBottom: '28px', letterSpacing: '0.5px' }}>
                Estimated Summary
              </h3>

              {selectedModules.length > 0 && (
                <div style={{ marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left' }}>Core Modules</div>
                  {selectedModules.map(modId => {
                    const mod = availableModules.find(m => m.id === modId);
                    if (!mod) return null;
                    return (
                      <div key={modId} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '8px' }}>
                        <span style={{ color: '#e2e8f0', textAlign: 'left' }}>{mod.name}</span>
                        <span style={{ fontWeight: '600' }}>{mod.price.toLocaleString()} PKR</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {selectedAddons.length > 0 && (
                <div style={{ marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
                  <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '600', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left' }}>Add-Ons</div>
                  {selectedAddons.map(addonId => {
                    const addon = availableAddons.find(a => a.id === addonId);
                    if (!addon) return null;
                    return (
                      <div key={addonId} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '8px' }}>
                        <span style={{ color: '#e2e8f0', textAlign: 'left' }}>{addon.name}</span>
                        <span style={{ fontWeight: '600' }}>{addon.price.toLocaleString()} PKR</span>
                      </div>
                    );
                  })}
                </div>
              )}

              <div style={{ marginBottom: '28px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left' }}>Total Seats</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', fontWeight: '700' }}>
                  <span style={{ textAlign: 'left' }}>{seats < 10 ? `0${seats}` : seats}</span>
                  <span>{seatsTotal.toLocaleString()} PKR</span>
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '600', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left' }}>Total Estimated</div>
                <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ffffff', textAlign: 'left' }}>
                  {grandTotal.toLocaleString()} <span style={{ fontSize: '1rem', fontWeight: '500', color: '#94a3b8' }}>PKR/mo</span>
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '4px', textAlign: 'left' }}>All prices are exclusive of taxes</div>
              </div>

              <button style={{
                width: '100%',
                background: '#ffffff',
                color: '#1b365d',
                border: 'none',
                borderRadius: '12px',
                padding: '16px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                Get Started With this Plan
              </button>

            </div>
          </div>

        </div>

        {/* FAQ Section */}
        <div style={{ marginTop: '90px', marginBottom: '100px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3.8rem', fontFamily: "'Caveat', cursive", color: '#1b365d', marginBottom: '8px', fontWeight: '500', lineHeight: '1.1' }}>
            Pricing & licensing <span style={{ color: '#2b7a9e' }}>FAQ</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '45px' }}>
            Get clear answers to practical billing questions not covered in the plan table.
          </p>

          <div style={{ maxWidth: '880px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
            {faqList.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.01)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div 
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    style={{
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                  >
                    <span style={{ fontSize: '1.05rem', color: '#1b365d', fontWeight: '600', textAlign: 'left' }}>
                      {faq.question}
                    </span>
                    <div style={{
                      width: '46px',
                      height: '38px',
                      borderRadius: '8px',
                      background: '#1b365d',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.3rem',
                      fontWeight: '400',
                      flexShrink: 0
                    }}>
                      {isOpen ? '✕' : '+'}
                    </div>
                  </div>

                  {isOpen && (
                    <div style={{ 
                      padding: '0 28px 24px 28px', 
                      color: '#475569', 
                      fontSize: '0.92rem', 
                      lineHeight: '1.6', 
                      borderTop: '1px solid #f1f5f9', 
                      paddingTop: '18px', 
                      textAlign: 'left',
                      display: 'flex',
                      gap: '16px',
                      alignItems: 'flex-start'
                    }}>
                      <div style={{
                        width: '4px',
                        height: '38px',
                        background: '#2b7a9e',
                        borderRadius: '4px',
                        flexShrink: 0,
                        marginTop: '2px'
                      }} />
                      <div>{faq.answer}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;