// src/components/Layout/Footer.tsx
import { FC } from 'react';
import { motion } from 'framer-motion';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3>CONTACT US</h3>
          <div className={styles.contactList}>
            {contactInfo.map((info, index) => (
              <div key={index} className={styles.contactItem}>
                <p>
                  <span className={styles.icon}>{info.icon}</span>
                  {info.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>FOLLOW US</h3>
          <div className={styles.socialLinks}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={styles.socialLink}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className={styles.bottom}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p>
          © {new Date().getFullYear()} Gifted Tours | 
          <a 
            href="https://www.coderon.co.za/"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Designed by Coderon
          </a>
        </p>
      </motion.div>
    </footer>
  );
};

const contactInfo = [
  { icon: '📍', text: 'Cape Town, South Africa' },
  { icon: '📞', text: '+27 780 670 812' },
  { icon: '📱', text: '+27 762 662 143' },
  { icon: '📧', text: 'info@giftedtours.co.za' },
  { icon: '✉️', text: 'giftedtourz@gmail.com' }
];

const socialLinks = [
  { href: 'https://facebook.com', label: 'Facebook', icon: '👤' },
  { href: 'https://instagram.com', label: 'Instagram', icon: '📸' },
  { href: 'https://twitter.com', label: 'Twitter', icon: '🐦' }
];

export default Footer;