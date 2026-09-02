import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import styles from './ZipTransformation.module.css';

export default function ZipTransformation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  
  // Track vertical dragging from 0px (closed) to 400px (adjusted for smaller screen height)
  const yDrag = useMotionValue(0);

  // As you drag down, left half slides left, right half slides right
  const leftX = useTransform(yDrag, [0, 400], ['0%', '-100%']);
  const rightX = useTransform(yDrag, [0, 400], ['0%', '100%']);

  // Click handler to toggle open/close automatically if they prefer tapping the zipper
  const handleToggleZip = () => {
    const targetY = isOpen ? 0 : 400;
    animate(yDrag, targetY, { type: 'spring', stiffness: 300, damping: 30 });
    setIsOpen(!isOpen);
  };

  return (
    <section className={styles.transformationSection}>
      {/* Section Header with balanced vertical spacing */}
      <div className={styles.headerContainer}>
        <h2 className={styles.headline}>
          <span className={styles.darkText}>The </span>
          <span className={styles.accentText}>Legacy Trap</span>
          <span className={styles.vsBadge}> VS </span>
          <span className={styles.darkText}>The </span>
          <span className={styles.accentText}>RevFlow Way.</span>
        </h2>
        <p className={styles.subtext}>
          Compare the daily friction of legacy workarounds with the seamless, automated control of RevFlow.
        </p>
      </div>

      {/* Laptop Container - Reduced max-width for a more compact size */}
      <div className={styles.laptopFrame}>
        <div className={styles.screenContent} ref={containerRef}>
          
          {/* BACKGROUND LAYER: The New Way (RevFlow Way) */}
          <div className={styles.revFlowLayer}>
            <div className={styles.contentColumn}>
              <h3 className={styles.panelTitle}>The RevFlow Way</h3>
              <div className={styles.meritsContainer}>
                <div className={styles.meritItem}>
                  <span className={styles.simpleCheck}>✓</span>
                  <p>Real-time Inventory & Financial Sync</p>
                </div>
                <div className={styles.meritItem}>
                  <span className={styles.simpleCheck}>✓</span>
                  <p>FBR POS Automated Tax Compliance</p>
                </div>
                <div className={styles.meritItem}>
                  <span className={styles.simpleCheck}>✓</span>
                  <p>Unified Multi-Branch Live Analytics</p>
                </div>
              </div>
            </div>
            <div className={styles.doodleColumn}>
              <img src="/new-doo.png" alt="New Way Illustration" className={styles.doodleImage1} />
            </div>
          </div>

          {/* FOREGROUND LEFT HALF: Old Way Text Content */}
          <motion.div 
            className={`${styles.oldWayHalf} ${styles.leftHalf}`}
            style={{ x: leftX }}
          >
            <div className={styles.contentColumn}>
              <h3 className={styles.panelTitle}>The Old Way</h3>
              <div className={styles.doodleContainer}>
                <div className={styles.doodleCard}>
                  <span>✕</span>
                  <p>Broken Excel Spreadsheets & Manual Entry Errors</p>
                </div>
                <div className={styles.doodleCard}>
                  <span>✕</span>
                  <p>Frequent Tax Filing Rejections & Penalties</p>
                </div>
                <div className={styles.doodleCard}>
                  <span>✕</span>
                  <p>Stressed Staff & Hidden Reconciliation Costs</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FOREGROUND RIGHT HALF: Old Way Doodle Image */}
          <motion.div 
            className={`${styles.oldWayHalf} ${styles.rightHalf}`}
            style={{ x: rightX }}
          >
            <div className={styles.doodleColumn}>
              <img src="/old-way-doo.png" alt="Old Way Illustration" className={styles.doodleImage} />
            </div>
          </motion.div>

          {/* CENTER METAL ZIPPER TRACK */}
          <div className={styles.centerZipTrack} />

          {/* INTERACTIVE DRAGGABLE & CLICKABLE ZIPPER SLIDER HANDLE */}
          <motion.div 
            className={styles.zipperSliderHandle}
            drag="y"
            dragConstraints={{ top: 0, bottom: 400 }}
            dragElastic={0.02}
            style={{ y: yDrag }}
            onClick={handleToggleZip}
            onDragEnd={() => {
              if (yDrag.get() > 200) {
                animate(yDrag, 400, { type: 'spring', stiffness: 300, damping: 30 });
                setIsOpen(true);
              } else {
                animate(yDrag, 0, { type: 'spring', stiffness: 300, damping: 30 });
                setIsOpen(false);
              }
            }}
          >
            <div className={styles.zipperPullTab} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}