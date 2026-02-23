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
    <section id="about" className="py-28 px-8 bg-[#f8faff]">
      <div className="max-w-275 mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Left: text */}
        <ScrollAnimation>
          <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] uppercase text-blue-700 bg-blue-700/8 border border-blue-700/15 px-3.5 py-1.5 rounded-full mb-4">
            O que é
          </span>

          <h2 className="font-sora text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-[#0d1f3c] tracking-[-0.03em] leading-[1.2] mb-6">
            O que é o Certificado Digital?
          </h2>

          <p className="text-lg text-slate-500 leading-[1.8] mb-10">
            O certificado digital é a tecnologia que garante autenticidade e segurança em
            transações online. Com ele, você assina documentos, acessa o portal da Receita
            Federal e emite Notas Fiscais com validade jurídica, sem sair de casa.
          </p>

          <ul className="flex flex-col gap-4">
            {checkItems.map(({ bold, rest }) => (
              <li key={bold} className="flex items-start gap-4 text-[#334155] text-base leading-[1.6]">
                <div className="w-7 h-7 rounded-lg bg-linear-to-br from-blue-600 to-[#38bdf8] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <CheckIcon size={14} className="text-white" strokeWidth={3} />
                </div>
                <span>
                  <strong className="font-bold">{bold}</strong>
                  {rest}
                </span>
              </li>
            ))}
          </ul>
        </ScrollAnimation>

        {/* Right: steps card */}
        <ScrollAnimation delay={2} className="flex justify-center">
          <div className="relative bg-[#0d1f3c] rounded-3xl p-8 w-full max-w-85overflow-hidden">    

            <p className="text-[0.7rem] tracking-widest uppercase text-white/40 mb-3">
              Como funciona
            </p>
            <p className="font-sora text-xl font-bold text-white mb-6">
              Emissão em 3 passos simples
            </p>

            <div className="flex flex-col">
              {steps.map(({ num, text }, i) => (
                <div
                  key={num}
                  className={`flex items-center gap-4 py-4 text-sm text-white/70 ${i < steps.length - 1 ? 'border-b border-white/6' : ''
                    }`}
                >
                  <div className="w-8 h-8 rounded-full bg-[#38bdf8]/15 border border-[#38bdf8]/30 flex items-center justify-center font-sora font-bold text-sm text-[#38bdf8] shrink-0">
                    {num}
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

      </div>
    </section>
  );
};

export default About;
