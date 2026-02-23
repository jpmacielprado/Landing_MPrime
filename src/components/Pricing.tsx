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
    checkoutUrl: 'https://link.mercadopago.com.br/seulink-ecpf-a1',
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
    checkoutUrl: 'https://link.mercadopago.com.br/seulink-ecnpj-a1',
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
    checkoutUrl: 'https://link.mercadopago.com.br/seulink-ecpf-a3',
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-28 px-8 bg-[#f8faff]">
      <div className="max-w-275 mx-auto">
        <ScrollAnimation className="text-center">
          <span className="inline-block text-[0.75rem] font-bold tracking-[0.12em] uppercase text-blue-700 bg-blue-700/8border border-blue-700/15 px-3.5 py-1.5 rounded-full mb-4">
            Planos
          </span>
          <h2 className="font-sora text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold text-[#0d1f3c] tracking-[-0.03em] leading-[1.2] mb-4">
            Preços Transparentes
          </h2>
          <p className="text-slate-500 text-lg max-w-125mx-auto">
            Emita seu certificado sem sair de casa. Escolha a melhor opção para você ou sua empresa.
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 items-start">
          {plans.map(({ name, description, price, features, highlight, checkoutUrl }, i) => (
            <ScrollAnimation key={name} delay={(i + 1) as 1 | 2 | 3}>
              <div
                className={[
                  'relative rounded-3xl p-8 border transition-all duration-300',
                  highlight
                    ? 'bg-[#0d1f3c] border-transparent scale-[1.04] shadow-[0_30px_60px_rgba(13,31,60,0.3)]'
                    : 'bg-white border-slate-200 shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1',
                ].join(' ')}
              >
                {/* Popular badge */}
                {highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-sora text-[0.7rem] font-extrabold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-[0_4px_12px_rgba(16,185,129,0.4)] whitespace-nowrap">
                    Mais Popular
                  </div>
                )}

                {/* Name + Description */}
                <h3 className={`font-sora text-2xl font-extrabold tracking-[-0.02em] mb-1.5 ${highlight ? 'text-white' : 'text-[#0d1f3c]'}`}>
                  {name}
                </h3>
                <p className={`text-sm min-h-[2.5em] mb-6 leading-normal ${highlight ? 'text-white/50' : 'text-slate-400'}`}>
                  {description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-7">
                  <span className={`text-base font-semibold ${highlight ? 'text-white/50' : 'text-slate-400'}`}>R$</span>
                  <span className={`font-sora text-[2.75rem] font-extrabold tracking-[-0.04em] ${highlight ? 'text-white' : 'text-[#0d1f3c]'}`}>
                    {price}
                  </span>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8 min-h-40">
                  {features.map((feat) => (
                    <li key={feat} className={`flex items-start gap-3 text-sm leading-snug ${highlight ? 'text-white/70' : 'text-slate-600'}`}>
                      <Check
                        size={16}
                        className={`shrink-0 mt-0.5 ${highlight ? 'text-[#38bdf8]' : 'text-emerald-500'}`}
                        strokeWidth={2.5}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={[
                    'w-full py-3.5 rounded-xl font-sora font-bold text-[0.95rem] flex items-center justify-center gap-2.5 transition-all duration-200 active:scale-95 no-underline',
                    highlight
                      ? 'bg-white text-[#0d1f3c] shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:bg-[#e0f2fe]'
                      : 'bg-[#0d1f3c] text-white hover:bg-[#162d55]',
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
