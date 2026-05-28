import { PortfolioItem, ServiceItem, PlanItem, JobStep } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'sites',
    title: 'Sites Institucionais',
    iconName: 'Laptop',
    description: 'A vitrine oficial da sua empresa na internet. Sites modernos que passam confiança e explicam exatamente o que você faz.',
    badge: 'AUTORIDADE',
    extendedDescription: 'Ideal para empresas e prestadores de serviço que precisam de um endereço fixo e profissional para serem encontrados no Google.'
  },
  {
    id: 'landing_pages',
    title: 'Landing Pages',
    iconName: 'Compass',
    description: 'Páginas rápidas focadas em um único objetivo: transformar visitantes em leads (contatos) ou clientes.',
    badge: 'VENDAS',
    extendedDescription: 'Perfeito para campanhas de anúncios e lançamentos. Textos e visual desenhados especificamente para gerar mais cliques no botão de WhatsApp.'
  },
  {
    id: 'sistemas',
    title: 'Sistemas Internos',
    iconName: 'Database',
    description: 'Esqueça planilhas confusas. Sistemas web sob medida para organizar clientes, estoque, financeiro ou processos.',
    badge: 'ORGANIZAÇÃO',
    extendedDescription: 'Softwares desenhados de acordo com a regra do seu negócio, para que a sua equipe trabalhe mais rápido e sem cometer erros.'
  },
  {
    id: 'aplicativos',
    title: 'Aplicativos',
    iconName: 'Cpu',
    description: 'Seu negócio na palma da mão dos seus clientes ou equipe. Aplicativos rápidos e fáceis de usar.',
    badge: 'INOVAÇÃO',
    extendedDescription: 'Desenvolvemos apps para catálogos, agendamentos, delivery ou ferramentas para funcionários que trabalham na rua.'
  },
  {
    id: 'saas',
    title: 'SaaS / Plataformas',
    iconName: 'Database',
    description: 'Transforme sua ideia em um negócio online com pagamentos mensais (assinaturas) ou venda de acessos.',
    badge: 'ESCALA',
    extendedDescription: 'Criamos plataformas complexas, áreas de membros e ferramentas online preparadas para receber milhares de acessos.'
  },
  {
    id: 'automacoes',
    title: 'Automações',
    iconName: 'GitBranch',
    description: 'Sistemas inteligentes que fazem o trabalho repetitivo por você, enviando mensagens ou cruzando dados.',
    badge: 'PRODUTIVIDADE',
    extendedDescription: 'Integramos WhatsApp, e-mails, bancos e sistemas para que a informação flua automaticamente na sua empresa 24h por dia.'
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
    buttonLabel: "Quero um sistema para minha empresa"
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
    buttonLabel: "Falar pelo WhatsApp"
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
