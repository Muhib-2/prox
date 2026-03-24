"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import styles from './team.module.css';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={styles.expertiseCheck}>
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

export default function TeamDetailModal({ member, onClose }) {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!member) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className={styles.modalOverlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className={styles.modalContent}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()} // prevent overlay click from closing
        >
          <button className={styles.modalCloseBtn} onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>

          <div className={styles.modalHeader}>
            <div className={styles.modalImgWrap}>
              <img src={member.image} alt={member.name} className={styles.modalImg} />
            </div>
            <div className={styles.modalMeta}>
              <h2 className={styles.modalName}>{member.name}</h2>
              <p className={styles.modalRole}>{member.title}</p>
              <p className={styles.modalSubtitle}>{member.subtitle}</p>
            </div>
          </div>

          <div className={styles.modalBody}>
            <p className={styles.modalBio}>{member.bio}</p>

            <div className={styles.modalGrid}>
              
              <div className={styles.modalCol}>
                <h4 className={styles.modalColTitle}>Key Expertise</h4>
                <ul className={styles.expertiseList}>
                  {member.expertise.map((e, j) => (
                    <li key={j} className={styles.expertiseItem}>
                      <CheckIcon />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.modalCol}>
                <h4 className={styles.modalColTitle}>Selected Experience</h4>
                <div className={styles.expList}>
                  {member.experience.map((ex, j) => (
                    <div key={j} className={styles.expItem}>
                      <div className={styles.expDot} />
                      <div>
                        <p className={styles.expRole}>{ex.role}</p>
                        <p className={styles.expDesc}>{ex.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
