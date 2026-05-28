import React from 'react';
import { ActivePage } from '../types';
import { ArrowRight, Shield, Cpu, Zap, Activity, Award, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import BackgroundVideo from './BackgroundVideo';

interface HomeViewProps {
  setActivePage: (page: ActivePage) => void;
}

export default function HomeView({ setActivePage }: HomeViewProps) {

  const openPortfolio = (projectId: string) => {
    window.dispatchEvent(new CustomEvent('open-portfolio', { detail: projectId }));
    setActivePage('portfolio');
  };

  const features = [
    { label: 'TECNOLOGIA', icon: Cpu },
    { label: 'INOVAÇÃO', icon: Zap },
    { label: 'PERFORMANCE', icon: Activity },
    { label: 'RESULTADOS', icon: Award },
  ];

  return (
    <div className="space-y-8 pb-4 animate-fadeIn" id="home-view">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden flex items-center py-6 md:py-10">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <BackgroundVideo src="https://stream.mux.com/4IMYGcL01xjs7ek5ANO17JC4VQVUTsojZlnw4fXzwSxc.m3u8" />
          {/* Glass Overlay over the video to ensure text readability */}
          <div className="absolute inset-0 bg-[#0A0A0A]/85 backdrop-blur-md" />
          {/* Gradient fade to blend with the rest of the site */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full pt-6 pb-6 md:pt-8">
          
          {/* Hero text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-accent/80" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/70">
                Soluções Digitais
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium leading-[1.1] tracking-tight text-white uppercase">
              Sites, aplicativos <br className="hidden md:block" />
              e sistemas para <br className="hidden md:block" />
              empresas que querem <br className="hidden lg:block" />
              <span className="text-accent">vender mais e trabalhar melhor</span>
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl font-sans font-light">
              Criamos soluções digitais sob medida para empresas que precisam aparecer melhor, organizar processos, vender online ou transformar uma ideia em aplicativo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                id="hero-cta-button"
                onClick={() => {
                  window.open('https://wa.me/5554981185625', '_blank');
                }}
                className="bg-accent hover:bg-accent-hover text-white font-sans font-semibold text-xs tracking-wider uppercase px-8 py-4 rounded-md shadow-lg shadow-accent/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
              >
                Falar pelo WhatsApp
                <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1.5 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActivePage('servicos')}
                className="glass-card text-white hover:bg-white/10 font-sans font-semibold text-xs tracking-wider uppercase px-8 py-4 rounded-md border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Ver serviços
              </motion.button>
            </div>
          </motion.div>

          {/* Premium Glass Cards Grid representing Split Layout signature graphic */}
          <div className="lg:col-span-5 flex justify-center items-center h-full relative" id="hero-graphic-container">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 0.2 }
                }
              }}
              className="grid grid-cols-2 gap-4 w-full max-w-[420px]"
            >
                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  onClick={() => openPortfolio('port-3')}
                  className="bg-[#0A0A0A] border border-accent/30 p-6 rounded-3xl transition-all duration-500 cursor-pointer group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-all duration-300">
                    <Cpu size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-medium text-sm text-zinc-200 mb-2">Sistemas Online</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">Sistemas e painéis sob medida para você.</p>
                </motion.div>

                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  onClick={() => openPortfolio('port-4')}
                  className="bg-[#0A0A0A] border border-accent/30 p-6 rounded-3xl transition-all duration-500 cursor-pointer group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-all duration-300">
                    <Activity size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-medium text-sm text-zinc-200 mb-2">Aplicativos</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">Aplicativos fáceis de usar para iOS e Android.</p>
                </motion.div>
                
                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  onClick={() => openPortfolio('port-5')}
                  className="bg-[#0A0A0A] border border-accent/30 p-6 rounded-3xl transition-all duration-500 cursor-pointer group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-all duration-300">
                    <Zap size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-medium text-sm text-zinc-200 mb-2">Automações</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">Automatize tarefas e ganhe muito mais tempo.</p>
                </motion.div>
                
                <motion.div 
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  onClick={() => openPortfolio('port-1')}
                  className="bg-[#0A0A0A] border border-accent/30 p-6 rounded-3xl transition-all duration-500 cursor-pointer group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center mb-6 text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-all duration-300">
                    <Briefcase size={18} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-medium text-sm text-zinc-200 mb-2">Sites Profissionais</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">Sites focados em receber contatos e vender.</p>
                </motion.div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* SECOND PAGE CONTAINER (Flows naturally) */}
      <div className="flex flex-col gap-4">
        {/* MID LABELS / CAPABILITIES BAR */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 pt-6 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-4 group cursor-default"
              >
                <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-zinc-500 group-hover:text-accent group-hover:border-accent/30 transition-all duration-500 bg-zinc-900/50">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium tracking-wide text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
        </section>

        {/* DYNAMIC CASE STATS GRID / TWO-BY-TWO GRID */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-4"
        >
          
          {/* Card 1: Foco em resultados */}
          <div className="lg:col-span-7 glass-card border border-white/5 hover:border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-colors group">
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase">
                O QUE NÓS FAZEMOS
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight leading-snug">
                Tecnologia focada <br className="hidden sm:block"/>
                em resultados reais.
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-lg">
                Desenvolvemos soluções para você vender mais, organizar os processos internos e se destacar no mercado, sem nenhuma complicação técnica para o seu lado.
              </p>
            </div>
            
            <div className="flex gap-4 pt-6 border-t border-white/5 mt-6 text-white/40 group-hover:text-white/70 transition-colors">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-accent/60" />
                <span className="text-xs font-mono">Segurança</span>
              </div>
              <div className="text-white/10">|</div>
              <div className="flex items-center gap-2">
                <Activity size={16} className="text-accent/60" />
                <span className="text-xs font-mono">Rapidez</span>
              </div>
              <div className="text-white/10">|</div>
              <div className="flex items-center gap-2">
                <Cpu size={16} className="text-accent/60" />
                <span className="text-xs font-mono">Qualidade</span>
              </div>
            </div>
          </div>

          {/* Card 2: Arquitetura Moderna */}
          <div className="lg:col-span-5 glass-card border border-white/5 hover:border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all group relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-48 h-48 bg-accent/5 blur-3xl rounded-full" />
            <div className="flex justify-between items-start mb-4">
              <span className="text-white/30 font-mono text-xs select-none">v2.4.0</span>
              <div className="flex gap-1 text-accent/40 group-hover:text-accent transition-colors">
                <span className="text-xs font-mono font-black">&lt;&gt;</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-2xl font-display font-medium text-white tracking-tight">
                Tudo o que há de <br />
                mais seguro e rápido
              </h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                Usamos as melhores ferramentas do mercado para garantir que seu site ou sistema seja extremamente rápido e não trave.
              </p>
            </div>
            
            <div className="pt-4 border-t border-white/5 mt-4 grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-white/30 font-mono">TECNOLOGIA</div>
                <div className="text-sm font-semibold text-white">Última Geração</div>
              </div>
              <div>
                <div className="text-xs text-white/30 font-mono">VELOCIDADE</div>
                <div className="text-sm font-semibold text-white">Carregamento Rápido</div>
              </div>
            </div>
          </div>

          {/* Card 3: 99.9% SLA */}
          <div className="lg:col-span-4 border-l-2 border-l-accent glass-card border-t border-r border-b border-white/5 hover:border-white/10 rounded-2xl p-5 sm:p-6 transition-colors">
            <div className="space-y-2">
              <div className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight">
                100%
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase block mb-1">
                  SEMPRE ONLINE
                </span>
                <p className="text-white/60 text-sm leading-relaxed">
                  Trabalhamos para garantir que a sua solução digital funcione perfeitamente, todos os dias do ano, sem dores de cabeça.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4: Consultoria Especializada */}
          <div className="lg:col-span-8 glass-card border border-white/5 hover:border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 transition-colors group">
            <div className="space-y-2 max-w-md">
              <h3 className="text-xl sm:text-2xl font-display font-medium text-white tracking-tight">
                Suporte e Consultoria
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Entendemos as necessidades e os problemas do seu negócio para desenhar a melhor solução digital passo a passo, acompanhando você.
              </p>
            </div>
            
            <button
              onClick={() => {
                setActivePage('portfolio');
              }}
              className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-white cursor-pointer transition-colors group/btn shrink-0"
              id="goto-portfolio-btn"
            >
              Ver Portfólio
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          </motion.div>
        </section>
      </div>

      {/* CORE MOTTO / MIDDLE SECTION */}
      <section className="bg-gradient-to-b from-transparent to-[#0A0A0A] py-10 border-t border-b border-white/5" id="home-motto-section">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#9c9c9c] uppercase">
            A FILOSOFIA TOVEL
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight max-w-2xl mx-auto leading-tight">
            Não vendemos apenas design. <br />
            <span className="text-accent italic font-bold">Criamos tecnologia real</span> para resolver problemas de verdade.
          </h2>
          <p className="text-white/60 text-base leading-relaxed max-w-xl mx-auto">
            Acreditamos que todo pixel desenhado e toda linha de código digitada deve ter um único norte: decolar a eficiência, organizar fluxos internos e alavancar o faturamento do seu negócio.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                window.open('https://wa.me/5554981185625', '_blank');
              }}
              className="bg-accent hover:bg-accent-hover text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all cursor-pointer shadow-lg shadow-accent/15"
            >
              Falar pelo WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="text-center space-y-3 mb-10">
          <span className="text-[10px] font-mono font-bold tracking-widest text-accent uppercase">PERFIL DO CLIENTE</span>
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">Para quem é a Tovel?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
            <h3 className="text-lg font-bold text-white mb-2">Comerciantes e Lojistas</h3>
            <p className="text-sm text-white/60 leading-relaxed">Que precisam organizar o estoque, automatizar pedidos de clientes via WhatsApp e gerenciar finanças sem depender de planilhas de papel.</p>
          </div>
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
            <h3 className="text-lg font-bold text-white mb-2">Prestadores de Serviços</h3>
            <p className="text-sm text-white/60 leading-relaxed">Médicos, advogados, oficinas e consultores que buscam um site profissional para passar confiança e captar mais clientes online.</p>
          </div>
          <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
            <h3 className="text-lg font-bold text-white mb-2">Empresas em Crescimento</h3>
            <p className="text-sm text-white/60 leading-relaxed">Negócios que precisam de um aplicativo próprio ou plataforma SaaS (assinaturas) para vender em escala com tecnologia de ponta.</p>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS DE CONFIANÇA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full border-t border-white/5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-center">
          <div className="space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">1</div>
            <h4 className="text-sm font-bold text-white">Atendimento Direto</h4>
            <p className="text-xs text-white/50">Você fala com quem resolve.</p>
          </div>
          <div className="space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">2</div>
            <h4 className="text-sm font-bold text-white">Escopo Definido</h4>
            <p className="text-xs text-white/50">Sem surpresas de preço.</p>
          </div>
          <div className="space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">3</div>
            <h4 className="text-sm font-bold text-white">Prazo Combinado</h4>
            <p className="text-xs text-white/50">Cronograma transparente.</p>
          </div>
          <div className="space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">4</div>
            <h4 className="text-sm font-bold text-white">Foco no Resultado</h4>
            <p className="text-xs text-white/50">Soluções para vender mais.</p>
          </div>
          <div className="space-y-2">
            <div className="w-10 h-10 mx-auto rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">5</div>
            <h4 className="text-sm font-bold text-white">Suporte Pós-Entrega</h4>
            <p className="text-xs text-white/50">Não abandonamos você.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">Perguntas Frequentes</h2>
        </div>
        <div className="space-y-4 text-left">
          <div className="glass-card p-6 rounded-xl border border-white/5">
            <h3 className="text-white font-bold mb-2">Vocês atendem empresas de qual tamanho?</h3>
            <p className="text-sm text-white/60">Atendemos desde profissionais liberais precisando de uma página de vendas até médias empresas precisando de um sistema web complexo.</p>
          </div>
          <div className="glass-card p-6 rounded-xl border border-white/5">
            <h3 className="text-white font-bold mb-2">Qual é o prazo de entrega?</h3>
            <p className="text-sm text-white/60">Depende do projeto. Sites institucionais e Landing Pages levam em média de 7 a 15 dias. Sistemas internos e aplicativos podem levar de 30 a 90 dias, sempre combinados em contrato.</p>
          </div>
          <div className="glass-card p-6 rounded-xl border border-white/5">
            <h3 className="text-white font-bold mb-2">Terei suporte depois que o site for pro ar?</h3>
            <p className="text-sm text-white/60">Sim! Todos os nossos projetos incluem garantia e possuímos planos de manutenção mensais bem acessíveis para cuidar de hospedagem, segurança e correções.</p>
          </div>
          <div className="glass-card p-6 rounded-xl border border-white/5">
            <h3 className="text-white font-bold mb-2">Como funcionam os pagamentos?</h3>
            <p className="text-sm text-white/60">O pagamento é dividido conforme o tamanho do projeto. Geralmente aceitamos entrada e parcelamento ao longo do desenvolvimento, via Pix ou boleto.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
