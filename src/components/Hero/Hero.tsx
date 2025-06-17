// src/components/Hero/Hero.tsx
import { FC, useCallback } from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';

const Hero: FC = () => {
  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  return (
    <section className={styles.hero} role="banner" aria-label="Table Mountain Cape Town Tours">
      {/* Background Image with Next.js Image optimization */}
      <div className={styles.backgroundImage}>
        <Image
          src="/assets/images/table-mountain.webp" // You'll need to save the image here
          alt="Table Mountain Cape Town"
          fill
          priority
          quality={100}
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Explore Cape Town</h1>
          <p>Experience the beauty of South Africa with our exclusive tours</p>
          <div className={styles.cta}>
            <button 
              onClick={() => scrollToSection('booking')}
              className={styles.primaryBtn}
              aria-label="Book a tour now"
            >
              Book A Tour
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={styles.secondaryBtn}
              aria-label="View our services"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;