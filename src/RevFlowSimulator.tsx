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
    id: 'sales',
    name: 'Sales',
    description: 'Track orders, invoices, and customer receipts.',
    basePrice: 10000,
    addOns: [
      { id: 'online_store', name: 'Online Storefront', price: 8000 },
      { id: 'pos_receipts', name: 'Custom POS Receipts', price: 3000 },
    ],
  },
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
    id: 'accounting',
    name: 'Accounting',
    description: 'Automate P&L, ledger statements, and tax compliance.',
    basePrice: 14000,
    addOns: [
      { id: 'tax_hub', name: 'Advanced Tax Hub', price: 6000 },
      { id: 'multi_curr', name: 'Multi-Currency Support', price: 4000 },
    ],
  },
  {
    id: 'multi_branch',
    name: 'Multi Branch',
    description: 'Sync inventory and sales across multiple business locations.',
    basePrice: 16000,
    addOns: [
      { id: 'branch_transfer', name: 'Inter-Branch Stock Transfer', price: 7000 },
      { id: 'central_audit', name: 'Centralized Audit Logs', price: 5000 },
    ],
  },
  {
    id: 'hr',
    name: 'HR',
    description: 'Manage employees, attendance and payroll in one place.',
    basePrice: 9600,
    addOns: [
      { id: 'payroll', name: 'Payroll Management', price: 5000 },
      { id: 'attendance', name: 'Attendance & Shifts', price: 7000 },
    ],
  },
  {
    id: 'purchase',
    name: 'Purchase',
    description: 'Streamline vendor bills, purchase orders and re-ordering.',
    basePrice: 9000,
    addOns: [
      { id: 'vendor_portal', name: 'Vendor Portal Access', price: 4000 },
      { id: 'auto_reorder', name: 'Automated Re-ordering', price: 4500 },
    ],
  },
];

export const RevFlowSimulator: React.FC = () => {
  // Default: No modules selected initially
  const [selectedModules, setSelectedModules] = useState<Record<string, string[]>>({});

  const [dropdownValue, setDropdownValue] = useState<string>('');
  const [seats, setSeats] = useState<number>(4);
  const costPerSeat = 750;

  const toggleAddOn = (moduleId: string, addOnId: string) => {
    setSelectedModules((prev) => {
      const currentAddOns = prev[moduleId] || [];
      const updatedAddOns = currentAddOns.includes(addOnId)
        ? currentAddOns.filter((id) => id !== addOnId)
        : [...currentAddOns, addOnId];
      return { ...prev, [moduleId]: updatedAddOns };
    });
  };

  const removeModule = (moduleId: string) => {
    setSelectedModules((prev) => {
      const copy = { ...prev };
      delete copy[moduleId];
      return copy;
    });
  };

  const handleAddModuleDropdown = () => {
    if (dropdownValue && !selectedModules[dropdownValue]) {
      setSelectedModules((prev) => ({ ...prev, [dropdownValue]: [] }));
      setDropdownValue('');
    }
  };

  const activeModuleKeys = Object.keys(selectedModules);

  const totalCorePrice = activeModuleKeys.reduce((sum, modId) => {
    const mod = AVAILABLE_CORE_MODULES.find((m) => m.id === modId);
    return sum + (mod ? mod.basePrice : 0);
  }, 0);

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

  const availableDropdownOptions = AVAILABLE_CORE_MODULES.filter(
    (m) => !selectedModules[m.id]
  );

  return (
    <section className="revflow-simulator-section">
      <div className="simulator-wrapper">
        
        {/* Header Section */}
        <div className="simulator-header">
          <h1 className="simulator-title">
            Build <span className="highlight-script">Your Plan</span>. See <span className="highlight-script">Your Pricing</span> <br />
            in <span className="highlight-script">Real Time.</span>
          </h1>
          <p className="simulator-subtitle">
            Choose the modules and seats that fit your business. Pay for what you use.
          </p>
        </div>

        {/* Main Grid */}
        <div className="simulator-grid">
          
          {/* Left Column */}
          <div className="simulator-controls-col">
            
            {/* Step 1 */}
            <div className="control-step-block">
              <div className="step-label-row">
                <span className="step-number-badge">1</span>
                <h3 className="step-heading">Select Core Module</h3>
              </div>

              <div className="core-select-container">
                <select
                  className="core-module-select"
                  value={dropdownValue}
                  onChange={(e) => setDropdownValue(e.target.value)}
                >
                  <option value="" disabled>
                    Select a core module...
                  </option>
                  {availableDropdownOptions.map((mod) => (
                    <option key={mod.id} value={mod.id}>
                      {mod.name}
                    </option>
                  ))}
                </select>
                <span className="select-arrow-icon">▼</span>
              </div>

              {/* Removable chips for active modules */}
              {activeModuleKeys.length > 0 && (
                <div className="selected-module-chips-row">
                  {activeModuleKeys.map((modId) => {
                    const mod = AVAILABLE_CORE_MODULES.find((m) => m.id === modId);
                    if (!mod) return null;
                    return (
                      <div key={modId} className="module-chip-tag">
                        <span>{mod.name}</span>
                        <button
                          type="button"
                          className="chip-remove-btn"
                          onClick={() => removeModule(modId)}
                        >
                          ✕
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}

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
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="module-card-top">
                          <div className="module-card-info-box">
                            <h4 className="module-card-title">{modData.name}</h4>
                            <p className="module-card-desc">{modData.description}</p>
                          </div>
                          <div className="module-price-tag">
                            <span className="price-label">PRICE / MONTH</span>
                            <span className="price-value">
                              {modData.basePrice.toLocaleString()} PKR
                            </span>
                          </div>
                        </div>

                        {/* Add-on Checkbox Rows */}
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
                                  <span className={`custom-check-box ${isChecked ? 'checked' : ''}`}>
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
              </div>

              <button
                className="add-module-wide-btn"
                onClick={handleAddModuleDropdown}
                disabled={!dropdownValue}
              >
                <span className="plus-icon-circle">+</span>
                <span>Add Module</span>
              </button>
            </div>

            {/* Step 2 */}
            <div className="control-step-block" style={{ marginTop: '30px' }}>
              <div className="step-label-row">
                <span className="step-number-badge">2</span>
                <h3 className="step-heading">Select Seats</h3>
              </div>

              <div className="seats-stepper-container">
                <div className="seats-input-box">
                  <motion.span
                    key={seats}
                    initial={{ opacity: 0.6, y: -2 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="seats-display-number"
                  >
                    {String(seats).padStart(2, '0')}
                  </motion.span>
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
                    onClick={() => setSeats(Math.min(6, seats + 1))}
                    disabled={seats >= 6}
                  >
                    +
                  </button>
                </div>
              </div>
              <p className="seats-limit-info">Maximum 6 Seats</p>
            </div>

          </div>

          {/* Right Column: Estimated Summary */}
          <div className="simulator-summary-col">
            <div className="summary-card">
              <h3 className="summary-card-main-title">Estimated Summary</h3>

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

              <div className="summary-section-row">
                <div className="summary-section-header">Total Seats</div>
                <div className="summary-item-line">
                  <motion.span
                    key={seats}
                    initial={{ scale: 1.1, color: '#2b7a9e' }}
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