import React from 'react';

const reviews = [
    {
        name: 'Carlos Mendes',
        text: 'Consegui meu certificado muito rápido e o atendimento foi excelente.',
        date: '10/02/2026',
    },
    {
        name: 'Juliana Rocha',
        text: 'Fiz tudo pelo celular foi fácil e sem complicação recomendo muito.',
        date: '10/02/2026',
    },
    {
        name: 'Camila Ferreira',
        text: 'Fiz por videoconferência foi prático e economizei tempo.',
        date: '10/02/2026',
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 bg-[#e0f2fe]">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-[#1e3a8a] mb-12">
                    Depoimento dos clientes
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-[#dcf0ff] p-8 rounded-2xl flex flex-col items-start text-left shadow-sm relative"
                        >
                            {/* Avatar Simbolizado (Círculo Azul) */}
                            <div className="w-12 h-12 bg-[#4a72b2] rounded-full mb-4" />

                            <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">
                                {review.name}
                            </h3>

                            <p className="text-slate-700 leading-relaxed mb-6 italic">
                                "{review.text}"
                            </p>

                            <span className="text-xs text-slate-500 mt-auto self-end font-medium">
                                {review.date}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;