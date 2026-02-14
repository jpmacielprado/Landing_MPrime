import React from 'react';
import { Check, ShoppingCart } from 'lucide-react';

const plans = [
    {
        name: 'e-CPF A1',
        description: 'Ideal para pessoas físicas. Uso em computador.',
        price: '149,00',
        features: ['Validade de 12 meses', 'Assinatura digital ilimitada', 'Instalação simples no PC', 'Acesso ao portal e-CAC'],
        highlight: false,
    },
    {
        name: 'e-CNPJ A1',
        description: 'Para empresas que emitem notas e acessam portais.',
        price: '229,00',
        features: ['Validade de 12 meses', 'Emissão de Notas Fiscais', 'Conectividade Social ICP', 'Instalação no servidor/PC'],
        highlight: true, // Card em destaque
    },
    {
        name: 'e-CPF A3',
        description: 'Segurança em Token ou Cartão físico.',
        price: '280,00',
        features: ['Validade de até 36 meses', 'Mídia física inclusa', 'Alta segurança criptográfica', 'Uso em qualquer computador'],
        highlight: false,
    },
];

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
                    Tabela de Preços
                </h2>
                <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
                    Escolha o modelo ideal para sua necessidade. Emissão rápida por videoconferência.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-3xl transition-all duration-300 ${plan.highlight
                                    ? 'bg-[#1e3a8a] text-white scale-105 shadow-xl z-10'
                                    : 'bg-white text-slate-800 shadow-md hover:shadow-lg border border-slate-100'
                                }`}
                        >
                            {plan.highlight && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-400 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                                    Mais Vendido
                                </span>
                            )}

                            <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-[#1e3a8a]'}`}>
                                {plan.name}
                            </h3>
                            <p className={`text-sm mb-6 ${plan.highlight ? 'text-blue-100' : 'text-slate-500'}`}>
                                {plan.description}
                            </p>

                            <div className="mb-8">
                                <span className="text-sm font-medium">R$</span>
                                <span className="text-5xl font-bold">{plan.price}</span>
                            </div>

                            <ul className="space-y-4 mb-10 text-left">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center gap-3 text-sm">
                                        <Check size={18} className={plan.highlight ? 'text-blue-300' : 'text-blue-600'} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors ${plan.highlight
                                    ? 'bg-blue-400 hover:bg-blue-500 text-white'
                                    : 'bg-[#1e3a8a] hover:bg-[#162a63] text-white'
                                }`}>
                                <ShoppingCart size={20} />
                                Comprar Agora
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;