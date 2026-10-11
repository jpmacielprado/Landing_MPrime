import React from 'react';
import { Video, Phone, PlusCircle } from 'lucide-react';
import Doc from '../assets/doc.svg';
import { ScrollAnimation } from './ScrollAnimation';

const diffs = [
  {
    title: 'Flexibilidade',
    description: 'Emissão por Videoconferência — você faz tudo pelo celular ou computador.',
    icon: <Video size={24} />,
  },
  {
    title: 'Suporte Técnico',
    description: 'Auxílio na instalação e uso do certificado.',
    icon: <Phone size={24} />,
  },
  {
    title: 'Elo+',
    description: 'Opção de garantia estendida para sua certificação.',
    icon: <PlusCircle size={24} />,
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-28 px-6 sm:px-8 lg:px-12 bg-white relative overflow-hidden">
      {/* Decorative ambient blurred circles */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-20 items-center relative z-10">

        {/* Left: differentials (7 cols) */}
        <div className="lg:col-span-7">
          <ScrollAnimation>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-5 shadow-xs">
              Diferenciais
            </span>
            <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a162c] tracking-tight leading-[1.18] mb-10">
              Nossos Diferenciais
            </h2>
          </ScrollAnimation>

          <div className="flex flex-col gap-4">
            {diffs.map(({ title, description, icon }, i) => (
              <ScrollAnimation key={title} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <div className="group flex gap-5 items-start p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 transition-all duration-300 hover:bg-white hover:border-blue-400/50 hover:shadow-lg hover:-translate-y-0.5">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-blue-600/10 to-[#38bdf8]/15 border border-blue-600/20 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-sora text-lg font-bold text-[#0a162c] mb-1.5 tracking-tight">
                      {title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Right: Document graphic card (5 cols) */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <ScrollAnimation delay={2} className="w-full max-w-md relative">
            {/* Ambient light glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 via-sky-300/20 to-transparent rounded-3xl blur-2xl transform scale-95 pointer-events-none" />

            <div className="relative rounded-3xl bg-slate-50 border border-slate-200/80 p-8 shadow-[0_20px_50px_rgba(10,22,44,0.08)] flex justify-center items-center">
              <img
                src={Doc}
                alt="Documento"
                loading="lazy"
                className="w-full h-auto max-w-[280px] drop-shadow-[0_15px_35px_rgba(0,0,0,0.12)] hover:scale-102 transition-transform duration-300"
              />
            </div>
          </ScrollAnimation>
        </div>

      </div>
    </section>
  );
};

export default Benefits;
