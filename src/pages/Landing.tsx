import React from 'react';
import Navbar         from '../components/Navbar';
import Hero           from '../components/Hero';
import About          from '../components/About';
import Features       from '../components/Features';
import Benefits       from '../components/Benefits';
import Reviews        from '../components/Reviews';
import Pricing        from '../components/Pricing';
import Faq            from '../components/Faq';
import Footer         from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white text-slate-800 flex flex-col font-sans selection:bg-[#38bdf8] selection:text-white">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <Benefits />
        <Reviews />
        <Pricing />
        <Faq />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Landing;
