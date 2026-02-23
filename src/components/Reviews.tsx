import React from 'react';
import { Star, User } from 'lucide-react';
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
    <section id="reviews" className="py-28 px-8 bg-[#0d1f3c] relative overflow-hidden">
      {/* Grid texture */}
      <div className="absolute inset-0 bg-grid-texture pointer-events-none" />

      <div className="max-w-[1100px] mx-auto text-center relative z-10">
        <ScrollAnimation>
          <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] uppercase text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/25 px-3.5 py-1.5 rounded-full mb-4">
            Depoimentos
          </span>
          <h2 className="font-sora text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-white tracking-[-0.03em] leading-[1.2]">
            O que nossos clientes dizem
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {reviews.map(({ name, text, date }, i) => (
            <ScrollAnimation key={name} delay={(i + 1) as 1 | 2 | 3}>
              <div className="relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 text-left transition-all duration-300 hover:border-[#38bdf8]/20 h-full flex flex-col">
                {/* Decorative quote */}
                <span className="absolute top-6 right-6 text-5xl leading-none text-white/[0.06] font-serif select-none">
                  "
                </span>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={15} className="text-amber-400" fill="currentColor" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm text-white/65 leading-[1.75] italic flex-1 mb-6">
                  "{text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-white/[0.06] pt-4">
                  <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-blue-500 to-[#38bdf8] flex items-center justify-center flex-shrink-0">
                    <User size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-sora text-sm font-bold text-white">{name}</p>
                    <p className="text-xs text-white/35">{date}</p>
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
