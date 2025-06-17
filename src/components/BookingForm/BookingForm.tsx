import { FC, useState, FormEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './BookingForm.module.scss';

interface BookingFormData {
  fullName: string;
  category: string;
  budget: string;
  duration: string;
  date: string;
}

interface FormErrors {
  [key: string]: boolean;
}

const BookingForm: FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    category: 'Any',
    budget: '',
    duration: 'Any',
    date: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [touched, setTouched] = useState<FormErrors>({});
  const [errors, setErrors] = useState<FormErrors>({});

  const categories = [
    'Any',
    'Cape Peninsula Tour',
    'Wine Tasting Tour',
    'City Tour',
    'Garden Route Tour',
    'Private Charter',
    'Airport Transfer',
    'Helicopter Tour'
  ];

  const durations = [
    'Any',
    'Half Day (4-5 hours)',
    'Full Day (8-9 hours)',
    '2 Days',
    '3 Days',
    'Custom Duration'
  ];

  useEffect(() => {
    if (submitMessage) {
      const timer = setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitMessage]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = true;
    }
    if (!formData.date) {
      newErrors.date = true;
    }
    if (formData.date && new Date(formData.date) < new Date()) {
      newErrors.date = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setSubmitMessage('Please fill in all required fields correctly');
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitMessage('Booking request sent successfully! We will contact you soon.');
      setFormData({
        fullName: '',
        category: 'Any',
        budget: '',
        duration: 'Any',
        date: '',
      });
      setTouched({});
      setErrors({});
    } catch (error) {
      console.error('Error submitting booking request:', error); // Permanent fix: Log the error for debugging
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBlur = (field: keyof BookingFormData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const getInputClassName = (field: keyof BookingFormData) => {
    return touched[field] && errors[field] ? styles.inputError : '';
  };

  return (
    <section id="booking" className={styles.bookingSection}>
      <div className={styles.container}>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Book A Service
        </motion.h2>

        <motion.form 
          className={styles.bookingForm}
          onSubmit={handleSubmit}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className={styles.formGroup}>
            <label htmlFor="fullName">
              Name & Surname <span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              onBlur={() => handleBlur('fullName')}
              required
              placeholder="Enter your full name"
              className={getInputClassName('fullName')}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="category">Tour Category</label>
            <select
              id="category"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="budget">Budget (ZAR)</label>
            <input
              type="number"
              id="budget"
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value})}
              placeholder="Enter your budget"
              min="0"
              step="100"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="duration">Tour Duration</label>
            <select
              id="duration"
              value={formData.duration}
              onChange={(e) => setFormData({...formData, duration: e.target.value})}
            >
              {durations.map(duration => (
                <option key={duration} value={duration}>
                  {duration}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="date">
              Preferred Date <span className={styles.required}>*</span>
            </label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              onBlur={() => handleBlur('date')}
              required
              min={new Date().toISOString().split('T')[0]}
              className={getInputClassName('date')}
            />
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className={styles.loading}>Processing...</span>
            ) : (
              'Submit Booking Request'
            )}
          </button>

          <AnimatePresence>
            {submitMessage && (
              <motion.div 
                className={`${styles.message} ${submitMessage.includes('successfully') ? styles.success : styles.error}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {submitMessage}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingForm;