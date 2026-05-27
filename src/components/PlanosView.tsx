import React from 'react';
import { ActivePage, PlanItem } from '../types';
import { PLANS_DATA } from '../data';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';

interface PlanosViewProps {
  setActivePage: (page: ActivePage) => void;
  setSelectedProjectType?: (projectType: string) => void;
}

export default function PlanosView({ setActivePage, setSelectedProjectType }: PlanosViewProps) {
  
  const handleSelectPlan = (plan: PlanItem) => {
    // Map plans to select form values
    if (setSelectedProjectType) {
      if (plan.name.includes('Site')) {
        setSelectedProjectType('Site');
      } else if (plan.name.includes('Digital Pro')) {
        setSelectedProjectType('Mídias sociais');
      } else if (plan.name.includes('Sistema')) {
        setSelectedProjectType('Sistema');
      } else if (plan.name.includes('SaaS')) {
        setSelectedProjectType('SaaS');
      }
    }
    window.open('https://wa.me/5554981185625', '_blank');
  };

  return (
    <div className="space-y-8 pb-12 mt-8 animate-fadeIn" id="planos-view">
      
      {/* HEADER */}
      <section className="pt-12 text-left max-w-4xl mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-white/10">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-extrabold opacity-85 font-mono text-white">
              NOSSOS PLANOS
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight leading-none">
            Sites, aplicativos e sistemas para sua empresa <br className="hidden lg:block" />
            <span className="text-accent drop-shadow-[0_0_20px_rgba(242,125,38,0.15)]">vender mais e trabalhar melhor</span>
          </h1>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl">
            Criamos soluções digitais simples, profissionais e sob medida para empresas que precisam aparecer melhor, vender mais ou organizar seus processos.
          </p>
        </div>
      </section>

      {/* PLANS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PLANS_DATA.map((plan, idx) => {
            return (
              <div
                key={idx}
                id={`plan-card-${idx}`}
                className={`glass-card border rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.isPopular
                    ? 'border-accent/60 shadow-lg shadow-accent/5 hover:-translate-y-1'
                    : 'border-white/5 hover:border-white/10'
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent border border-accent/20 text-white font-mono text-[9px] font-bold tracking-widest px-3 py-1 rounded-full select-none shadow">
                    {plan.tag}
                  </span>
                )}

                <div className="space-y-6">
                  {/* Name, price & desc */}
                  <div>
                    <h3 className="text-xl font-sans font-bold text-white tracking-tight mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-white/50 text-xs leading-relaxed min-h-[40px]">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 pt-2">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-white/85 leading-relaxed">
                        <Check size={14} className="text-accent shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submitting CTAs */}
                <div className="pt-8 mt-8 border-t border-white/5 space-y-3">
                  <a
                    href={`https://wa.me/5554981185625?text=${encodeURIComponent(plan.whatsappMessage)}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`block w-full text-center text-xs font-bold py-3 px-4 rounded-full transition-all ${
                      plan.isPopular
                        ? 'bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/15'
                        : 'bg-white/5 hover:bg-white/10 text-white/90 hover:text-white border border-white/15'
                    }`}
                  >
                    {plan.buttonLabel}
                  </a>
                  
                  <button
                    onClick={() => handleSelectPlan(plan)}
                    className="w-full text-center text-[10px] font-mono text-white/40 hover:text-white/80 transition-colors"
                  >
                    Ou envie os detalhes via formulário
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CUSTOM SOLUTIONS INFO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card border border-white/5 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="space-y-3 max-w-2xl text-left">
            <h3 className="text-2xl font-sans font-bold text-white tracking-tight">
              Tem uma ideia diferente?
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Se você precisa de um site, aplicativo, sistema, automação ou solução digital específica para sua empresa, podemos criar algo sob medida para o seu negócio.
            </p>
          </div>

          <button
            onClick={() => {
              if (setSelectedProjectType) setSelectedProjectType('Ainda não sei');
              window.open('https://wa.me/5554981185625', '_blank');
            }}
            className="inline-flex items-center gap-2 bg-accent/10 hover:bg-accent/20 border border-accent/20 text-accent text-sm font-bold px-6 py-3.5 rounded-full cursor-pointer hover:text-white transition-all group shrink-0"
            id="customize-solution-btn"
          >
            Falar sobre minha ideia
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

    </div>
  );
}
