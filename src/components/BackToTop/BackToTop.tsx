// src/components/BackToTop/BackToTop.tsx
import { useState, useEffect } from 'react';
import styles from './BackToTop.module.scss';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    setIsScrolling(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Reset scrolling state after animation
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div 
          className={`${styles.backToTop} ${isScrolling ? styles.scrolling : ''}`}
          onClick={scrollToTop}
          role="button"
          aria-label="Back to top"
        >
          <div className={styles.arrowContainer}>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={styles.arrow}
            >
              <path 
                d="M12 4L4 12H20L12 4Z" 
                fill="currentColor"
              />
            </svg>
          </div>
          <span className={styles.tooltip}>Back to Top</span>
        </div>
      )}
    </>
  );
};

export default BackToTop;