import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import SignatureTours from "@/components/SignatureTours";
import Gallery from "@/components/Gallery";
import Fleet from "@/components/Fleet";
import Book from "@/components/Book";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <SignatureTours />
      <Gallery />
      <Fleet />
      <Book />
      <Contact />
      <Footer />
    </main>
  );
}