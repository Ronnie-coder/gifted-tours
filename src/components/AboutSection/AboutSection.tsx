// src/components/AboutSection/AboutSection.tsx
import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react'; // A nice icon for the promise section
import styles from './AboutSection.module.scss';

const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const AboutSection: FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.titleWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2>Welcome to Gifted Tours</h2>
          <p className={styles.subtitle}>Crafting Unforgettable Cape Town Experiences Since 2020</p>
        </motion.div>
        
        <div className={styles.contentWrapper}>
          <motion.div 
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src="/assets/images/logo.jpg" //Using the more appropriate portrait image
              alt="Mr. Gift - Founder of Gifted Tours"
              width={450}
              height={550}
              className={styles.founderImage}
            />
          </motion.div>
          
          <motion.div 
            className={styles.textContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <p>
              Gifted Tours & Charter Services was founded by Mr. Gift, a passionate tour enthusiast who has dedicated himself to sharing the vibrant beauty of Cape Town. We handle all the details—hotels, tickets, and logistics—so you can immerse yourself in the experience.
            </p>
            <p>
              From stunning cityscapes to the breathtaking shores of the Cape, we specialize in creating personalized and memorable journeys. Though we operate on an intimate scale, we guarantee five-star entertainment and professional service for every guest, from solo holiday lovers to corporate teams.
            </p>
          </motion.div>
        </div>

        {/* --- REFINED HIGHLIGHT SECTION --- */}
        <motion.div 
          className={styles.promiseSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className={styles.promiseIcon}>
            <ShieldCheck size={40} />
          </div>
          <div className={styles.promiseText}>
            <h3>Our Promise To You</h3>
            <p>
              To not just show you the sights, but to connect you with the heart and soul of Cape Town, ensuring your adventure is both seamless and extraordinary.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;