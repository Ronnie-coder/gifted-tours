// src/components/BookingForm/BookingForm.tsx
import { FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import styles from './BookingForm.module.scss';

const BookingForm: FC = () => {
  const [formData, setFormData] = useState({ fullName: '', category: 'Any', budget: '', duration: 'Any', date: '' });
  const [state, handleSubmit] = useForm("xjkrdqll"); // Your Formspree ID

  const categories = ['Any', 'Cape Peninsula Tour', 'Wine Tasting Tour', 'City Tour', 'Garden Route Tour', 'Private Charter', 'Airport Transfer', 'Helicopter Tour'];
  const durations = ['Any', 'Half Day (4-5 hours)', 'Full Day (8-9 hours)', '2 Days', '3 Days', 'Custom Duration'];

  // Reset form on successful submission
  useEffect(() => {
    if (state.succeeded) {
      setFormData({ fullName: '', category: 'Any', budget: '', duration: 'Any', date: '' });
    }
  }, [state.succeeded]);

  return (
    <section id="booking" className={styles.bookingSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.titleWrapper}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Book Your Adventure</h2>
          <p className={styles.subtitle}>Fill out the form below to start planning your tour. We'll get back to you shortly!</p>
        </motion.div>

        <motion.form 
          className={styles.bookingForm} 
          onSubmit={handleSubmit} 
          initial={{ y: 20, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.formGroup}>
            <label htmlFor="fullName">Name & Surname <span className={styles.required}>*</span></label>
            <input type="text" id="fullName" name="fullName" value={formData.fullName} 
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              required placeholder="Enter your full name" />
            <ValidationError prefix="Full Name" field="fullName" errors={state.errors} className={styles.fieldError} />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="category">Tour Category</label>
              <select id="category" name="category" value={formData.category} 
                onChange={(e) => setFormData({...formData, category: e.target.value})}>
                {categories.map(category => <option key={category} value={category}>{category}</option>)}
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="duration">Tour Duration</label>
              <select id="duration" name="duration" value={formData.duration} 
                onChange={(e) => setFormData({...formData, duration: e.target.value})}>
                {durations.map(duration => <option key={duration} value={duration}>{duration}</option>)}
              </select>
            </div>
          </div>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="budget">Budget (ZAR)</label>
              <input type="number" id="budget" name="budget" value={formData.budget} 
                onChange={(e) => setFormData({...formData, budget: e.target.value})}
                placeholder="e.g., 5000" min="0" step="100" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="date">Preferred Date <span className={styles.required}>*</span></label>
              <input type="date" id="date" name="date" value={formData.date} 
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                required min={new Date().toISOString().split('T')[0]} />
              <ValidationError prefix="Date" field="date" errors={state.errors} className={styles.fieldError} />
            </div>
          </div>

          <button type="submit" className={styles.submitButton} disabled={state.submitting}>
            {state.submitting ? <span className={styles.loading}>Processing...</span> : 'Submit Booking Request'}
          </button>

          <AnimatePresence>
            {state.succeeded && (
              <motion.div 
                className={`${styles.message} ${styles.success}`}
                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              >
                Booking request sent successfully! We will contact you soon.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingForm;