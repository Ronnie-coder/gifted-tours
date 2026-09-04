"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const subtitle = "Experience the beauty of South Africa with our exclusive, tailored tours.";

  return (
    <section id="hero" className="relative h-[calc(100vh-5rem)] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 12, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <Image 
          src="/assets/hero-bg.jpg" 
          alt="Gifted Tours Cape Town" 
          fill
          priority
          sizes="100vw"
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-black/50 transition-colors duration-300"></div>
      </motion.div>

      <motion.div className="relative z-10 px-4 max-w-4xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
          Explore Cape Town
        </motion.h1>
        
        {/* Replaced typewriter with a smooth fade-in and removed notranslate */}
        <motion.p variants={itemVariants} className="text-lg md:text-2xl text-gray-200 mb-10 font-medium max-w-2xl mx-auto drop-shadow-md">
          {subtitle}
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/#book" className="cursor-pointer inline-flex items-center justify-center bg-brand-yellow text-brand-dark hover:bg-yellow-400 font-bold rounded-full px-8 w-full sm:w-auto h-14 text-lg transition-transform hover:scale-105">
            Book A Tour
          </Link>
          <Link href="/#services" className="cursor-pointer inline-flex items-center justify-center text-white border-2 border-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-brand-dark font-bold rounded-full px-8 w-full sm:w-auto h-14 text-lg transition-all hover:scale-105">
            Our Services
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}