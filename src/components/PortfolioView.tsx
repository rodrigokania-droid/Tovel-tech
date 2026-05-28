import React, { useState } from 'react';
import { ActivePage, PortfolioItem } from '../types';
import { PORTFOLIO_DATA } from '../data';
import { ChevronRight, ExternalLink, Flame, X } from 'lucide-react';

interface PortfolioViewProps {
  setActivePage: (page: ActivePage) => void;
}

export default function PortfolioView({ setActivePage }: PortfolioViewProps) {
  const [selectedFilter, setSelectedFilter] = useState<'todos' | 'sites' | 'sistemas' | 'apps' | 'saas' | 'social_media'>('todos');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  React.useEffect(() => {
    const handleOpenPortfolio = (e: Event) => {
      const customEvent = e as CustomEvent;
      const proj = PORTFOLIO_DATA.find(p => p.id === customEvent.detail);
      if (proj) {
        setSelectedProject(proj);
      }
    };
    window.addEventListener('open-portfolio', handleOpenPortfolio);
    return () => {
      window.removeEventListener('open-portfolio', handleOpenPortfolio);
    };
  }, []);

  const filterOptions = [
    { value: 'todos', label: 'TODOS' },
    { value: 'sites', label: 'SITES' },
    { value: 'sistemas', label: 'SISTEMAS' },
    { value: 'apps', label: 'APPS' },
    { value: 'saas', label: 'SAAS' },
    { value: 'social_media', label: 'SOCIAL MEDIA' },
  ] as const;

  const filteredItems = PORTFOLIO_DATA.filter((item) => {
    if (selectedFilter === 'todos') return true;
    return item.category === selectedFilter;
  });

  return (
    <div className="space-y-8 pb-12 mt-8 animate-fadeIn" id="portfolio-view">
      
      {/* HEADER */}
      <section className="pt-12 text-left max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-white/10">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-extrabold opacity-85 font-mono text-white">
              CONCEITOS APLICADOS
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight leading-none animate-slideUp">
            Modelos de projetos <span className="text-accent drop-shadow-[0_0_20px_rgba(242,125,38,0.15)]">na prática</span>
          </h1>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl">
            Veja demonstrações visuais de como podemos organizar processos, aumentar vendas na internet e destacar sua empresa com soluções sob medida.
          </p>
          <div className="text-white/40 text-xs font-mono mt-4 italic">
            * Exemplos visuais de soluções desenvolvidas sob medida.
          </div>
        </div>
      </section>

      {/* FILTER CONTROLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-white/5" id="portfolio-filters-container">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              id={`filter-btn-${opt.value}`}
              onClick={() => setSelectedFilter(opt.value)}
              className={`px-5 py-2.5 text-xs font-mono font-bold tracking-widest rounded-full transition-all cursor-pointer ${
                selectedFilter === opt.value
                  ? 'bg-accent text-white shadow-lg shadow-accent/15'
                  : 'glass-card text-white/50 border-white/5 hover:text-white hover:bg-white/5'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((project) => {
            return (
              <div
                key={project.id}
                id={`portfolio-card-${project.id}`}
                className="group flex flex-col justify-between glass-card border border-white/5 hover:border-accent/20 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  {/* Real Image Mockup */}
                  <div 
                    onClick={() => setSelectedProject(project)}
                    className="aspect-video bg-[#0c0c0c]/80 rounded-xl border border-white/5 mb-6 relative overflow-hidden group-hover:border-accent/20 transition-all duration-500 cursor-pointer group/img"
                  >
                    <img 
                      src={project.imageUrl} 
                      alt={`Demonstração de ${project.title}`}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                      <span className="bg-accent text-white text-xs font-bold px-4 py-2 rounded-full transform translate-y-4 group-hover/img:translate-y-0 transition-transform duration-300 shadow-lg shadow-accent/20">
                        Ver detalhes
                      </span>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-mono font-bold text-accent bg-accent/10 border border-accent/15 px-2.5 py-0.5 rounded-full">
                      {project.categoryLabel}
                    </span>
                    <span className="text-white/30 text-[10px] font-mono uppercase tracking-wider">EXEMPLO DE SOLUÇÃO</span>
                  </div>

                  <h3 className="text-xl font-sans font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech list & Link */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5 animate-fadeIn">
                    {project.techList.map((tech) => (
                      <span key={tech} className="text-[10px] sm:text-xs font-mono text-white/60 bg-white/5 border border-white/10 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={`https://wa.me/5554981185625?text=${encodeURIComponent(`Olá! Gostaria de falar com um especialista sobre o modelo de ${project.title}.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white/65 hover:text-accent transition-colors pt-2 group-hover:translate-x-1"
                  >
                    Falar com especialista sobre este modelo
                    <ChevronRight size={14} className="text-accent" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card border border-white/5 rounded-2xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
          <h2 className="text-2xl sm:text-4xl font-sans font-extrabold text-white tracking-tight">
            A sua ideia pode ser a próxima.
          </h2>
          <p className="text-white/60 text-sm max-w-xl mx-auto">
            Seja um site, um aplicativo, um sistema interno ou uma automação. Chame a Tovel e descubra qual é o melhor caminho para tirar o seu projeto do papel.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                window.open('https://wa.me/5554981185625', '_blank');
              }}
              className="bg-accent hover:bg-accent-hover text-white font-extrabold text-sm px-8 py-4 rounded-full shadow-lg shadow-accent/15 cursor-pointer hover:scale-105 transition-transform duration-300"
              id="portfolio-cta-starter"
            >
              Falar com um especialista
            </button>
          </div>
        </div>
      </section>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#000000]/80 backdrop-blur-sm animate-fadeIn"
          id="portfolio-modal"
        >
          <div 
            className="absolute inset-0" 
            onClick={() => setSelectedProject(null)} 
          />
          <div className="relative w-full max-w-3xl max-h-[85vh] flex flex-col bg-[#0f0f0f] border border-accent/30 rounded-2xl shadow-2xl shadow-accent/10 overflow-hidden transform transition-all animate-slideUp">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-black/60 hover:bg-accent hover:text-white text-white/70 rounded-full transition-colors cursor-pointer shadow-lg backdrop-blur-md"
            >
              <X size={20} />
            </button>
            
            <div className="overflow-y-auto custom-scrollbar flex flex-col">
              <div className="w-full relative shrink-0 border-b border-white/5">
                <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full aspect-[16/10] object-cover" />
              </div>
              
              <div className="p-6 sm:p-10 relative z-10 flex-1 flex flex-col">
                 <div>
                   <span className="text-xs font-mono font-bold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full mb-4 inline-block">
                      {selectedProject.categoryLabel}
                   </span>
                   <h3 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-white mb-4 tracking-tight">
                     {selectedProject.title}
                   </h3>
                   <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
                     {selectedProject.description}
                   </p>
                 </div>

                 <div className="mb-10">
                   <h4 className="text-xs uppercase tracking-widest font-mono text-white/40 mb-4">Destaques deste modelo</h4>
                   <div className="flex flex-wrap gap-2 sm:gap-3">
                      {selectedProject.techList.map((tech) => (
                        <span key={tech} className="text-xs sm:text-sm font-mono text-white/70 bg-white/5 border border-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md">
                          {tech}
                        </span>
                      ))}
                   </div>
                 </div>

                 <div className="mt-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center pb-2">
                   <button 
                     onClick={() => window.open(`https://wa.me/5554981185625?text=${encodeURIComponent(`Olá! Gostaria de falar com um especialista sobre o modelo de ${selectedProject.title}.`)}`, '_blank')}
                     className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 text-lg"
                   >
                     Falar com especialista sobre este modelo
                   </button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
