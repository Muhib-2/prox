import Link from 'next/link';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import styles from './Footer.module.css';
import { getTranslations } from '../../lib/i18n';

export default function Footer({ locale }) {
  const t = getTranslations(locale);
  const f = t.footer;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerTop}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link href={`/${locale}`} className={styles.logoLink}>
            <Image src="/logo.png" alt="ProEx Logo" width={90} height={90} className={styles.logoImg} />
          </Link>
          <p className={styles.tagline}>{f.tagline}</p>
        </div>

        {/* Nav Links */}
        <nav className={styles.nav}>
          <Link href={`/${locale}/who-we-are`} className={styles.navLink}>{f.whyProex}</Link>
          <Link href={`/${locale}/services`} className={styles.navLink}>{f.services}</Link>
          <Link href={`/${locale}/contact`} className={styles.navLink}>{f.contact}</Link>
        </nav>
      </div>

      <div className={styles.divider} />

      <div className={`container ${styles.footerBottom}`}>
        <a href="https://linkedin.com" aria-label="LinkedIn" className={styles.social} target="_blank" rel="noopener noreferrer">
          <Linkedin size={22} />
        </a>
        <p className={styles.copyright}>
          {f.copyright} &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
