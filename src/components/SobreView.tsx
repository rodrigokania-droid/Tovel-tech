import React from 'react';
import { ActivePage } from '../types';
import { JOB_STEPS } from '../data';
import { Cpu, Eye, Compass, Workflow, ArrowRight } from 'lucide-react';

interface SobreViewProps {
  setActivePage: (page: ActivePage) => void;
}

export default function SobreView({ setActivePage }: SobreViewProps) {
  
  const values = [
    {
      description: 'Não criamos coisas complicadas só para parecer chique. Focamos no que realmente funciona e resolve o problema do seu negócio.',
      icon: Cpu,
    },
    {
      description: 'Um visual limpo, moderno e profissional é a porta de entrada para fechar bons negócios e passar segurança para seus clientes.',
      icon: Eye,
    },
    {
      description: 'Identificamos o que faz sua equipe perder tempo e criamos sistemas fáceis de usar para que todos foquem no que realmente importa.',
      icon: Workflow,
    },
    {
      description: 'Criamos sites extremamente rápidos, fáceis de encontrar no Google e totalmente preparados para receber contatos e gerar vendas.',
      icon: Compass,
    },
  ];

  return (
    <div className="space-y-8 pb-12 mt-8 animate-fadeIn" id="sobre-view">
      
      {/* HERO / SUMMARY */}
      <section className="pt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-white/10">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest font-extrabold opacity-85 font-mono text-white">
                NOSSA ESSÊNCIA
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight leading-none">
              Simplificando a <br />
              <span className="text-accent drop-shadow-[0_0_20px_rgba(242,125,38,0.15)]">tecnologia para você</span>
            </h2>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl">
              A Tovel nasceu para ajudar empresas de todos os tamanhos a deixarem para trás a lentidão, a desorganização e a papelada, criando ferramentas online fáceis de usar e que trazem resultados reais.
            </p>
            <p className="text-white/40 text-sm leading-relaxed max-w-2xl">
              Nosso objetivo é entender o seu negócio e entregar sites, aplicativos e sistemas que funcionam rápido, são seguros e, acima de tudo, resolvem o seu problema sem complicação técnica.
            </p>
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => {
                  window.open('https://wa.me/5554981185625', '_blank');
                }}
                className="bg-accent hover:bg-accent-hover text-white font-extrabold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-accent/15 hover:scale-105 transition-transform"
              >
                Nossa Metodologia
              </button>
              <button
                onClick={() => {
                  setActivePage('portfolio');
                }}
                className="glass-card text-white hover:bg-white/5 font-extrabold text-sm px-8 py-3.5 rounded-full border border-white/10 cursor-pointer flex items-center gap-2 transition-all hover:scale-105"
              >
                Portfólio
              </button>
            </div>
          </div>

          {/* Right graphics */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-80 h-80 rounded-2xl border border-white/5 bg-[#0c0c0c]/45 p-1 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-dot-grid opacity-20" />
              
              {/* Abstract decorative glowing lines and code layout inside box represent stability */}
              <div className="w-full h-full bg-[#0c0c0c]/80 rounded-xl p-6 flex flex-col justify-between border border-white/5 hover:border-accent/10 transition-colors">
                <div className="flex justify-between items-center text-xs font-mono text-white/35">
                  <span>TOVEL CORP // DEPLOY</span>
                  <span className="w-2 h-2 rounded bg-accent animate-ping" />
                </div>
                
                <div className="space-y-4 py-8">
                  <div className="space-y-1.5">
                    <div className="h-1 bg-white/10 rounded w-full" />
                    <div className="h-1 bg-white/10 rounded w-5/6" />
                    <div className="h-1 bg-accent rounded w-2/3" />
                  </div>
                  <div className="space-y-1.5 pt-2">
                    <div className="h-1 bg-white/10 rounded w-full" />
                    <div className="h-1 bg-white/10 rounded w-4/5" />
                    <div className="h-1 bg-[#1a1a1a] rounded w-3/4" />
                  </div>
                </div>

                 RÁPIDO • SEGURO • FÁCIL DE USAR
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* NO QUE ACREDITAMOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight">
              No que acreditamos
            </h2>
            <p className="text-white/60 text-sm max-w-lg">
              Estes são os quatro pilares que guiam todo o nosso trabalho para o seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div 
                  key={i}
                  className="glass-card border border-white/5 hover:border-accent/20 p-6 sm:p-8 rounded-2xl flex gap-6 items-start transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-accent group-hover:bg-accent/10 shrink-0">
                    <Icon size={20} />
                  </div>
                  <div className="space-y-2 text-left">
                    <h3 className="text-lg font-sans font-bold text-white tracking-tight group-hover:text-accent transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NOSSA JORNADA DE TRABALHO (STEPS 01 TO 05) */}
      <section className="glass-card border-t border-b border-white/5 py-20 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center space-y-2">
              <span className="text-[10px] font-mono font-bold tracking-widest text-white/50 uppercase">
                COMO TRABALHAMOS
              </span>
              <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-white tracking-tight">
                Nossa Jornada de Trabalho
              </h2>
              <p className="text-white/60 text-sm max-w-xl mx-auto">
                Um passo a passo simples e transparente, para você saber exatamente o que está acontecendo em cada etapa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {JOB_STEPS.map((step) => {
                return (
                  <div 
                    key={step.number}
                    className="bg-[#0c0c0c]/60 border border-white/5 rounded-xl p-6 space-y-4 text-left relative overflow-hidden hover:border-accent/20 transition-all duration-300"
                  >
                    <div className="text-3xl font-bold font-sans text-accent/20 mb-2">
                      {step.number}
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-sm font-bold text-white tracking-tight">
                        {step.title}
                      </h4>
                      <p className="text-white/50 text-xs leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* BRAND MANUAL / LOGO SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase">
              NOSSA IDENTIDADE
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-bold text-white tracking-tight">
              A Construção da Marca
            </h2>
            <p className="text-white/60 text-sm max-w-xl mx-auto">
              Nossa identidade visual reflete a seriedade e o foco que colocamos em cada projeto. Menos complicação, mais profissionalismo e foco no que importa.
            </p>
          </div>

          <div className="glass-card rounded-2xl border border-white/5 p-3 sm:p-4 overflow-hidden relative group hover:border-accent/20 transition-all">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <img 
              src="/brand-manual.png" 
              alt="Tovel Tecnologia Brand Manual" 
              className="w-full h-auto object-cover rounded-xl shadow-2xl shadow-[#000]"
              style={{ filter: 'brightness(0.9) contrast(1.1)' }}
            />
            {/* Overlay to give it a slightly dark glass feel to match the site */}
            <div className="absolute inset-0 bg-[#0A0A0A]/20 pointer-events-none rounded-2xl" />
          </div>
          </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 animate-fadeIn">
        <div className="glass-card border border-white/5 p-8 sm:p-12 rounded-2xl text-left flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-48 h-48 bg-accent/10 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="space-y-4 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight">
              Vamos construir uma presença digital mais profissional para sua empresa?
            </h3>
            <p className="text-white/60 text-xs sm:text-sm">
              Ter ferramentas modernas faz toda a diferença para o crescimento da sua empresa. Agende um bate-papo com nossa equipe sem nenhum compromisso.
            </p>
          </div>

          <button
            onClick={() => {
              window.open('https://wa.me/5554981185625', '_blank');
            }}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-extrabold text-sm px-8 py-4 rounded-full shadow-lg shadow-accent/15 group cursor-pointer shrink-0 transition-all hover:scale-105 duration-300"
            id="sobre-bottom-cta"
          >
            Falar com especialista
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

    </div>
  );
}
