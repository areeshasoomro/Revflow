


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import './RevFlowBuilder.css';

// interface Addon {
//   id: string;
//   name: string;
//   iconPath: string;
// }

// interface ModuleConfig {
//   id: string;
//   name: string;
//   description: string;
//   iconPath: string;
//   addons: Addon[];
// }

// interface StepItem {
//   id: number;
//   stepNumber: string;
//   title: string;
//   description: string;
//   icon: React.ReactNode;
// }

// const AVAILABLE_MODULES: ModuleConfig[] = [
//   {
//     id: 'inventory',
//     name: 'Inventory',
//     description: 'Track stock, manage items and categories.',
//     iconPath: '/Inventory-icon.png',
//     addons: [
//       { id: 'inv_shopify', name: 'Shopify Sync', iconPath: '/Shopify-icon.png' },
//       { id: 'inv_whatsapp', name: 'WhatsApp Alerts', iconPath: '/Whatsapp-icon.png' }
//     ]
//   },
//   {
//     id: 'sales',
//     name: 'Sales',
//     description: 'Track sales, orders, and point of sale.',
//     iconPath: '/Sales-icon.png',
//     addons: [
//       { id: 'sales_pos', name: 'POS Terminal', iconPath: '/POS-icon.png' },
//       { id: 'sales_online', name: 'Online Storefront', iconPath: '/Online-icon.png' }
//     ]
//   },
//   {
//     id: 'accounting',
//     name: 'Accounting',
//     description: 'Manage accounts, invoices, and ledger.',
//     iconPath: '/Accounting-icon.png',
//     addons: [
//       { id: 'acc_tax', name: 'Tax Calculator', iconPath: '/Tax-icon.png' },
//       { id: 'acc_invoice', name: 'Auto-Invoicing', iconPath: '/Invoice-icon.png' }
//     ]
//   },
//   {
//     id: 'hr',
//     name: 'HR',
//     description: 'Manage staff, attendance, and payroll.',
//     iconPath: '/HR-icon.png',
//     addons: [
//       { id: 'hr_payroll', name: 'Advanced Payroll', iconPath: '/Payroll-icon.png' },
//       { id: 'hr_attendance', name: 'Biometric Sync', iconPath: '/Biometric-icon.png' }
//     ]
//   },
//   {
//     id: 'multibranch',
//     name: 'Multi-Branch',
//     description: 'Manage multiple locations seamlessly.',
//     iconPath: '/Multibranch-icon.png',
//     addons: [
//       { id: 'mb_warehouse', name: 'Central Warehouse', iconPath: '/Warehouse-icon.png' },
//       { id: 'mb_currency', name: 'Multi-Currency', iconPath: '/Currency-icon.png' }
//     ]
//   }
// ];

// const STEPS_DATA: StepItem[] = [
//   {
//     id: 1,
//     stepNumber: 'STEP 01',
//     title: 'Pick Modules / Addons',
//     description: 'Choose what your business needs.',
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <rect x="3" y="3" width="7" height="7" />
//         <rect x="14" y="3" width="7" height="7" />
//         <rect x="14" y="14" width="7" height="7" />
//         <rect x="3" y="14" width="7" height="7" />
//       </svg>
//     ),
//   },
//   {
//     id: 2,
//     stepNumber: 'STEP 02',
//     title: 'Add Seats',
//     description: 'Set up team & locations.',
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//         <circle cx="9" cy="7" r="4" />
//         <line x1="19" y1="8" x2="19" y2="14" />
//         <line x1="22" y1="11" x2="16" y2="11" />
//       </svg>
//     ),
//   },
//   {
//     id: 3,
//     stepNumber: 'STEP 03',
//     title: 'Register',
//     description: 'Create account & verify.',
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
//         <circle cx="9" cy="7" r="4" />
//         <polyline points="16 11 18 13 22 9" />
//       </svg>
//     ),
//   },
//   {
//     id: 4,
//     stepNumber: 'STEP 04',
//     title: 'Invite Team',
//     description: 'Assign roles to people.',
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//         <circle cx="9" cy="7" r="4" />
//         <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//         <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//       </svg>
//     ),
//   },
//   {
//     id: 5,
//     stepNumber: 'STEP 05',
//     title: 'Grow',
//     description: 'Launch and track performance.',
//     icon: (
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//         <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
//         <polyline points="17 6 23 6 23 12" />
//       </svg>
//     ),
//   },
// ];

