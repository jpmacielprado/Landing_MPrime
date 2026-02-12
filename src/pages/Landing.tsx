import React from 'react';
import Hero from '../components/Hero';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <main>
        <Hero />
      </main>

      {/* 5. Rodapé */}
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;