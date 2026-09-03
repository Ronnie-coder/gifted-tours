"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const galleryData = [
  { src: "/assets/adventure-1.webp", location: "Lion's Head", phrase: "Hike to breathtaking sunset views." }, 
  { src: "/assets/aquarium-1.webp", location: "Two Oceans Aquarium", phrase: "Discover the magic beneath the surface." },
  { src: "/assets/baboons.webp", location: "Cape Wildlife", phrase: "Encounter the Cape's curious wildlife." },
  { src: "/assets/baboons-1.webp", location: "Cape Peninsula", phrase: "Share the road with local residents." },
  { src: "/assets/baboons-2.webp", location: "Nature Reserves", phrase: "Unforgettable moments in nature." },
  { src: "/assets/baboons-4.webp", location: "Safari Game Drive", phrase: "Spot majestic antelope in the wild." },
  { src: "/assets/cape-point-group-3.webp", location: "Safari Adventures", phrase: "Get up close with nature's gentle giants." }, 
  { src: "/assets/chapmans-peak-2.webp", location: "Chapman's Peak", phrase: "Drive along the world's most scenic coastal route." },
  { src: "/assets/city-tour-1.webp", location: "Cape Point", phrase: "Journey to the edge of the continent." },
  { src: "/assets/coastal-1.webp", location: "Atlantic Seaboard", phrase: "Pristine white sands and turquoise waters." },
  { src: "/assets/coastal-group-1.webp", location: "Coastal Escapes", phrase: "Create memories along the stunning shoreline." },
  { src: "/assets/elephants-1.webp", location: "Safari Experience", phrase: "Unmatched access to incredible wildlife." },
  { src: "/assets/elephants-2.webp", location: "Private Reserves", phrase: "Experience the true wild heart of Africa." },
  { src: "/assets/elephants-3.webp", location: "Wildlife Encounters", phrase: "Capture the perfect wildlife photograph." },
  { src: "/assets/elephants-5.webp", location: "Guided Safaris", phrase: "Tours led by passionate local experts." },
  { src: "/assets/penguins-1.webp", location: "Boulders Beach", phrase: "Walk alongside the Cape's most charming locals." },
  { src: "/assets/penguins-2.webp", location: "Penguin Colony", phrase: "A unique wildlife experience for the whole family." },
  { src: "/assets/penguins-5.webp", location: "Coastal Wildlife", phrase: "Watch them thrive in their natural habitat." },
  { src: "/assets/penguins-group-2.webp", location: "Guided Tours", phrase: "Learn about conservation from our experts." },
  { src: "/assets/penguins-group-3.webp", location: "Group Experiences", phrase: "Shared moments you will never forget." },
  { src: "/assets/snakes-1.webp", location: "Reptile Sanctuaries", phrase: "Fascinating encounters with exotic species." },
  { src: "/assets/snakes-2.webp", location: "Educational Tours", phrase: "Learn about the Cape's diverse ecosystems." },
  { src: "/assets/snakes-3.webp", location: "Wildlife Rehabilitation", phrase: "Supporting local conservation efforts." },
  { src: "/assets/table-mountain-group-1.webp", location: "Table Mountain", phrase: "Touch the sky at the edge of the world." },
  { src: "/assets/table-mountain-group-2.webp", location: "Iconic Landmarks", phrase: "Breathtaking views from the summit." },
  { src: "/assets/table-mountain-group-3.webp", location: "Mountain Trails", phrase: "Conquer the heights with our expert guides." },
  { src: "/assets/wine-tasting-group-1.webp", location: "Cape Winelands", phrase: "Taste the heritage in every glass." },
  { src: "/assets/wine-tasting-group-2.webp", location: "Stellenbosch", phrase: "Sip world-class wines in historic valleys." },
  { src: "/assets/wine-tasting-group-3.webp", location: "Vineyard Tours", phrase: "An elegant escape into the countryside." },
  { src: "/assets/wine-tasting-group-4.webp", location: "Wine Estates", phrase: "Premium tastings curated just for you." },
  { src: "/assets/zebras-3.webp", location: "Game Drives", phrase: "Spot iconic wildlife roaming freely." },
  { src: "/assets/zebras-4.webp", location: "Safari Escapes", phrase: "Breathe in the untamed beauty of the bush." },
  { src: "/assets/zebras-crossing.webp", location: "Wild Encounters", phrase: "Unscripted moments in the great outdoors." }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="gallery" className="py-24 bg-brand-light dark:bg-background transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-foreground mb-4">Memories in the Making</h2>
          <p className="text-muted-foreground font-medium">Immerse yourself in the moments that define Cape Town.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative h-[650px] w-full rounded-3xl overflow-hidden shadow-2xl bg-black"
        >
          {galleryData.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={item.src}
                alt={item.location}
                className="w-full h-full object-cover transform scale-105 transition-transform duration-[10000ms] ease-out"
                style={{ transform: index === currentIndex ? "scale(1)" : "scale(1.05)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-24 md:pb-20">
                <div className="max-w-xl transform transition-all duration-700 translate-y-0 opacity-100">
                  <div className="flex items-center text-brand-yellow mb-3">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="font-bold tracking-wider uppercase text-sm">{item.location}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                    {item.phrase}
                  </h3>
                </div>
                
                <Link href="/#book" className="inline-flex items-center justify-center bg-brand-yellow text-brand-dark hover:bg-yellow-400 font-bold px-8 py-6 rounded-full shrink-0 transition-transform hover:scale-105">
                  Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-wrap justify-center gap-2 max-w-[90%] md:max-w-2xl">
            {galleryData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "bg-brand-yellow w-6 md:w-8" : "bg-white/50 hover:bg-white w-2"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}