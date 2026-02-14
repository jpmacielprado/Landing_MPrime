import React from 'react';
import Doc from '../assets/doc.svg';
import { Chrome, Video, Headphones, PlusCircle } from 'lucide-react';
import { ScrollAnimation } from '../components/ScrollAnimation';

const Differences: React.FC = () => {
    const diffs = [
        {
            title: 'Avaliação Máxima',
            description: 'Mais de 6.000 avaliações positivas no Google',
            icon: <Chrome className="text-[#1e3a8a]" size={28} />,
        },
        {
            title: 'Flexibilidade',
            description: 'Emissão por Videoconferência (você faz tudo pelo celular/computador).',
            icon: <Video className="text-[#1e3a8a]" size={28} />,
        },
        {
            title: 'Suporte Técnico',
            description: 'Auxílio na instalação e uso do certificado.',
            icon: <Headphones className="text-[#1e3a8a]" size={28} />,
        },
        {
            title: 'Elo+',
            description: 'Opção de garantia estendida para sua certificação.',
            icon: <PlusCircle className="text-[#1e3a8a]" size={28} />,
        },
    ];

    return (
        <section id="benefits" className="py-24 px-10 bg-[#e0f2fe]">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Lado Esquerdo: Lista de Diferenciais */}
                <div className="space-y-10">
                    <ScrollAnimation>
                        <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8">
                            Nossos Diferenciais
                        </h2>
                    </ScrollAnimation>

                    <div className="space-y-8">
                        {diffs.map((item, index) => (
                            <div key={index} className="flex gap-5">
                                <ScrollAnimation delay={0.3}>
                                    <div className="shrink-0 mt-1">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed max-w-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lado Direito: Imagem Ilustrativa */}
                <div className="relative flex justify-center">
                    {/* Sombra/Brilho atrás da imagem */}
                    <div className="absolute inset-0 bg-blue-400/10 blur-3xl rounded-full transform scale-75" />

                    <img
                        src={Doc}
                        className="relative z-10 w-full max-w-100 drop-shadow-2xl"
                    />
                </div>

            </div>
        </section >
    );
};

export default Differences;