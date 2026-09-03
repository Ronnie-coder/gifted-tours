"use client";

import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8 } 
    },
  };

  return (
    <section id="about" className="py-24 bg-background transition-colors duration-300 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center"
        >
          <motion.img 
            variants={itemVariants}
            src="/assets/logo.webp" 
            alt="Gifted Tours Logo" 
            className="h-24 md:h-32 mb-8 object-contain drop-shadow-sm"
          />
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight"
          >
            Welcome to Gifted Tours
          </motion.h2>
          
          <motion.h3 
            variants={itemVariants}
            className="text-xl md:text-2xl text-brand-yellow font-bold mb-8"
          >
            Crafting unforgettable Cape Town experiences since 2020.
          </motion.h3>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            Based in the heart of the Western Cape, Gifted Tours specializes in bespoke, high-end travel experiences. Whether you are looking for an intimate wine tasting, an adrenaline-pumping safari, or reliable executive transport, our expert team ensures every journey is flawless. We pride ourselves on uncompromising safety, discretion, and a deep love for sharing the magic of South Africa.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}