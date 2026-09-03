"use client";

import Link from "next/link";
import { Map, Car, Plane, Send, UserCheck, Droplets, Compass, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Cape Tours",
      slug: "cape-tours",
      badge: "Full Day",
      description: "Bespoke private tours covering Cape Town, the Winelands, and the Garden Route, tailored to your interests.",
      icon: Map,
      image: "/assets/cape-tours.jpg"
    },
    {
      title: "Charter Services",
      slug: "charter-services",
      badge: "Private Transport",
      description: "Cost-effective, reliable, and discreet luxury and off-road vehicle charters for any occasion.",
      icon: Car,
      image: "/assets/charter-services.jpg"
    },
    {
      title: "Helicopter Tours",
      slug: "helicopter-tours",
      badge: "Scenic Flight",
      description: "Soar over iconic landmarks like Table Mountain and the Cape Peninsula for unforgettable aerial views.",
      icon: Plane,
      image: "/assets/helicopter-tours.jpg"
    },
    {
      title: "Sky Gliding",
      slug: "sky-gliding",
      badge: "Tandem Paraglide",
      description: "Experience the thrill of sky gliding over the stunning coastline with our professional and safe pilots.",
      icon: Send,
      image: "/assets/sky-gliding.jpg"
    },
    {
      title: "Concierge Services",
      slug: "concierge-services",
      badge: "VIP Assistance",
      description: "We assist with all your needs, from booking reservations and transport to offering local recommendations.",
      icon: UserCheck,
      image: "/assets/concierge-services.jpg"
    },
    {
      title: "Aquarium Visit",
      slug: "aquarium-visit",
      badge: "Family Favorite",
      description: "Explore the magical underwater world and get up close with diverse marine life. Perfect for families.",
      icon: Droplets,
      image: "/assets/aquarium-visit.jpg"
    },
    {
      title: "Shark Cage Diving",
      slug: "shark-cage-diving",
      badge: "Extreme Adventure",
      description: "An adrenaline-pumping adventure to meet Great White Sharks in their natural habitat, guided by experts.",
      icon: Compass,
      featured: true,
      image: "/assets/shark-cage-diving.jpg"
    },
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
    <section id="services" className="py-20 bg-background transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={cardVariants} className="text-4xl font-extrabold text-foreground mb-4">Our Premier Services</motion.h2>
          <motion.p variants={cardVariants} className="text-muted-foreground font-medium max-w-2xl mx-auto">
            Handcrafted experiences led by local experts to show you the absolute best of Cape Town.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants} className={service.featured ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}>
              <Link 
                href={`/services/${service.slug}`}
                className="group bg-card rounded-2xl shadow-sm border border-border overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <span className="absolute top-4 right-4 bg-brand-yellow text-brand-dark text-xs font-bold px-3 py-1 rounded-full shadow">
                    {service.badge}
                  </span>
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-background/90 backdrop-blur flex items-center justify-center text-foreground">
                    <service.icon className="w-5 h-5 text-brand-yellow" />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-brand-yellow transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex items-center text-sm font-bold text-foreground group-hover:text-brand-yellow transition-colors mt-auto">
                    <span>Explore Experience</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}