import { FC, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryImage } from '@/data/gallery';
import { X } from '@phosphor-icons/react';
import styles from './Gallery.module.scss';

interface GalleryProps {
  images: GalleryImage[];
  isOpen: boolean;
  onClose: () => void;
}

interface Category {
  id: string;
  label: string;
}

const Gallery: FC<GalleryProps> = ({ images, isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Create categories array with proper type checking
  const uniqueCategories = Array.from(
    new Set(
      images
        .map(img => img.category)
        .filter(category => category !== undefined) // Fix: Removed type predicate, using simple boolean condition to filter out undefined
    )
  );

  const categories: Category[] = [
    { id: 'all', label: 'All' },
    ...uniqueCategories.map(category => ({
      id: category,
      label: category.charAt(0).toUpperCase() + category.slice(1)
    }))
  ];

  // Filter images
  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.galleryOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={styles.galleryContent}>
            <button 
              className={styles.closeButton} 
              onClick={onClose} 
              aria-label="Close gallery"
              type="button"
            >
              <X size={24} weight="bold" />
            </button>

            <div className={styles.categoryFilter}>
              {categories.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  className={`${styles.categoryButton} ${selectedCategory === id ? styles.active : ''}`}
                  onClick={() => handleCategoryChange(id)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className={styles.galleryGrid}>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  className={styles.imageContainer}
                  layoutId={`gallery-${image.id}`}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={200}
                    className={styles.image}
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.imageOverlay}>
                    <p>{image.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {selectedImage && (
              <motion.div
                className={styles.lightbox}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button 
                  className={styles.closeLightbox}
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close image preview"
                  type="button"
                >
                  <X size={24} weight="bold" />
                </button>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1200}
                  height={800}
                  className={styles.lightboxImage}
                  style={{ objectFit: 'contain' }}
                />
                <div className={styles.imageInfo}>
                  <p>{selectedImage.location}</p>
                  {selectedImage.date && <p>{selectedImage.date}</p>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Gallery;