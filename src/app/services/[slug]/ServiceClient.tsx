"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceClient({ service }: { service: any }) {
  useEffect(() => {
    document.title = `${service.title} | Gifted Tours`;
  }, [service.title]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <>
      <section className="relative h-[55vh] min-h-[450px] flex items-end pb-16 overflow-hidden mt-20">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"></div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        >
          <motion.div variants={fadeUp}>
            <Link href="/#services" className="inline-flex items-center text-brand-yellow hover:text-white transition-colors mb-6 font-bold text-sm uppercase tracking-wider cursor-pointer">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
            </Link>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow">
            {service.title}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-200 max-w-2xl font-medium drop-shadow-sm">
            {service.subtitle}
          </motion.p>
        </motion.div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
              className="lg:col-span-2 space-y-10"
            >
              <motion.div variants={fadeUp}>
                <h2 className="text-3xl font-extrabold text-foreground mb-4">The Experience</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h3 className="text-2xl font-bold text-foreground mb-6">Tour Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.highlights.map((highlight: string, idx: number) => (
                    <li key={idx} className="flex items-start bg-card p-4 rounded-xl border border-border">
                      <CheckCircle2 className="w-5 h-5 text-brand-yellow mr-3 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground font-medium text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-28 bg-card p-8 rounded-2xl shadow-md border border-border">
                <h3 className="text-xl font-bold text-foreground mb-6">Tour Overview</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-5 h-5 mr-3 text-brand-yellow shrink-0" />
                    <span className="font-medium text-sm">{service.duration}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-3 text-brand-yellow shrink-0" />
                    <span className="font-medium text-sm">{service.location}</span>
                  </div>
                </div>
                <Link href="/#book" className="w-full inline-flex items-center justify-center bg-brand-yellow text-brand-dark hover:bg-yellow-400 font-bold py-4 text-base rounded-md transition-colors cursor-pointer">
                  Book This Tour
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}