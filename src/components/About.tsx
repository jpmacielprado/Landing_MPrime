import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section className="py-30 bg-linear-to-b from-[#e0f2fe] to-white">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl">
                    {/* Título Principal */}
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
                        O que é o Certificado Digital?
                    </h2>

                    {/* Descrição em parágrafo */}
                    <p className="text-lg text-slate-600 leading-relaxed mb-10">
                        O certificado digital é a tecnologia que garante autenticidade e segurança em
                        transações online. Com ele, você assina documentos, acessa o portal da Receita
                        Federal e emite Notas Fiscais com validade jurídica, sem sair de casa.
                    </p>

                    {/* Lista de Benefícios */}
                    <ul className="space-y-6">
                        <li className="flex items-center gap-4">
                            <div className="bg-blue-100 p-1 rounded-full">
                                <CheckCircle2 className="text-blue-600 w-6 h-6" />
                            </div>
                            <p className="text-lg text-slate-700">
                                <span className="font-bold text-black">Autenticidade garantida</span> para seus documentos.
                            </p>
                        </li>

                        <li className="flex items-center gap-4">
                            <div className="bg-blue-100 p-1 rounded-full">
                                <CheckCircle2 className="text-blue-600 w-6 h-6" />
                            </div>
                            <p className="text-lg text-slate-700">
                                <span className="font-bold text-black">Acesse o portal da Receita Federal</span> com seu Certificado.
                            </p>
                        </li>

                        <li className="flex items-center gap-4">
                            <div className="bg-blue-100 p-1 rounded-full">
                                <CheckCircle2 className="text-blue-600 w-6 h-6" />
                            </div>
                            <p className="text-lg text-slate-700">
                                <span className="font-bold text-black">Emita Notas Fiscais</span> com valor jurídico, de qualquer lugar.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;