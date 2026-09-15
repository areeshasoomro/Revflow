import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import './RevFlowBuilder.css';

interface Addon {
  id: string;
  name: string;
}

interface ModuleConfig {
  id: string;
  name: string;
  description: string;
  iconPath: string;
  addons: Addon[];
}

interface StepItem {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const AVAILABLE_MODULES: ModuleConfig[] = [
  {
    id: 'sales',
    name: 'Sales',
    description: 'Track sales, orders, and point of sale.',
    iconPath: '/Sales-icon.png',
    addons: [
      { id: 'sales_pos', name: 'POS Terminal' },
      { id: 'sales_online', name: 'Online Storefront' }
    ]
  },
  {
    id: 'inventory',
    name: 'Inventory',
    description: 'Track stock, manage items and categories.',
    iconPath: '/Inventory-icon.png',
    addons: [
      { id: 'inv_shopify', name: 'Shopify Sync' },
      { id: 'inv_whatsapp', name: 'Whatsapp' }
    ]
  },
  {
    id: 'accounting',
    name: 'Accounting',
    description: 'Manage accounts, invoices, and ledger.',
    iconPath: '/Accounting-icon.png',
    addons: [
      { id: 'acc_tax', name: 'Tax Calculator' },
      { id: 'acc_invoice', name: 'Auto-Invoicing' }
    ]
  },
  {
    id: 'hr',
    name: 'HR',
    description: 'Manage staff, attendance, and payroll.',
    iconPath: '/HR-icon.png',
    addons: [
      { id: 'hr_payroll', name: 'Advanced Payroll' },
      { id: 'hr_attendance', name: 'Biometric Sync' }
    ]
  },
  {
    id: 'multibranch',
    name: 'Multi-Branch',
    description: 'Manage multiple locations seamlessly.',
    iconPath: '/Multibranch-icon.png',
    addons: [
      { id: 'mb_warehouse', name: 'Central Warehouse' },
      { id: 'mb_currency', name: 'Multi-Currency' }
    ]
  }
];

const STEPS_DATA: StepItem[] = [
  {
    id: 1,
    stepNumber: 'STEP 01',
    title: 'Pick Modules',
    description: 'Choose your business needs.',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    id: 2,
    stepNumber: 'STEP 02',
    title: 'Add Seats',
    description: 'Set up team & locations.',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
  },
  {
    id: 3,
    stepNumber: 'STEP 03',
    title: 'Register',
    description: 'Create account & verify.',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
      </svg>
    ),
  },
  {
    id: 4,
    stepNumber: 'STEP 04',
    title: 'Invite Team',
    description: 'Assign roles to people.',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 5,
    stepNumber: 'STEP 05',
    title: 'Grow',
    description: 'Launch & track growth.',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export const RevFlowBuilder: React.FC = () => {
  // 1. Initialized with empty array so NO modules are selected initially
  const [activeModules, setActiveModules] = useState<string[]>([]);
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  
  // 2. Initialized to 0 so NO seats are selected initially
  const [seats, setSeats] = useState<number>(0);

  // 3. Initialized with all add-ons set to false
  const [activeAddons, setActiveAddons] = useState<Record<string, boolean>>({
    sales_pos: false,
    sales_online: false,
    inv_shopify: false,
    inv_whatsapp: false,
    acc_tax: false,
    acc_invoice: false,
    hr_payroll: false,
    hr_attendance: false,
    mb_warehouse: false,
    mb_currency: false,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const moduleRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const addonRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [svgPaths, setSvgPaths] = useState<{ id: string; d: string }[]>([]);

  const isStep1Done = activeModules.length > 0;
  const isStep2Done = seats > 0;
  const canRegister = isStep1Done && isStep2Done;

  const getDynamicActiveStepIndex = () => {
    if (isStep1Done && isStep2Done) return 2;
    if (isStep1Done) return 1;
    return 0;
  };

  const activeStepIndex = getDynamicActiveStepIndex();

  const toggleModule = (id: string) => {
    let updatedModules;
    if (activeModules.includes(id)) {
      updatedModules = activeModules.filter(m => m !== id);
      setActiveModules(updatedModules);
      if (expandedModule === id) setExpandedModule(null);
    } else {
      updatedModules = [...activeModules, id];
      setActiveModules(updatedModules);
      setExpandedModule(id);
    }
  };

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedModule(expandedModule === id ? null : id);
  };

  const toggleAddon = (addonId: string) => {
    setActiveAddons(prev => ({ ...prev, [addonId]: !prev[addonId] }));
  };

  const handleSeatChange = (delta: number) => {
    setSeats(prev => Math.min(10, Math.max(0, prev + delta)));
  };

  const activeModuleList = useMemo(
    () => AVAILABLE_MODULES.filter(m => activeModules.includes(m.id)),
    [activeModules]
  );

  useEffect(() => {
    const updatePaths = () => {
      const container = containerRef.current;
      const rootEl = rootRef.current;
      if (!container || !rootEl) return;

      const containerRect = container.getBoundingClientRect();
      const rootRect = rootEl.getBoundingClientRect();

      const rootX = rootRect.left + rootRect.width / 2 - containerRect.left + container.scrollLeft;
      const rootY = rootRect.bottom - containerRect.top + container.scrollTop;

      const newPaths: { id: string; d: string }[] = [];

      activeModuleList.forEach((mod) => {
        const modEl = moduleRefs.current[mod.id];
        if (modEl) {
          const modRect = modEl.getBoundingClientRect();
          
          const modTopX = modRect.left + modRect.width / 2 - containerRect.left + container.scrollLeft;
          const modTopY = modRect.top - containerRect.top + container.scrollTop;

          const modBottomX = modTopX;
          const modBottomY = modRect.bottom - containerRect.top + container.scrollTop;

          const deltaYRoot = modTopY - rootY;
          const controlY1 = rootY + deltaYRoot * 0.35;
          const controlY2 = modTopY - deltaYRoot * 0.35;
          const curveMidX = (rootX + modTopX) / 2;

          newPaths.push({
            id: `root-${mod.id}`,
            d: `M ${rootX} ${rootY} C ${curveMidX} ${controlY1}, ${curveMidX} ${controlY2}, ${modTopX} ${modTopY}`
          });

          const modAddons = mod.addons.filter(a => activeAddons[a.id]);
          modAddons.forEach((addon) => {
            const addonEl = addonRefs.current[addon.id];
            if (addonEl) {
              const addonRect = addonEl.getBoundingClientRect();
              
              const addonTopX = addonRect.left + addonRect.width / 2 - containerRect.left + container.scrollLeft;
              const addonTopY = addonRect.top - containerRect.top + container.scrollTop;

              const deltaYAddon = addonTopY - modBottomY;
              const cpY1 = modBottomY + deltaYAddon * 0.5;
              const cpY2 = addonTopY - deltaYAddon * 0.5;

              newPaths.push({
                id: `${mod.id}-${addon.id}`,
                d: `M ${modBottomX} ${modBottomY} C ${modBottomX} ${cpY1}, ${addonTopX} ${cpY2}, ${addonTopX} ${addonTopY}`
              });
            }
          });
        }
      });

      setSvgPaths(newPaths);
    };

    const timer = setTimeout(updatePaths, 80);
    window.addEventListener('resize', updatePaths);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updatePaths);
    };
  }, [activeModules, activeAddons, activeModuleList]);

  return (
    <section className="revflow-builder-section">
      <div className="builder-header-wrapper">
        <h2 className="builder-main-title">
          <span className="highlight-caveat">Mix, Match,</span> and <span className="highlight-caveat">Snap</span> Your Modules.
        </h2>
        <p className="builder-subtitle">
          Turn on only what you need. See how your workflow comes to life in real time.
        </p>
      </div>

      <div className="top-steps-bar-container">
        <div className="top-steps-bar-header">
          <div className="live-preview-badge">
            <span className="live-dot"></span> Onboarding Steps
          </div>
          
          <motion.button 
            className={`get-started-pill-btn ${canRegister ? 'active-glow' : 'disabled-glow'}`}
            animate={canRegister ? { scale: [1, 1.02, 1] } : { scale: 1 }}
            transition={{ repeat: canRegister ? Infinity : 0, duration: 2 }}
            onClick={() => {
              if (canRegister) {
                alert('Proceeding to Registration Workflow!');
              } else {
                alert('Please complete Step 1 and Step 2 first!');
              }
            }}
          >
            <span className="btn-text">Register Now</span>
            <span className="btn-icon-circle">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </span>
          </motion.button>
        </div>

        <div className="stacked-cards-deck-wrapper">
          {STEPS_DATA.map((step, index) => {
            const isActive = index === activeStepIndex;
            const isCompleted = 
              (index === 0 && isStep1Done) || 
              (index === 1 && isStep2Done);

            return (
              <div
                key={step.id}
                className={`stacked-step-card ${isActive ? 'active-stacked-card' : ''}`}
              >
                <div className={`step-icon-box ${isActive ? 'active' : ''}`}>
                  {step.icon}
                </div>
                <div className="step-content-box">
                  <h4 className="step-card-title">{step.title}</h4>
                  <p className="step-card-desc">{step.description}</p>
                </div>
                <div 
                  className={`step-badge ${isCompleted ? 'done-badge-green' : ''}`}
                >
                  {isCompleted ? 'DONE ✓' : step.stepNumber}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="builder-workspace-two-col">
        <div className="control-panel">
          <h3 className="panel-heading">Pick Modules & Add-ons</h3>

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
                    <div className="module-titles-left">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <img 
                          src={mod.iconPath} 
                          alt={`${mod.name} icon`} 
                          style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                          onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                        />
                        <h4>{mod.name}</h4>
                      </div>
                      <p>{mod.description}</p>
                    </div>
                    <div className="control-actions" onClick={e => e.stopPropagation()}>
                      {mod.addons.length > 0 && isActive && (
                        <button className="expand-chevron" onClick={e => toggleExpand(mod.id, e)}>
                          {isExpanded ? '▲' : '▼'}
                        </button>
                      )}
                      <label className="switch">
                        <input type="checkbox" checked={isActive} onChange={() => toggleModule(mod.id)} />
                        <span className="slider round">
                          <span className="slider-thumb-inner">
                            {isActive ? '👍🏻' : ''}
                          </span>
                        </span>
                      </label>
                    </div>
                  </div>

                  {isActive && isExpanded && mod.addons.length > 0 && (
                    <div className="addons-clean-list">
                      {mod.addons.map(addon => {
                        const isAddonActive = !!activeAddons[addon.id];
                        return (
                          <div 
                            key={addon.id} 
                            className={`addon-pill-item ${isAddonActive ? 'active' : ''}`}
                            onClick={(e) => { e.stopPropagation(); toggleAddon(addon.id); }}
                          >
                            <div className={`custom-checkbox-clean ${isAddonActive ? 'checked' : ''}`}>
                              {isAddonActive && <span>✓</span>}
                            </div>
                            <span>{addon.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="seat-selector-panel-block">
            <h4 className="seat-panel-title">Configure Seats</h4>
            <div className="seat-control-box-large">
              <span className="seat-val">{seats} Seat(s) Selected</span>
              <div className="seat-buttons">
                <button onClick={() => handleSeatChange(-1)}>−</button>
                <button onClick={() => handleSeatChange(1)}>+</button>
              </div>
            </div>
          </div>
        </div>

        <div className="preview-canvas-expanded" ref={containerRef}>
          <svg className="bezier-svg-layer">
            {svgPaths.map((p) => (
              <path
                key={p.id}
                d={p.d}
                className="bezier-path-line"
              />
            ))}
          </svg>

          <div className="canvas-tree-container-expanded">
            {activeModules.length === 0 ? (
              <div className="empty-preview-state">
                <p>Toggle modules on the left to generate your ecosystem mind-map tree.</p>
              </div>
            ) : (
              <div className="mindmap-tree-wrapper">
                <div className="mindmap-root-pill" ref={rootRef}>
                  <span className="root-status-dot"></span>
                  <span>System Tree Preview</span>
                </div>

                <div className="mindmap-modules-flow-grid">
                  {activeModuleList.map((mod) => {
                    const modAddons = mod.addons.filter(a => activeAddons[a.id]);

                    return (
                      <div key={mod.id} className="mindmap-module-branch">
                        <div 
                          className="mindmap-chip module-chip-main"
                          ref={el => { moduleRefs.current[mod.id] = el; }}
                        >
                          <div className="card-connector-dot"></div>
                          <div className="mindmap-node-titles">
                            <h3>{mod.name}</h3>
                          </div>
                          <div className="card-icon-badge">
                            <img 
                              src={mod.iconPath} 
                              alt={`${mod.name} icon`} 
                              className="mindmap-node-icon"
                              onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                            />
                          </div>
                        </div>

                        {modAddons.length > 0 && (
                          <div className="mindmap-addons-horizontal-group">
                            {modAddons.map((addon) => (
                              <div 
                                key={addon.id} 
                                className="addon-node-wrapper"
                                ref={el => { addonRefs.current[addon.id] = el; }}
                              >
                                <div className="mindmap-chip addon-chip-sub">
                                  <div className="card-connector-dot"></div>
                                  <div className="mindmap-node-titles">
                                    <h3>{addon.name}</h3>
                                  </div>
                                </div>
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