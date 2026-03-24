"use client";

import { useState } from 'react';
import styles from '../page.module.css';

export default function JobsClient({ c }) {
  const [activeJobTab, setActiveJobTab] = useState('openings');

  return (
    <>
      <div style={{ height: '75px', background: 'var(--color-dark, #0a1f1e)' }}></div>
      <section className={`${styles.tabSection} ${styles.tabSectionAlt}`} id="tab-jobs" style={{ paddingBottom: '8rem', paddingTop: '6rem', minHeight: 'calc(100vh - 75px)' }}>
        <div className="container">
          <div className={styles.centerHeaderContainer}>
            <h2 className={styles.centerTitle}>{c.opportunitiesTitle}</h2>
            <div className={styles.centerGoldBar} />
          </div>

          <div className={styles.jobTabs}>
            <button 
              className={`${styles.jobTab} ${activeJobTab === 'openings' ? styles.jobTabActive : ''}`}
              onClick={() => setActiveJobTab('openings')}
            >
              Job Openings
            </button>
            <button 
              className={`${styles.jobTab} ${activeJobTab === 'internships' ? styles.jobTabActive : ''}`}
              onClick={() => setActiveJobTab('internships')}
            >
              Internships
            </button>
          </div>

          <div className={styles.jobFiltersContainer}>
            <div className={styles.jobFilters}>
              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>Title</label>
                <input type="text" placeholder="Title" className={styles.filterInput} />
              </div>
              <div className={styles.filterGroup}>
                <label className={styles.filterLabel}>Department</label>
                <input type="text" placeholder="Department" className={styles.filterInput} />
              </div>
              <button className={styles.filterBtn}>Filter</button>
            </div>
          </div>

          <div className={styles.jobMessages}>
            <div className={styles.noJobsMessage}>
              {activeJobTab === 'openings' 
                ? 'There are currently no jobs' 
                : 'There are currently no internship opportunities'
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
