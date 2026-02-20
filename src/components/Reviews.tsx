import React from 'react';
import { ScrollAnimation } from './ScrollAnimation';
import { Star, User, UserRound } from 'lucide-react'; // Importando os dois ícones

interface Review {
    name: string;
    text: string;
    date: string;
    gender: 'homem' | 'mulher'; // Definindo as opções de sexo
}

const reviews: Review[] = [
    {
        name: 'Carlos Mendes',
        text: 'Consegui meu certificado muito rápido e o atendimento foi excelente.',
        date: '10/02/2026',
        gender: 'homem',
    },
    {
        name: 'Juliana Rocha',
        text: 'Fiz tudo pelo celular foi fácil e sem complicação recomendo muito.',
        date: '10/02/2026',
        gender: 'mulher',
    },
    {
        name: 'Camila Ferreira',
        text: 'Fiz por videoconferência foi prático e economizei tempo.',
        date: '10/02/2026',
        gender: 'mulher',
    },
];
const Testimonials: React.FC = () => {
    return (
        <section id="reviews" className="py-20 bg-[#e0f2fe]">
            <div className="container mx-auto px-6 text-center">
                <ScrollAnimation>
                    <h2 className="text-3xl font-bold text-[#1e3a8a] mb-12">
                        Depoimento dos clientes
                    </h2>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <ScrollAnimation key={index}>
                            <div className="bg-[#dcf0ff] p-8 rounded-2xl flex flex-col items-start text-left shadow-sm hover:shadow-md transition-shadow relative h-full">


                                <div className="w-12 h-12 bg-[#4a72b2] rounded-full flex items-center justify-center text-white shrink-0 shadow-inner">
                                    {review.gender === 'homem' ? (
                                        <User size={28} />
                                    ) : (
                                        <UserRound size={28} />
                                    )}
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold text-[#1e3a8a]">
                                        {review.name} <span className="text-[10px] text-slate-500 uppercase font-medium">
                                            {review.date}
                                        </span>
                                    </h3>
                                </div>

                                <div>
                                    <p className="text-slate-700 leading-relaxed mb-6 italic grow">
                                        "{review.text}"
                                    </p>
                                </div>


                                <div className="flex gap-1 mb-4 text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;