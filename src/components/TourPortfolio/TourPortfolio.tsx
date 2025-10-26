import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { Camera } from "@phosphor-icons/react";
import Gallery from '../Gallery/Gallery';
import { galleryImages } from '@/data/gallery';
import styles from './TourPortfolio.module.scss';

const TourPortfolio: FC = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('booking'); // Link to the booking form for better conversion
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section id="tours" className={styles.tourPortfolio}>
        <div className={styles.container}>
          <motion.div
            className={styles.titleWrapper}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Our Signature Tours</h2>
            <p className={styles.subtitle}>Discover the best of the Cape with our expertly curated tour packages.</p>
          </motion.div>

          <div className={styles.tourGrid}>
            <motion.div 
              className={styles.tourCard}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3>Best of the Cape: Full Day Tour</h3>
              <p>
                A comprehensive journey through the Cape Peninsula and Stellenbosch Winelands. From the pristine beaches of Camps Bay and the views from Chapman's Peak Drive to the spectacular Cape Point, a penguin colony, and a premium wine tasting experience.
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
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <h3>Amazing Cape Town: Half Day Tour</h3>
              <p>
                Experience the essential highlights of Cape Town, including a trip up the iconic Table Mountain, a vibrant city tour, an elegant wine tasting in Constantia, and a peaceful visit to the beautiful Kirstenbosch Botanical Gardens.
              </p>
              <button 
                onClick={scrollToContact}
                className={styles.bookButton}
              >
                Book This Tour
              </button>
            </motion.div>
          </div>
          
          {/* --- FIX: Added id="gallery" to make this the scroll target for the nav link --- */}
          <motion.div 
            id="gallery" 
            className={styles.galleryHighlight}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3>Memories in the Making</h3>
            <p>See the joy and wonder of Cape Town through the eyes of our happy guests.</p>
            
            <button
              className={styles.galleryButton}
              onClick={() => setIsGalleryOpen(true)}
            >
              <Camera size={24} weight="duotone" />
              View Tour Gallery
            </button>
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