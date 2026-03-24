'use client';

import Link from 'next/link';
import { MapPin } from 'lucide-react';
import ScrollReveal from '../../../components/ui/ScrollReveal';
import styles from './page.module.css';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';

export default function Contact({ params: { locale } }) {
  const t = locale === 'ar' ? ar : en;
  const c = t.contact;
  const h = t.home;
  const isAr = locale === 'ar';

  const offices = isAr
    ? [
        {
          name: 'مكتب جدة الرئيسي',
          lines: ['طريق الملك عبدالعزيز 2132 - حي الزهراء', '23434 جدة', 'المملكة العربية السعودية'],
        },
        {
          name: 'مكتب الرياض',
          lines: ['418 طريق عثمان بن عفان، حي التعاون', 'الرياض، 12428', 'المملكة العربية السعودية'],
        },
      ]
    : [
        {
          name: 'JEDDAH HQ OFFICE',
          lines: ['2132 King Abdulaziz Road - Al Zahra District', '23434 Jeddah', 'Saudi Arabia'],
        },
        {
          name: 'RIYADH OFFICE',
          lines: ['418 Othman bin Affan Rd, Al Taawun District', 'Riyadh, 12428', 'Saudi Arabia'],
        },
      ];

  return (
    <div>
      {/* Map + Office Locations */}
      <div className={styles.mapSection}>
        <div className={styles.mapOverlay} />
        {/* Map markers on the background image */}
        <div className={styles.mapBg}>
          <div className={styles.mapMarker} style={{ top: '48%', left: '28%' }}>
            <MapPin size={28} />
          </div>
          <div className={styles.mapMarker} style={{ top: '42%', left: '44%' }}>
            <MapPin size={28} />
          </div>
        </div>

        <div className={`container ${styles.mapInner}`}>
          <div /> {/* Emptyspacer for map */}
          <div className={styles.officeTextList}>
            {offices.map((office, i) => (
              <div key={i} className={styles.officeTextItem}>
                <h3 className={styles.officeNameText}>{office.name}</h3>
                {office.lines.map((line, j) => (
                  <p key={j} className={styles.officeLineText}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className={styles.formSection}>
        <div className="container">
          <h2 className={styles.formTitle}>{c.formTitle}</h2>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  id="name"
                  placeholder={c.nameLabel}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  id="email"
                  placeholder={isAr ? 'البريد الإلكتروني للعمل' : 'Business Email'}
                  className={styles.input}
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  id="company"
                  placeholder={c.companyLabel}
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  id="title"
                  placeholder={isAr ? 'المسمى الوظيفي' : 'Title'}
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <input
                type="text"
                id="subject"
                placeholder={isAr ? 'الموضوع' : 'Subject'}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <textarea
                id="message"
                rows="5"
                placeholder={c.messageLabel}
                className={styles.input}
                required
              ></textarea>
            </div>

            <div className={styles.submitRow}>
              <button type="submit" className={styles.submitBtn}>
                {isAr ? 'إرسال' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.ctaOverlay} />
        <div className="container">
          <ScrollReveal animation="fadeUp" threshold={0.2}>
            <div className={styles.ctaInner}>
              <div className={styles.ctaGoldLine} />
              <h2 className={styles.ctaTitle}>{h.ctaTitle}</h2>
              <p className={styles.ctaText}>{h.ctaText}</p>
              <div className={styles.ctaActions}>
                <Link href={`/${locale}/contact`} className={styles.btnGold}>{h.ctaBtn1}</Link>
                <Link href={`/${locale}/about`}   className={styles.btnCtaOutline}>{h.ctaBtn2}</Link>
                <Link href={`/${locale}/media`}   className={styles.btnCtaOutline}>{h.ctaBtn3}</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
