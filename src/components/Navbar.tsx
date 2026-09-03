"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const languages = [
  { code: 'en', flag: 'gb', name: 'English', short: 'EN' },
  { code: 'af', flag: 'za', name: 'Afrikaans', short: 'AF' },
  { code: 'de', flag: 'de', name: 'Deutsch', short: 'DE' },
  { code: 'fr', flag: 'fr', name: 'Français', short: 'FR' },
  { code: 'nl', flag: 'nl', name: 'Nederlands', short: 'NL' },
  { code: 'es', flag: 'es', name: 'Español', short: 'ES' },
  { code: 'it', flag: 'it', name: 'Italiano', short: 'IT' },
  { code: 'pt', flag: 'pt', name: 'Português', short: 'PT' },
  { code: 'zh-CN', flag: 'cn', name: '中文', short: 'ZH' },
  { code: 'ar', flag: 'sa', name: 'العربية', short: 'AR' },
  { code: 'hi', flag: 'in', name: 'हिन्दी', short: 'HI' },
  { code: 'ja', flag: 'jp', name: '日本語', short: 'JA' },
  { code: 'ru', flag: 'ru', name: 'Русский', short: 'RU' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const pathname = usePathname();

  // Initialize Theme and Translation Cookie
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark = document.documentElement.classList.contains("dark") || localStorage.getItem("theme") === "dark";
      setIsDarkMode(isDark);
      if (isDark) document.documentElement.classList.add("dark");

      // Check current language from Google Translate cookie
      const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
      if (match && match[1]) {
        const found = languages.find(l => l.code === match[1]);
        if (found) setCurrentLang(found);
      }

      // Inject Google Translate Script
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.body.appendChild(script);

        // @ts-ignore
        window.googleTranslateElementInit = () => {
          // @ts-ignore
          new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            autoDisplay: false,
          }, 'google_translate_element');
        };
      }
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleLanguageChange = (lang: typeof languages[0]) => {
    setCurrentLang(lang);
    setIsLangOpen(false);
    setIsMobileMenuOpen(false);
    
    // Set Google Translate cookies for the selected language
    document.cookie = `googtrans=/en/${lang.code}; path=/`;
    document.cookie = `googtrans=/en/${lang.code}; domain=.${window.location.hostname}; path=/`;
    
    // Reload to apply translation
    window.location.reload();
  };

  // Scroll Spy Logic
  useEffect(() => {
    if (pathname !== "/") return;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
          
          window.history.replaceState(null, "", `/#${id}`);

          const titleMap: Record<string, string> = {
            hero: "Gifted Tours | Cape Town's Premier Experiences",
            about: "About Us | Gifted Tours",
            services: "Our Services | Gifted Tours",
            fleet: "Our Fleet | Gifted Tours",
            gallery: "Gallery | Gifted Tours",
            book: "Book a Tour | Gifted Tours",
            contact: "Contact Us | Gifted Tours"
          };
          document.title = titleMap[id] || "Gifted Tours | Cape Town's Premier Experiences";
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0
    });

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      {/* Hidden element required for Google Translate to initialize */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          
          <Link href="/#hero" className="flex items-center gap-3 cursor-pointer">
            <img src="/assets/logo.webp" alt="Gifted Tours Logo" className="h-10 w-auto" />
            <span className="font-extrabold text-xl tracking-tight hidden sm:block uppercase">Gifted Tours</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center">
            {['About', 'Services', 'Fleet', 'Gallery'].map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = pathname === "/" && activeSection === sectionId;
              return (
                <Link 
                  key={item} 
                  href={`/#${sectionId}`}
                  className={`text-sm font-bold cursor-pointer transition-colors ${
                    isActive ? "text-brand-yellow" : "text-foreground hover:text-brand-yellow"
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)} 
                onBlur={() => setTimeout(() => setIsLangOpen(false), 200)}
                className="flex items-center gap-2 cursor-pointer text-foreground hover:text-brand-yellow transition text-sm font-bold"
              >
                <Globe className="w-4 h-4" />
                <img src={`https://flagcdn.com/w20/${currentLang.flag}.png`} alt={currentLang.name} className="w-5 h-auto rounded-sm shadow-sm" />
                <span>{currentLang.short}</span>
              </button>
              
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-4 w-44 bg-card border border-border rounded-xl shadow-lg py-2 max-h-80 overflow-y-auto animate-in fade-in slide-in-from-top-2">
                  {languages.map((lang) => (
                    <div 
                      key={lang.code}
                      className={`px-4 py-2 cursor-pointer flex items-center gap-3 text-sm font-medium transition-colors ${currentLang.code === lang.code ? "bg-muted font-bold text-foreground" : "hover:bg-muted text-muted-foreground"}`}
                      onClick={() => handleLanguageChange(lang)}
                    >
                      <img src={`https://flagcdn.com/w20/${lang.flag}.png`} alt={lang.name} className="w-5 h-auto rounded-sm shadow-sm" />
                      {lang.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={toggleTheme}
              className="cursor-pointer text-foreground hover:text-brand-yellow transition p-2 rounded-full hover:bg-muted" 
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <Link href="/#book" className="cursor-pointer">
              <Button className="cursor-pointer bg-brand-yellow text-brand-dark hover:bg-yellow-400 font-bold rounded-full transition-transform hover:scale-105">
                Book a Tour
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={toggleTheme}
              className="cursor-pointer text-foreground hover:text-brand-yellow transition p-2" 
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="cursor-pointer text-foreground p-2">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border absolute w-full left-0 shadow-xl animate-in slide-in-from-top-2 max-h-[80vh] overflow-y-auto">
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              {['About', 'Services', 'Fleet', 'Gallery'].map((item) => (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-base font-bold text-foreground hover:text-brand-yellow transition"
                >
                  {item}
                </Link>
              ))}
              
              <div className="flex flex-col gap-2 px-3 py-2">
                <div className="text-sm text-muted-foreground font-bold mb-1">Languages</div>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <div 
                      key={lang.code} 
                      className="flex items-center gap-3 py-1 cursor-pointer"
                      onClick={() => handleLanguageChange(lang)}
                    >
                      <img src={`https://flagcdn.com/w20/${lang.flag}.png`} alt={lang.name} className="w-5 h-auto rounded-sm shadow-sm" />
                      <span className={`text-sm ${currentLang.code === lang.code ? "font-bold text-foreground" : "text-muted-foreground"}`}>{lang.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/#book" onClick={() => setIsMobileMenuOpen(false)} className="px-3 pt-2 block">
                <Button className="w-full cursor-pointer bg-brand-yellow text-brand-dark hover:bg-yellow-400 font-bold rounded-full py-6">
                  Book a Tour
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hide the default Google Translate top banner via CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .goog-te-banner-frame.skiptranslate { display: none !important; } 
        body { top: 0px !important; }
      `}} />
    </>
  );
}