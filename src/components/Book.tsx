"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Book() {
  const [duration, setDuration] = useState("Any");

  const vehicles = [
    "Any",
    "Mercedes-Benz S-Class",
    "BMW 2 Series Gran Coupé",
    "BMW X5 M Sport",
    "Toyota Land Cruiser",
    "Hyundai H1",
    "Hyundai Staria",
    "Toyota Quantum",
    "Mercedes-Benz Vito"
  ];

  return (
    <section id="book" className="py-20 bg-brand-light dark:bg-background transition-colors duration-300 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-foreground mb-4">Book Your Adventure</h2>
          <p className="text-muted-foreground font-medium">Fill out the form below to start planning your tour. We'll get back to you shortly!</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-card p-8 md:p-10 rounded-2xl shadow-sm border"
        >
          <form action="https://formsubmit.co/giftedtourz@gmail.com" method="POST" className="space-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Tour Booking Request!" />
            <input type="hidden" name="_next" value="https://www.giftedtours.co.za/" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">Name & Surname <span className="text-red-500">*</span></label>
                <input type="text" id="name" name="name" placeholder="Enter your full name" className="w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">Email Address <span className="text-red-500">*</span></label>
                <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="block text-sm font-bold text-foreground mb-2">Tour Category</label>
                <select id="category" name="category" className="cursor-pointer w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition">
                  <option value="Any">Any</option>
                  <option value="Cape Peninsula Tour">Cape Peninsula Tour</option>
                  <option value="Wine Tasting Tour">Wine Tasting Tour</option>
                  <option value="City Tour">City Tour</option>
                  <option value="Garden Route Tour">Garden Route Tour</option>
                  <option value="Private Charter">Private Charter</option>
                  <option value="Airport Transfer">Airport Transfer</option>
                  <option value="Helicopter Tour">Helicopter Tour</option>
                </select>
              </div>
              <div>
                <label htmlFor="vehicle" className="block text-sm font-bold text-foreground mb-2">Preferred Vehicle</label>
                <select id="vehicle" name="vehicle" className="cursor-pointer w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition">
                  {vehicles.map(v => <option key={v} value={v}>{v}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="space-y-4">
                <div>
                  <label htmlFor="duration_preset" className="block text-sm font-bold text-foreground mb-2">Tour Duration</label>
                  <select 
                    id="duration_preset"
                    name="duration_preset" 
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="cursor-pointer w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition"
                  >
                    <option value="Any">Any</option>
                    <option value="Half Day">Half Day (4-5 hours)</option>
                    <option value="Full Day">Full Day (8-9 hours)</option>
                    <option value="2 Days">2 Days</option>
                    <option value="3 Days">3 Days</option>
                    <option value="Custom">Custom Duration</option>
                  </select>
                </div>
                {duration === "Custom" && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="overflow-hidden">
                    <label htmlFor="custom_duration" className="block text-sm font-bold text-foreground mb-2">Specify Duration <span className="text-red-500">*</span></label>
                    <input type="text" id="custom_duration" name="custom_duration" placeholder="e.g., 5 Days, 1 Week..." className="w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition" required={duration === "Custom"} />
                  </motion.div>
                )}
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-bold text-foreground mb-2">Preferred Date <span className="text-red-500">*</span></label>
                <input type="date" id="date" name="date" className="cursor-pointer w-full px-4 py-3 rounded-lg border bg-background text-muted-foreground focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition" required />
              </div>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-bold text-foreground mb-2">Budget (ZAR)</label>
              <input type="text" id="budget" name="budget" placeholder="e.g., 5000" className="w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition" />
            </div>

            <Button type="submit" className="cursor-pointer w-full bg-brand-yellow text-brand-dark hover:bg-yellow-400 font-bold py-6 rounded-lg transition transform hover:scale-[1.01] mt-4 text-base">
              Submit Booking Request
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}