// export const RevFlowBuilder: React.FC = () => {
//   const [activeModules, setActiveModules] = useState<string[]>([]);
//   const [expandedModule, setExpandedModule] = useState<string | null>(null);
//   const [seats, setSeats] = useState<number>(0);
//   const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

//   const [activeAddons, setActiveAddons] = useState<Record<string, boolean>>({
//     inv_shopify: false,
//     inv_whatsapp: false,
//     sales_pos: false,
//     sales_online: false,
//     acc_tax: false,
//     acc_invoice: false,
//     hr_payroll: false,
//     hr_attendance: false,
//     mb_warehouse: false,
//     mb_currency: false,
//   });

//   const toggleModule = (id: string) => {
//     let updatedModules;
//     if (activeModules.includes(id)) {
//       updatedModules = activeModules.filter(m => m !== id);
//       setActiveModules(updatedModules);
//       if (expandedModule === id) setExpandedModule(null);
//     } else {
//       updatedModules = [...activeModules, id];
//       setActiveModules(updatedModules);
//       setExpandedModule(id);
//     }

//     if (updatedModules.length > 0) {
//       setActiveStepIndex(1);
//     }
//   };

//   const toggleExpand = (id: string, e: React.MouseEvent) => {
//     e.stopPropagation();
//     setExpandedModule(expandedModule === id ? null : id);
//   };

//   const toggleAddon = (addonId: string) => {
//     setActiveAddons(prev => ({ ...prev, [addonId]: !prev[addonId] }));
//   };

//   const handleSeatChange = (delta: number) => {
//     setSeats(prev => {
//       const newSeats = Math.min(10, Math.max(0, prev + delta));
//       if (newSeats > 0) {
//         setActiveStepIndex(2);
//       }
//       return newSeats;
//     });
//   };

//   const activeModuleList = AVAILABLE_MODULES.filter(m => activeModules.includes(m.id));

//   const isStep1Done = activeModules.length > 0;
//   const isStep2Done = seats > 0;
//   const canRegister = isStep1Done && isStep2Done;

//   return (
//     <section className="revflow-builder-section">
//       <div className="builder-header-wrapper">
//         <h2 className="builder-main-title">
//           Mix, Match, and <span className="highlight-script">Snap</span> Your Modules.
//         </h2>
//         <p className="builder-subtitle">
//           Simply turn on only what you need and watch your custom workflow come to life in real time with every single change.
//         </p>
//       </div>

//       <div className="builder-workspace-three-col">
        
//         {/* COLUMN 1: Control Panel */}
//         <div className="control-panel">
//           <h3 className="panel-heading">Pick Modules & Add-ons</h3>

//           <div className="modules-list">
//             {AVAILABLE_MODULES.map(mod => {
//               const isActive = activeModules.includes(mod.id);
//               const isExpanded = expandedModule === mod.id;

//               return (
//                 <div 
//                   key={mod.id} 
//                   className={`module-card-control ${isActive ? 'active' : ''}`}
//                   onClick={() => toggleModule(mod.id)}
//                 >
//                   <div className="module-control-header">
//                     <div className="module-titles-centered">
//                       <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//                         <img 
//                           src={mod.iconPath} 
//                           alt={`${mod.name} icon`} 
//                           style={{ width: '20px', height: '20px', objectFit: 'contain' }}
//                           onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
//                         />
//                         <h4>{mod.name}</h4>
//                       </div>
//                       <p>{mod.description}</p>
//                     </div>
//                     <div className="control-actions" onClick={e => e.stopPropagation()}>
//                       {mod.addons.length > 0 && isActive && (
//                         <button className="expand-chevron" onClick={e => toggleExpand(mod.id, e)}>
//                           {isExpanded ? '▲' : '▼'}
//                         </button>
//                       )}
//                       <label className="switch">
//                         <input type="checkbox" checked={isActive} onChange={() => toggleModule(mod.id)} />
//                         <span className="slider round">
//                           <span className="slider-thumb-inner">
//                             {isActive ? '👍🏻' : ''}
//                           </span>
//                         </span>
//                       </label>
//                     </div>
//                   </div>

