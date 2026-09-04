import React, { useState } from 'react';
import './RevFlowBuilder.css';

interface Addon {
  id: string;
  name: string;
  iconPath: string;
}

interface ModuleConfig {
  id: string;
  name: string;
  description: string;
  iconPath: string;
  addons: Addon[];
}

const AVAILABLE_MODULES: ModuleConfig[] = [
  {
    id: 'inventory',
    name: 'Inventory',
    description: 'Track stock, manage items and categories.',
    iconPath: '/Inventory-icon.png',
    addons: [
      { id: 'inv_shopify', name: 'Shopify Sync', iconPath: '/Shopify-icon.png' },
      { id: 'inv_whatsapp', name: 'WhatsApp Alerts', iconPath: '/Whatsapp-icon.png' }
    ]
  },
  {
    id: 'sales',
    name: 'Sales',
    description: 'Track sales, orders, and point of sale.',
    iconPath: '/Sales-icon.png',
    addons: [
      { id: 'sales_pos', name: 'POS Terminal', iconPath: '/POS-icon.png' },
      { id: 'sales_online', name: 'Online Storefront', iconPath: '/Online-icon.png' }
    ]
  },
  {
    id: 'accounting',
    name: 'Accounting',
    description: 'Manage accounts, invoices, and ledger.',
    iconPath: '/Accounting-icon.png',
    addons: [
      { id: 'acc_tax', name: 'Tax Calculator', iconPath: '/Tax-icon.png' },
      { id: 'acc_invoice', name: 'Auto-Invoicing', iconPath: '/Invoice-icon.png' }
    ]
  },
  {
    id: 'hr',
    name: 'HR',
    description: 'Manage staff, attendance, and payroll.',
    iconPath: '/HR-icon.png',
    addons: [
      { id: 'hr_payroll', name: 'Advanced Payroll', iconPath: '/Payroll-icon.png' },
      { id: 'hr_attendance', name: 'Biometric Sync', iconPath: '/Biometric-icon.png' }
    ]
  },
  {
    id: 'multibranch',
    name: 'Multi-Branch',
    description: 'Manage multiple locations seamlessly.',
    iconPath: '/Multibranch-icon.png',
    addons: [
      { id: 'mb_warehouse', name: 'Central Warehouse', iconPath: '/Warehouse-icon.png' },
      { id: 'mb_currency', name: 'Multi-Currency', iconPath: '/Currency-icon.png' }
    ]
  }
];

