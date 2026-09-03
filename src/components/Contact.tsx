"use client";

import { MapPin, Mail, Phone, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";

export default function Contact() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Gifted Tours Cape Town',
          text: 'Explore Cape Town with Gifted Tours & Charter Services!',
          url: 'https://www.giftedtours.co.za/',
        });
      } catch (err) {
        console.log('Share dismissed:', err);
      }
    } else {
      alert('Copy this link to share: https://www.giftedtours.co.za/');
    }
  };

  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Gifted Tours
ORG:Gifted Tours Cape Town
TEL;TYPE=cell:+27762662143
EMAIL:giftedtourz@gmail.com
URL:https://www.giftedtours.co.za/
END:VCARD`;

  return (
    <section id="contact" className="py-20 bg-background border-b border-border transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground font-medium">Have questions or ready to book? We're here to help.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="space-y-6 w-full max-w-sm">
              <div className="flex items-start gap-4">
                <MapPin className="text-brand-yellow w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-1">Our Location</h4>
                  <p className="text-muted-foreground text-sm">Based in beautiful Cape Town, South Africa</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-brand-yellow w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-1">Email Us</h4>
                  <p className="text-muted-foreground text-sm">giftedtourz@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-brand-yellow w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-1">Call Us</h4>
                  <p className="text-muted-foreground text-sm">+27 76 266 2143</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-sm border w-full max-w-sm text-center transform hover:-translate-y-1 transition duration-300">
              <img src="/assets/logo.webp" alt="Gifted Tours Logo" className="h-10 mx-auto mb-4" />
              <h4 className="font-bold text-foreground mb-4">Scan to Save Contact</h4>
              
              <div className="w-48 h-48 bg-white mx-auto mb-4 flex items-center justify-center rounded-xl shadow-inner p-4">
                <QRCode 
                  value={vCardData} 
                  size={160} 
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }} 
                  viewBox={`0 0 160 160`} 
                />
              </div>
              
              <p className="text-muted-foreground text-sm mb-6">Point your camera at the code to instantly save our details.</p>
              <Button onClick={handleShare} className="cursor-pointer w-full bg-brand-yellow text-brand-dark hover:bg-yellow-400 font-bold py-6 rounded-lg transition text-base">
                <Share2 className="mr-2 w-5 h-5" /> Share Contact
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="bg-card p-8 md:p-10 rounded-2xl shadow-sm border"
          >
            <form action="https://formsubmit.co/giftedtourz@gmail.com" method="POST" className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Booking Request from Gifted Tours Website!" />
              <input type="hidden" name="_next" value="https://www.giftedtours.co.za/" />

              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Full Name</label>
                <input type="text" name="name" className="w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Email Address</label>
                <input type="email" name="email" className="w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-foreground mb-2">Your Message</label>
                <textarea name="message" rows={5} className="w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition resize-none" required></textarea>
              </div>
              <Button type="submit" className="cursor-pointer w-full bg-brand-yellow text-brand-dark hover:bg-yellow-400 font-bold py-6 rounded-lg transition transform hover:scale-[1.01] text-base">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}