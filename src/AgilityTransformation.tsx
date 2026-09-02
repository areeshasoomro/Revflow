import { motion } from 'framer-motion';
import styles from './AgilityTransformation.module.css';

export default function AgilityTransformation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section className={styles.agilitySection}>
      {/* Header Container */}
      <div className={styles.headerContainer}>
        <h2 className={styles.headline}>
          <span className={styles.darkText}>Ditch the </span>
          <span className={styles.accentText}>Bloat.</span>
          <span className={styles.darkText}> Scale with </span>
          <span className={styles.accentText}>Agility.</span>
        </h2>
        <p className={styles.subtext}>
          Traditional ERPs lock you into expensive, rigid bundles.<br />
          RevFlow gives you a lean foundation with the freedom to pay only for what you use.
        </p>
      </div>

      {/* Grid Container */}
      <motion.div 
        className={styles.bentoGrid}
        variants={containerVariants as any}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Column: Stacked Problem & Solution Cards */}
        <div className={styles.leftColumn}>
          {/* Problem Card */}
          <motion.div className={styles.bentoCard} variants={itemVariants as any}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Problem</h3>
              <p className={styles.cardDescription}>
                Stop paying for unused modules, hidden fees, and forced upgrades.
              </p>
            </div>
            <div className={styles.cardImageWrapper}>
              <img src="/problem.png" alt="Problem Illustration" className={styles.cardImage} />
            </div>
          </motion.div>

          {/* Solution Card */}
          <motion.div className={styles.bentoCard} variants={itemVariants as any}>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>Solution</h3>
              <p className={styles.cardDescription}>
                Start lean. Subscribe only to the core modules you need on day one.
              </p>
            </div>
            <div className={styles.cardImageWrapper}>
              <img src="/solution.png" alt="Solution Illustration" className={styles.cardImage} />
            </div>
          </motion.div>
        </div>

        {/* Right Column: Tall Results Card */}
        <motion.div 
          className={`${styles.bentoCard} ${styles.resultsCard}`} 
          variants={itemVariants as any}
        >
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Results</h3>
            <p className={styles.resultsDescription}>
              Connect core modules with add-ons. Scale seamlessly with pay-per-use pricing, automated tax compliance, and zero overhead.
            </p>
          </div>
          <div className={styles.resultsImageWrapper}>
            <img src="/result.png" alt="Results Illustration" className={styles.resultsImage} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}