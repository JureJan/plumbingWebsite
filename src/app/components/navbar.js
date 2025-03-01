"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import styles from "../../styles/navbar.module.css";

export default function Navbar() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (lang) => {
    if (router.locale !== lang) {
      const { pathname, query, asPath } = router;
      router.push({ pathname, query }, asPath, { locale: lang });
      closeMenu();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/images/ellasLogo.png"
              alt="Plumbing Services Logo"
              width={120}
              height={40}
              className={styles.logoImage}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          <li><Link href="/" onClick={closeMenu}>{t("nav.home")}</Link></li>
          <li className={`${styles.dropdown} ${isDropdownOpen ? styles.open : ""}`} onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <span className={styles.dropdownToggle}>{t("nav.services")} ▼</span>
            <ul className={styles.dropdownMenu}>
              <li><Link href="/services/vodovodniServis" onClick={closeMenu}>{t("services.plumbing")}</Link></li>
              <li><Link href="/services/ciscenjeOdtokov" onClick={closeMenu}>{t("services.cleaning")}</Link></li>
              <li><Link href="/services/nujniVodovodar" onClick={closeMenu}>{t("services.emergency")}</Link></li>
              <li><Link href="/services/menjavaCevi" onClick={closeMenu}>{t("services.pipeReplacement")}</Link></li>
              <li><Link href="/services/popraviloVodovodnihCevi" onClick={closeMenu}>{t("services.pipeRepair")}</Link></li>
            </ul>
          </li>
          <li><Link href="/about" onClick={closeMenu}>{t("nav.about")}</Link></li>  
          <li><Link href="/contact" onClick={closeMenu}>{t("nav.contact")}</Link></li>

          {/* Desktop Language Switcher */}
          <select className={styles.languageSwitcher} value={router.locale} onChange={(e) => changeLanguage(e.target.value)}>
            <option value="sl">Slovenščina</option>
            <option value="en">English</option>
            <option value="de">Deutsch</option>
          </select>
        </ul>

        {/* Hamburger Button (Mobile) */}
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

        {/* Mobile Menu */}
        <ul className={`${styles.navLinksMobile} ${isOpen ? styles.open : ""}`}>
          <li onClick={closeMenu}><Link href="/">{t("nav.home")}</Link></li>
          <li className={styles.dropdownMobile}>
            <span className={styles.dropdownToggleMobile} onClick={toggleDropdown}>{t("nav.services")} ▼</span>
            {isDropdownOpen && (
              <ul className={styles.dropdownMenuMobile}>
                <li onClick={closeMenu}><Link href="/services/vodovodniServis">{t("services.plumbing")}</Link></li>
                <li onClick={closeMenu}><Link href="/services/ciscenjeOdtokov">{t("services.cleaning")}</Link></li>
                <li onClick={closeMenu}><Link href="/services/nujniVodovodar">{t("services.emergency")}</Link></li>
                <li onClick={closeMenu}><Link href="/services/menjavaCevi">{t("services.pipeReplacement")}</Link></li>
                <li onClick={closeMenu}><Link href="/services/popraviloVodovodnihCevi">{t("services.pipeRepair")}</Link></li>
              </ul>
            )}
          </li>
          <li onClick={closeMenu}><Link href="/about">{t("nav.about")}</Link></li>
          <li onClick={closeMenu}><Link href="/contact">{t("nav.contact")}</Link></li>

          {/* Mobile Language Switcher */}
          <select className={styles.mobileLanguageSwitcher} value={router.locale} onChange={(e) => changeLanguage(e.target.value)}>
            <option value="sl">Slovenščina</option>
            <option value="en">English</option>
            <option value="de">Deutsch</option>
          </select>
        </ul>
      </nav>
    </>
  );
}
