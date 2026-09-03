"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function Fleet() {
  const fleet = [
    {
      name: "Mercedes-Benz S-Class",
      category: "First-Class Sedan",
      passengers: 3,
      features: ["Ultimate Luxury", "Chauffeur-Driven", "Ambient Lighting", "First-Class Comfort"],
      img: "/assets/mercedes-s-class.webp",
      fallback: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "BMW 2 Series Gran Coupé",
      category: "Executive Sport Sedan",
      passengers: 3,
      features: ["Sporty Design", "Modern Interior", "Business & Leisure", "Dynamic Drive"],
      img: "/assets/bmw-2-series.webp",
      fallback: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "BMW X5 M Sport",
      category: "Performance SUV",
      passengers: 4,
      features: ["M Sport Package", "Panoramic Sunroof", "Aggressive Styling", "Harman Kardon Sound"],
      img: "/assets/bmw-x5-m-sport.webp",
      fallback: "https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Toyota Land Cruiser",
      category: "Safari Vehicle",
      passengers: 7,
      features: ["Safari Configured", "Elevated Seating", "Rugged Comfort", "Wildlife Viewing"],
      img: "/assets/land-cruiser.webp",
      fallback: "https://images.unsplash.com/photo-1590243453392-4fdbbd272fdf?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Hyundai H1",
      category: "Luxury Van",
      passengers: 8,
      features: ["Air Conditioning", "Leather Seats", "Luggage Space", "Comfortable Interior"],
      img: "/assets/hyundai-h1.webp",
      fallback: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Hyundai Staria",
      category: "Premium Van",
      passengers: 9,
      features: ["Panoramic Windows", "USB Charging", "Extra Legroom", "Modern Design"],
      img: "/assets/hyundai-staria.webp",
      fallback: "https://images.unsplash.com/photo-1669022933758-a53697ebdb81?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Toyota Quantum",
      category: "Group Transport",
      passengers: 14,
      features: ["Spacious Interior", "Air Conditioning", "Large Luggage Space", "Reliable"],
      img: "/assets/toyota-quantum.webp",
      fallback: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Mercedes-Benz Vito",
      category: "Luxury Transport",
      passengers: 8,
      features: ["Premium Leather", "Climate Control", "Executive Interior", "Group Comfort"],
      img: "/assets/mercedes-vito.webp",
      fallback: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=600&auto=format&fit=crop" 
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="fleet" className="py-20 bg-background transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <motion.h2 variants={cardVariants} className="text-4xl font-extrabold text-foreground mb-4">Our Fleet of Vehicles</motion.h2>
          <motion.p variants={cardVariants} className="text-muted-foreground font-medium">Comfort, luxury, and reliability for every journey.</motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {fleet.map((vehicle, index) => (
            <motion.div key={index} variants={cardVariants} className="bg-card rounded-2xl shadow-sm border overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-muted relative overflow-hidden">
                <img 
                  src={vehicle.img} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover hover:scale-110 transition duration-500" 
                  onError={(e) => { e.currentTarget.src = vehicle.fallback }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-2">{vehicle.name}</h3>
                <span className="inline-block bg-muted text-muted-foreground text-xs font-bold px-3 py-1 rounded-full w-max mb-4">
                  {vehicle.category}
                </span>
                <p className="font-bold text-foreground mb-4">{vehicle.passengers} Passengers</p>
                <ul className="space-y-2 mb-8 text-muted-foreground text-sm flex-grow">
                  {vehicle.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="w-4 h-4 text-brand-yellow mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/#book" className="w-full mt-auto inline-flex items-center justify-center bg-brand-yellow text-brand-dark hover:bg-yellow-400 font-bold uppercase text-sm py-3 rounded-md transition-colors">
                  Book This Vehicle
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}