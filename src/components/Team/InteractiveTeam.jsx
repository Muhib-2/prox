"use client";

import React, { useState, useRef } from 'react';
import styles from './InteractiveTeam.module.css';

export default function InteractiveTeam({ leaders, isAr }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  
  const activeLeader = leaders[activeIndex];
  
  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % leaders.length;
    setActiveIndex(nextIndex);
    trackRef.current?.children[nextIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + leaders.length) % leaders.length;
    setActiveIndex(prevIndex);
    trackRef.current?.children[prevIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  if (!leaders || leaders.length === 0) return null;

  return (
    <div className={styles.container}>
      {/* Hero Display */}
      <div className={styles.hero}>
        <div className={styles.leftCol}>
          <h2 className={styles.sectionTitle}>
            {isAr ? 'بروإكس' : 'ProEx'}
            <span>{isAr ? 'فريق القيادة' : 'Leadership Team'}</span>
          </h2>
          <div className={styles.goldLine} />
          
          <h3 className={styles.leaderName}>{activeLeader.name}</h3>
          <h4 className={styles.leaderTitle}>{activeLeader.title}</h4>
          
          <p className={styles.leaderBio}>{activeLeader.bio}</p>
          
          {/* LinkedIn Button placeholder */}
          <a href="#" className={styles.linkedinBtn} aria-label="LinkedIn Profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>
        
        <div className={styles.rightCol}>
          <div className={styles.arcContainer}>
            <div className={styles.proexOuterRing} />
            <div className={styles.proexGlow} />
          </div>
          
          <div className={styles.photoWrapper}>
            <img 
              key={activeLeader.name} // Force re-render for animation
              src={activeLeader.image} 
              alt={activeLeader.name} 
            />
          </div>
        </div>
      </div>

      {/* Thumbnails Carousel */}
      <div className={styles.carouselSection}>
        <button 
          className={styles.arrow} 
          onClick={handlePrev}
          aria-label="Previous member"
        >
          &#10094;
        </button>
        
        <div className={styles.track} ref={trackRef}>
          {leaders.map((leader, index) => {
            return (
              <div 
                key={index} 
                className={`${styles.thumbItem} ${index === activeIndex ? styles.active : ''}`}
                onClick={() => {
                  setActiveIndex(index);
                  trackRef.current?.children[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }}
              >
                <div className={styles.thumbImageContainer}>
                  <img src={leader.image} alt={leader.name} />
                </div>
                <div className={styles.thumbName}>
                  {leader.name}
                </div>
              </div>
            );
          })}
        </div>
        
        <button 
          className={styles.arrow} 
          onClick={handleNext}
          aria-label="Next member"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
