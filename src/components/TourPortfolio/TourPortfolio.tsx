import { FC, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { Camera } from "@phosphor-icons/react";
import Gallery from '../Gallery/Gallery';
import { galleryImages } from '@/data/gallery';
import styles from './TourPortfolio.module.scss';

const TourPortfolio: FC = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const scrollToContact = useCallback(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  return (
    <>
      <section id="tours" className={styles.tourPortfolio}>
        <div className={styles.container}>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Tour Portfolio
          </motion.h2>

          <div className={styles.tourGrid}>
            <motion.div 
              className={styles.tourCard}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3>Best of the Cape Full Day Tour</h3>
              <p>
                Explore the majestic scenery of the Cape Peninsula, and Stellenbosch Wine Lands in this full-day tour. 
                We take you around the entire Cape peninsula and show you the wonders of Cape Town - from the pristine 
                beaches of Camps Bay and Clifton, amazing views from Chapman&apos;s Peak Drive, to the spectacular sight of 
                Cape Point, along with visiting a penguin colony and small coastal communities on this most enjoyable route. 
                We then head across False Bay to the wine tasting capital of South Africa - Stellenbosch, orientation is 
                provided on the area as well as a Cellar Tour and the opportunity to taste locally produced Cheese and Wine.
              </p>
              <button 
                onClick={scrollToContact}
                className={styles.bookButton}
              >
                Book This Tour
              </button>
            </motion.div>

            <motion.div 
              className={styles.tourCard}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3>Amazing Cape Tours</h3>
              <p>
                Best of Cape Town Tour, includes the iconic and not to be missed Table Mountain, City tour, 
                Constantia Wine Tasting, and a visit to the beautiful gardens of Cape Town.
              </p>
              <button 
                onClick={scrollToContact}
                className={styles.bookButton}
              >
                Book This Tour
              </button>
            </motion.div>
          </div>

          <motion.div 
            className={styles.portfolioHighlight}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3>Experience Our Tours Through Client Memories</h3>
            <p>Browse through our gallery of happy clients exploring the beauty of Cape Town</p>
            
            <motion.button
              className={styles.galleryButton}
              onClick={() => setIsGalleryOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Camera size={24} weight="duotone" />
              View Tour Gallery
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      <Gallery 
        images={galleryImages}
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />
    </>
  );
};

export default TourPortfolio;