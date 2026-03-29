'use client';

import styles from './page.module.css';
import ScrollReveal from '../../../components/ui/ScrollReveal';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';

export default function OurClients({ params: { locale } }) {
  const t = locale === 'ar' ? ar : en;
  const c = t.ourWork.clients;
  const isAr = locale === 'ar';

  return (
    <div className={styles.page} dir={isAr ? 'rtl' : 'ltr'}>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <ScrollReveal animation="fadeUp">
            <span className={styles.chipGold}>{c.chip}</span>
            <h1 className={styles.heroTitle}>{c.heroTitle}</h1>
            <div className={styles.goldBarCenter} />
            <p className={styles.heroSubtitle}>{c.heroSubtitle}</p>
          </ScrollReveal>
        </div>
        <div className={styles.heroBar} />
      </section>

      {/* ── CLIENTS GRID ────────────────────────────── */}
      <section className={styles.clientsSection}>
        <div className="container">
          <div className={styles.clientsGrid}>
            {c.names?.map((name, i) => (
              <ScrollReveal key={i} animation="scaleUp" delay={`${i * 0.1}s`} threshold={0.1}>
                <div className={styles.clientCard}>
                  <div className={styles.clientLogoPlaceholder}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <h3 className={styles.clientName}>{name}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
