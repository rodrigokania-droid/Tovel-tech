import React from 'react';
import { Mail, MapPin, MessageSquare, Clock } from 'lucide-react';

interface ContatoViewProps {
  selectedProjectType: string;
  setSelectedProjectType: (projectType: string) => void;
}

export default function ContatoView({ selectedProjectType, setSelectedProjectType }: ContatoViewProps) {
  // Direct WhatsApp link
  const whatsappUrl = "https://wa.me/5554981185625?text=Ol%C3%A1%20Tovel%25";

  return (
    <div className="space-y-8 pb-12 mt-8 animate-fadeIn" id="contato-view">
      
      {/* HEADER */}
      <section className="pt-12 text-center max-w-3xl mx-auto px-4 sm:px-6">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-white/10">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-extrabold opacity-85 font-mono text-white">
              FALE CONOSCO
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight">
            Vamos tirar sua <span className="text-accent drop-shadow-[0_0_20px_rgba(242,125,38,0.15)]">ideia do papel</span>?
          </h1>
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Fale com a Tovel e descubra qual solução digital faz mais sentido para o seu negócio: site, aplicativo, sistema, automação ou presença digital.
          </p>
        </div>
      </section>

      {/* CENTERED CHANNELS CARDS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/5554981185625"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col justify-between p-8 rounded-2xl glass-card border border-white/5 hover:border-accent/40 bg-accent/[0.02] text-center transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-accent/5"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center mx-auto transition-transform group-hover:scale-110">
                <MessageSquare size={22} />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-accent font-mono font-bold tracking-widest uppercase">CONEXÃO IMEDIATA</span>
                <h3 className="text-lg font-bold text-white font-sans">WhatsApp</h3>
              </div>
              <p className="text-white/50 text-xs">
                Fale direto com nossa equipe e explique o que você precisa.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-sm font-semibold text-white group-hover:text-accent transition-colors">
              +55 (54) 98118-5625
            </div>
          </a>

          {/* Email Corp */}
          <a
            href="mailto:contato@tovel.com.br"
            className="group flex flex-col justify-between p-8 rounded-2xl glass-card border border-white/5 hover:border-accent/40 hover:bg-accent/[0.02] text-center transition-all duration-300 hover:scale-[1.03]"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white/70 flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:border-accent group-hover:text-white">
                <Mail size={22} />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-white/40 group-hover:text-accent transition-colors font-mono font-bold tracking-widest uppercase">PROPOSTAS FORMAIS</span>
                <h3 className="text-lg font-bold text-white font-sans">E-mail</h3>
              </div>
              <p className="text-white/50 text-xs">
                Envie detalhes, arquivos ou referências do projeto.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-sm font-semibold text-white group-hover:text-accent transition-colors">
              contato@tovel.com.br
            </div>
          </a>

          {/* Sede Operacional */}
          <div className="group flex flex-col justify-between p-8 rounded-2xl glass-card border border-white/5 hover:border-accent/40 hover:bg-accent/[0.02] text-center transition-all duration-300 hover:scale-[1.03]">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white/70 flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:border-accent group-hover:text-white">
                <MapPin size={22} />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-white/40 group-hover:text-accent transition-colors font-mono font-bold tracking-widest uppercase">ATENDIMENTO NACIONAL</span>
                <h3 className="text-lg font-bold text-white font-sans">Atendimento</h3>
              </div>
              <p className="text-white/50 text-xs">
                Atendemos empresas de todo o Brasil de forma online.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 text-sm font-semibold text-white group-hover:text-accent transition-colors">
              Rio Grande do Sul, Brasil
            </div>
          </div>

        </div>

        {/* Response Guarantee Bar */}
        <div className="mt-12 max-w-3xl mx-auto glass-card border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 text-left relative overflow-hidden">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-32 h-32 bg-accent/5 blur-3xl rounded-full" />
          <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shrink-0">
            <Clock size={22} />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Retorno Rápido
            </h4>
            <p className="text-xs text-white/60 leading-relaxed">
              Analisamos sua necessidade e retornamos em até <strong className="text-white">2 horas úteis</strong> com o próximo passo.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
