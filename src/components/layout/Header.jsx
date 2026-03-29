"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header({ locale, nav }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const toggleAboutDropdown = (e) => {
    e.preventDefault();
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAboutDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const switchLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
  };

  // Helper: check if a link is active
  const isActive = (href) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

  const links = [
    { href: `/${locale}`,          label: nav.home },
    { 
      href: `/${locale}/about`,    
      label: nav.about,
      dropdown: [
        { href: `/${locale}/who-we-are`, label: nav.whoWeAre },
        { href: `/${locale}/leadership-team`, label: nav.leadershipTeam },
        { href: `/${locale}/our-clients`, label: nav.ourClients },
      ]
    },
    { href: `/${locale}/services`, label: nav.services },
    { href: `/${locale}/our-work`,  label: nav.ourWork },
    { href: `/${locale}/media`,    label: nav.media },
    { href: `/${locale}/careers`,  label: nav.careers },
    { href: `/${locale}/contact`,  label: nav.contact },
  ];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        {/* Logo */}
        <Link href={`/${locale}`} className={styles.logo}>
          <Image src="/logo.png" alt="ProEx Logo" width={80} height={80} className={styles.logoImg} priority />
        </Link>

        {/* Desktop Nav */}
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {links.map((link) => (
              <li 
                key={link.href} 
                className={`${link.dropdown ? styles.hasDropdown : ''} ${isAboutDropdownOpen && link.dropdown ? styles.dropdownActive : ''}`}
                ref={link.dropdown ? dropdownRef : null}
              >
                {link.dropdown ? (
                  <div className={styles.dropdownWrapper}>
                    <div 
                      className={`${styles.dropdownTrigger} ${isAboutDropdownOpen ? styles.open : ''}`}
                      onClick={toggleAboutDropdown}
                    >
                      <span className={isActive(link.href) ? styles.activeLink : ''}>
                        {link.label}
                      </span>
                      <span className={styles.dropdownArrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                      </span>
                    </div>
                    <ul className={`${styles.dropdownMenu} ${isAboutDropdownOpen ? styles.dropdownVisible : ''}`}>
                      {link.dropdown.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsAboutDropdownOpen(false);
                            }}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={isActive(link.href) ? styles.activeLink : ''}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}

            {/* Language switcher */}
            <li>
              <button className={styles.langBtn} aria-label="Switch Language" onClick={switchLanguage}>
                {nav.langText}
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
