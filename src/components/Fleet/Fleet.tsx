import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Car, Bus, Buildings, Jeep, AirplaneTilt } from "@phosphor-icons/react";
import styles from './Fleet.module.scss';

// --- FULL, RESTORED AND UPDATED VEHICLE LIST ---
const vehicles = [
  { id: 12, name: "Mercedes-Benz S-Class", type: "First-Class Sedan", image: "/assets/images/fleet/mercedes-s-class.jpg", capacity: "3 Passengers", features: ["Ultimate Luxury", "Chauffeur-Driven", "Ambient Lighting", "First-Class Comfort"] },
  { id: 13, name: "BMW 2 Series Gran Coupé", type: "Executive Sport Sedan", image: "/assets/images/fleet/bmw-2-series.jpg", capacity: "3 Passengers", features: ["Sporty Design", "Modern Interior", "Business & Leisure", "Dynamic Drive"] },
  // --- NEW VEHICLE ADDED HERE ---
  { id: 14, name: "BMW X5 M Sport", type: "Performance SUV", image: "/assets/images/fleet/bmw-x5-m-sport.jpg", capacity: "4 Passengers", features: ["M Sport Package", "Panoramic Sunroof", "Aggressive Styling", "Harman Kardon Sound"] },
  { id: 7, name: "Toyota Land Cruiser", type: "Safari Vehicle", image: "/assets/images/fleet/land-cruiser.jpg", capacity: "7 Passengers", features: ["Safari Configured", "Elevated Seating", "Rugged Comfort", "Wildlife Viewing"] },
  { id: 8, name: "Hyundai H1", type: "Luxury Van", image: "/assets/images/fleet/hyundai-h1.jpg", capacity: "8 Passengers", features: ["Air Conditioning", "Leather Seats", "Luggage Space", "Comfortable Interior"] },
  { id: 9, name: "Hyundai Staria", type: "Premium Van", image: "/assets/images/fleet/hyundai-staria.jpg", capacity: "9 Passengers", features: ["Panoramic Windows", "USB Charging", "Extra Legroom", "Modern Design"] },
  { id: 10, name: "Toyota Quantum", type: "Group Transport", image: "/assets/images/fleet/toyota-quantum.jpg", capacity: "14 Passengers", features: ["Spacious Interior", "Air Conditioning", "Large Luggage Space", "Reliable"] },
  { id: 11, name: "Mercedes-Benz Vito", type: "Luxury Transport", image: "/assets/images/fleet/mercedes-vito.jpg", capacity: "8 Passengers", features: ["Premium Leather", "Climate Control", "Executive Interior", "Group Comfort"] }
];

const Fleet: FC = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="fleet" className={styles.fleet}>
      <div className={styles.container}>
        <motion.div className={styles.titleWrapper} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
          <h2>Our Fleet of Vehicles</h2>
          <p className={styles.subtitle}>Comfort, luxury, and reliability for every journey.</p>
        </motion.div>
        <motion.div className={styles.serviceTypes} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
          <div className={styles.serviceCard}> <Car size={32} weight="duotone" /> <h3>Private Chauffeur</h3> </div>
          <div className={styles.serviceCard}> <Bus size={32} weight="duotone" /> <h3>Group Transport</h3> </div>
          <div className={styles.serviceCard}> <Buildings size={32} weight="duotone" /> <h3>Corporate Travel</h3> </div>
          <div className={styles.serviceCard}> <Jeep size={32} weight="duotone" /> <h3>Safari Tours</h3> </div>
          <div className={styles.serviceCard}> <AirplaneTilt size={32} weight="duotone" /> <h3>Airport Transfers</h3> </div>
        </motion.div>
        <div className={styles.fleetGrid}>
          {vehicles.map((vehicle, index) => (
            <motion.div key={vehicle.id} className={styles.fleetCard} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.1 }}>
              <div className={styles.imageContainer}>
                <Image src={vehicle.image} alt={vehicle.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }}/>
              </div>
              <div className={styles.content}>
                <h4>{vehicle.name}</h4>
                <span className={styles.type}>{vehicle.type}</span>
                <p className={styles.capacity}>{vehicle.capacity}</p>
                <ul className={styles.features}>
                  {vehicle.features.map((feature, i) => ( <li key={i}>{feature}</li> ))}
                </ul>
                <button className={styles.bookButton} onClick={scrollToBooking}> Book This Vehicle </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;