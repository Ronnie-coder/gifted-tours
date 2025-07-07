// Complete and final code for src/components/Contact/Contact.tsx

import { FC, useState, useEffect, ChangeEvent, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import styles from './Contact.module.scss';

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const [submitMessage, setSubmitMessage] = useState('');

  // The state and handleSubmit are now used directly inside this component
  const [state, handleSubmit] = useForm("xjkrdqll");

  const handleInputChange = useCallback((
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      setSubmitMessage('Thank you for your message. We will contact you soon!');
      setFormData({ name: '', email: '', comment: '' });
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>

        <div className={styles.contactGrid}>
          <ContactInfo />
          
          {/* Form section is now directly inside the main component */}
          <motion.div 
            className={styles.contactForm}
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3>Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              {formFields.map(field => (
                <div key={field.id} className={styles.formGroup}>
                  <label htmlFor={field.id}>{field.label}</label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof ContactForm]}
                      onChange={handleInputChange}
                      required
                      rows={5}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof ContactForm]}
                      onChange={handleInputChange}
                      required
                    />
                  )}
                  <ValidationError 
                    prefix={field.label} 
                    field={field.id} 
                    errors={state.errors} 
                  />
                </div>
              ))}

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={state.submitting}
              >
                {state.submitting ? 'Sending...' : 'Submit'}
              </button>

              <AnimatePresence>
                {submitMessage && (
                  <motion.div 
                    className={styles.submitMessage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    {submitMessage}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// The ContactInfo component is fine, no changes needed here.
const ContactInfo: FC = () => (
  <motion.div 
    className={styles.contactInfo}
    initial={{ x: -20, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h3>Get in Touch</h3>
    {contactDetails.map((detail, index) => (
      <ContactInfoItem key={index} {...detail} />
    ))}
  </motion.div>
);

interface ContactInfoItemProps {
  icon: string;
  title: string;
  content: string[];
  link?: string;
}

const ContactInfoItem: FC<ContactInfoItemProps> = ({ icon, title, content, link }) => (
  <div className={styles.infoItem}>
    <i className={styles.icon}>{icon}</i>
    <div>
      <h4>{title}</h4>
      {content.map((text, index) => (
        link ? (
          <p key={index}><a href={link}>{text}</a></p>
        ) : (
          <p key={index}>{text}</p>
        )
      ))}
    </div>
  </div>
);

// Data and interface definitions
const contactDetails = [
  { icon: '📍', title: 'Address', content: ['Cape Town', 'South Africa'] },
  { icon: '📞', title: 'Phone', content: ['+27 780 670 812', '+27 762 662 143'] },
  { icon: '✉️', title: 'Email', content: ['info@giftedtours.co.za'], link: 'mailto:info@giftedtours.co.za' }
];

const formFields = [
  { id: 'name', type: 'text', label: 'Name' },
  { id: 'email', type: 'email', label: 'Email' },
  { id: 'comment', type: 'textarea', label: 'Comment' }
];

interface ContactForm {
  name: string;
  email: string;
  comment: string;
}

export default Contact;