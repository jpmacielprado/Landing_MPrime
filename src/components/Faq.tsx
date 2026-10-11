import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'O que é necessário para emitir o certificado por videoconferência?',
    answer:
      'Você precisará de um computador com câmera ou um smartphone, além de um documento de identidade original (RG, CNH ou Passaporte) e estar em um ambiente bem iluminado.',
  },
  {
    question: 'Qual a diferença entre o Certificado A1 e o A3?',
    answer:
      'O A1 é um arquivo digital instalado diretamente no computador com validade de 1 ano. O A3 fica armazenado em uma mídia física (cartão ou token) e pode ter validade de até 3 anos.',
  },
  {
    question: 'Quanto tempo leva para o certificado ficar pronto?',
    answer:
      'Após a validação, a emissão costuma ser imediata. O processo todo de atendimento leva cerca de 15 a 30 minutos.',
  },
  {
    question: 'Posso usar o e-CPF para emitir notas fiscais da minha empresa?',
    answer:
      'Não. Para emissão de notas fiscais de pessoa jurídica, é necessário o e-CNPJ ou um certificado específico de NF-e.',
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-28 px-6 sm:px-8 lg:px-12 bg-white relative overflow-hidden">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollAnimation>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-4 shadow-xs">
            Dúvidas
          </span>
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a162c] tracking-tight leading-[1.18] mb-14">
            Perguntas Frequentes
          </h2>
        </ScrollAnimation>

        <div className="flex flex-col gap-4 text-left">
          {faqData.map(({ question, answer }, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollAnimation key={i} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-blue-400/60 bg-white shadow-lg ring-1 ring-blue-400/20'
                      : 'border-slate-200/90 bg-slate-50/70 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 px-6 sm:px-8 py-5.5 text-left transition-colors duration-200 cursor-pointer focus:outline-none"
                  >
                    <span
                      className={`font-sora text-base sm:text-lg font-bold transition-colors duration-200 ${
                        isOpen ? 'text-blue-600' : 'text-[#0a162c]'
                      }`}
                    >
                      {question}
                    </span>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-blue-600 text-white rotate-180 shadow-sm'
                          : 'bg-slate-200/70 text-slate-600'
                      }`}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  {/* Accordion body */}
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: isOpen ? '240px' : '0px',
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="px-6 sm:px-8 pb-6 pt-1">
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal border-t border-slate-100 pt-4">
                        {answer}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
