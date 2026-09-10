import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './SelfServeSteps.css';

interface StepItem {
  id: number;
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const STEPS_DATA: StepItem[] = [
  {
    id: 1,
    stepNumber: 'STEP 01',
    title: 'Register',
    description: 'Create your account & verify your business.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />
      </svg>
    ),
  },
  {
    id: 2,
    stepNumber: 'STEP 02',
    title: 'Pick Modules',
    description: 'Choose what your business needs.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    id: 3,
    stepNumber: 'STEP 03',
    title: 'Add Seats',
    description: 'Set up your team and locations.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
  },
  {
    id: 4,
    stepNumber: 'STEP 04',
    title: 'Invite Team',
    description: 'Assign roles and invite your people.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    description: 'Launch, manage and track performance.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export const SelfServeSteps: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(3); // Default to STEP 04 like your Figma design

  // Auto-cycle every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STEPS_DATA.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const getPositionOffset = (index: number) => {
    const total = STEPS_DATA.length;
    let diff = (index - activeIndex + total) % total;
    if (diff > total / 2) {
      diff -= total;
    }
    return diff;
  };

  return (
    <section className="self-serve-section">
      <div className="self-serve-wrapper">
        
        {/* Header - Forced into single continuous lines */}
        <div className="self-serve-header">
          <h2 className="self-serve-title">
            <span className="title-line">Five <span className="script-highlight">Steps</span>.</span>
            <span className="title-line">Entirely <span className="script-highlight">Self-Serve.</span></span>
          </h2>
          <p className="self-serve-subtitle">
            From sign-up to a fully operational workspace, every step is<br />
            simple, guided, and completely on your terms.
          </p>
        </div>

        {/* Cards Stack Viewport */}
        <div className="cards-stack-viewport">
          {STEPS_DATA.map((step, index) => {
            const offset = getPositionOffset(index);
            const isActive = offset === 0;

            if (Math.abs(offset) > 2) return null;

            return (
              <motion.div
                key={step.id}
                className={`step-card-item ${isActive ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                animate={{
                  y: offset * 85,
                  scale: isActive ? 1 : 0.94 - Math.abs(offset) * 0.03,
                  zIndex: 10 - Math.abs(offset),
                  opacity: Math.abs(offset) === 2 ? 0.35 : isActive ? 1 : 0.7,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <div className={`step-icon-box ${isActive ? 'active' : ''}`}>
                  {step.icon}
                </div>

                <div className="step-content-box">
                  <h4 className="step-card-title">{step.title}</h4>
                  <p className="step-card-desc">{step.description}</p>
                </div>

                <div className={`step-badge ${isActive ? 'active' : ''}`}>
                  {step.stepNumber}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dots Navigation */}
        <div className="carousel-dots-row">
          {STEPS_DATA.map((_, idx) => (
            <button
              key={idx}
              className={`dot-indicator ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to step ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SelfServeSteps;