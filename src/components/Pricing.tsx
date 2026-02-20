import React from 'react';
import { Check, ShoppingCart } from 'lucide-react';

interface Plan {
    name: string;
    description: string;
    price: string;
    features: string[];
    highlight: boolean;
    checkoutUrl: string; // Link gerado no Mercado Pago
}

const plans: Plan[] = [
    {
        name: 'e-CPF A1',
        description: 'Pessoa Física - 12 meses. Instalação no computador.',
        price: '149,90',
        features: [
            'Validade de 1 ano',
            'Assinatura de documentos digital',
            'Acesso ao e-CAC e Receita Federal',
            'Emissão via Videoconferência'
        ],
        highlight: false,
        checkoutUrl: 'https://wa.me/5512991337334?text=Olá%20MPrime%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20e-CPF%20A1.',
    },
    {
        name: 'e-CNPJ A1',
        description: 'Pessoa Jurídica - 12 meses. O mais versátil.',
        price: '199,90',
        features: [
            'Validade de 1 ano',
            'Emissão de Notas Fiscais (NF-e)',
            'Conectividade Social ICP',
            'Uso em sistemas de gestão (ERP)'
        ],
        highlight: true,
        checkoutUrl: 'https://wa.me/5512991337334?text=Olá%20MPrime%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20e-CNPJ%20A1.',
    },
    {
        name: 'e-CPF A3',
        description: 'Segurança máxima em mídia física (Cartão/Token).',
        price: '494,90',
        features: [
            'Validade de até 3 anos',
            'Mídia física inclusa',
            'Não pode ser copiado (maior segurança)',
            'Ideal para advogados e contadores'
        ],
        highlight: false,
        checkoutUrl: 'https://wa.me/5512991337334?text=Olá%20MPrime%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20e-CPF%20A3.',
    },
];

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-24 bg-slate-50 scroll-mt-20">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-[#1e3a8a] mb-4">
                        Planos e Preços
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Emita seu certificado sem sair de casa. Escolha a melhor opção para você ou sua empresa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-3xl transition-all duration-300 border ${plan.highlight
                                ? 'bg-[#1e3a8a] text-white scale-105 shadow-2xl border-transparent'
                                : 'bg-white text-slate-800 shadow-xl border-slate-100 hover:border-blue-200'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                    Mais Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-[#1e3a8a]'}`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-sm h-10 ${plan.highlight ? 'text-blue-100' : 'text-slate-500'}`}>
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mb-8 flex items-baseline gap-1">
                                <span className="text-xl font-medium">R$</span>
                                <span className="text-5xl font-black tracking-tight">{plan.price}</span>
                            </div>

                            <ul className="space-y-4 mb-10 min-h-40">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-start gap-3 text-sm leading-tight">
                                        <Check size={18} className={`shrink-0 ${plan.highlight ? 'text-blue-300' : 'text-green-600'}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={plan.checkoutUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 ${plan.highlight
                                    ? 'bg-white hover:bg-blue-200 text-[#0f172a] shadow-lg shadow-blue-400/20'
                                    : 'bg-[#1e3a8a] hover:bg-[#162a63] text-white'
                                    }`}
                            >
                                <ShoppingCart size={20} />
                                Comprar Agora
                            </a>

                            <p className={`mt-4 text-center text-[10px] uppercase tracking-widest font-semibold ${plan.highlight ? 'text-blue-200' : 'text-slate-400'}`}>
                                Pagamento Seguro via Mercado Pago
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;