//                   {isActive && isExpanded && mod.addons.length > 0 && (
//                     <div className="addons-clean-list">
//                       {mod.addons.map(addon => {
//                         const isAddonActive = !!activeAddons[addon.id];
//                         return (
//                           <div 
//                             key={addon.id} 
//                             className={`addon-pill-item ${isAddonActive ? 'active' : ''}`}
//                             onClick={(e) => { e.stopPropagation(); toggleAddon(addon.id); }}
//                           >
//                             <div className={`custom-checkbox-clean ${isAddonActive ? 'checked' : ''}`}>
//                               {isAddonActive && <span>✓</span>}
//                             </div>
//                             <img 
//                               src={addon.iconPath} 
//                               alt={`${addon.name} icon`} 
//                               style={{ width: '16px', height: '16px', objectFit: 'contain' }}
//                               onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
//                             />
//                             <span>{addon.name}</span>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>

//           <div className="seat-selector-panel-block">
//             <h4 className="seat-panel-title">Configure Seats</h4>
//             <div className="seat-control-box-large">
//               <span className="seat-val">{seats} Seat(s) Selected</span>
//               <div className="seat-buttons">
//                 <button onClick={() => handleSeatChange(-1)}>−</button>
//                 <button onClick={() => handleSeatChange(1)}>+</button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* COLUMN 2: Tree Workflow Preview */}
//         <div className="preview-canvas">
//           <div className="live-preview-badge">
//             <span className="live-dot"></span> Tree Workflow
//           </div>

//           <div className="canvas-tree-container">
//             {activeModules.length === 0 ? (
//               <div className="empty-preview-state">
//                 <p>Toggle modules on the left to build your workflow tree.</p>
//               </div>
//             ) : (
//               <div className="tree-stack-wrapper-clean">
//                 <div className="tree-hub-node-clean">
//                   <span>Core Workspace</span>
//                   <span className="hub-lightning">⚡</span>
//                 </div>

//                 <div className="tree-connector-line"></div>

//                 <div className="tree-modules-list-clean">
//                   {activeModuleList.map(mod => {
//                     const activeModuleAddons = mod.addons.filter(addon => activeAddons[addon.id]);
//                     const hasAddons = activeModuleAddons.length > 0;

//                     return (
//                       <div key={mod.id} className="tree-mod-branch-group">
//                         <div className="tree-module-box-clean">
//                           <span className="tree-mod-label">{mod.name}</span>
//                           <img 
//                             src={mod.iconPath} 
//                             alt={`${mod.name} icon`} 
//                             style={{ width: '24px', height: '24px', objectFit: 'contain' }}
//                             onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
//                           />
//                         </div>

//                         {hasAddons && (
//                           <div className="tree-addons-subbranch">
//                             {activeModuleAddons.map(addon => (
//                               <div key={addon.id} className="tree-addon-box-clean">
//                                 <span className="tree-addon-label">{addon.name}</span>
//                                 <img 
//                                   src={addon.iconPath} 
//                                   alt={`${addon.name} icon`} 
//                                   style={{ width: '18px', height: '18px', objectFit: 'contain' }}
//                                   onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
//                                 />
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* COLUMN 3: Stacked Steps Deck */}
//         <div className="steps-middle-column">
//           <div className="steps-top-wrapper">
//             <div className="steps-header-row-top">
//               <div className="live-preview-badge">
//                 <span className="live-dot"></span> Onboarding Steps
//               </div>
              
//               <motion.button 
//                 className={`get-started-pill-btn ${canRegister ? 'active-glow' : 'disabled-glow'}`}
//                 animate={canRegister ? { scale: [1, 1.03, 1] } : { scale: 1 }}
//                 transition={{ repeat: canRegister ? Infinity : 0, duration: 2 }}
//                 onClick={() => {
//                   if (canRegister) {
//                     alert('Proceeding to Registration Workflow!');
//                   } else {
//                     alert('Please complete Step 1 (Pick Modules) and Step 2 (Add Seats) first!');
//                   }
//                 }}
//               >
//                 <span className="btn-text">Register Now</span>
//                 <span className="btn-icon-circle">
//                   <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     <line x1="7" y1="17" x2="17" y2="7"></line>
//                     <polyline points="7 7 17 7 17 17"></polyline>
//                   </svg>
//                 </span>
//               </motion.button>
//             </div>

//             {/* STACKED VIEWPORT (Balanced Symmetrical Card Deck Stack) */}
//             <div className="cards-stack-viewport">
//               {STEPS_DATA.map((step, index) => {
//                 const isActive = index === activeStepIndex;
//                 const offsetFromActive = index - activeStepIndex;

//                 let yOffset = offsetFromActive * 68; 
//                 let scaleVal = isActive ? 1 : Math.max(0.82, 1 - Math.abs(offsetFromActive) * 0.06);
//                 let opacityVal = isActive ? 1 : Math.max(0.2, 1 - Math.abs(offsetFromActive) * 0.25);

//                 const isCompleted = 
//                   (index === 0 && isStep1Done) || 
//                   (index === 1 && isStep2Done);

//                 return (
//                   <motion.div
//                     key={step.id}
//                     className={`step-card-item ${isActive ? 'active' : ''}`}
//                     onClick={() => setActiveStepIndex(index)}
//                     animate={{
//                       y: yOffset,
//                       scale: scaleVal,
//                       opacity: opacityVal,
//                       zIndex: isActive ? 50 : 20 - Math.abs(offsetFromActive),
//                     }}
//                     transition={{ type: 'spring', stiffness: 280, damping: 26 }}
//                   >
//                     <div className={`step-icon-box ${isActive ? 'active' : ''}`}>
//                       {step.icon}
//                     </div>

//                     <div className="step-content-box">
//                       <h4 className="step-card-title">{step.title}</h4>
//                       <p className="step-card-desc">{step.description}</p>
//                     </div>

//                     <div className={`step-badge ${isCompleted ? 'done' : ''} ${isActive ? 'active' : ''}`}>
//                       {isCompleted ? 'DONE ✓' : step.stepNumber}
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             <div className="carousel-dots-row">
//               {STEPS_DATA.map((_, idx) => (
//                 <button 
//                   key={idx} 
//                   className={`dot-indicator ${idx === activeStepIndex ? 'active' : ''}`} 
//                   onClick={() => setActiveStepIndex(idx)} 
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default RevFlowBuilder;




import React, { useState } from 'react';
import { motion } from 'framer-motion';
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

