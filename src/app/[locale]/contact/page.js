'use client';

import { useRef, useCallback } from 'react';
import { MapPin } from 'lucide-react';
import styles from './page.module.css';
import en from '../../../../messages/en.json';
import ar from '../../../../messages/ar.json';

export default function Contact({ params: { locale } }) {
  const t = locale === 'ar' ? ar : en;
  const c = t.contact;
  const isAr = locale === 'ar';

  const offices = isAr
    ? [
        {
          name: 'مكتب المحرق',
          lines: ['شقة 11، مبنى 1649', 'طريق 512، مجمع 205', 'المحرق', 'مملكة البحرين'],
          mapLink: 'https://www.google.com/maps/place/ProEx+for+Consulting+and+Business+Development+%D8%A8%D8%B1%D9%88%D8%A5%D9%83%D8%B3+%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D9%88%D8%AA%D8%B7%D9%88%D9%8A%D8%B1+%D8%A7%D9%84%D8%A7%D8%B9%D9%85%D8%A7%D9%84%E2%80%AD/@26.2619781,50.6139213,20.39z/data=!4m10!1m2!2m1!1sFlat+11,+Building+1649,+Road+512,+Block+205,+Muharraq,+Kingdom+of+Bahrain!3m6!1s0x3e49a7f4669f068f:0xfcd301862635a838!8m2!3d26.2620262!4d50.6142706!15sCklGbGF0IDExLCBCdWlsZGluZyAxNjQ5LCBSb2FkIDUxMiwgQmxvY2sgMjA1LCBNdWhhcnJhcSwgS2luZ2RvbSBvZiBCYWhyYWlukgEaaHVtYW5fcmVzc291cmNlX2NvbnN1bHRpbmfgAQA!16s%2Fg%2F11x73_d5h0?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D',
        }
      ]
    : [
        {
          name: 'MUHARRAQ OFFICE',
          lines: ['Flat 11, Building 1649', 'Road 512, Block 205', 'Muharraq', 'Kingdom of Bahrain'],
          mapLink: 'https://www.google.com/maps/place/ProEx+for+Consulting+and+Business+Development+%D8%A8%D8%B1%D9%88%D8%A5%D9%83%D8%B3+%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA+%D9%88%D8%AA%D8%B7%D9%88%D9%8A%D8%B1+%D8%A7%D9%84%D8%A7%D8%B9%D9%85%D8%A7%D9%84%E2%80%AD/@26.2619781,50.6139213,20.39z/data=!4m10!1m2!2m1!1sFlat+11,+Building+1649,+Road+512,+Block+205,+Muharraq,+Kingdom+of+Bahrain!3m6!1s0x3e49a7f4669f068f:0xfcd301862635a838!8m2!3d26.2620262!4d50.6142706!15sCklGbGF0IDExLCBCdWlsZGluZyAxNjQ5LCBSb2FkIDUxMiwgQmxvY2sgMjA1LCBNdWhhcnJhcSwgS2luZ2RvbSBvZiBCYWhyYWlukgEaaHVtYW5fcmVzc291cmNlX2NvbnN1bHRpbmfgAQA!16s%2Fg%2F11x73_d5h0?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D',
        }
      ];
  const sectionRef = useRef(null);
  const imageRef   = useRef(null);
  const spotRef    = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    // Parallax: shift image opposite to cursor
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    if (imageRef.current) {
      imageRef.current.style.transform = `translate(${x * -18}px, ${y * -12}px) scale(1.06)`;
    }
    // Golden spotlight follows cursor
    if (spotRef.current) {
      const px = ((e.clientX - rect.left) / rect.width)  * 100;
      const py = ((e.clientY - rect.top)  / rect.height) * 100;
      spotRef.current.style.background =
        `radial-gradient(circle 220px at ${px}% ${py}%, rgba(197,160,89,0.18) 0%, transparent 70%)`;
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (imageRef.current) imageRef.current.style.transform = '';
    if (spotRef.current)  spotRef.current.style.background  = 'transparent';
  }, []);


  return (
    <div>
      {/* Map + Office Locations */}
      <div
        className={styles.mapSection}
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <a href={offices[0].mapLink} target="_blank" rel="noopener noreferrer" className={styles.mapLinkArea}>
          <div className={styles.mapImage} ref={imageRef} />
          <div className={styles.mapOverlay} />
          <div ref={spotRef} className={styles.mapSpotlight} />
          <div className={styles.mapBg}>
            <div className={styles.mapMarker}>
              <MapPin size={28} />
            </div>
          </div>
        </a>
        <div className={`container ${styles.mapInner}`}>
          <div /> {/* Emptyspacer for map */}
          <div className={styles.officeTextList}>
            {offices.map((office, i) => (
              <div key={i} className={styles.officeTextItem}>
                <h3 className={styles.officeNameText}>
                  <a href={office.mapLink} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    {office.name}
                  </a>
                </h3>
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
    </div>
  );
}
