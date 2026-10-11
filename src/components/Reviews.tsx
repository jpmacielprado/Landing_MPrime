import React from 'react';
import { Star, User, Quote } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';

interface Review {
  name: string;
  text: string;
  date: string;
  gender: 'homem' | 'mulher';
}

const reviews: Review[] = [
  {
    name: 'Carlos Mendes',
    text: 'Consegui meu certificado muito rápido e o atendimento foi excelente.',
    date: '10/02/2026',
    gender: 'homem',
  },
  {
    name: 'Juliana Rocha',
    text: 'Fiz tudo pelo celular, foi fácil e sem complicação — recomendo muito.',
    date: '10/02/2026',
    gender: 'mulher',
  },
  {
    name: 'Camila Ferreira',
    text: 'Fiz por videoconferência, foi prático e economizei muito tempo.',
    date: '10/02/2026',
    gender: 'mulher',
  },
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-28 px-6 sm:px-8 lg:px-12 bg-[#071326] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-blue-600/10 blur-[130px] pointer-events-none" />

      {/* Grid texture */}
      <div className="absolute inset-0 bg-grid-texture opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <ScrollAnimation>
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#38bdf8] bg-sky-950/60 border border-[#38bdf8]/30 px-4 py-1.5 rounded-full mb-4 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
            Depoimentos
          </span>
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18] max-w-2xl mx-auto">
            O que nossos clientes dizem
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 items-stretch">
          {reviews.map(({ name, text, date }, i) => (
            <ScrollAnimation key={name} delay={(i + 1) as 1 | 2 | 3}>
              <div className="group relative bg-white/[0.04] border border-white/10 hover:border-[#38bdf8]/40 rounded-3xl p-8 text-left transition-all duration-300 hover:bg-white/[0.07] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.2)] h-full flex flex-col backdrop-blur-md">
                {/* Decorative quote icon */}
                <div className="absolute top-6 right-6 text-white/10 group-hover:text-[#38bdf8]/20 transition-colors">
                  <Quote size={36} />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={18} className="text-amber-400 fill-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.4)]" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-slate-200 text-base leading-relaxed italic flex-1 mb-8 font-normal">
                  "{text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 border-t border-white/10 pt-5 mt-auto">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-[#38bdf8] p-0.5 shadow-md shrink-0">
                    <div className="w-full h-full rounded-full bg-[#071326] flex items-center justify-center">
                      <User size={20} className="text-[#38bdf8]" />
                    </div>
                  </div>
                  <div>
                    <p className="font-sora text-base font-bold text-white tracking-tight">
                      {name}
                    </p>
                    <p className="text-xs text-slate-400 font-medium">
                      {date}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
