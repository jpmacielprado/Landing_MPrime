import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <main>
        <Hero />
        <About />
      </main>

      {/* 5. Rodapé */}
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;