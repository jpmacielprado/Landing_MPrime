import React from 'react';
import Hero      from '../components/Hero';
import About     from '../components/About';
import Features  from '../components/Features';
import Benefits  from '../components/Benefits';
import Reviews   from '../components/Reviews';
import Pricing   from '../components/Pricing';
import Faq       from '../components/Faq';
import Footer    from '../components/Footer';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white">

      <main>
        <Hero />
        <About />
        <Features />
        <Benefits />
        <Reviews />
        <Pricing />
        <Faq />
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
