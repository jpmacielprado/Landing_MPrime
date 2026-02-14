import React from 'react';
import { ShieldCheck, PiggyBank, PenTool, FileCheck2 } from 'lucide-react';

const benefits = [
    {
        title: 'Segurança',
        description: 'Criptografia de ponta para proteger seus dados.',
        icon: <ShieldCheck size={40} className="text-[#1e3a8a]" />,
    },
    {
        title: 'Economia',
        description: 'Elimine gastos com papel, impressões e idas ao cartório.',
        icon: <PiggyBank size={40} className="text-[#1e3a8a]" />,
    },
    {
        title: 'Praticidade',
        description: 'Assine contratos de qualquer lugar do mundo.',
        icon: <PenTool size={40} className="text-[#1e3a8a]" />,
    },
    {
        title: 'Validade Legal',
        description: 'Mesmo valor legal que a assinatura física.',
        icon: <FileCheck2 size={40} className="text-[#1e3a8a]" />,
    },
];

const Features: React.FC = () => {
    return (
        <section className="py-16 bg-[#e0f2fe]">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-[#1e3a8a] mb-12">
                    Principais Benefícios
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow border border-white"
                        >
                            <div className="mb-6">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;