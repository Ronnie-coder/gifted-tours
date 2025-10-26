// src/components/Services/Services.tsx
import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  Airplane,
  AirplaneTilt,
  MapTrifold,
  Car,
  UserGear,
  Drop,
  Compass,
} from "@phosphor-icons/react";
import styles from './Services.module.scss';

// Define a type for the icon component for better TypeScript support
type IconComponent = typeof Airplane;

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: IconComponent;
  delay: number;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, Icon, delay }) => {
  return (
    <motion.div 
      className={styles.card}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className={styles.iconWrapper}>
        <Icon size={36} weight="duotone" className={styles.icon} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

const Services: FC = () => {
  const services = [
    { title: "Cape Tours", description: "Bespoke private tours covering Cape Town, the Winelands, and the Garden Route, tailored to your interests.", Icon: MapTrifold },
    { title: "Charter Services", description: "Cost-effective, reliable, and discreet luxury and off-road vehicle charters for any occasion.", Icon: Car },
    { title: "Helicopter Tours", description: "Soar over iconic landmarks like Table Mountain and the Cape Peninsula for unforgettable aerial views.", Icon: AirplaneTilt },
    { title: "Sky Gliding", description: "Experience the thrill of sky gliding over the stunning coastline with our professional and safe pilots.", Icon: Airplane },
    { title: "Concierge Services", description: "We assist with all your needs, from booking reservations and transport to offering local recommendations.", Icon: UserGear },
    { title: "Aquarium Visit", description: "Explore the magical underwater world and get up close with diverse marine life. Perfect for families.", Icon: Drop },
    { title: "Shark Cage Diving", description: "An adrenaline-pumping adventure to meet Great White Sharks in their natural habitat, guided by experts.", Icon: Compass },
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <motion.div
          className={styles.titleWrapper}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Our Premier Services</h2>
          <p className={styles.subtitle}>Everything you need for a perfect Cape Town adventure.</p>
        </motion.div>
        
        <div className={styles.cardGrid}>
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.1} // Slightly faster delay for a snappier feel
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;