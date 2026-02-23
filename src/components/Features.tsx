import React from 'react';
import { ShieldCheck, PiggyBank, PenTool, FileCheck2 } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';

const benefits = [
  {
    title: 'Segurança',
    description: 'Criptografia de ponta para proteger seus dados.',
    icon: <ShieldCheck size={26} />,
  },
  {
    title: 'Economia',
    description: 'Elimine gastos com papel, impressões e idas ao cartório.',
    icon: <PiggyBank size={26} />,
  },
  {
    title: 'Praticidade',
    description: 'Assine contratos de qualquer lugar do mundo.',
    icon: <PenTool size={26} />,
  },
  {
    title: 'Validade Legal',
    description: 'Mesmo valor legal que a assinatura física.',
    icon: <FileCheck2 size={26} />,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-28 px-8 bg-[#0d1f3c] relative overflow-hidden">
      {/* Grid texture */}
      <div className="absolute inset-0 bg-grid-texture pointer-events-none" />

      <div className="max-w-275 mx-auto text-center relative z-10">
        <ScrollAnimation>
          <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] uppercase text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/25 px-3.5 py-1.5 rounded-full mb-4">
            Vantagens
          </span>
          <h2 className="font-sora text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-white tracking-[-0.03em] leading-[1.2]">
            Principais Benefícios
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {benefits.map(({ title, description, icon }, i) => (
            <ScrollAnimation key={title} delay={(i + 1) as 1 | 2 | 3 | 4}>
              <div className="group bg-white/4 border border-white/8 rounded-2xl p-8 text-left transition-all duration-300 hover:bg-white/[0.07] hover:border-[#38bdf8]/25 hover:-translate-y-1">
                <div className="w-13 h-13 rounded-2xl bg-blue-700/20 border border-blue-700/30 flex items-center justify-center mb-5 text-[#38bdf8] transition-all duration-300 group-hover:bg-[#38bdf8]/20 group-hover:border-[#38bdf8]/40">
                  {icon}
                </div>
                <h3 className="font-sora text-base font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-white/45 leading-[1.65]">{description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
