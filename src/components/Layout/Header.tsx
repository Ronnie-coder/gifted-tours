// src/components/Layout/Header.tsx
import { FC, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import styles from './Header.module.scss';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const headerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Split text animation
    if (titleRef.current) {
      const text = "Gifted Tours";
      titleRef.current.innerHTML = text.split('').map((char, i) => 
        `<span class="${styles.letter}">${char === ' ' ? '&nbsp;' : char}</span>`
      ).join('');

      const letters = titleRef.current.querySelectorAll(`.${styles.letter}`);
      
      gsap.fromTo(
        letters,
        {
          opacity: 0,
          y: 20,
          rotateX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "back.out",
          repeat: -1,
          repeatDelay: 3,
          yoyo: true
        }
      );
    }

    return () => {
      gsap.killTweensOf(`.${styles.letter}`);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);

      // Update active section
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section: Element) => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop - 100;
        const sectionHeight = element.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(`#${element.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();

    if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  // Your original navigation links
  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#fleet', label: 'Our Fleet' },
    { href: '#contact', label: 'Contact Us' }
  ];

  return (
    <motion.header
      ref={headerRef}
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <motion.div
            className={styles.logoContainer}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" onClick={(e) => handleLinkClick(e, '/')}>
              <Image 
                src="/assets/images/logo.jpg"
                alt="Gifted Tours Logo"
                width={180}
                height={60}
                className={styles.logo}
                priority
              />
            </Link>
          </motion.div>
          
          <div 
            ref={titleRef}
            className={styles.companyTitle}
            aria-label="Gifted Tours"
          />
        </div>

        <motion.button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </motion.button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          {navigationLinks.map((link) => (
            <motion.div
              key={link.label}
              className={styles.navItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`${styles.navLink} ${activeLink === link.href ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;