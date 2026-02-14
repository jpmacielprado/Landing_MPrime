import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import Reviews from '../components/Reviews';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <main>
        <Hero />
        <About />
        <Features />
        <Benefits />
        <Reviews />
      </main>

      {/* 5. Rodapé */}
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;