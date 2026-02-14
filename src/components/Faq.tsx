import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "O que é necessário para emitir o certificado por videoconferência?",
        answer: "Você precisará de um computador com câmera ou um smartphone, além de um documento de identidade original (RG, CNH ou Passaporte) e estar em um ambiente bem iluminado."
    },
    {
        question: "Qual a diferença entre o Certificado A1 e o A3?",
        answer: "O A1 é um arquivo digital instalado diretamente no computador com validade de 1 ano. O A3 fica armazenado em uma mídia física (cartão ou token) e pode ter validade de até 3 anos."
    },
    {
        question: "Quanto tempo leva para o certificado ficar pronto?",
        answer: "Após a validação, a emissão costuma ser imediata. O processo todo de atendimento leva cerca de 15 a 30 minutos."
    },
    {
        question: "Posso usar o e-CPF para emitir notas fiscais da minha empresa?",
        answer: "Não. Para emissão de notas fiscais de pessoa jurídica, é necessário o e-CNPJ ou um certificado específico de NF-e."
    }
];

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-[#e0f2fe]">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-3xl font-bold text-[#1e3a8a] mb-12 text-center">
                    Dúvidas Frequentes
                </h2>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="font-bold text-swhite md:text-lg">
                                    {item.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="text-blue-600 shrink-0" />
                                ) : (
                                    <ChevronDown className="text-slate-400 shrink-0" />
                                )}
                            </button>

                            {openIndex === index && (
                                <div className="p-6 bg-white text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;