import React from 'react';
import { MessageSquareText, ShieldCheck } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';
import Seguranca from '../assets/seguranca.svg';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center bg-[#071326] text-white overflow-hidden pt-32 pb-20 px-6 sm:px-8 lg:px-12"
    >
      {/* Dynamic ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-20 w-[550px] h-[550px] rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-sky-500/15 blur-[120px]" />
        <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] rounded-full bg-indigo-600/15 blur-[100px]" />
      </div>

      {/* Grid texture overlay */}
      <div className="absolute inset-0 bg-grid-texture opacity-60 pointer-events-none" />

      {/* Subtle bottom gradient transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#071326] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

        {/* Left: text & CTA (7 cols) */}
        <div className="lg:col-span-7">
          <ScrollAnimation>
            <div>
              {/* Badge de Parceiro */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center gap-2.5 bg-white/[0.06] border border-white/12 text-white/80 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.2)]">
                  <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                  Parceiro Autorizado <span className="text-[#38bdf8] font-extrabold">Elo Digital</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="font-sora text-4xl sm:text-5xl lg:text-[3.8rem] font-extrabold leading-[1.12] tracking-tight mb-6 text-white">
                Sua Identidade Digital com{' '}
                <span className="text-gradient">Segurança e Agilidade.</span>
              </h1>

              {/* Description */}
              <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10 font-normal">
                Emita seu Certificado Digital e-CPF ou e-CNPJ com quem é referência.
                Atendimento por videoconferência em poucos minutos.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
                <a
                  href="https://wa.me/5512991631525?text=Olá%20MPrime%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20certificados%20digitais."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-blue-500 to-[#38bdf8] text-white px-8 py-4.5 rounded-2xl font-sora font-bold text-base shadow-[0_10px_35px_rgba(37,99,235,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_45px_rgba(56,189,248,0.5)] active:scale-98 no-underline"
                >
                  <MessageSquareText size={22} className="group-hover:scale-110 transition-transform duration-200" />
                  <span>Contratar serviços</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-8 pt-8 border-t border-white/10">
                {[
                  { number: '15 min', label: 'Emissão rápida' },
                  { number: '100%', label: 'Online' },
                ].map(({ number, label }) => (
                  <div key={label} className="bg-white/[0.03] border border-white/8 rounded-2xl px-6 py-3.5 backdrop-blur-sm min-w-[140px]">
                    <span className="block font-sora text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-0.5">
                      {number}
                    </span>
                    <span className="text-slate-400 text-xs font-semibold tracking-wider uppercase">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Right: floating graphic & badges (5 cols) */}
        <div className="lg:col-span-5 hidden md:flex justify-center items-center relative">
          <ScrollAnimation delay={1} className="w-full max-w-md relative">
            {/* Ambient halo behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-sky-400/20 rounded-3xl blur-2xl transform scale-95" />

            {/* Container for graphic */}
            <div className="relative rounded-3xl bg-white/[0.04] border border-white/10 p-6 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex justify-center items-center">
              <img
                src={Seguranca}
                alt="Segurança"
                loading="lazy"
                className="w-full h-auto object-contain max-h-[380px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              />

              {/* Floating chip 1 */}
              <div className="animate-float absolute -bottom-5 -left-6 flex items-center gap-2.5 bg-[#0a162c]/95 border border-white/15 rounded-2xl px-4.5 py-3.5 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.5)] text-sm text-white font-semibold whitespace-nowrap">
                <div className="w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center">
                  <ShieldCheck size={18} className="text-[#38bdf8]" />
                </div>
                <span>Emissão Segura</span>
              </div>

              {/* Floating chip 2 */}
              <div className="animate-float-delay absolute -top-5 -right-6 flex items-center gap-2.5 bg-[#0a162c]/95 border border-white/15 rounded-2xl px-4.5 py-3.5 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.5)] text-sm text-white font-semibold whitespace-nowrap">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-white">ICP-Brasil</span>
              </div>
            </div>
          </ScrollAnimation>
        </div>

      </div>
    </section>
  );
};

export default Hero;
