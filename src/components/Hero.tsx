import React from 'react';
import { MessageSquareText, } from 'lucide-react';
import Segurança from '../assets/seguranca.svg';
import { ScrollAnimation } from '../components/ScrollAnimation';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center bg-linear-to-br from-[#1e3a5f] to-[#0f172a] text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/10 skew-x-12 transform translate-x-20" />

            <ScrollAnimation>
                <div className="px-12  grid md:grid-cols-2 gap-12 items-center relative z-10">

                    {/* Lado Esquerdo: Texto e CTA */}
                    <div className="space-y-8">

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            Sua Identidade Digital com <span className="text-blue-400">Segurança e Agilidade.</span>
                        </h1>

                        <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
                            Emita seu Certificado Digital e-CPF ou e-CNPJ com quem é referência.
                            Atendimento por videoconferência em poucos minutos.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/5512991337334?text=Olá%20MPrime%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20certificados%20digitais."
                                target="_blank"
                                className="flex items-center justify-center gap-2 bg-[#253548] hover:bg-[#1e2a3a] px-8 py-4 rounded-lg font-bold text-white transition-all transform hover:scale-105 shadow-lg shadow-black/20"
                            >
                                <MessageSquareText size={20} />
                                Contratar serviços
                            </a>
                        </div>
                    </div>

                    {/* Lado Direito: Imagem/Mockup */}
                    <div className="relative hidden md:block">
                        <div className="relative z-20 transform hover:scale-101 transition-transform duration-300">
                            <img
                                src={Segurança}
                                alt="Segurança Digital"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>

                        {/* Brilho decorativo atrás da imagem */}
                        <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full" />
                    </div>
                </div>
            </ScrollAnimation>
        </section >
    );
};

export default Hero;