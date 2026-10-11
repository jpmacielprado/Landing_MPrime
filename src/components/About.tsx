import React from 'react';
import { CheckIcon } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';

const steps = [
  { num: '1', text: 'Escolha seu plano e efetue o pagamento' },
  { num: '2', text: 'Agende sua videoconferência com um especialista' },
  { num: '3', text: 'Receba seu certificado digital instantaneamente' },
];

const checkItems = [
  { bold: 'Autenticidade garantida', rest: ' para seus documentos.' },
  { bold: 'Acesse o portal da Receita Federal', rest: ' com seu Certificado.' },
  { bold: 'Emita Notas Fiscais', rest: ' com valor jurídico, de qualquer lugar.' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-28 px-6 sm:px-8 lg:px-12 bg-slate-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-20 items-center relative z-10">

        {/* Left: text (7 cols) */}
        <div className="lg:col-span-7">
          <ScrollAnimation>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-5 shadow-xs">
              O que é
            </span>

            <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a162c] tracking-tight leading-[1.18] mb-6">
              O que é o Certificado Digital?
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl font-normal">
              O certificado digital é a tecnologia que garante autenticidade e segurança em
              transações online. Com ele, você assina documentos, acessa o portal da Receita
              Federal e emite Notas Fiscais com validade jurídica, sem sair de casa.
            </p>

            <ul className="flex flex-col gap-4">
              {checkItems.map(({ bold, rest }) => (
                <li
                  key={bold}
                  className="group flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-400/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-[#38bdf8] flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-105 transition-transform">
                    <CheckIcon size={16} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 text-base leading-relaxed pt-0.5">
                    <strong className="font-bold text-[#0a162c]">{bold}</strong>
                    {rest}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollAnimation>
        </div>

        {/* Right: steps card (5 cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <ScrollAnimation delay={2} className="w-full max-w-md">
            <div className="relative bg-gradient-to-br from-[#0c1a30] via-[#091528] to-[#071326] rounded-3xl p-8 sm:p-9 border border-white/12 shadow-[0_25px_60px_-15px_rgba(10,22,44,0.4)] overflow-hidden">
              {/* Subtle card glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

              <p className="text-xs tracking-widest uppercase font-bold text-sky-400 mb-2">
                Como funciona
              </p>
              <p className="font-sora text-2xl font-bold text-white mb-8">
                Emissão em 3 passos simples
              </p>

              <div className="flex flex-col relative">
                {/* Connecting timeline line */}
                <div className="absolute left-4 top-5 bottom-6 w-0.5 bg-gradient-to-b from-[#38bdf8]/40 via-blue-500/30 to-transparent pointer-events-none" />

                {steps.map(({ num, text }, i) => (
                  <div
                    key={num}
                    className={`relative flex items-start gap-5 py-4.5 ${
                      i < steps.length - 1 ? 'border-b border-white/8' : ''
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#38bdf8]/20 to-blue-600/30 border border-[#38bdf8]/50 flex items-center justify-center font-sora font-extrabold text-sm text-[#38bdf8] shrink-0 z-10 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                      {num}
                    </div>
                    <span className="text-slate-200 text-sm sm:text-base font-medium leading-snug pt-1">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>

      </div>
    </section>
  );
};

export default About;
