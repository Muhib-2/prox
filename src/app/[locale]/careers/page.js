import styles from './page.module.css';
import { getTranslations } from '../../../lib/i18n';
import CareersClient from './CareersClient';
import TabBar from './TabBar';

export default function Careers({ params: { locale } }) {
  const t = getTranslations(locale);
  const c = t.careers;
  const isAr = locale === 'ar';

  return (
    <div className={styles.page}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className={styles.hero} id="careers-hero">
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <h1 className={styles.heroTitle}>{c.heroTitle}</h1>
          <p className={styles.heroSubtitle}>
            {c.heroSub}{' '}
            <span className={styles.heroHighlight}>
              {c.heroHighlight1}
            </span>{' '}
            {c.heroAnd}{' '}
            <span className={styles.heroHighlight}>
              {c.heroHighlight2}
            </span>
          </p>
          <a href="#tab-life" className={styles.scrollDown}>
            <span className={styles.scrollDownIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="8 12 12 16 16 12"/><line x1="12" y1="8" x2="12" y2="16"/>
              </svg>
            </span>
            <span>{c.scrollDown}</span>
          </a>
        </div>
        <div className={styles.heroBar} />
      </section>

      {/* ── Tab Bar (sticky under header) ────────────────────── */}
      <TabBar c={c} />

      {/* ── Tab Sections (Client) ────────────────────────────── */}
      <CareersClient c={c} />

    </div>
  );
}
