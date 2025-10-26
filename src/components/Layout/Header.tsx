import { FC, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import styles from './Header.module.scss';
import ThemeSwitch from '../ThemeSwitch';
import { ArrowRight } from '@phosphor-icons/react';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const logoRef = useRef<HTMLAnchorElement>(null);

  // Animation for "GIFTED TOURS" text
  useEffect(() => {
    if (logoRef.current && logoRef.current.children.length === 0) {
      const text = "GIFTED TOURS";
      logoRef.current.innerHTML = text.split('').map(char => `<span class="${styles.letter}">${char === ' ' ? '&nbsp;' : char}</span>`).join('');
      gsap.fromTo(`.${styles.letter}`, 
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, stagger: 0.05, duration: 0.8, ease: 'power3.out', delay: 0.5 }
      );
    }
  }, []);

  // Logic for active link highlighting and scrolled state
  useEffect(() => {
    // --- FIX: Tell TypeScript these are specifically HTMLElements to access offsetTop ---
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      let current = '';
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 150) {
          current = section.getAttribute('id') || '';
        }
      });
      setActiveLink(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent page scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
  };

  const navigationLinks = [ { href: '#about', label: 'About' }, { href: '#services', label: 'Services' }, { href: '#fleet', label: 'Our Fleet' }, { href: '#gallery', label: 'Gallery' }, ];

  return (
    <motion.header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }} animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className={styles.container}>
        <Link href="/" ref={logoRef} className={styles.logoText} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}></Link>
        
        <div className={styles.desktopNavWrapper}>
          <nav className={styles.navDesktop}>
            {navigationLinks.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => handleLinkClick(link.href)} 
                className={`${styles.navLink} ${activeLink === link.href.substring(1) ? styles.active : ''}`}>
                {link.label}
              </Link>
            ))}
            <ThemeSwitch />
          </nav>
          <div className={styles.actions}>
            <Link href="#booking" onClick={() => handleLinkClick('#booking')} className={styles.ctaButton}>
              <span>Book a Tour</span>
              <ArrowRight size={20} weight="bold" />
            </Link>
          </div>
        </div>

        <div className={styles.mobileActions}>
          <ThemeSwitch />
          <button className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>

        <div className={`${styles.navMobile} ${isMenuOpen ? styles.active : ''}`}>
           {navigationLinks.map((link) => (
            <Link key={link.label} href={link.href} onClick={() => handleLinkClick(link.href)} className={styles.navLinkMobile}>
              {link.label}
            </Link>
          ))}
          <Link href="#contact" onClick={() => handleLinkClick('#contact')} className={styles.navLinkMobile}>Contact Us</Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;