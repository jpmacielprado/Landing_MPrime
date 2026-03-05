import React from 'react';
import { MessageSquareText, ShieldCheck } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';
import Seguranca from '../assets/seguranca.svg';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative max-h-screen flex items-center bg-[#0d1f3c] text-white overflow-hidden pt-32 pb-16 px-8"
    >
      {/* Background orbs */}
      <div className="absolute -top-25 -right-37.5 w-150 h-150 rounded-full bg-blue-700/25 blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-12.5 -left-25 w-100 h-100 rounded-full bg-[#38bdf8]/12 blur-[80px] pointer-events-none" />

      {/* Grid texture */}
      <div className="absolute inset-0 bg-grid-texture pointer-events-none" />

      <div className="max-w-300 mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left: text & CTA */}
        <ScrollAnimation>
          <div>
            {/* Badge de Parceiro */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/70 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-[0.05em] uppercase whitespace-nowrap">
                Parceiro Autorizado <span className="text-[#38bdf8]">Elo Digital</span>
              </div>
            </div>

            <h1 className="font-sora text-[clamp(2.5rem,4vw,3.8rem)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-6">
              Sua Identidade Digital com{' '}
              <span className="text-gradient">Segurança e Agilidade.</span>
            </h1>

            <p className="text-white/60 text-lg leading-[1.75] max-w-120 mb-10">
              Emita seu Certificado Digital e-CPF ou e-CNPJ com quem é referência.
              Atendimento por videoconferência em poucos minutos.
            </p>

            <a
              href="https://wa.me/5512991631525?text=Olá%20MPrime%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20certificados%20digitais."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-linear-to-br from-blue-500 to-[#38bdf8] text-white px-8 py-4 rounded-xl font-sora font-bold text-base shadow-[0_8px_32px_rgba(59,130,246,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(59,130,246,0.5)] no-underline"
            >
              <MessageSquareText size={20} />
              Contratar serviços
            </a>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-6 pt-4 border-t border-white/8">
              {[
                { number: '15 min', label: 'Emissão rápida' },
                { number: '100%', label: 'Online' },
              ].map(({ number, label }) => (
                <div key={label}>
                  <span className="block font-sora text-[1.6rem] font-extrabold tracking-[-0.03em]">{number}</span>
                  <span className="text-white/45 text-xs font-medium tracking-[0.05em] uppercase">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Right: floating card */}
        <ScrollAnimation delay={1} className="hidden md:flex justify-center items-center relative">
          <div className="relative -mt-20">

            <img
              src={Seguranca}
              alt="Segurança"
              loading="lazy"
              className="w-full max-w-125 h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />

            {/* Floating chips */}
            <div className="animate-float absolute bottom-[15%] -left-10 flex items-center gap-2 bg-[#0d1f3c]/90 border border-white/12 rounded-xl px-4 py-3 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-sm text-white font-semibold whitespace-nowrap">
              <ShieldCheck size={16} className="text-[#38bdf8]" />
              Emissão Segura
            </div>

            <div className="animate-float-delay absolute top-[10%] -right-8 flex items-center gap-2 bg-[#0d1f3c]/90 border border-white/12 rounded-xl px-4 py-3 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-sm text-white font-semibold whitespace-nowrap">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              ICP-Brasil
            </div>
          </div>
        </ScrollAnimation>

      </div >
    </section >
  );
};

export default Hero;
