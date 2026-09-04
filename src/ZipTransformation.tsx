import { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import styles from './ZipTransformation.module.css';

export default function ZipTransformation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Track vertical movement linked to scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Map scroll progress so the zip opens automatically as user scrolls into the section, and pauses/stops wherever scroll stops
  const scrollY = useTransform(scrollYProgress, [0.15, 0.55], [0, 400]);

  // Link left/right panel separation to the scroll/drag motion values
  const leftX = useTransform(scrollY, [0, 400], ['0%', '-100%']);
  const rightX = useTransform(scrollY, [0, 400], ['0%', '100%']);

  return (
    <section className={styles.transformationSection} ref={sectionRef}>
      {/* Section Header */}
      <div className={styles.headerContainer}>
        <h2 className={styles.headline}>
          <span className={styles.darkText}>The </span>
          <span className={styles.accentText}>Legacy Trap</span>
          <span className={styles.vsBadge}> VS </span>
          <span className={styles.darkText}>The </span>
          <span className={styles.accentText}>RevFlow Way.</span>
        </h2>
        <p className={styles.subtext}>
          Scroll down to watch the zip automatically open, or grab and drag the handle manually to any position.
        </p>
      </div>

      {/* Laptop Container */}
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

          {/* INTERACTIVE ZIPPER SLIDER HANDLE (Moves via scroll or manual drag) */}
          <motion.div 
            className={styles.zipperSliderHandle}
            drag="y"
            dragConstraints={{ top: 0, bottom: 400 }}
            dragElastic={0.02}
            style={{ y: scrollY }}
          >
            <div className={styles.zipperPullTab} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}