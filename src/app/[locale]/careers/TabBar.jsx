"use client";

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import styles from './page.module.css';

const NAV_H = 75; // exact height of the sticky header
const BAR_H = 54;

export default function TabBar({ c }) {
  const [activeTab, setActiveTab] = useState('life');
  const router = useRouter();
  const pathname = usePathname();

  const TABS = [
    { id: 'life',       label: c?.lifeTitle || 'Life at ProEx' },
    { id: 'engagement', label: c?.engagementTitle || 'Engagement' },
    { id: 'upskilling', label: c?.upskillTitle || 'Upskilling & Growth' },
    { id: 'jobs',       label: c?.opportunitiesTitle || 'Job Opportunities' },
  ];

  /* ── Highlight active section ────────────────────────────── */
  useEffect(() => {
    const observers = [];
    TABS.forEach(({ id }) => {
      const el = document.getElementById(`tab-${id}`);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveTab(id); },
        { rootMargin: `-${NAV_H + BAR_H + 10}px 0px -45% 0px`, threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  /* ── Scroll to section ───────────────────────────────────── */
  const scrollTo = (id) => {
    if (id === 'jobs') {
      router.push(`${pathname.replace(/\/$/, '')}/jobs`);
      return;
    }
    const el = document.getElementById(`tab-${id}`);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_H - BAR_H - 4;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className={styles.tabBar}>
      <div className="container">
        <div className={styles.tabList}>
          {TABS.map(({ id, label }, idx) => (
            <button
              key={id}
              className={[
                styles.tabBtn,
                activeTab === id ? styles.tabBtnActive : '',
                idx === TABS.length - 1 ? styles.tabBtnLast : '',
              ].join(' ')}
              onClick={() => scrollTo(id)}
            >
              {label}
              {idx < TABS.length - 1 && <span className={styles.tabUnderline} />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
