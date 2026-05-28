import React, { useState } from 'react';
import { ActivePage } from '../types';
import { Menu, X, ArrowRight } from 'lucide-react';
import TransparentLogo from './TransparentLogo';

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
}

export default function Header({ activePage, setActivePage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'portfolio', label: 'Portfólio' },
    { id: 'planos', label: 'Planos' },
    { id: 'contato', label: 'Contato' },
  ] as const;

  const handleNavClick = (pageId: ActivePage) => {
    setActivePage(pageId);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0A0A0A]/85 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group select-none"
            onClick={() => handleNavClick('home')}
            id="header-logo-container"
          >
            <TransparentLogo 
              src="/logo-menu.webp" 
              className="h-[62px] w-auto object-contain mix-blend-screen group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8" id="desktop-navbar">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm transition-all cursor-pointer relative py-2 border-b-2 ${
                  activePage === item.id 
                    ? 'text-white border-accent font-bold' 
                    : 'text-white/60 hover:text-white border-transparent font-medium'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center">
            <button
              id="header-cta-button"
              onClick={() => handleNavClick('contato')}
              className="bg-accent hover:bg-accent-hover text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-accent/10 hover:scale-105"
            >
              Falar com especialista
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-400 hover:text-white p-2"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle-btn"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-white/5 px-4 pt-2 pb-6 space-y-2 animate-fadeIn" id="mobile-dropdown-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-link-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                activePage === item.id 
                  ? 'bg-accent/10 text-accent font-semibold' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 px-3">
            <button
              id="mobile-header-cta-button"
              onClick={() => handleNavClick('contato')}
              className="w-full bg-accent hover:bg-accent-hover text-white font-bold text-center py-3 rounded-full flex items-center justify-center gap-2 text-sm"
            >
              Falar com especialista
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
