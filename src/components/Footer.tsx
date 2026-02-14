import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0f172a] text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Coluna 1: Logo e Descrição */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
                            <ShieldCheck className="text-blue-400" />
                            <span>MPrime</span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Sua parceira de confiança para emissão de certificados digitais e-CPF e e-CNPJ com agilidade e segurança.
                        </p>
                    </div>

                    {/* Coluna 2: Links Rápidos */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Início</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Preços</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Sobre Nós</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Contacto */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Contacto</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3">
                                <Phone size={16} className="text-blue-400" />
                                (12) 99133-7334
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} className="text-blue-400" />
                                mprime@gmail.com
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-blue-400 mt-1" />
                                <span>Rua Wladimir Herzog, 182 - Bosque dos Eucaliptos<br />São José dos Campos - SP</span>
                            </li>
                        </ul>
                    </div>

                    {/* Redes Sociais */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Siga-nos</h4>
                        <div className="flex gap-4">
                            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-all">
                                <Instagram size={20} className="text-white" />
                            </a>
                            <a href="#" className="bg-slate-800 p-2 rounded-full hover:bg-blue-700 transition-all">
                                <Facebook size={20} className="text-white" />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-slate-800 text-center text-xs">
                    <p>
                        &copy; {currentYear} MPrime Gestão Empresarial. Todos os direitos reservados.
                    </p>
                    <p className="mt-2 text-slate-500">
                        Desenvolvido por filhão lindo goat ❤️
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;