import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
// --- FIX: Removed unused 'MapPin' import ---
import { Facebook, Instagram, Phone, Mail } from 'lucide-react';
import { FaWhatsapp, FaTiktok } from 'react-icons/fa';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  const newPhoneNumber = '+27 76 266 2143';
  const whatsappNumber = '27810278801'; // No '+' for the wa.me link
  const email = 'info@giftedtours.co.za'; // Kept this one as primary
  // --- FIX: Removed unused 'secondaryEmail' variable ---
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <motion.div 
            className={styles.brandInfo}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
          >
            <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={styles.logo}>
              <Image src="/assets/images/logo.jpg" alt="Gifted Tours Logo" width={60} height={60} />
              <h3>Gifted Tours</h3>
            </Link>
            <p>Crafting unforgettable Cape Town experiences with professional service and lasting memories.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#fleet">Our Fleet</Link></li>
              <li><Link href="#booking">Book a Tour</Link></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4>Contact & Socials</h4>
            <ul className={styles.contactList}>
              <li><Mail size={18} /><a href={`mailto:${email}`}>{email}</a></li>
              <li><Phone size={18} /><a href={`tel:${newPhoneNumber.replace(/\s/g, '')}`}>{newPhoneNumber}</a></li>
              <li><FaWhatsapp size={18} /><a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">WhatsApp Us</a></li>
            </ul>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/share/1AM7jLXzjd/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={22} /></a>
              <a href="https://www.instagram.com/giftedtours?igsh=MXMyMng1MmwxcHUweg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={22} /></a>
              <a href="https://www.tiktok.com/@giftedtours?_t=ZS-90sJklVyyrH&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok size={22} /></a>
            </div>
          </motion.div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>
            © {currentYear} Gifted Tours | Designed by <a href="https://www.coderon.co.za/" target="_blank" rel="noopener noreferrer">Coderon</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;