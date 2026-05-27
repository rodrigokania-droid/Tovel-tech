import React from 'react';
import { ActivePage, ServiceItem } from '../types';
import { SERVICES_DATA } from '../data';
import * as Icons from 'lucide-react';

interface ServicosViewProps {
  setActivePage: (page: ActivePage) => void;
  setSelectedProjectType?: (projectType: string) => void;
}

export default function ServicosView({ setActivePage, setSelectedProjectType }: ServicosViewProps) {
  
  const handleRequestService = (serviceTitle: string) => {
    if (setSelectedProjectType) {
      // Map service list to select form values
      let mapped = 'Site';
      if (serviceTitle.toLowerCase().includes('sistema') || serviceTitle.toLowerCase().includes('aplicativo')) {
        mapped = 'Sistema';
      } else if (serviceTitle.toLowerCase().includes('saas')) {
        mapped = 'SaaS';
      } else if (serviceTitle.toLowerCase().includes('automaç')) {
        mapped = 'Automação';
      } else if (serviceTitle.toLowerCase().includes('mídia') || serviceTitle.toLowerCase().includes('presença')) {
        mapped = 'Mídias sociais';
      }
      setSelectedProjectType(mapped);
    }
    window.open('https://wa.me/5554981185625', '_blank');
  };

  return (
    <div className="space-y-8 pb-12 mt-2 animate-fadeIn" id="servicos-view">
      
      {/* HEADER SECTION */}
      <section className="pt-6 text-left max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-white/10">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-extrabold opacity-85 font-mono text-white">
              NOSSAS SOLUÇÕES DIGITAIS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight leading-none">
            Soluções digitais para empresas que querem crescer com <span className="text-accent drop-shadow-[0_0_20px_rgba(242,125,38,0.15)]">estrutura</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-3xl">
            Sites, sistemas, aplicativos, automações e presença digital criados sob medida para fortalecer o seu nome no mercado, organizar sua rotina interna e aumentar as suas vendas. Transformamos problemas em tecnologia fácil de usar.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => {
                setActivePage('portfolio');
              }}
              className="bg-accent hover:bg-accent-hover text-white font-extrabold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-accent/15 hover:scale-105 transition-transform"
            >
              Ver Portfólio
            </button>
            <a
              href="https://wa.me/5554981185625"
              target="_blank"
              rel="noreferrer"
              className="glass-card text-white hover:bg-white/5 font-extrabold text-sm px-8 py-3.5 rounded-full border border-white/10 cursor-pointer flex items-center gap-2 transition-all hover:scale-105"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => {
            // Dyn import icon helper
            let IconComponent = Icons.HelpCircle;
            if (service.iconName === 'Laptop') IconComponent = Icons.Laptop;
            if (service.iconName === 'Cpu') IconComponent = Icons.Cpu;
            if (service.iconName === 'Database') IconComponent = Icons.Database;
            if (service.iconName === 'GitBranch') IconComponent = Icons.GitBranch;
            if (service.iconName === 'Compass') IconComponent = Icons.Compass;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="glass-card border border-white/5 hover:border-accent/20 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] group relative"
              >
                <div className="space-y-4">
                  {/* Top card header */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-accent group-hover:bg-accent/10 transition-colors">
                      <IconComponent size={22} />
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-wider text-white/50 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 group-hover:border-accent/20 group-hover:text-white">
                      {service.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-sans font-bold text-white tracking-tight group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <p className="text-white/40 text-[11px] sm:text-xs leading-relaxed border-t border-white/5 pt-3">
                    {service.extendedDescription}
                  </p>
                </div>

                {/* Card CTA */}
                <div className="pt-4 mt-4 border-t border-white/5">
                  <button
                    onClick={() => handleRequestService(service.title)}
                    className="w-full bg-white/5 hover:bg-accent/10 text-white hover:text-accent text-xs font-semibold py-2.5 px-4 rounded-xl border border-white/5 hover:border-accent/20 transition-all cursor-pointer text-center flex items-center justify-center gap-2"
                  >
                    Falar sobre o projeto
                    <Icons.ChevronRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Special custom interactive service block */}
          <div className="glass-card border border-accent/20 bg-accent/5 rounded-2xl p-5 sm:p-6 flex flex-col justify-between lg:col-span-1 md:col-span-2 group">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-accent">
                <Icons.Activity size={18} />
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase">SEMPRE NO AR</span>
              </div>
              <h3 className="text-xl font-sans font-bold text-white tracking-tight">
                Tecnologia Rápida e Segura
              </h3>
              <p className="text-white/75 text-xs leading-relaxed">
                Cada site ou sistema desenvolvido pela Tovel é colocado nos mesmos servidores que as grandes empresas usam. Isso garante que ele vai carregar super rápido e nunca vai cair ou travar, não importa quantas pessoas acessem.
              </p>
            </div>
            
            {/* Visual server telemetry representation */}
            <div className="glass-card rounded-xl p-3 sm:p-4 border border-white/5 space-y-1.5 mt-4 font-mono text-[9px] text-white/50">
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>LOCAL_SERVIDOR</span>
                <span className="text-white font-semibold">SA_EAST_1 (SP)</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>VELOCIDADE</span>
                <span className="text-emerald-400 font-semibold">12ms // RÁPIDO</span>
              </div>
              <div className="flex justify-between">
                <span>SEGURANÇA</span>
                <span className="text-accent font-semibold">CADEADO ATIVO</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* NOT IN THE BUSINESS OF JUST DESIGN */}
      <section className="glass-card border-t border-b border-white/5 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-white tracking-tight leading-tight">
            Sua empresa precisa de ajuda <br className="hidden sm:block" />
            <span className="text-accent drop-shadow-[0_0_15px_rgba(242,125,38,0.15)]">no mundo digital?</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Mande uma mensagem agora e conte o que você está precisando. Nossa equipe vai analisar a sua ideia e sugerir a melhor solução sem nenhum compromisso.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => {
                if (setSelectedProjectType) setSelectedProjectType('Ainda não sei');
                window.open('https://wa.me/5554981185625', '_blank');
              }}
              className="bg-accent hover:bg-accent-hover text-white font-extrabold text-sm px-8 py-3.5 rounded-full transition-all cursor-pointer shadow-lg shadow-accent/15 hover:scale-105"
            >
              Chamar no WhatsApp
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
