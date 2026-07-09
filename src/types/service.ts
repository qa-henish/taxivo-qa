export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  heroDescription: string;
  icon: string;
  benefits: string[];
  process: ServiceProcessStep[];
  faqs?: ServiceFaq[];
  relatedServiceSlugs?: string[];
  featured?: boolean;
}
