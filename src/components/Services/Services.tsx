import { FC } from 'react';
import { motion } from 'framer-motion';
import {
  Airplane,
  AirplaneTilt,
  MapTrifold,
  Car,
  UserGear,
  Drop, // For Aquarium
  Compass, // For Shark Diving
} from "@phosphor-icons/react";
import styles from './Services.module.scss';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: typeof Airplane;
  delay: number;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, description, Icon, delay }) => {
  return (
    <motion.div 
      className={styles.card}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className={styles.iconWrapper}>
        <Icon size={32} weight="duotone" className={styles.icon} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

const Services: FC = () => {
  const services = [
    {
      title: "Cape Tours",
      description: "We offer all Cape town tour services to any destination you want. Our packages include private touring in areas covering Cape Town, Cape Winelands, Cape Peninsula and the Garden Route and custom made by our beloved guests.",
      Icon: MapTrifold,
    },
    {
      title: "Charter Services",
      description: "We offer exclusive luxury and offroad vehicles for all your tour plans. Our service list offers cost-effective, reliable, punctual and discreet air charter services to and from any location in Cape Town.",
      Icon: Car,
    },
    {
      title: "Helicopter Tours",
      description: "Experience Cape Town from a breathtaking perspective with our helicopter tours. Soar over Table Mountain, the Atlantic Seaboard, and the Cape Peninsula for unforgettable aerial views of the city's most iconic landmarks.",
      Icon: AirplaneTilt,
    },
    {
      title: "Sky Gliding",
      description: "Take to the skies and experience the thrill of sky gliding over Cape Town's stunning coastline. Our professional pilots ensure a safe and exhilarating adventure with panoramic views of the ocean and mountains.",
      Icon: Airplane,
    },
    {
      title: "Concierge Services",
      description: "We assist guests with various needs and requests, such as booking reservations, arranging transportation, providing directions, and offering recommendations for restaurants, entertainment, and cultural attractions.",
      Icon: UserGear,
    },
    {
      title: "Aquarium Visit",
      description: "Explore the magical underwater world at Cape Town's premier aquarium. Get up close with diverse marine life including sharks, rays, penguins, and countless fish species. Perfect for families and nature enthusiasts.",
      Icon: Drop,
    },
    {
      title: "Shark Cage Diving",
      description: "Experience an adrenaline-pumping adventure with our shark cage diving excursions. Meet Great White Sharks in their natural habitat under the guidance of experienced professionals. Includes safety briefing and all necessary equipment.",
      Icon: Compass,
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        
        <div className={styles.cardGrid}>
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;