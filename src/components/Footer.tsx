import React from 'react';
import { ShieldCheck, Phone, Mail, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#060e1e] text-white/55 pt-16 pb-8 border-t border-white/[0.06] px-8">
      <div className="max-w-[1100px] mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <a href="#hero" className="inline-flex items-center gap-2 font-sora font-extrabold text-xl text-white no-underline mb-4">
              <ShieldCheck size={22} className="text-[#38bdf8]" />
              MPrime
            </a>
            <p className="text-sm leading-[1.7] max-w-[240px]">
              Sua parceira de confiança para emissão de certificados digitais e-CPF e e-CNPJ com agilidade e segurança.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sora text-[0.85rem] font-bold text-white tracking-[0.05em] uppercase mb-5">
              Links Rápidos
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Início',   href: '#hero'    },
                { label: 'Preços',   href: '#pricing' },
                { label: 'Sobre Nós', href: '#about'  },
                { label: 'FAQ',      href: '#faq'     },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-white/45 no-underline transition-colors duration-200 hover:text-[#38bdf8]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sora text-[0.85rem] font-bold text-white tracking-[0.05em] uppercase mb-5">
              Contato
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2.5 text-sm">
                <Phone size={15} className="text-[#38bdf8] flex-shrink-0" />
                (12) 99163-1525
              </li>
              <li className="flex items-center gap-2.5 text-sm">
                <Mail size={15} className="text-[#38bdf8] flex-shrink-0" />
                contato@mprimegestao.com.br
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sora text-[0.85rem] font-bold text-white tracking-[0.05em] uppercase mb-5">
              Siga-nos
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/mprime_gestao/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[38px] h-[38px] rounded-xl bg-white/[0.06] flex items-center justify-center text-white/60 no-underline transition-all duration-200 hover:bg-blue-700 hover:text-white"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <span>© {year} MPrime Gestão Empresarial. Todos os direitos reservados.</span>
          <span>
            Desenvolvido por{' '}
            <a href="#" className="text-white/30 no-underline hover:text-[#38bdf8] transition-colors">
              @Jpmacielprado
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
