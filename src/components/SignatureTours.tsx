"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SignatureTours() {
  const tours = [
    {
      title: "Best of the Cape: Full Day Tour",
      slug: "best-of-cape",
      description: "A comprehensive journey through the Cape Peninsula and Stellenbosch Winelands. From the pristine beaches of Camps Bay to a premium wine tasting experience.",
      image: "/assets/best-of-cape.jpg"
    },
    {
      title: "Amazing Cape Town: Half Day Tour",
      slug: "amazing-cape-town",
      description: "Experience the essential highlights of Cape Town, including a trip up the iconic Table Mountain, a vibrant city tour, and an elegant wine tasting in Constantia.",
      image: "/assets/amazing-cape-town.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-brand-light dark:bg-background transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.h2 variants={cardVariants} className="text-4xl font-extrabold text-foreground mb-4">Our Signature Tours</motion.h2>
          <motion.p variants={cardVariants} className="text-muted-foreground font-medium">Discover the best of the Cape with our expertly curated tour packages.</motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {tours.map((tour, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Link 
                href={`/signature-tours/${tour.slug}`}
                className="group bg-card rounded-2xl shadow-sm border overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-6 right-6 text-2xl font-bold text-white drop-shadow-md">
                    {tour.title}
                  </h3>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                    {tour.description}
                  </p>
                  <div className="flex items-center text-sm font-bold text-foreground group-hover:text-brand-yellow transition-colors mt-auto uppercase tracking-wider">
                    <span>View Itinerary</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
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