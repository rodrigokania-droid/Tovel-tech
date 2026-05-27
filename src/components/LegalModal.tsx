import React, { useEffect, useRef } from 'react';
import { X, ShieldCheck, FileText, Lock } from 'lucide-react';

export type LegalDocType = 'privacidade' | 'termos' | 'lgpd' | null;

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentType: LegalDocType;
}

export default function LegalModal({ isOpen, onClose, documentType }: LegalModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle outside click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !documentType) return null;

  const renderContent = () => {
    switch (documentType) {
      case 'privacidade':
        return (
          <>
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-6">
              <ShieldCheck className="text-accent w-8 h-8" />
              <h2 className="text-3xl font-black text-white tracking-tight">Política de Privacidade</h2>
            </div>
            <div className="space-y-8 text-white/70 text-sm sm:text-base leading-relaxed pr-2">
              <p>
                A Tovel Tecnologia trabalha com sites, sistemas, aplicativos, SaaS, automações e mídias sociais. Esta política pode ser atualizada periodicamente para refletir melhorias em nossos serviços ou exigências legais.
              </p>
              
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-accent tracking-tight">1. Coleta de informações</h3>
                <p>
                  A Tovel Tecnologia pode coletar informações de identificação pessoal, como nome, endereço de e-mail e número de telefone, quando você nos contata para solicitar serviços ou interage voluntariamente com nossas plataformas. Também coletamos automaticamente dados técnicos para fins analíticos.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-accent tracking-tight">2. Uso das informações</h3>
                <p>
                  As informações coletadas são utilizadas exclusivamente para compreender suas necessidades, fornecer um serviço de alta qualidade, processar pagamentos, enviar atualizações sobre o andamento dos projetos e aprimorar nossos produtos.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-accent tracking-tight">3. Compartilhamento de dados</h3>
                <p>
                  A Tovel Tecnologia não vende, aluga ou negocia suas informações pessoais. Os dados podem ser compartilhados apenas com parceiros de infraestrutura rigorosamente necessários para a execução dos serviços contratados.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-accent tracking-tight">4. Cookies e tecnologias semelhantes</h3>
                <p>
                  Utilizamos cookies e tecnologias de rastreamento semelhantes para melhorar sua experiência em nosso site e compilar dados agregados sobre o tráfego.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-accent tracking-tight">5. Segurança das informações</h3>
                <p>
                  Implementamos medidas de segurança administrativas, técnicas e físicas desenvolvidas para proteger as informações pessoais que você nos fornece.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-accent tracking-tight">6. Direitos do usuário</h3>
                <p>
                  Você tem o direito de solicitar acesso, correção, atualização ou exclusão de suas informações pessoais a qualquer momento.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-accent tracking-tight">7. Retenção de dados</h3>
                <p>
                  Reteremos suas informações pessoais pelo tempo necessário para cumprir os propósitos descritos nesta Política de Privacidade.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-accent tracking-tight">8. Alterações nesta política</h3>
                <p>
                  Nos reservamos o direito de modificar esta política a qualquer momento. As alterações surtirão efeito imediatamente após sua publicação no site.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-accent tracking-tight">9. Contato</h3>
                <p>
                  Em caso de dúvidas sobre privacidade, entre em contato conosco através de nossos canais oficiais.
                </p>
              </div>
            </div>
          </>
        );
      
      case 'termos':
        return (
          <>
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-6">
              <FileText className="text-accent w-8 h-8" />
              <h2 className="text-3xl font-black text-white tracking-tight">Termos de Uso</h2>
            </div>
            <div className="space-y-8 text-white/70 text-sm sm:text-base leading-relaxed pr-2">
              <p>
                Bem-vindo ao site da Tovel Tecnologia. Ao acessar e utilizar nossos serviços de desenvolvimento de sites, sistemas, aplicativos e SaaS, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso.
              </p>
              
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-accent tracking-tight">1. Aceitação dos Termos</h3>
                <p>
                  O acesso aos serviços da Tovel Tecnologia está sujeito à aceitação integral destes termos. Se você discorda de qualquer parte, solicitamos que não utilize nossos serviços.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-accent tracking-tight">2. Propriedade Intelectual</h3>
                <p>
                  Todo o conteúdo, design, arquitetura de software, logotipos e materiais produzidos pela Tovel Tecnologia são de nossa propriedade intelectual exclusiva, a menos que especificado de outra forma em contrato específico com o cliente.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-accent tracking-tight">3. Uso Aceitável</h3>
                <p>
                  Você concorda em utilizar nossos serviços de tecnologia apenas para fins lícitos e de maneira que não infrinja os direitos de, ou restrinja e iniba o uso por parte de terceiros.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-accent tracking-tight">4. Limitação de Responsabilidade</h3>
                <p>
                  A Tovel Tecnologia empenha-se em manter seus serviços operacionais de forma otimizada. No entanto, não nos responsabilizamos por perdas de dados, interrupções ou danos decorrentes de uso indevido das aplicações desenvolvidas, fora do escopo de manutenção contratado.
                </p>
              </div>
            </div>
          </>
        );

      case 'lgpd':
        return (
          <>
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-6">
              <Lock className="text-accent w-8 h-8" />
              <h2 className="text-3xl font-black text-white tracking-tight">Adequação à LGPD</h2>
            </div>
            <div className="space-y-8 text-white/70 text-sm sm:text-base leading-relaxed pr-2">
              <p>
                A Tovel Tecnologia está em plena conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD), garantindo a privacidade e a proteção rigorosa dos dados pessoais de nossos clientes e parceiros.
              </p>
              
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-accent tracking-tight">1. Nosso Compromisso</h3>
                <p>
                  Como uma empresa de engenharia de software, tratamos a segurança dos dados com extrema seriedade. Projetamos nossas arquiteturas tecnológicas adotando os princípios de "Privacy by Design" e "Privacy by Default".
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-accent tracking-tight">2. Base Legal para Tratamento</h3>
                <p>
                  Todo tratamento de dados realizado pela Tovel é amparado por uma base legal, como o cumprimento de contrato (desenvolvimento de software e sistemas) ou consentimento explícito.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-accent tracking-tight">3. Portal do Titular</h3>
                <p>
                  Para exercer seus direitos garantidos pela LGPD (como confirmação, acesso, correção, anonimização, bloqueio, ou eliminação de dados), você pode entrar em contato direto com o nosso Encarregado de Dados (DPO) através dos nossos canais de atendimento.
                </p>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#000000]/80 backdrop-blur-sm animate-fadeIn"
      onClick={handleOverlayClick}
      aria-modal="true"
      role="dialog"
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-[900px] max-h-[80vh] flex flex-col bg-[#0f0f0f] border border-accent/30 rounded-2xl shadow-2xl shadow-accent/10 overflow-hidden transform transition-all"
        style={{ animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#1A1A1A] hover:bg-accent hover:text-white text-white/50 rounded-full transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto p-6 sm:p-10 custom-scrollbar">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
