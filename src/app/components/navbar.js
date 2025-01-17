'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import styles from '../../styles/navbar.module.css';

export default function Navbar({ onLanguageChange }) {
  const { t } = useTranslation('common'); // Use translations from 'common.json'
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open or closed
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Change language and route
  const changeLanguage = (lang) => {
    const { pathname, query } = router;
    router.push({ pathname, query }, undefined, { locale: lang });
  };

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

      <nav className={`${styles.navbar} ${isOpen ? styles.navbarOpen : ''}`}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/images/maxxgymlogo.png"
              alt={t('nav.logo_alt')}
              width={140}
              height={28.7}
            />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? (
            <div className={styles.closeButton}>&#10005;</div>
          ) : (
            <>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </>
          )}
        </div>

        {/* Navigation Links */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <li onClick={closeMenu}>
            <Link href="/">{t('nav.home')}</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/price">{t('nav.price')}</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/fitnes">{t('nav.fitness')}</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/vodene-vadbe">{t('nav.guided_workouts')}</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/osebni-trening">{t('nav.personal_training')}</Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/kontakt">{t('nav.contact')}</Link>
          </li>
        </ul>

        {/* Language Switcher */}
        <div className={styles.languageSwitcher}>
          <button onClick={() => changeLanguage('en')}>{t('nav.language.en')}</button>
          <button onClick={() => changeLanguage('sl')}>{t('nav.language.sl')}</button>
          <button onClick={() => changeLanguage('de')}>{t('nav.language.de')}</button>
          <button onClick={() => changeLanguage('it')}>{t('nav.language.it')}</button>
        </div>

        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <a
            href="https://www.facebook.com/maxxgym"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/facebookLogo.png"
              alt="Facebook"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://www.instagram.com/maxxgym.ljubljana/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/instagramLogo.png"
              alt="Instagram"
              width={32}
              height={32}
            />
          </a>
        </div>

        {/* Working Hours */}
        <div className={styles.workingHours}>
          <b>{t('nav.working_hours.weekdays')}</b>
          <b>{t('nav.working_hours.weekends')}</b>
        </div>

        {/* Phone Section */}
        <div className={styles.phoneSection}>
          <div className={styles.phoneIcon}>
            <Image src="/images/greenPhone.png" alt="Phone" width={36} height={36} />
          </div>
          <span className={styles.phoneNumber}>{t('nav.phone_number')}</span>
        </div>
      </nav>
    </>
  );
}
