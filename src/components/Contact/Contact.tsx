// Complete code for your Contact.js file

import { FC, useState, useEffect, FormEvent, ChangeEvent, useCallback } from 'react';
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

  // <<< CHANGE IS HERE: Using the new Formspree ID
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
          <ContactFormSection
            formData={formData}
            isSubmitting={state.submitting}
            submitMessage={submitMessage}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            state={state}
          />
        </div>
      </div>
    </section>
  );
};

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
          <p key={index}>
            <a href={link}>{text}</a>
          </p>
        ) : (
          <p key={index}>{text}</p>
        )
      ))}
    </div>
  </div>
);

interface ContactFormSectionProps {
  formData: ContactForm;
  isSubmitting: boolean;
  submitMessage: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent) => void;
  state: any;
}

const ContactFormSection: FC<ContactFormSectionProps> = ({
  formData,
  isSubmitting,
  submitMessage,
  onInputChange,
  onSubmit,
  state
}) => (
  <motion.div
    className={styles.contactForm}
    initial={{ x: 20, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <h3>Send us a Message</h3>
    <form onSubmit={onSubmit}>
      {formFields.map(field => (
        <div key={field.id} className={styles.formGroup}>
          <label htmlFor={field.id}>{field.label}</label>
          {field.type === 'textarea' ? (
            <textarea
              id={field.id}
              name={field.id}
              value={formData[field.id as keyof ContactForm]}
              onChange={onInputChange}
              required
              rows={5}
            />
          ) : (
            <input
              type={field.type}
              id={field.id}
              name={field.id}
              value={formData[field.id as keyof ContactForm]}
              onChange={onInputChange}
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
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
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
);

const contactDetails = [
  {
    icon: '📍',
    title: 'Address',
    content: ['Cape Town', 'South Africa']
  },
  {
    icon: '📞',
    title: 'Phone',
    content: ['+27 780 670 812', '+27 762 662 143']
  },
  {
    icon: '✉️',
    title: 'Email',
    content: ['info@giftedtours.co.za'],
    link: 'mailto:info@giftedtours.co.za'
  }
];

const formFields = [
  { id: 'name', type: 'text', label: 'Name' },
  { id: 'email', type: 'email', label: 'Email' },
  { id: 'comment', type: 'textarea', label: 'Comment' }
];

// Assuming you have this interface defined somewhere
interface ContactForm {
  name: string;
  email: string;
  comment: string;
}

export default Contact;