import React from 'react';
import { Check, ShoppingCart } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';

interface Plan {
  name: string;
  description: string;
  price: string;
  features: string[];
  highlight: boolean;
  checkoutUrl: string;
}

const plans: Plan[] = [
  {
    name: 'e-CPF A1',
    description: 'Pessoa Física · 12 meses. Instalação no computador.',
    price: '149,90',
    features: [
      'Validade de 1 ano',
      'Assinatura de documentos digital',
      'Acesso ao e-CAC e Receita Federal',
      'Emissão via Videoconferência',
    ],
    highlight: false,
    checkoutUrl: 'https://wa.me/5512991631525?text=Olá%20MPrime%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20e-CPF%20A1.',
  },
  {
    name: 'e-CNPJ A1',
    description: 'Pessoa Jurídica · 12 meses. O mais versátil.',
    price: '199,90',
    features: [
      'Validade de 1 ano',
      'Emissão de Notas Fiscais (NF-e)',
      'Conectividade Social ICP',
      'Uso em sistemas de gestão (ERP)',
    ],
    highlight: true,
    checkoutUrl: 'https://wa.me/5512991631525?text=Olá%20MPrime%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20e-CNPJ%20A1.',
  },
  {
    name: 'e-CPF A3',
    description: 'Segurança máxima em mídia física (Cartão/Token).',
    price: '494,90',
    features: [
      'Validade de até 3 anos',
      'Mídia física inclusa',
      'Não pode ser copiado (maior segurança)',
      'Ideal para advogados e contadores',
    ],
    highlight: false,
    checkoutUrl: 'https://wa.me/5512991631525?text=Olá%20MPrime%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20e-CPF%20A3.',
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-28 px-6 sm:px-8 lg:px-12 bg-slate-50 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollAnimation className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-50 border border-blue-200/80 px-3.5 py-1.5 rounded-full mb-4 shadow-xs">
            Planos
          </span>
          <h2 className="font-sora text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a162c] tracking-tight leading-[1.18] mb-4">
            Preços Transparentes
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-normal">
            Emita seu certificado sem sair de casa. Escolha a melhor opção para você ou sua empresa.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 items-stretch">
          {plans.map(({ name, description, price, features, highlight, checkoutUrl }, i) => (
            <ScrollAnimation key={name} delay={(i + 1) as 1 | 2 | 3} className="h-full">
              <div
                className={[
                  'relative rounded-3xl p-8 sm:p-9 border transition-all duration-300 h-full flex flex-col',
                  highlight
                    ? 'bg-gradient-to-b from-[#0c1a30] via-[#091528] to-[#071326] border-sky-400/40 shadow-[0_25px_60px_-15px_rgba(10,22,44,0.45)] md:-translate-y-2 md:scale-105 z-20'
                    : 'bg-white border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1',
                ].join(' ')}
              >
                {/* Popular badge */}
                {highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-sora text-[11px] font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-[0_4px_15px_rgba(16,185,129,0.4)] whitespace-nowrap flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Mais Popular
                  </div>
                )}

                {/* Name + Description */}
                <div className="mb-6">
                  <h3 className={`font-sora text-2xl font-extrabold tracking-tight mb-2 ${highlight ? 'text-white' : 'text-[#0a162c]'}`}>
                    {name}
                  </h3>
                  <p className={`text-sm leading-relaxed min-h-[2.75rem] ${highlight ? 'text-slate-300' : 'text-slate-500'}`}>
                    {description}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1.5 mb-8 pb-8 border-b border-slate-200/50">
                  <span className={`text-lg font-bold ${highlight ? 'text-sky-400' : 'text-slate-400'}`}>
                    R$
                  </span>
                  <span className={`font-sora text-4xl sm:text-5xl font-extrabold tracking-tight ${highlight ? 'text-white' : 'text-[#0a162c]'}`}>
                    {price}
                  </span>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3.5 mb-10 flex-1">
                  {features.map((feat) => (
                    <li key={feat} className={`flex items-start gap-3 text-sm leading-relaxed ${highlight ? 'text-slate-200' : 'text-slate-600'}`}>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${highlight ? 'bg-sky-400/20 text-[#38bdf8]' : 'bg-emerald-50 text-emerald-600'}`}>
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    'w-full py-4 rounded-2xl font-sora font-bold text-sm flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-98 no-underline shadow-md',
                    highlight
                      ? 'bg-gradient-to-r from-blue-500 via-sky-400 to-[#38bdf8] text-white hover:shadow-[0_8px_25px_rgba(56,189,248,0.5)] hover:-translate-y-0.5'
                      : 'bg-[#0a162c] text-white hover:bg-blue-900 hover:shadow-lg',
                  ].join(' ')}
                >
                  <ShoppingCart size={18} />
                  Comprar Agora
                </a>

              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
