import React, { useState, useEffect, useRef } from 'react';
import { ActivePage } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ServicosView from './components/ServicosView';
import PortfolioView from './components/PortfolioView';
import PlanosView from './components/PlanosView';
import SobreView from './components/SobreView';
import ContatoView from './components/ContatoView';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedProjectType, setSelectedProjectType] = useState<string>('Site');
  const isNavigatingRef = useRef(false);

  // Dynamic SEO meta titles based on current active/viewed segment
  useEffect(() => {
    const titles: Record<ActivePage, string> = {
      home: 'Tovel Tecnologia | Soluções Digitais Premium',
      servicos: 'Serviços | Tovel Tecnologia - Sites, Sistemas e SaaS',
      portfolio: 'Portfólio | Projetos de Alta Conversão - Tovel Tecnologia',
      planos: 'Planos e Preços | Soluções Digitais - Tovel Tecnologia',
      sobre: 'Sobre Nós | Tovel Tecnologia - Engenharia de Software',
      contato: 'Contato | Tovel Tecnologia - Solicite um Diagnóstico',
    };
    
    document.title = titles[activePage] || 'Tovel Tecnologia';
  }, [activePage]);



  // Monitor scroll height to accurately paint active navigation items in Header
  useEffect(() => {
    const sections: ActivePage[] = ['home', 'servicos', 'sobre', 'portfolio', 'planos', 'contato'];
    
    const handleScroll = () => {
      if (isNavigatingRef.current) return;

      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      
      // If we are touching the end of the view, activate the final section (contato)
      if (scrollTop + clientHeight >= scrollHeight - 75) {
        setActivePage('contato');
        return;
      }

      let currentSection: ActivePage = 'home';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust selection window to align with menu highlight threshold (header offset of 80px)
          if (rect.top <= 140 && rect.bottom >= 80) {
            currentSection = section;
          }
        }
      }

      setActivePage(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initial tick
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Route scrolling execution with offset
  const changePage = (page: ActivePage) => {
    isNavigatingRef.current = true;
    setActivePage(page);
    
    const el = document.getElementById(page);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    // Release direct transition guard after standard transition duration finishes
    setTimeout(() => {
      isNavigatingRef.current = false;
    }, 850);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#f3f4f6] flex flex-col justify-between selection:bg-accent selection:text-white relative">
      
      {/* Dynamic Background dots texture */}
      <div className="fixed inset-0 bg-dot-grid pointer-events-none -z-10" />
      
      {/* Core Grain background layer */}
      <div className="grain-bg pointer-events-none fixed inset-0 -z-9" />

      {/* Aesthetic glowing spots from SaaS theme design */}
      <div className="fixed -bottom-20 -left-20 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulseGlow" />
      <div className="fixed -top-20 -right-20 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Header with active routing callback */}
      <Header activePage={activePage} setActivePage={changePage} />

      {/* Main Container */}
      <main className="flex-1 w-full pt-20" id="main-content-layout">
        <div className="space-y-6">
          
          <div id="home">
            <HomeView setActivePage={changePage} />
          </div>

          <div id="servicos">
            <ServicosView 
              setActivePage={changePage} 
              setSelectedProjectType={setSelectedProjectType} 
            />
          </div>

          <div id="sobre">
            <SobreView setActivePage={changePage} />
          </div>

          <div id="portfolio">
            <PortfolioView setActivePage={changePage} />
          </div>

          <div id="planos">
            <PlanosView 
              setActivePage={changePage} 
              setSelectedProjectType={setSelectedProjectType} 
            />
          </div>

          <div id="contato">
            <ContatoView 
              selectedProjectType={selectedProjectType} 
              setSelectedProjectType={setSelectedProjectType} 
            />
          </div>

        </div>
      </main>

      {/* Persistent Premium Floating Button direct to WhatsApp */}
      <a
        href="https://wa.me/5554981185625"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25d366] hover:bg-[#128c7e] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center group"
        aria-label="Fale conosco no WhatsApp"
        id="persistent-floating-whatsapp"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out font-mono text-xs font-semibold whitespace-nowrap pr-0 group-hover:pr-2 leading-none text-white block">
          Falar com a Tovel
        </span>
        <MessageSquare size={22} className="fill-white" />
      </a>

      {/* Global Footer with layout linkages */}
      <Footer setActivePage={changePage} />

    </div>
  );
}
