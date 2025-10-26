// src/pages/index.tsx
import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import AboutSection from '../components/AboutSection/AboutSection';
import Services from '../components/Services/Services';
import TourPortfolio from '../components/TourPortfolio/TourPortfolio';
import Fleet from '../components/Fleet/Fleet';
import BookingForm from '../components/BookingForm/BookingForm';
import Contact from '../components/Contact/Contact';
import BackToTop from '../components/BackToTop/BackToTop';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <Services />
      <TourPortfolio />
      <Fleet />
      <BookingForm />
      <Contact />
      <BackToTop />
    </Layout>
  );
};

export default Home;