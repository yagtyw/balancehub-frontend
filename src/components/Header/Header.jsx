'use client'

import { useState, useRef } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const timeoutRef = useRef(null)

  // Desktop dropdown
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false)
    }, 200)
  }

  // Burger menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="\" className={styles.logo} onClick={closeMobileMenu}>
          BalanceHub
        </Link>

        {/* Burger*/}
        <button
          className={`${styles.burger} ${isMobileMenuOpen ? styles.open : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop */}
        <nav className={`${styles.nav} ${styles.desktopNav}`}>
          <div
            className={styles.dropdown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="\" className={styles.link}>Our Center</Link>
            {isDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li><Link href="/ourCenter/about" className={styles.dropdownLink}>About Us</Link></li>
                <li><Link href="/ourCenter/services" className={styles.dropdownLink}>Our Services</Link></li>
                <li><Link href="/ourCenter/to-therapists" className={styles.dropdownLink}>For Therapists</Link></li>
                <li><Link href="/contact" className={styles.dropdownLink}>Contacts</Link></li>
              </ul>
            )}
          </div>

          <Link href="/specialists" className={styles.link}>Specialists</Link>
          <Link href="/tests" className={styles.link}>Tests</Link>
          <Link href="/blog" className={styles.link}>Blog</Link>
          <Link href="/exercises" className={styles.link}>Exercises</Link>
          <Link href="/contact" className={styles.ctaButton}>Leave a Request</Link>
        </nav>
      </div>

      {/*  isMobileMenuOpen */}
      {isMobileMenuOpen && (
        <div className={styles.mobileOverlay} onClick={closeMobileMenu}>
          <nav
            className={styles.mobileMenu}
            onClick={e => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeMobileMenu} aria-label="Close menu">
              ✕
            </button>

            <div className={styles.mobileLinks}>
              <Link href="\" className={styles.mobileLink} onClick={closeMobileMenu}>
                Our Center
              </Link>
              <div className={styles.mobileSubmenu}>
                <Link href="/ourCenter/about" className={styles.mobileLink} onClick={closeMobileMenu}>
                  About Us
                </Link>
                <Link href="/ourCenter/services" className={styles.mobileLink} onClick={closeMobileMenu}>
                  Our Services
                </Link>
                <Link href="/ourCenter/to-therapists" className={styles.mobileLink} onClick={closeMobileMenu}>
                  For Therapists
                </Link>
                <Link href="/contact" className={styles.mobileLink} onClick={closeMobileMenu}>
                  Contacts
                </Link>
              </div>

              <Link href="/specialists" className={styles.mobileLink} onClick={closeMobileMenu}>
                Specialists
              </Link>
              <Link href="/tests" className={styles.mobileLink} onClick={closeMobileMenu}>
                Tests
              </Link>
              <Link href="/blog" className={styles.mobileLink} onClick={closeMobileMenu}>
                Blog
              </Link>
              <Link href="/exercises" className={styles.mobileLink} onClick={closeMobileMenu}>
                Exercises
              </Link>
              <Link href="/contact" className={styles.mobileCta} onClick={closeMobileMenu}>
                Leave a Request
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header