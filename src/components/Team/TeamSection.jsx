"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TeamMember from './TeamMember';
import TeamDetailModal from './TeamDetailModal';
import styles from './team.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  }
};

export default function TeamSection({ leaders }) {
  const [selectedMember, setSelectedMember] = useState(null);

  if (!leaders || leaders.length === 0) return null;

  let arrangedMembers = [];
  let positionClasses = [];
  
  if (leaders.length === 3) {
    // Exact 3 members
    arrangedMembers = [
      leaders[1], // Left (Sumair)
      leaders[0], // Center (Dr. Khaled)
      leaders[2], // Right (Sami)
    ];
    positionClasses = [styles.pos1, styles.pos2, styles.pos3];
  } else if (leaders.length === 4) {
    // Exact 4 members array (mapped to pos0..pos3)
    arrangedMembers = [
      leaders[0],
      leaders[1],
      leaders[2],
      leaders[3],
    ];
    positionClasses = [styles.pos0, styles.pos1, styles.pos2, styles.pos3];
  } else {
    // Fallback original logic
    arrangedMembers = leaders;
    positionClasses = [styles.pos0, styles.pos1, styles.pos2, styles.pos3, styles.pos4].slice(0, leaders.length); 
  }

  return (
    <div className={styles.sectionRoot}>
      <motion.div 
        className={styles.teamContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {arrangedMembers.map((member, idx) => {
          const mappedPositionClass = positionClasses[idx] || styles.pos1;
          
          return (
            <motion.div 
              key={idx} 
              variants={itemVariants} 
              style={{ zIndex: (mappedPositionClass === styles.pos2) ? 10 : 1 }}
            >
              <TeamMember 
                member={member} 
                positionClass={mappedPositionClass}
                onClick={setSelectedMember}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Render the Modal if a member is clicked */}
      {selectedMember && (
        <TeamDetailModal 
          member={selectedMember} 
          onClose={() => setSelectedMember(null)} 
        />
      )}
    </div>
  );
}
