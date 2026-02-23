import React from 'react';
import { MessageSquareText, ShieldCheck } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#0d1f3c] text-white overflow-hidden pt-32 pb-16 px-8"
    >
      {/* Background orbs */}
      <div className="absolute -top-25 -right-37.5 w-150 h-150 rounded-full bg-blue-700/25 blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-12.5 -left-25 w-100 h-100 rounded-full bg-[#38bdf8]/12 blur-[80px] pointer-events-none" />
      <div className="absolute top-[40%] left-[40%] w-50 h-50 rounded-full bg-amber-400/10 blur-[80px] pointer-events-none" />

      {/* Grid texture */}
      <div className="absolute inset-0 bg-grid-texture pointer-events-none" />

      <div className="max-w-300 mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left: text & CTA */}
        <ScrollAnimation>
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#38bdf8]/12 border border-[#38bdf8]/30 text-[#38bdf8] px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.08em] uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse-dot" />
              Emissão por Videoconferência
            </div>

            <h1 className="font-sora text-[clamp(2.5rem,4vw,3.8rem)] font-extrabold leading-[1.1] tracking-[-0.03em] mb-6">
              Sua Identidade Digital com{' '}
              <span className="text-gradient">Segurança e Agilidade.</span>
            </h1>

            <p className="text-white/60 text-lg leading-[1.75] max-w-120 mb-10">
              Emita seu Certificado Digital e-CPF ou e-CNPJ com quem é referência.
              Atendimento por videoconferência em poucos minutos.
            </p>

            <a
              href="https://wa.me/seunumeroaqui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-linear-to-br from-blue-500 to-[#38bdf8] text-white px-8 py-4 rounded-xl font-sora font-bold text-base shadow-[0_8px_32px_rgba(59,130,246,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(59,130,246,0.5)] no-underline"
            >
              <MessageSquareText size={20} />
              Contratar serviços
            </a>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/8">
              {[
                { number: '6.000+', label: 'Avaliações'   },
                { number: '15 min', label: 'Emissão rápida' },
                { number: '100%',   label: 'Online'        },
              ].map(({ number, label }) => (
                <div key={label}>
                  <span className="block font-sora text-[1.6rem] font-extrabold tracking-[-0.03em]">{number}</span>
                  <span className="text-white/45 text-xs font-medium tracking-[0.05em] uppercase">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Right: floating card */}
        <ScrollAnimation delay={2} className="hidden md:flex justify-center">
          <div className="relative w-full max-w-95">
            {/* Card */}
            <div className="relative bg-white/4 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
              {/* Top shimmer line */}
              <div className="absolute -top-px left-5 right-5 h-px bg-linear-to-r from-transparent via-[#38bdf8] to-transparent" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-blue-500 to-[#38bdf8] flex items-center justify-center mb-6 shadow-[0_8px_24px_rgba(59,130,246,0.4)]">
                <ShieldCheck size={28} className="text-white" />
              </div>

              <p className="font-sora text-lg font-bold text-white mb-1">Certificado Digital</p>
              <p className="text-sm text-white/45 mb-6">Válido juridicamente em todo Brasil</p>

              <ul className="flex flex-col gap-3">
                {[
                  'Assinatura de documentos online',
                  'Acesso ao portal e-CAC',
                  'Emissão de Notas Fiscais (NF-e)',
                  'Autenticidade garantida',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Floating chips */}
            <div className="animate-float absolute -bottom-5 -left-7.5 flex items-center gap-2 bg-[#0d1f3c]/90 border border-white/12 rounded-xl px-4 py-3 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-sm text-white font-semibold">
              <ShieldCheck size={14} className="text-[#38bdf8]" />
              Emissão Segura
            </div>
            <div className="animate-float-delay absolute -top-3.75 -right-5 flex items-center gap-2 bg-[#0d1f3c]/90 border border-white/12 rounded-xl px-4 py-3 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-sm text-white font-semibold">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              ICP-Brasil
            </div>
          </div>
        </ScrollAnimation>

      </div>
    </section>
  );
};

export default Hero;
