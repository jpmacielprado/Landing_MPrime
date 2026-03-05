import React from 'react';
import { Video, Phone, PlusCircle } from 'lucide-react';
import Doc from '../assets/doc.svg';
import { ScrollAnimation } from './ScrollAnimation';

const diffs = [
  {
    title: 'Flexibilidade',
    description: 'Emissão por Videoconferência — você faz tudo pelo celular ou computador.',
    icon: <Video size={22} />,
  },
  {
    title: 'Suporte Técnico',
    description: 'Auxílio na instalação e uso do certificado.',
    icon: <Phone size={22} />,
  },
  {
    title: 'Elo+',
    description: 'Opção de garantia estendida para sua certificação.',
    icon: <PlusCircle size={22} />,
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-28 px-8 bg-[#f8faff]">
      <div className="max-w-275 mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Left: differentials */}
        <div>
          <ScrollAnimation>
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] uppercase text-blue-700 bg-blue-700/8border border-blue-700/15 px-3.5 py-1.5 rounded-full mb-4">
              Diferenciais
            </span>
            <h2 className="font-sora text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-[#0d1f3c] tracking-[-0.03em] leading-[1.2]">
              Nossos Diferenciais
            </h2>
          </ScrollAnimation>

          <div className="flex flex-col gap-1 mt-8">
            {diffs.map(({ title, description, icon }, i) => (
              <ScrollAnimation key={title} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <div className="flex gap-5 items-start p-5 rounded-2xl border border-transparent transition-all duration-200 hover:bg-white hover:border-slate-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-700/10 to-[#38bdf8]/10 border border-blue-700/15 flex items-center justify-center text-blue-700 shrink-0">
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-sora text-base font-bold text-[#0d1f3c] mb-1">{title}</h3>
                    <p className="text-sm text-slate-500 leading-[1.6]">{description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        {/* Right: Google rating card */}
        <ScrollAnimation delay={2} className="flex justify-center items-center">
          <div className="relative">
            <img src={Doc} alt="Documento" loading="lazy" className="w-full max-w-65 h-auto" />
          </div>
        </ScrollAnimation>

      </div>
    </section>
  );
};

export default Benefits;
