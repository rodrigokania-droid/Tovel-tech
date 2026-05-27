import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function PrivacidadeView() {
  const whatsappUrl = "https://wa.me/5554981185625?text=Ol%C3%A1%2C%20tenho%20d%C3%BAvidas%20sobre%20a%20pol%C3%ADtica%20de%20privacidade.";

  return (
    <div className="space-y-16 pb-20 mt-16 animate-fadeIn" id="privacidade-view">
      
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-4">
            <ShieldCheck size={16} className="text-accent" />
            <span className="text-xs font-bold text-white tracking-widest uppercase">
              Transparência e Segurança
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black text-white tracking-tight leading-tight">
            Política de <span className="text-accent">Privacidade</span>
          </h1>
          <p className="text-lg text-white/60 font-medium">
            Esta política pode ser atualizada periodicamente para refletir melhorias em nossos serviços ou exigências legais.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl border border-white/5 p-8 sm:p-12 space-y-10 text-white/70 text-sm sm:text-base leading-relaxed">
          
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">1. Coleta de informações</h2>
            <p>
              A Tovel Tecnologia pode coletar informações de identificação pessoal, como nome, endereço de e-mail e número de telefone, quando você nos contata para solicitar serviços (sites, sistemas, aplicativos, SaaS, automações e mídias sociais) ou interage voluntariamente com nossas plataformas. Também coletamos automaticamente dados técnicos, como endereço de IP, tipo de navegador e padrão de navegação, para fins analíticos.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">2. Uso das informações</h2>
            <p>
              As informações coletadas são utilizadas exclusivamente para compreender suas necessidades, fornecer um serviço de alta qualidade, processar pagamentos, enviar atualizações sobre o andamento dos projetos, fornecer suporte técnico e aprimorar nossos produtos e estratégias de automação e comunicação.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">3. Compartilhamento de dados</h2>
            <p>
              A Tovel Tecnologia não vende, aluga ou negocia suas informações pessoais com terceiros. Os dados podem ser compartilhados apenas com parceiros de infraestrutura de tecnologia e provedores de serviços (como plataformas de hospedagem em nuvem e processadores de pagamento) rigorosamente necessários para a execução dos serviços contratados, sempre sob rígidos acordos de confidencialidade.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">4. Cookies e tecnologias semelhantes</h2>
            <p>
              Utilizamos cookies e tecnologias de rastreamento semelhantes para melhorar sua experiência em nosso site, lembrar suas preferências e compilar dados agregados sobre o tráfego e as interações na página. Você pode configurar seu navegador para recusar todos ou alguns cookies de navegador, mas isso pode afetar a funcionalidade de algumas partes dos nossos serviços.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">5. Segurança das informações</h2>
            <p>
              Implementamos e mantemos rigorosas medidas de segurança administrativas, técnicas e físicas desenvolvidas para proteger as informações pessoais que você nos fornece contra destruição, perda, alteração, acesso, divulgação ou uso acidental, ilegal ou não autorizado.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">6. Direitos do usuário</h2>
            <p>
              Você tem o direito de solicitar acesso, correção, atualização ou exclusão de suas informações pessoais a qualquer momento. Também possui o direito de se opor ao processamento dos seus dados e solicitar a portabilidade das informações aplicáveis, conforme garantido pelas leis de proteção de dados (como a LGPD no Brasil).
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">7. Retenção de dados</h2>
            <p>
              Reteremos suas informações pessoais pelo tempo necessário para cumprir os propósitos descritos nesta Política de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei (por exemplo, para fins fiscais, contábeis ou outras obrigações legais).
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">8. Alterações nesta política</h2>
            <p>
              Nos reservamos o direito de modificar esta política a qualquer momento, portanto, revise-a com frequência. As alterações e esclarecimentos surtirão efeito imediatamente após sua publicação no site. Se fizermos alterações materiais, notificaremos aqui que a política foi atualizada.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight">9. Contato</h2>
            <p>
              Se você deseja acessar, corrigir, alterar ou excluir quaisquer informações pessoais que temos sobre você, registrar uma queixa, ou simplesmente desejar mais informações, entre em contato com nosso Encarregado de Conformidade através dos nossos canais de atendimento oficiais.
            </p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-16 text-center">
        <div className="flex flex-col items-center gap-6">
          <p className="text-white/60 font-medium">
            Em caso de dúvidas sobre privacidade, entre em contato conosco.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-extrabold text-sm px-8 py-4 rounded-full shadow-lg shadow-accent/15 group cursor-pointer transition-all hover:scale-105 duration-300"
          >
            Falar com a Tovel
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

    </div>
  );
}
