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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-28 px-8 bg-white">
      <div className="max-w-[700px] mx-auto text-center">
        <ScrollAnimation>
          <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] uppercase text-blue-700 bg-blue-700/[0.08] border border-blue-700/15 px-3.5 py-1.5 rounded-full mb-4">
            Dúvidas
          </span>
          <h2 className="font-sora text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-[#0d1f3c] tracking-[-0.03em] leading-[1.2] mb-12">
            Perguntas Frequentes
          </h2>
        </ScrollAnimation>

        <div className="flex flex-col gap-3 text-left">
          {faqData.map(({ question, answer }, i) => (
            <ScrollAnimation key={i} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div
                className={[
                  'border rounded-2xl overflow-hidden transition-colors duration-200',
                  openIndex === i ? 'border-blue-700/25' : 'border-slate-200',
                ].join(' ')}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 bg-[#f8faff] hover:bg-[#f0f4ff]"
                  style={{ background: openIndex === i ? '#ffffff' : undefined }}
                >
                  <span className="font-sora text-sm font-bold text-[#0d1f3c] md:text-base">
                    {question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={[
                      'flex-shrink-0 text-blue-500 transition-transform duration-300',
                      openIndex === i ? 'rotate-180' : '',
                    ].join(' ')}
                  />
                </button>

                {/* Accordion body */}
                <div
                  className="overflow-hidden bg-white transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: openIndex === i ? '200px' : '0px',
                    paddingTop: openIndex === i ? undefined : '0',
                    paddingBottom: openIndex === i ? undefined : '0',
                  }}
                >
                  <p className="px-6 pb-5 pt-0 text-sm text-slate-500 leading-[1.75]">
                    {answer}
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
