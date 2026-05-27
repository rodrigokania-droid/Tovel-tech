import React, { useState } from 'react';
import { ActivePage, PortfolioItem } from '../types';
import { PORTFOLIO_DATA } from '../data';
import { ChevronRight, ExternalLink, Flame } from 'lucide-react';

interface PortfolioViewProps {
  setActivePage: (page: ActivePage) => void;
}

export default function PortfolioView({ setActivePage }: PortfolioViewProps) {
  const [selectedFilter, setSelectedFilter] = useState<'todos' | 'sites' | 'sistemas' | 'apps' | 'saas' | 'social_media'>('todos');

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
              NOSSO PORTFÓLIO
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight leading-none animate-slideUp">
            Nossos últimos trabalhos <span className="text-accent drop-shadow-[0_0_20px_rgba(242,125,38,0.15)]">na prática</span>
          </h1>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl">
            Veja como ajudamos outras empresas a organizar seus processos, vender mais na internet e se destacar da concorrência com soluções sob medida.
          </p>
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
                  {/* Miniature Vector Mockup representing the project beautifully */}
                  <div className="aspect-video bg-[#0c0c0c]/80 rounded-xl border border-white/5 p-4 mb-6 relative overflow-hidden flex flex-col justify-between group-hover:border-accent/20 transition-colors">
                    <div className="absolute inset-0 bg-dot-grid-fine opacity-20" />
                    
                    {/* Top window styling */}
                    <div className="flex justify-between items-center border-b border-white/5 pb-2">
                      <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-white/10" />
                        <span className="w-2 h-2 rounded-full bg-white/10" />
                        <span className="w-2 h-2 rounded-full bg-white/10" />
                      </div>
                      <span className="text-[8px] font-mono text-white/30 tracking-wider">https://tovel.tech/showcase</span>
                    </div>

                    {/* Internal aesthetic content based on category */}
                    <div className="py-4 flex-1 flex flex-col justify-center items-center">
                      {project.category === 'sites' && (
                        <div className="space-y-2 text-center w-full px-2">
                          <div className="h-2 w-2/3 bg-accent/20 rounded mx-auto" />
                          <div className="h-1.5 w-1/2 bg-white/5 rounded mx-auto" />
                          <div className="h-1.5 w-3/4 bg-white/5 rounded mx-auto" />
                        </div>
                      )}
                      
                      {project.category === 'sistemas' && (
                        <div className="w-full space-y-3">
                          <div className="flex gap-2">
                            <span className="h-8 w-1/3 bg-white/5 border border-white/5 rounded flex items-center justify-center text-[10px] text-accent">89%</span>
                            <span className="h-8 w-2/3 bg-white/5 border border-white/5 rounded flex flex-col justify-center px-2">
                              <span className="h-1 w-full bg-white/10 rounded overflow-hidden">
                                <span className="block h-full w-4/5 bg-accent rounded" />
                              </span>
                            </span>
                          </div>
                        </div>
                      )}

                      {project.category === 'apps' && (
                        <div className="w-20 h-24 bg-white/5 border border-white/5 rounded-lg p-2 flex flex-col justify-between mx-auto">
                          <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                          </div>
                          <div className="space-y-1">
                            <div className="h-1 bg-white/10 rounded" />
                            <div className="h-1 bg-white/10 rounded w-4/5" />
                          </div>
                        </div>
                      )}

                      {project.category === 'saas' && (
                        <div className="w-full grid grid-cols-3 gap-2">
                          <div className="h-10 bg-white/5 border border-white/5 rounded p-1 text-[8px] text-white/40 font-mono flex flex-col justify-between">
                            <span>REVENUE</span>
                            <span className="text-white font-bold">+189%</span>
                          </div>
                          <div className="h-10 bg-white/5 border border-white/5 rounded p-1 text-[8px] text-white/40 font-mono flex flex-col justify-between">
                            <span>MEM_LOAD</span>
                            <span className="text-emerald-400 font-semibold">4.1%</span>
                          </div>
                          <div className="h-10 bg-white/5 border border-white/5 rounded p-1 text-[8px] text-white/40 font-mono flex flex-col justify-between col-span-1">
                            <span>PING</span>
                            <span className="text-accent font-bold">14ms</span>
                          </div>
                        </div>
                      )}

                      {project.category === 'social_media' && (
                        <div className="w-full flex items-center justify-center gap-4">
                          <div className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center text-accent font-mono font-bold text-sm">
                            ★
                          </div>
                          <div className="space-y-1.5">
                            <div className="h-2 w-20 bg-white/10 rounded" />
                            <div className="h-1.5 w-16 bg-white/5 rounded" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Footer code layout */}
                    <div className="flex justify-between text-[7px] font-mono text-white/20">
                      <span>STABLE COMPILED</span>
                      <span>SEC_LOCKED</span>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-mono font-bold text-accent bg-accent/10 border border-accent/15 px-2.5 py-0.5 rounded-full">
                      {project.categoryLabel}
                    </span>
                    <span className="text-white/30 text-[10px] font-mono uppercase tracking-wider">TOVEL CASE</span>
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
                      <span key={tech} className="text-[8px] font-mono text-white/50 bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href="https://wa.me/5554981185625"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white/65 hover:text-accent transition-colors pt-2 group-hover:translate-x-1"
                  >
                    Falar com especialista sobre este case
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

    </div>
  );
}
