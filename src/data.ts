import { PortfolioItem, ServiceItem, PlanItem, JobStep } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'sites',
    title: 'Sites Profissionais',
    iconName: 'Laptop',
    description: 'Sites rápidos, modernos e otimizados para o Google. Sua vitrine digital focada em receber contatos e vender mais.',
    badge: 'VENDAS',
    extendedDescription: 'Criamos sites que carregam instantaneamente no celular ou computador, garantindo que você não perca nenhum cliente por lentidão ou erros.'
  },
  {
    id: 'sistemas',
    title: 'Sistemas e Aplicativos',
    iconName: 'Cpu',
    description: 'Sistemas sob medida para organizar sua empresa, clientes e pedidos. Ferramentas que trabalham por você, e não o contrário.',
    badge: 'SOB MEDIDA',
    extendedDescription: 'Desenvolvemos aplicativos e painéis fáceis de usar, feitos exatamente para resolver os problemas do dia a dia e se adaptar às regras do seu negócio.'
  },
  {
    id: 'saas',
    title: 'Plataformas Online',
    iconName: 'Database',
    description: 'Tire sua ideia do papel e crie sua própria plataforma de vendas, portal de alunos ou sistema de assinaturas na internet.',
    badge: 'INOVAÇÃO',
    extendedDescription: 'Construa uma plataforma profissional pronta para receber pagamentos, cadastrar milhares de usuários e crescer junto com o seu projeto.'
  },
  {
    id: 'automacoes',
    title: 'Automações de Processo',
    iconName: 'GitBranch',
    description: 'Sistemas inteligentes que eliminam o trabalho manual e repetitivo da sua equipe, reduzindo falhas.',
    badge: 'PRODUTIVIDADE',
    extendedDescription: 'Conectamos planilhas, WhatsApp, e-mails e sistemas para que as informações conversem entre si no automático, poupando horas de trabalho todos os dias.'
  },
  {
    id: 'social_media',
    title: 'Presença Digital',
    iconName: 'Compass',
    description: 'Estratégia visual e gestão focada em atrair clientes reais e fortalecer o nome da sua empresa no mercado.',
    badge: 'AUTORIDADE',
    extendedDescription: 'Muito além de curtidas: criamos um visual altamente profissional e usamos a internet para trazer pessoas que realmente querem e podem comprar de você.'
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'Site para Empresa',
    category: 'sites',
    categoryLabel: 'SITES',
    description: 'Criação de um site completo focado em passar credibilidade e receber pedidos de orçamento.',
    techList: ['Design Premium', 'Botão WhatsApp', 'Otimizado pro Google', 'Rápido']
  },
  {
    id: 'port-2',
    title: 'Página de Vendas',
    category: 'sites',
    categoryLabel: 'SITES',
    description: 'Página focada em apresentar um produto e fazer o cliente comprar ou entrar em contato na hora.',
    techList: ['Foco em Vendas', 'Perfeito no Celular', 'Carregamento Rápido']
  },
  {
    id: 'port-3',
    title: 'Sistema de Gestão',
    category: 'sistemas',
    categoryLabel: 'SISTEMAS',
    description: 'Sistema sob medida para organizar estoque, pedidos e clientes em um só lugar.',
    techList: ['Painel de Controle', 'Relatórios', 'Acesso Seguro', 'Fácil de Usar']
  },
  {
    id: 'port-4',
    title: 'Aplicativo para Equipe',
    category: 'apps',
    categoryLabel: 'APPS',
    description: 'Aplicativo de celular para funcionários usarem na rua ou na empresa, acompanhando tarefas.',
    techList: ['App no Celular', 'Geração de PDF', 'Rápido e Prático']
  },
  {
    id: 'port-5',
    title: 'Plataforma de Membros',
    category: 'saas',
    categoryLabel: 'PLATAFORMAS',
    description: 'Site restrito para alunos ou assinantes com login, senha e pagamento automático mensal.',
    techList: ['Área de Login', 'Pagamento Automático', 'Bloqueio de Acesso']
  },
  {
    id: 'port-6',
    title: 'Identidade Visual e Redes',
    category: 'social_media',
    categoryLabel: 'PRESENÇA DIGITAL',
    description: 'Organização completa das redes sociais para a empresa passar uma imagem mais cara e profissional.',
    techList: ['Artes Profissionais', 'Textos Atrativos', 'Organização Visual']
  }
];

export const PLANS_DATA: PlanItem[] = [
  {
    name: "Site Profissional",
    description: "Para empresas que precisam aparecer melhor e receber mais contatos.",
    features: [
      "Site moderno e responsivo",
      "Botão direto para WhatsApp",
      "Formulário de contato",
      "Página otimizada para Google",
      "Ideal para empresas, profissionais e prestadores de serviço"
    ],
    whatsappMessage: "Olá! Gostaria de saber mais sobre a criação de um Site Profissional.",
    buttonLabel: "Quero criar meu site"
  },
  {
    name: "Aplicativo ou Sistema",
    description: "Para empresas que precisam organizar processos, clientes, pedidos ou equipes.",
    features: [
      "Sistema online sob medida",
      "Área de login para usuários",
      "Controle de dados e relatórios",
      "Integração com pagamentos, WhatsApp ou formulários",
      "Suporte após a entrega"
    ],
    isPopular: true,
    tag: "MAIS ESCOLHIDO",
    whatsappMessage: "Olá! Quero estruturar um Aplicativo ou Sistema sob medida para minha empresa.",
    buttonLabel: "Quero criar meu sistema"
  },
  {
    name: "Presença Digital",
    description: "Para empresas que precisam melhorar sua imagem e comunicação na internet.",
    features: [
      "Identidade visual digital",
      "Artes para redes sociais",
      "Organização da comunicação",
      "Páginas de venda e campanhas",
      "Estratégia para atrair mais clientes"
    ],
    whatsappMessage: "Olá! Preciso de ajuda para melhorar a Presença Digital da minha empresa.",
    buttonLabel: "Quero melhorar minha presença digital"
  }
];

export const JOB_STEPS: JobStep[] = [
  {
    number: '01',
    title: 'Conversa',
    description: 'Bate-papo para entender como sua empresa funciona hoje e o que precisa ser melhorado ou resolvido.'
  },
  {
    number: '02',
    title: 'A Solução',
    description: 'Desenhamos a melhor solução (um site, aplicativo ou automação), combinamos prazos e explicamos como vai funcionar.'
  },
  {
    number: '03',
    title: 'Criação',
    description: 'Nossa equipe coloca a mão na massa para criar um visual bonito e fazer tudo funcionar perfeitamente sem erros.'
  },
  {
    number: '04',
    title: 'Entrega e Teste',
    description: 'Testamos tudo junto com você para garantir que está fácil de usar, e então colocamos no ar para seus clientes.'
  },
  {
    number: '05',
    title: 'Suporte',
    description: 'Não sumimos após a entrega. Damos todo o suporte necessário para garantir que o projeto continue funcionando bem.'
  }
];
