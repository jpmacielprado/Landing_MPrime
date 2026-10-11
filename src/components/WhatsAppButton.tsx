import React from 'react';
import { MessageSquareText } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/5512991631525?text=Olá%20MPrime%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20certificados%20digitais."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="group relative flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 sm:px-5 sm:py-3.5 rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.4)] hover:shadow-[0_12px_35px_rgba(16,185,129,0.6)] hover:-translate-y-1 transition-all duration-300 no-underline"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageSquareText size={20} className="group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline font-sora font-bold text-xs uppercase tracking-wider">
          WhatsApp
        </span>
      </a>
    </aside>
  );
};

export default WhatsAppButton;
