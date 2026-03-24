import Link from 'next/link';
import styles from '../about/page.module.css';
import ScrollReveal from '../../../components/ui/ScrollReveal';
import VMVSplitCard from '../../../components/ui/VMVSplitCard';
import ValuesInfographic from '../../../components/ui/ValuesInfographic';

export default function VisionMissionValues({ params: { locale } }) {
  const isAr = locale === 'ar';

  return (
    <div className={styles.page}>
      {/* ── 1. HERO ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroChip}>
            {isAr ? 'رؤيتنا ورسالتنا وقيمنا' : 'Vision, Mission & Our Values'}
          </div>
          <h1 className={styles.heroTitle}>
            {isAr ? 'التوجه الاستراتيجي والمبادئ' : 'Strategic Direction &\nCore Principles'}
          </h1>
          <p className={styles.heroSubtitle}>
            {isAr
              ? 'نسترشد برؤية واضحة ومهمة ملتزمة وقيم راسخة.'
              : 'Guided by a clear vision, a committed mission, and steadfast values.'}
          </p>
        </div>
        <div className={styles.heroBar} />
      </section>

      {/* ── 2. VISION & MISSION ───────────────────────────────── */}
      <section className={styles.vmv}>
        <div className="container">
          <ScrollReveal animation="fadeUp">
            <div className={styles.centerHeader}>
              <span className={styles.chipGold}>
                {isAr ? 'توجهنا الاستراتيجي' : 'Our Strategic Direction'}
              </span>
              <h2 className={styles.sectionTitle}>
                {isAr ? 'الرؤية والرسالة' : 'Vision & Mission'}
              </h2>
              <div className={styles.goldBarCenter} />
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" threshold={0.12}>
            <VMVSplitCard />
          </ScrollReveal>
        </div>
      </section>

      {/* ── 3. OUR VALUES ─────────────────────────────────────── */}
      <section className={styles.valuesSection}>
        <div className="container">
          <ScrollReveal animation="fadeUp">
            <div className={styles.centerHeader}>
              <span className={styles.chipGold}>
                {isAr ? 'مبادئنا الأساسية' : 'Core Principles'}
              </span>
              <h2 className={styles.sectionTitle}>
                {isAr ? 'قيمنا' : 'Our Values'}
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
