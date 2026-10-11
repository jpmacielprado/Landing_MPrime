import React from 'react';
import { ShieldCheck, PiggyBank, PenTool, FileCheck2 } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';

const benefits = [
  {
    title: 'Segurança',
    description: 'Criptografia de ponta para proteger seus dados.',
    icon: <ShieldCheck size={28} />,
  },
  {
    title: 'Economia',
    description: 'Elimine gastos com papel, impressões e idas ao cartório.',
    icon: <PiggyBank size={28} />,
  },
  {
    title: 'Praticidade',
    description: 'Assine contratos de qualquer lugar do mundo.',
    icon: <PenTool size={28} />,
  },
  {
    title: 'Validade Legal',
    description: 'Mesmo valor legal que a assinatura física.',
    icon: <FileCheck2 size={28} />,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-28 px-6 sm:px-8 lg:px-12 bg-[#071326] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-blue-600/10 blur-[140px] pointer-events-none" />

      {/* Grid texture */}
      <div className="absolute inset-0 bg-grid-texture opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <ScrollAnimation>
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#38bdf8] bg-sky-950/60 border border-[#38bdf8]/30 px-4 py-1.5 rounded-full mb-4 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
            Vantagens
          </span>
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18] max-w-2xl mx-auto">
            Principais Benefícios
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
          {benefits.map(({ title, description, icon }, i) => (
            <ScrollAnimation key={title} delay={(i + 1) as 1 | 2 | 3 | 4}>
              <div className="group relative h-full bg-white/[0.04] border border-white/10 hover:border-[#38bdf8]/40 rounded-3xl p-8 text-left transition-all duration-300 hover:bg-white/[0.07] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.25)] flex flex-col backdrop-blur-md">
                {/* Subtle top border highlight */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-[#38bdf8]/60 transition-all duration-300" />

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-[#38bdf8]/20 border border-[#38bdf8]/30 flex items-center justify-center mb-6 text-[#38bdf8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#38bdf8]/25 group-hover:border-[#38bdf8]/60 shadow-[0_0_20px_rgba(56,189,248,0.15)]">
                  {icon}
                </div>

                <h3 className="font-sora text-xl font-bold text-white mb-3 tracking-tight">
                  {title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed font-normal">
                  {description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