export const RevFlowBuilder: React.FC = () => {
  // Started empty so no toggles are on initially
  const [activeModules, setActiveModules] = useState<string[]>([]);
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  
  const [activeAddons, setActiveAddons] = useState<Record<string, boolean>>({
    inv_shopify: false,
    inv_whatsapp: false,
    sales_pos: false,
    sales_online: false,
    acc_tax: false,
    acc_invoice: false,
    hr_payroll: false,
    hr_attendance: false,
    mb_warehouse: false,
    mb_currency: false,
  });

  const toggleModule = (id: string) => {
    if (activeModules.includes(id)) {
      setActiveModules(activeModules.filter(m => m !== id));
      if (expandedModule === id) setExpandedModule(null);
    } else {
      setActiveModules([...activeModules, id]);
      const targetMod = AVAILABLE_MODULES.find(m => m.id === id);
      if (targetMod && targetMod.addons.length > 0) {
        setExpandedModule(id);
      }
    }
  };

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedModule(expandedModule === id ? null : id);
  };

  const toggleAddon = (addonId: string) => {
    setActiveAddons(prev => ({ ...prev, [addonId]: !prev[addonId] }));
  };

  const activeModuleList = AVAILABLE_MODULES.filter(m => activeModules.includes(m.id));

  return (
    <section className="revflow-builder-section">
      <div className="builder-header-wrapper">
        <h2 className="builder-main-title">
          Mix, Match, and <span className="highlight-script">Snap</span> Your Modules.
        </h2>
        <p className="builder-subtitle">
          Turn on only what you need. See how your workflow comes to life in real time.
        </p>
      </div>

      <div className="builder-workspace">
        {/* Left Control Panel */}
        <div className="control-panel">
          <h3 
            className="panel-heading" 
            style={{ 
              fontFamily: "'Inter', sans-serif", 
              fontSize: '18px', 
              fontWeight: 600, 
              lineHeight: '1.5' 
            }}
          >
            Choose the tools your business needs.
          </h3>

          <div className="modules-list">
            {AVAILABLE_MODULES.map(mod => {
              const isActive = activeModules.includes(mod.id);
              const isExpanded = expandedModule === mod.id;

              return (
                <div 
                  key={mod.id} 
                  className={`module-card-control ${isActive ? 'active' : ''}`}
                  onClick={() => toggleModule(mod.id)}
                >
                  <div className="module-control-header">
                    <div className="module-titles">
                      <h4 style={{ fontFamily: "'Inter', sans-serif" }}>{mod.name}</h4>
                      <p style={{ fontFamily: "'Inter', sans-serif" }}>{mod.description}</p>
                    </div>
                    <div className="control-actions" onClick={e => e.stopPropagation()}>
                      {mod.addons.length > 0 && isActive && (
                        <button className="expand-chevron" onClick={e => toggleExpand(mod.id, e)}>
                          {isExpanded ? '▲' : '▼'}
                        </button>
                      )}
                      <label className="switch">
                        <input 
                          type="checkbox" 
                          checked={isActive} 
                          onChange={() => toggleModule(mod.id)} 
                        />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>

                  {/* Addons Accordion */}
                  {isActive && isExpanded && mod.addons.length > 0 && (
                    <div className="addons-accordion">
                      {mod.addons.map(addon => (
                        <label key={addon.id} className="addon-checkbox-label" onClick={e => e.stopPropagation()}>
                          <input 
                            type="checkbox" 
                            checked={!!activeAddons[addon.id]} 
                            onChange={() => toggleAddon(addon.id)} 
                          />
                          <span className="custom-checkbox">
                            <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span style={{ fontFamily: "'Inter', sans-serif" }}>{addon.name}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Live Preview Canvas */}
        <div className="preview-canvas" style={{ height: 'auto', minHeight: '100%' }}>
          <div className="live-preview-badge">
            <span className="live-dot"></span> Live Preview
          </div>

          <div className="canvas-tree-container" style={{ overflowY: 'visible', padding: '40px 20px', display: 'flex', justifyContent: 'center' }}>
            {activeModules.length === 0 ? (
              <div className="empty-preview-state" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '300px', textAlign: 'center', color: '#64748b' }}>
                <p style={{ fontFamily: "'Inter', sans-serif" }}>Toggle modules on the left to build your workflow tree.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '320px', gap: '16px' }}>
                
                {/* Root Hub Node */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '12px 20px', background: '#1e3a4c', color: '#ffffff', borderRadius: '14px', boxShadow: '0 6px 16px rgba(30,58,76,0.2)' }}>
                  <span style={{ fontWeight: 600, fontSize: '14px', fontFamily: "'Inter', sans-serif" }}>Core Workspace</span>
                  <span style={{ fontSize: '18px' }}>⚡</span>
                </div>

                {/* Vertical Connector */}
                <div style={{ width: '2px', height: '14px', borderLeft: '2px dashed #2b7a9e66' }}></div>

                {/* Active Modules Stack */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
                  {activeModuleList.map(mod => {
                    const activeModuleAddons = mod.addons.filter(addon => activeAddons[addon.id]);
                    const hasActiveAddons = activeModuleAddons.length > 0;

                    return (
                      <div key={mod.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '12px' }}>
                        
                        {/* Core Module Card */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '14px 20px', background: '#ffffff', borderRadius: '14px', boxShadow: '0 4px 14px rgba(0,0,0,0.06)', border: '1px solid #e1ecf2' }}>
                          <span style={{ fontWeight: 600, color: '#1e3a4c', fontSize: '15px', fontFamily: "'Inter', sans-serif" }}>{mod.name}</span>
                          <img 
                            src={mod.iconPath} 
                            alt={`${mod.name} icon`} 
                            style={{ width: '32px', height: '32px', objectFit: 'contain' }} 
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                        </div>

                        {/* Module-Specific Add-ons Sub-list */}
                        {hasActiveAddons && (
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90%', gap: '10px', paddingLeft: '20px', borderLeft: '2px dashed #2b7a9e44', marginTop: '2px' }}>
                            {activeModuleAddons.map(addon => (
                              <div key={addon.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '10px 16px', background: '#f4f9fb', borderRadius: '12px', border: '1px solid #d1e3ed' }}>
                                <span style={{ fontSize: '13px', color: '#2b7a9e', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>{addon.name}</span>
                                <img 
                                  src={addon.iconPath} 
                                  alt={`${addon.name} icon`} 
                                  style={{ width: '22px', height: '22px', objectFit: 'contain' }} 
                                  onError={(e) => {
                                    const parent = (e.target as HTMLElement).parentElement;
                                    if (parent) {
                                      e.currentTarget.style.display = 'none';
                                      let fallbackSpan = parent.querySelector('.addon-fallback-icon') as HTMLElement;
                                      if (!fallbackSpan) {
                                        fallbackSpan = document.createElement('span');
                                        fallbackSpan.className = 'addon-fallback-icon';
                                        fallbackSpan.innerText = '🔗';
                                        fallbackSpan.style.fontSize = '16px';
                                        parent.appendChild(fallbackSpan);
                                      }
                                    }
                                  }}
                                />
                              </div>
                            ))}
                          </div>
                        )}

                      </div>
                    );
                  })}
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevFlowBuilder;