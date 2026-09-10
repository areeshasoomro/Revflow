import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './RevFlowSimulator.css';

interface AddOn {
  id: string;
  name: string;
  price: number;
}

interface CoreModuleOption {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  addOns: AddOn[];
}

const AVAILABLE_CORE_MODULES: CoreModuleOption[] = [
  {
    id: 'inventory',
    name: 'Inventory Management',
    description: 'Manage your stock, products and inventory seamlessly.',
    basePrice: 12000,
    addOns: [
      { id: 'fbr_pos', name: 'FBR POS Integration', price: 5000 },
      { id: 'shopify', name: 'Shopify Sync', price: 10000 },
    ],
  },
  {
    id: 'hr',
    name: 'HR Management',
    description: 'Manage employees, attendance and payroll in one place.',
    basePrice: 9600,
    addOns: [
      { id: 'payroll', name: 'Payroll Management', price: 5000 },
      { id: 'attendance', name: 'Attendance & Shifts', price: 7000 },
    ],
  },
  {
    id: 'sales',
    name: 'Sales & POS',
    description: 'Track orders, invoices, and customer receipts.',
    basePrice: 11000,
    addOns: [
      { id: 'crm', name: 'CRM Integration', price: 4500 },
      { id: 'online_store', name: 'Online Storefront', price: 8000 },
    ],
  },
  {
    id: 'accounting',
    name: 'Accounting & Finance',
    description: 'Automate P&L, ledger statements, and tax compliance.',
    basePrice: 14000,
    addOns: [
      { id: 'tax_hub', name: 'Advanced Tax Hub', price: 6000 },
      { id: 'multi_curr', name: 'Multi-Currency Support', price: 4000 },
    ],
  },
];

export const RevFlowSimulator: React.FC = () => {
  // Selected core modules configuration: map moduleId -> selected addOnIds[]
  const [selectedModules, setSelectedModules] = useState<Record<string, string[]>>({
    inventory: ['shopify'], // Default active state based on your screenshot
  });

  const [dropdownValue, setDropdownValue] = useState<string>('');
  const [seats, setSeats] = useState<number>(4);
  const costPerSeat = 750; // 4 seats * 750 = 3,000 PKR

  // Toggle add-on checkbox inside a module
  const toggleAddOn = (moduleId: string, addOnId: string) => {
    setSelectedModules((prev) => {
      const currentAddOns = prev[moduleId] || [];
      const updatedAddOns = currentAddOns.includes(addOnId)
        ? currentAddOns.filter((id) => id !== addOnId)
        : [...currentAddOns, addOnId];
      return { ...prev, [moduleId]: updatedAddOns };
    });
  };

  // Remove a core module
  const removeModule = (moduleId: string) => {
    setSelectedModules((prev) => {
      const copy = { ...prev };
      delete copy[moduleId];
      return copy;
    });
  };

  // Add a new core module from dropdown
  const handleAddModuleDropdown = () => {
    if (dropdownValue && !selectedModules[dropdownValue]) {
      setSelectedModules((prev) => ({ ...prev, [dropdownValue]: [] }));
      setDropdownValue('');
    }
  };

  // Calculations
  const activeModuleKeys = Object.keys(selectedModules);

  // Total Core Modules Price
  const totalCorePrice = activeModuleKeys.reduce((sum, modId) => {
    const mod = AVAILABLE_CORE_MODULES.find((m) => m.id === modId);
    return sum + (mod ? mod.basePrice : 0);
  }, 0);

  // Total Add-ons list & price
  const activeAddOnsList: { id: string; name: string; price: number }[] = [];
  activeModuleKeys.forEach((modId) => {
    const mod = AVAILABLE_CORE_MODULES.find((m) => m.id === modId);
    const activeAddOnIds = selectedModules[modId] || [];
    if (mod) {
      mod.addOns.forEach((ao) => {
        if (activeAddOnIds.includes(ao.id)) {
          activeAddOnsList.push(ao);
        }
      });
    }
  });

  const totalAddOnsPrice = activeAddOnsList.reduce((sum, ao) => sum + ao.price, 0);
  const totalSeatsPrice = seats * costPerSeat;
  const grandTotal = totalCorePrice + totalAddOnsPrice + totalSeatsPrice;

  // Unselected modules available for adding
  const availableDropdownOptions = AVAILABLE_CORE_MODULES.filter(
    (m) => !selectedModules[m.id]
  );

  return (
    <section className="revflow-simulator-section">
      <div className="simulator-wrapper">
        
        {/* Header Title */}
        <div className="simulator-header">
          <h1 className="simulator-title">
            Build <span className="highlight-script">Your Plan</span>. See <span className="highlight-script">Your Pricing</span> <br />
            in <span className="highlight-script">Real Time.</span>
          </h1>
          <p className="simulator-subtitle">
            Choose the modules and seats that fit your business. Pay for what you use.
          </p>
        </div>

        {/* Main Grid Workspace */}
        <div className="simulator-grid">
          
          {/* Left Column: Interactive Controls */}
          <div className="simulator-controls-col">
            
            {/* Step 1: Select Core Module */}
            <div className="control-step-block">
              <div className="step-label-row">
                <span className="step-number-badge">1</span>
                <h3 className="step-heading">Select Core Module</h3>
              </div>

              {/* Add Module Dropdown Selector */}
              {availableDropdownOptions.length > 0 && (
                <div className="add-module-dropdown-wrapper">
                  <select
                    className="core-module-select"
                    value={dropdownValue}
                    onChange={(e) => setDropdownValue(e.target.value)}
                  >
                    <option value="" disabled>
                      Select a module to add...
                    </option>
                    {availableDropdownOptions.map((mod) => (
                      <option key={mod.id} value={mod.id}>
                        {mod.name}
                      </option>
                    ))}
                  </select>
                  <button
                    className="add-module-action-btn"
                    onClick={handleAddModuleDropdown}
                    disabled={!dropdownValue}
                  >
                    <span>+ Add Module</span>
                  </button>
                </div>
              )}

              {/* Active Modules Cards List */}
              <div className="selected-modules-stack">
                <AnimatePresence>
                  {activeModuleKeys.map((modId) => {
                    const modData = AVAILABLE_CORE_MODULES.find((m) => m.id === modId);
                    if (!modData) return null;
                    const activeAddOnIds = selectedModules[modId] || [];

                    return (
                      <motion.div
                        key={modId}
                        className="module-config-card"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="module-card-top">
                          <div>
                            <h4 className="module-card-title">{modData.name}</h4>
                            <p className="module-card-desc">{modData.description}</p>
                          </div>
                          <div className="module-price-tag">
                            <span className="price-label">Price / Month</span>
                            <span className="price-value">
                              {modData.basePrice.toLocaleString()} PKR
                            </span>
                          </div>
                          {activeModuleKeys.length > 1 && (
                            <button
                              className="remove-module-btn"
                              onClick={() => removeModule(modId)}
                              title="Remove Module"
                            >
                              ✕
                            </button>
                          )}
                        </div>

                        {/* Add-ons Checkboxes */}
                        {modData.addOns.length > 0 && (
                          <div className="module-addons-list">
                            {modData.addOns.map((ao) => {
                              const isChecked = activeAddOnIds.includes(ao.id);
                              return (
                                <label key={ao.id} className="addon-checkbox-row">
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => toggleAddOn(modId, ao.id)}
                                  />
                                  <span className="custom-check-box">
                                    {isChecked && <span className="check-mark">✓</span>}
                                  </span>
                                  <span className="addon-name-text">{ao.name}</span>
                                  <span className="addon-price-text">
                                    {ao.price.toLocaleString()} PKR
                                  </span>
                                </label>
                              );
                            })}
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {activeModuleKeys.length === 0 && (
                  <div className="empty-modules-notice">
                    <p>No core modules selected. Please choose a module above.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Step 2: Select Seats */}
            <div className="control-step-block" style={{ marginTop: '35px' }}>
              <div className="step-label-row">
                <span className="step-number-badge">2</span>
                <h3 className="step-heading">Select Seats</h3>
              </div>

              <div className="seats-stepper-container">
                <div className="seats-input-box">
                  <span className="seats-display-number">{seats}</span>
                </div>
                <div className="seats-control-buttons">
                  <button
                    className="seat-btn"
                    onClick={() => setSeats(Math.max(1, seats - 1))}
                    disabled={seats <= 1}
                  >
                    −
                  </button>
                  <button
                    className="seat-btn"
                    onClick={() => setSeats(Math.min(10, seats + 1))}
                    disabled={seats >= 10}
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="seats-limit-info">Maximum 10 Seats (750 PKR/seat)</p>
            </div>

          </div>

          {/* Right Column: Estimated Summary Sticky Card */}
          <div className="simulator-summary-col">
            <div className="summary-card">
              <h3 className="summary-card-main-title">Estimated Summary</h3>

              {/* Core Modules Breakdown */}
              <div className="summary-section-row">
                <div className="summary-section-header">Core Modules</div>
                {activeModuleKeys.length > 0 ? (
                  activeModuleKeys.map((modId) => {
                    const mod = AVAILABLE_CORE_MODULES.find((m) => m.id === modId);
                    if (!mod) return null;
                    return (
                      <div key={modId} className="summary-item-line">
                        <span className="item-name">{mod.name}</span>
                        <motion.span
                          key={mod.basePrice}
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="item-price"
                        >
                          {mod.basePrice.toLocaleString()} PKR
                        </motion.span>
                      </div>
                    );
                  })
                ) : (
                  <div className="summary-item-line text-muted">None selected</div>
                )}
              </div>

              {/* Add-Ons Breakdown */}
              <div className="summary-section-row">
                <div className="summary-section-header">Add-Ons</div>
                {activeAddOnsList.length > 0 ? (
                  activeAddOnsList.map((ao) => (
                    <div key={ao.id} className="summary-item-line">
                      <span className="item-name">{ao.name}</span>
                      <motion.span
                        key={ao.price}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="item-price"
                      >
                        {ao.price.toLocaleString()} PKR
                      </motion.span>
                    </div>
                  ))
                ) : (
                  <div className="summary-item-line text-muted">None selected</div>
                )}
              </div>

              {/* Total Seats Breakdown */}
              <div className="summary-section-row">
                <div className="summary-section-header">Total Seats</div>
                <div className="summary-item-line">
                  <motion.span
                    key={seats}
                    initial={{ scale: 1.15, color: '#2b7a9e' }}
                    animate={{ scale: 1, color: '#1e293b' }}
                    transition={{ duration: 0.2 }}
                    className="item-name"
                  >
                    {String(seats).padStart(2, '0')}
                  </motion.span>
                  <motion.span
                    key={totalSeatsPrice}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="item-price"
                  >
                    {totalSeatsPrice.toLocaleString()} PKR
                  </motion.span>
                </div>
              </div>

              {/* Grand Total Estimated Footer */}
              <div className="summary-grand-total-box">
                <div className="grand-total-label-row">
                  <span>Total Estimated</span>
                </div>
                <div className="grand-total-amount-row">
                  <motion.span
                    key={grandTotal}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="grand-total-number"
                  >
                    {grandTotal.toLocaleString()}
                  </motion.span>
                  <span className="grand-total-unit">PKR/mo</span>
                </div>
                <p className="taxes-disclaimer">All prices are exclusive of taxes</p>

                <button className="summary-cta-button">
                  <span>Get Started With this Plan</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RevFlowSimulator;