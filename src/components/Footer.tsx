"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronUp, Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background pt-16 pb-8 relative transition-colors duration-300 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/assets/logo.webp" 
                alt="Gifted Tours Logo" 
                width={48} 
                height={48} 
                className="h-12 w-auto" 
              />
              <span className="font-extrabold text-xl text-foreground">Gifted Tours</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Crafting unforgettable Cape Town experiences with professional service and lasting memories.
            </p>
          </div>

          <div>
            <h2 className="font-bold text-foreground text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-brand-yellow"></span>
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              {['About', 'Services', 'Fleet', 'Book'].map((link) => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="hover:text-foreground transition">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-foreground text-lg mb-6 relative inline-block">
              Contact & Socials
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-brand-yellow"></span>
            </h2>
            <ul className="space-y-4 text-muted-foreground mb-8">
              <li className="flex items-center gap-3"><Mail className="text-brand-yellow w-5 h-5" /> info@giftedtours.co.za</li>
              <li className="flex items-center gap-3"><Phone className="text-brand-yellow w-5 h-5" /> +27 76 266 2143</li>
              <li className="flex items-center gap-3">
                <MessageCircle className="text-brand-yellow w-5 h-5" /> 
                <a href="https://wa.me/27762662143" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">WhatsApp Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-center items-center">
          <span>&copy; {new Date().getFullYear()} Gifted Tours | Designed by </span>
          <a 
            href="https://www.coderon.co.za/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-bold text-foreground ml-1 hover:text-brand-yellow transition-colors"
          >
            Coderon
          </a>
        </div>
      </div>

      <Button
        onClick={scrollToTop}
        size="icon"
        aria-label="Scroll to top"
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full shadow-lg transition-all duration-300 ${
          showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        } bg-brand-dark dark:bg-brand-yellow text-white dark:text-brand-dark hover:bg-slate-800 dark:hover:bg-yellow-500`}
      >
        <ChevronUp className="w-6 h-6" />
      </Button>
    </footer>
  );
}