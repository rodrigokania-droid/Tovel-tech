export type ActivePage = 'home' | 'servicos' | 'portfolio' | 'planos' | 'sobre' | 'contato';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'sites' | 'sistemas' | 'apps' | 'saas' | 'social_media';
  categoryLabel: string;
  description: string;
  techList: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  badge: string;
  extendedDescription: string;
}

export interface PlanItem {
  name: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  tag?: string;
  whatsappMessage: string;
  buttonLabel: string;
}

export interface JobStep {
  number: string;
  title: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}
