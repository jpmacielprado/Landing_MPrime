import React, { useState, useEffect } from 'react';
import { ShieldCheck, MessageSquareText, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre Nós', href: '#about' },
    { label: 'Preços', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a162c]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="group inline-flex items-center gap-2.5 font-sora font-extrabold text-xl sm:text-2xl text-white tracking-tight no-underline transition-transform duration-200 hover:scale-105"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-[#38bdf8] flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.4)] group-hover:shadow-[0_0_25px_rgba(56,189,248,0.6)] transition-all">
            <ShieldCheck size={22} className="text-white" />
          </div>
          <span>MPrime</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 no-underline relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#38bdf8] hover:after:w-full after:transition-all after:duration-300"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/5512991631525?text=Olá%20MPrime%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20certificados%20digitais."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-blue-500 to-[#38bdf8] text-white px-5 py-2.5 rounded-xl font-sora font-bold text-xs uppercase tracking-wider shadow-[0_4px_20px_rgba(59,130,246,0.35)] hover:shadow-[0_6px_25px_rgba(56,189,248,0.5)] hover:-translate-y-0.5 transition-all duration-200 no-underline"
          >
            <MessageSquareText size={16} />
            Contratar serviços
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white focus:outline-none"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a162c]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col gap-4 mb-6">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-white/80 hover:text-white transition-colors duration-200 no-underline py-2 border-b border-white/5"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/5512991631525?text=Olá%20MPrime%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20certificados%20digitais."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 to-[#38bdf8] text-white px-6 py-3.5 rounded-xl font-sora font-bold text-sm shadow-[0_4px_20px_rgba(59,130,246,0.35)] no-underline"
          >
            <MessageSquareText size={18} />
            Contratar serviços
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
