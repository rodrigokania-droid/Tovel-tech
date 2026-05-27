import React, { useState } from 'react';
import { ActivePage } from '../types';
import TransparentLogo from './TransparentLogo';
import LegalModal, { LegalDocType } from './LegalModal';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>(null);

  const handleNavClick = (pageId: ActivePage) => {
    setActivePage(pageId);
  };

  const openLegalModal = (doc: LegalDocType) => {
    setActiveLegalDoc(doc);
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 pt-16 pb-12 w-full" id="global-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4 cursor-pointer select-none group" onClick={() => handleNavClick('home')}>
              <img 
                src="/logo-footer.webp" 
                alt="Tovel Tecnologia"
                className="h-[75px] w-auto object-contain mix-blend-screen group-hover:scale-105 transition-transform duration-300"
                style={{ filter: 'contrast(1.6) brightness(0.8)' }}
              />
            </div>
            <p className="text-white/60 text-sm max-w-sm leading-relaxed mb-6">
              Desenvolvemos ecossistemas tecnológicos premium: de sites ultra-rápidos e automações de fluxo a sistemas complexos e aplicativos resilientes para empresas de alta performance.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/5554981185625" 
                target="_blank" 
                rel="noreferrer"
                className="text-white/60 hover:text-white hover:bg-white/5 transition-all px-4 py-2 rounded-lg glass-card border-white/10 text-xs font-semibold"
                id="footer-social-whatsapp"
              >
                WhatsApp
              </a>
              <a 
                href="https://instagram.com/toveltecnologia" 
                target="_blank" 
                rel="noreferrer"
                className="text-white/60 hover:text-white hover:bg-white/5 transition-all px-4 py-2 rounded-lg glass-card border-white/10 text-xs font-semibold"
                id="footer-social-instagram"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Business Links */}
          <div>
            <h4 className="text-white font-sans font-extrabold text-[11px] tracking-widest uppercase mb-4 opacity-70">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavClick('home')} 
                  className="text-white/60 hover:text-accent text-sm transition-colors cursor-pointer text-left font-medium"
                >
                  Página Inicial
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('servicos')} 
                  className="text-white/60 hover:text-accent text-sm transition-colors cursor-pointer text-left font-medium"
                >
                  Serviços Digitais
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('portfolio')} 
                  className="text-white/60 hover:text-accent text-sm transition-colors cursor-pointer text-left font-medium"
                >
                  Portfólio / Casos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('sobre')} 
                  className="text-white/60 hover:text-accent text-sm transition-colors cursor-pointer text-left font-medium"
                >
                  Sobre Nós
                </button>
              </li>
            </ul>
          </div>

          {/* Legal / Policies */}
          <div>
            <h4 className="text-white font-sans font-extrabold text-[11px] tracking-widest uppercase mb-4 opacity-70">Legal</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => openLegalModal('privacidade')}
                  className="text-white/60 text-sm hover:text-accent cursor-pointer block font-medium w-full text-left"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openLegalModal('termos')}
                  className="text-white/60 text-sm hover:text-accent cursor-pointer block font-medium w-full text-left"
                >
                  Termos de Uso
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openLegalModal('lgpd')}
                  className="text-white/60 text-sm hover:text-accent cursor-pointer block font-medium w-full text-left"
                >
                  Adequação à LGPD
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider with copywriter */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © {currentYear} Tovel Tecnologia. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-white/40 text-xs text-right font-mono">
            <span>Sistemas de Alto Desempenho</span>
            <span className="text-accent/40">•</span>
            <span>Estética Premium</span>
          </div>
        </div>
      </div>

      <LegalModal 
        isOpen={activeLegalDoc !== null} 
        documentType={activeLegalDoc} 
        onClose={() => setActiveLegalDoc(null)} 
      />
    </footer>
  );
}