interface StepItem {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ReactNode;
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

const STEPS_DATA: StepItem[] = [
  {
    id: 1,
    stepNumber: 'STEP 01',
    title: 'Pick Modules / Addons',
    description: 'Choose what your business needs.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    description: 'Launch and track performance.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export const RevFlowBuilder: React.FC = () => {
  const [activeModules, setActiveModules] = useState<string[]>([]);
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [seats, setSeats] = useState<number>(0);

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

  const isStep1Done = activeModules.length > 0;
  const isStep2Done = seats > 0;
  const canRegister = isStep1Done && isStep2Done;

  // Updated step progression logic:
  // - If Step 1 & Step 2 are done -> Step 3 (Register) is active.
  // - If only Step 1 is done -> Step 2 (Add Seats) is active.
  // - Otherwise -> Step 1 (Pick Modules) is active.
  const getDynamicActiveStepIndex = () => {
    if (isStep1Done && isStep2Done) return 2; // Step 3 index
    if (isStep1Done) return 1; // Step 2 index
    return 0; // Step 1 index
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

  const activeModuleList = AVAILABLE_MODULES.filter(m => activeModules.includes(m.id));

  return (
    <section className="revflow-builder-section">
      <div className="builder-header-wrapper">
        <h2 className="builder-main-title">
          Mix, Match, and <span className="highlight-script">Snap</span> Your Modules.
        </h2>
        <p className="builder-subtitle">
          Simply turn on only what you need and watch your custom workflow come to life in real time with every single change.
        </p>
      </div>

      {/* TOP STACKED CARDS DECK CONTAINER */}
      <div className="top-steps-bar-container">
        <div className="top-steps-bar-header">
          <div className="live-preview-badge">
            <span className="live-dot"></span> Onboarding Steps
          </div>
          
          <motion.button 
            className={`get-started-pill-btn ${canRegister ? 'active-glow' : 'disabled-glow'}`}
            animate={canRegister ? { scale: [1, 1.03, 1] } : { scale: 1 }}
            transition={{ repeat: canRegister ? Infinity : 0, duration: 2 }}
            onClick={() => {
              if (canRegister) {
                alert('Proceeding to Registration Workflow!');
              } else {
                alert('Please complete Step 1 (Pick Modules) and Step 2 (Add Seats) first!');
              }
            }}
          >
            <span className="btn-text">Register Now</span>
            <span className="btn-icon-circle">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </span>
          </motion.button>
        </div>

        {/* Cascading Horizontal Stack Deck Wrapper */}
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
                {/* Green badge styling applied when completed */}
                <div 
                  className={`step-badge ${isCompleted ? 'active-done-green' : ''}`}
                  style={isCompleted ? { backgroundColor: '#10B981', color: '#FFFFFF', borderColor: '#10B981' } : {}}
                >
                  {isCompleted ? 'DONE ✓' : step.stepNumber}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2-COLUMN WORKSPACE */}
      <div className="builder-workspace-two-col">
        
        {/* COLUMN 1: Control Panel */}
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
                    <div className="module-titles-centered">
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <img 
                          src={mod.iconPath} 
                          alt={`${mod.name} icon`} 
                          style={{ width: '20px', height: '20px', objectFit: 'contain' }}
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
                            <img 
                              src={addon.iconPath} 
                              alt={`${addon.name} icon`} 
                              style={{ width: '16px', height: '16px', objectFit: 'contain' }}
                              onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                            />
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

        {/* COLUMN 2: Full Width Tree Workflow / Neural Network Preview Canvas */}
        <div className="preview-canvas-expanded">
          <div className="live-preview-badge">
            <span className="live-dot"></span> Tree Workflow / Neural Network Canvas
          </div>

          <div className="canvas-tree-container-expanded">
            {activeModules.length === 0 ? (
              <div className="empty-preview-state">
                <p>Toggle modules on the left to build your workflow tree diagram.</p>
              </div>
            ) : (
              <div className="tree-stack-wrapper-clean">
                <div className="tree-hub-node-clean">
                  <span>Core Workspace</span>
                  <span className="hub-lightning">⚡</span>
                </div>

                <div className="tree-connector-line"></div>

                <div className="tree-modules-list-clean">
                  {activeModuleList.map(mod => {
                    const activeModuleAddons = mod.addons.filter(addon => activeAddons[addon.id]);
                    const hasAddons = activeModuleAddons.length > 0;

                    return (
                      <div key={mod.id} className="tree-mod-branch-group">
                        <div className="tree-module-box-clean">
                          <span className="tree-mod-label">{mod.name}</span>
                          <img 
                            src={mod.iconPath} 
                            alt={`${mod.name} icon`} 
                            style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                            onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                          />
                        </div>

                        {hasAddons && (
                          <div className="tree-addons-subbranch">
                            {activeModuleAddons.map(addon => (
                              <div key={addon.id} className="tree-addon-box-clean">
                                <span className="tree-addon-label">{addon.name}</span>
                                <img 
                                  src={addon.iconPath} 
                                  alt={`${addon.name} icon`} 
                                  style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                                  onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
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