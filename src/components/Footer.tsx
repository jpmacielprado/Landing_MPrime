import React from 'react';
import { ShieldCheck, Phone, Mail, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#040a16] text-slate-400 pt-20 pb-12 border-t border-white/10 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">

          {/* Brand & Partner Info (5 cols) */}
          <div className="lg:col-span-5">
            <a
              href="#hero"
              className="inline-flex items-center gap-2.5 font-sora font-extrabold text-2xl text-white no-underline mb-5 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-[#38bdf8] flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.35)] group-hover:scale-105 transition-transform">
                <ShieldCheck size={22} className="text-white" />
              </div>
              <span className="tracking-tight">MPrime</span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6 font-normal">
              Sua parceira de confiança para emissão de certificados digitais e-CPF e e-CNPJ com agilidade e segurança.
            </p>

            {/* Informação de Afiliação */}
            <div className="inline-block p-4 rounded-2xl bg-white/[0.03] border border-white/8 backdrop-blur-sm">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">
                Parceiro Afiliado Autorizado
              </p>
              <p className="text-sm text-[#38bdf8] font-bold tracking-tight">
                Elo Digital Certificadora
              </p>
            </div>
          </div>

          {/* Quick links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-sora text-xs font-bold text-white tracking-widest uppercase mb-6">
              Links Rápidos
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Início', href: '#hero' },
                { label: 'Preços', href: '#pricing' },
                { label: 'Sobre Nós', href: '#about' },
                { label: 'FAQ', href: '#faq' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-slate-400 no-underline transition-all duration-200 hover:text-white hover:translate-x-1 inline-block"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-sora text-xs font-bold text-white tracking-widest uppercase mb-6">
              Contato
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href="tel:+5512991631525"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-[#38bdf8] transition-colors no-underline group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-[#38bdf8] group-hover:bg-[#38bdf8]/15 transition-colors">
                    <Phone size={15} />
                  </div>
                  <span>(12) 99163-1525</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@mprimegestao.com.br"
                  className="flex items-center gap-3 text-sm text-slate-400 hover:text-[#38bdf8] transition-colors no-underline group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-[#38bdf8] group-hover:bg-[#38bdf8]/15 transition-colors">
                    <Mail size={15} />
                  </div>
                  <span>contato@mprimegestao.com.br</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-sora text-xs font-bold text-white tracking-widest uppercase mb-6">
              Siga-nos
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/mprime_gestao/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-300 no-underline transition-all duration-300 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-[#38bdf8] hover:text-white hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(56,189,248,0.3)]"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <span>© {year} MPrime Gestão Empresarial. Todos os direitos reservados.</span>
          <span>
            Desenvolvido por{' '}
            <a
              href="https://www.instagram.com/jp.macielprado/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 font-semibold no-underline hover:text-[#38bdf8] transition-colors"
            >
              @Jpmacielprado
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
