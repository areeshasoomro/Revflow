import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import styles from './ZipTransformation.module.css';

export default function ZipTransformation() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track section scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Motion value representing normalized progress from 0 to 1
  const progressValue = useMotionValue(0);

  // Map scroll progress to normalized 0 -> 1 value
  const scrollMappedProgress = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  // Keep scroll sync active when not dragging
  const isDraggingRef = useRef(false);

  useEffect(() => {
    return scrollMappedProgress.onChange((latest) => {
      if (!isDraggingRef.current) {
        progressValue.set(latest);
      }
    });
  }, [scrollMappedProgress, progressValue]);

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
          Scroll down or drag the zipper handle up and down manually to any position along the track.
        </p>
      </div>

      {/* Laptop Container */}
      <div className={styles.laptopFrame}>
        <motion.div 
          className={styles.screenContent} 
          ref={containerRef}
          style={{ '--progress': progressValue } as any}
        >
          
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

          {/* LEFT CURTAIN FLAP */}
          <div className={`${styles.jacketFlap} ${styles.leftFlap}`}>
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
          </div>

          {/* RIGHT CURTAIN FLAP */}
          <div className={`${styles.jacketFlap} ${styles.rightFlap}`}>
            <div className={styles.doodleColumn}>
              <img src="/old-way-doo.png" alt="Old Way Illustration" className={styles.doodleImage} />
            </div>
          </div>

          {/* CENTER METAL ZIPPER TRACK */}
          <div className={styles.centerZipTrack} />

          {/* INTERACTIVE ZIPPER PULL HANDLE */}
          <motion.div 
            className={styles.zipperPull}
            style={{ x: "-50%" }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 400 }}
            dragElastic={0}
            onDragStart={() => {
              isDraggingRef.current = true;
            }}
            onDrag={(_, info) => {
              const currentVal = progressValue.get();
              const deltaProgress = info.delta.y / 400;
              const nextVal = Math.max(0, Math.min(1, currentVal + deltaProgress));
              progressValue.set(nextVal);
            }}
            onDragEnd={() => {
              isDraggingRef.current = false;
            }}
          >
            <span className={styles.pullTabHandle} />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}