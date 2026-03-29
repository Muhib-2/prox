import Link from 'next/link';
import styles from '../about/page.module.css';
import ScrollReveal from '../../../components/ui/ScrollReveal';
import VMVSplitCard from '../../../components/ui/VMVSplitCard';
import ValuesInfographic from '../../../components/ui/ValuesInfographic';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';

export default function WhoWeAre({ params: { locale } }) {
  const t = locale === 'ar' ? ar : en;
  const w = t.ourWork.who;
  const isAr = locale === 'ar';

  return (
    <div className={styles.page} dir={isAr ? 'rtl' : 'ltr'}>
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>

          <h1 className={styles.heroTitle}>
            {w.heroTitle}
          </h1>
          <p className={styles.heroSubtitle}>
            {w.heroSubtitle}
          </p>
        </div>
        <div className={styles.heroBar} />
      </section>

      {/* ── 2. WHO WE ARE CONTENT ────────────────────────────── */}
      <section className={styles.who}>
        <div className="container">
          <div className={styles.whoGrid}>
            <ScrollReveal animation="fadeLeft" threshold={0.15}>
              <div className={styles.whoLeft}>

                <h2 className={styles.sectionTitle}>
                  {w.sectionTitle}
                </h2>
                <div className={styles.goldBar} />
              </div>
            </ScrollReveal>

            <div className={styles.whoRight}>
              {w.paragraphs.map((para, i) => (
                <ScrollReveal key={i} animation="fadeUp" delay={`${i * 0.12}s`}>
                  <p className={styles.whoPara}>{para}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. VISION & MISSION ───────────────────────────────── */}
      <section className={styles.vmv}>
        <div className="container">
          <ScrollReveal animation="fadeUp">
            <div className={styles.centerHeader}>

              <h2 className={styles.sectionTitle}>
                {w.visionMissionTitle}
              </h2>
              <div className={styles.goldBarCenter} />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" threshold={0.12}>
            <VMVSplitCard />
          </ScrollReveal>
        </div>
      </section>

      {/* ── 4. OUR VALUES ─────────────────────────────────────── */}
      <section className={styles.valuesSection}>
        <div className="container">
          <ScrollReveal animation="fadeUp">
            <div className={styles.centerHeader}>

              <h2 className={styles.sectionTitle}>
                {w.ourValuesTitle}
              </h2>
              <div className={styles.goldBarCenter} />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay="0.1s" threshold={0.08}>
            <ValuesInfographic />
          </ScrollReveal>
        </div>
      </section>


    </div>
  );
}
