// src/components/Contact/Contact.tsx
import { FC } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Phone, Mail, MapPin } from 'lucide-react';
import QRCodeGenerator from '../QRCodeGenerator'; // Import the QR Code component
import styles from './Contact.module.scss';

const Contact: FC = () => {
  const [state, handleSubmit] = useForm("xjkrdqll");

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          className={styles.titleWrapper}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Get In Touch</h2>
          <p className={styles.subtitle}>Have questions or ready to book? We're here to help.</p>
        </motion.div>

        <div className={styles.contactGrid}>
          <motion.div
            className={styles.contactInfo}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.infoItem}>
              <MapPin size={24} className={styles.icon} />
              <div>
                <h4>Our Location</h4>
                <p>Based in beautiful Cape Town, South Africa</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <Mail size={24} className={styles.icon} />
              <div>
                <h4>Email Us</h4>
                <a href="mailto:giftedtourz@gmail.com">giftedtourz@gmail.com</a>
              </div>
            </div>
            <div className={styles.infoItem}>
              <Phone size={24} className={styles.icon} />
              <div>
                <h4>Call Us</h4>
                {/* --- UPDATED PHONE NUMBER --- */}
                <a href="tel:+27762662143">+27 76 266 2143</a>
              </div>
            </div>
            {/* --- QR CODE GENERATOR INTEGRATED --- */}
            <div className={styles.qrCodeWrapper}>
              <QRCodeGenerator />
            </div>
          </motion.div>
          
          <motion.form 
            className={styles.contactForm}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input id="name" type="text" name="name" required />
              <ValidationError prefix="Name" field="name" errors={state.errors} className={styles.fieldError}/>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input id="email" type="email" name="email" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} className={styles.fieldError}/>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} className={styles.fieldError}/>
            </div>
            
            <button type="submit" className={styles.submitButton} disabled={state.submitting}>
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
            {state.succeeded && <p className={`${styles.message} ${styles.success}`}>Thank you! Your message has been sent.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;