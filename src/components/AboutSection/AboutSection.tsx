// src/components/AboutSection/AboutSection.tsx
import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './AboutSection.module.scss';

const fadeInUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const AboutSection: FC = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          About Gifted Tours
        </motion.h2>
        
        <motion.div 
          className={styles.contentWrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className={styles.imageContainer}>
            <Image
              src="/assets/images/logo.jpg" // Make sure to add Gift's image here
              alt="Mr Gift - Founder of Gifted Tours"
              width={400}
              height={500}
              className={styles.founderImage}
              priority
            />
          </div>
          
          <div className={styles.mainContent}>
            <p>
              Say goodbye to the hassle of searching hotels, tickets, and logistics explore our Cape Town Open Tour packages below. 
              Enjoy a city tour of Cape Town and seize the opportunity to view beach shores of Cape Town along. 
              We operate at a small scale but guarantee your entertainment.
            </p>

            <p>
              Gifted Tours & Charter Services was founded by Mr Gift in 2020, a tour enthusiast in Cape Town, 
              who has made it to acquire all necessary tools to make your tours fun and memorable. 
              Over the years, we have established a consistent flow of guests, including sports teams, 
              holiday lovers, as well as corporate and private sector entities requiring conferencing facilities.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className={styles.highlight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3>Are you looking to extend your adventure?</h3>
          <p>
            Our focus is on offering the best tours and activities in the Cape region, 
            as well as to introduce you to the beauty of Cape Town Natural Features.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;