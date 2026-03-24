import Link from 'next/link';
import styles from '../about/page.module.css';
import ScrollReveal from '../../../components/ui/ScrollReveal';

export default function WhoWeAre({ params: { locale } }) {
  const isAr = locale === 'ar';

  return (
    <div className={styles.page}>
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroChip}>
            {isAr ? 'من نحن' : 'Who We Are'}
          </div>
          <h1 className={styles.heroTitle}>
            {isAr ? 'شركاء استراتيجيون للتحول المؤسسي' : 'Strategic Partners for\nInstitutional Transformation'}
          </h1>
          <p className={styles.heroSubtitle}>
            {isAr
              ? 'نجمع بين التحليل الدقيق والتنفيذ العملي وأطر الأثر المستدام.'
              : 'Combining rigorous analysis, practical implementation, and sustainable impact frameworks.'}
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
                <span className={styles.chipTeal}>
                  {isAr ? 'هويتنا' : 'Our Identity'}
                </span>
                <h2 className={styles.sectionTitle}>
                  {isAr ? 'من نحن' : 'Who We Are'}
                </h2>
                <div className={styles.goldBar} />
              </div>
            </ScrollReveal>

            <div className={styles.whoRight}>
              {[
                'At ProEx for Consulting and Business Development w.L.L, we are strategic partners for institutions seeking transformation, sustainability, and institutional excellence.',
                'Founded in the Kingdom of Bahrain with a regional outlook, ProEx was established to bridge the gap between strategy and execution — ensuring that institutional objectives are translated into measurable outcomes.',
                'We combine rigorous analysis, practical implementation, and sustainable impact frameworks, enabling organizations to navigate complexity with confidence and clarity.',
                'We pride ourselves in our capacity to work across sectors — government, private, and civil society — delivering context-aware solutions that drive performance, enhance governance, and strengthen stakeholder ecosystems.',
              ].map((para, i) => (
                <ScrollReveal key={i} animation="fadeUp" delay={`${i * 0.12}s`}>
                  <p className={styles.whoPara}>{para}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
