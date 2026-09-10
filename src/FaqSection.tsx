import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FaqSection.css';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 1,
    question: 'Do I have to buy all modules up front?',
    answer: 'No, RevFlow is completely modular. You can start with a single core module and add additional modules or seats anytime as your business scales.',
  },
  {
    id: 2,
    question: 'Is FBR compliance fully automatic?',
    answer: 'Yes, our FBR POS integration automatically syncs your invoices and sales data in real-time to meet all local regulatory and tax requirements.',
  },
  {
    id: 3,
    question: 'Can I connect RevFlow to my existing online store?',
    answer: 'Absolutely. RevFlow offers seamless integrations with platforms like Shopify and custom storefronts via robust API syncs.',
  },
  {
    id: 4,
    question: 'What kind of support and training do you offer?',
    answer: 'We offer multi-tiered support. All plans include access to our extensive online knowledge base. Paid plans include dedicated onboarding specialists and priority email/chat support. Enterprise plans also receive a dedicated account manager.',
  },
  {
    id: 5,
    question: 'How does data migration work, and is it secure?',
    answer: 'We use encrypted protocols to migrate your legacy data safely. Our onboarding team assists you step-by-step to ensure zero data loss.',
  },
];

export const FaqSection: React.FC = () => {
  // Default open to the 4th item matching your design screenshot
  const [openId, setOpenId] = useState<number | null>(4);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-section">
      <div className="faq-wrapper">
        
        {/* Header */}
        <div className="faq-header">
          <h2 className="faq-title">
            Common <span className="script-highlight">Questions.</span>
          </h2>
          <p className="faq-subtitle">
            Everything you need to know about RevFlow’s flexibility,<br />
            compliance, and security.
          </p>
        </div>

        {/* Accordion List */}
        <div className="faq-list">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                className={`faq-card ${isOpen ? 'open' : ''}`}
                initial={false}
                animate={{
                  borderColor: isOpen ? 'rgba(46, 134, 171, 0.4)' : 'rgba(226, 232, 240, 0.9)',
                  boxShadow: isOpen
                    ? '0 12px 30px rgba(27, 54, 93, 0.08)'
                    : '0 2px 8px rgba(27, 54, 93, 0.02)',
                }}
                transition={{ duration: 0.25 }}
              >
                <button
                  className="faq-question-row"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{item.question}</span>
                  
                  <motion.div
                    className={`faq-icon-btn ${isOpen ? 'open' : ''}`}
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {isOpen ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="faq-answer-container"
                    >
                      <div className="faq-answer-inner">
                        <div className="faq-answer-accent-bar" />
                        <p className="faq-answer-text">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;