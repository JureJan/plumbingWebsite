'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from '../../styles/navbar.module.css';
import Image from 'next/image';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open or closed
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

      <nav className={`${styles.navbar} ${isOpen ? styles.navbarOpen : ''}`}>
        
        {/* Logo and Navigation Links in Center */}
        <div className={styles.logoAndNav}>
          <div className={styles.logo}>
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/images/maxxgymlogo.png"
                alt="MaxxGym Logo"
                width={140}
                height={28.7}
              />
            </Link>
          </div>
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

       <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <li onClick={closeMenu}><Link href="/">Domov</Link></li>
          <li onClick={closeMenu}><Link href="/price">Cenik</Link></li>
          <li onClick={closeMenu}><Link href="/fitnes">Fitnes</Link></li>
          <li onClick={closeMenu}><Link href="/vodene-vadbe">Vodene Vadbe</Link></li>
          <li onClick={closeMenu}><Link href="/osebni-trening">Osebni trening</Link></li>
          <li onClick={closeMenu}><Link href="/kontakt">Kontakt</Link></li>
          </ul>

        </div>

        {/* Social Icons, Phone, and Working Hours */}
        <div className={styles.rightSection}>
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
            <b>PONEDELJEK - PETEK 6.00 - 22.30</b>
            <b>SOBOTA - NEDELJA IN PRAZNIKI 8.00 - 22.00</b>
         {/* Phone Section */}
          <div className={styles.phoneSection}>
            <div className={styles.phoneIcon}>
            <Image src="/images/greenPhone.png" alt="Phone" width={36} height={36} />
            </div>
            <span className={styles.phoneNumber}>0590 41 900</span>
          </div>
          </div>
          

        </div>
      </nav>
    </>
  );
}
