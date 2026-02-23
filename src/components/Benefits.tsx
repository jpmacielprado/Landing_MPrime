import React from 'react';
import { Globe, Video, Phone, PlusCircle, Star } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';

const diffs = [
  {
    title: 'Avaliação Máxima',
    description: 'Mais de 6.000 avaliações positivas no Google',
    icon: <Globe size={22} />,
  },
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

const ratingBars = [
  { label: '5', pct: 88 },
  { label: '4', pct: 9  },
  { label: '3', pct: 2  },
  { label: '2', pct: 1  },
  { label: '1', pct: 0  },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-28 px-8 bg-[#f8faff]">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Left: differentials */}
        <div>
          <ScrollAnimation>
            <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] uppercase text-blue-700 bg-blue-700/[0.08] border border-blue-700/15 px-3.5 py-1.5 rounded-full mb-4">
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700/10 to-[#38bdf8]/10 border border-blue-700/15 flex items-center justify-center text-blue-700 flex-shrink-0">
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
            {/* Blob behind card */}
            <div className="absolute inset-0 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-blue-700/06 to-[#38bdf8]/06 blur-[40px] -z-10" />

            <div className="bg-white rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)] w-full max-w-[300px]">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#4285f4] flex items-center justify-center text-white font-black text-xl">
                  G
                </div>
                <div>
                  <p className="font-sora text-sm font-bold text-[#0d1f3c]">Google Reviews</p>
                  <p className="text-xs text-slate-400">Avaliação dos clientes</p>
                </div>
              </div>

              {/* Score */}
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-sora text-[3rem] font-extrabold text-[#0d1f3c] tracking-[-0.04em]">
                  4.9
                </span>
                <div className="flex gap-0.5 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={17} className="text-amber-400" fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-400 mb-4">+6.000 avaliações</p>

              {/* Bars */}
              <div className="flex flex-col gap-2">
                {ratingBars.map(({ label, pct }) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className="text-xs text-slate-400 w-3">{label}</span>
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400 rounded-full"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>

      </div>
    </section>
  );
};

export default Benefits;
