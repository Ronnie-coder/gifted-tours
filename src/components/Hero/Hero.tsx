// src/components/Hero/Hero.tsx
import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';

const Hero: FC = () => {
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className={styles.hero} role="banner" aria-label="Explore Cape Town with Gifted Tours">
      <div className={styles.backgroundImage}>
        <Image
          src="/assets/images/table-mountain.webp" // This image exists in your public folder
          alt="A stunning view of Table Mountain in Cape Town at sunset"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      {/* The overlay is now a separate div for better control */}
      <div className={styles.overlay} />

      <div className={styles.content}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore Cape Town
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience the beauty of South Africa with our exclusive tours
        </motion.p>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;