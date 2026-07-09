export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  examples: string[];
  icon: string;
  image: string;
  videoUrl?: string;
  additionalImages?: string[];
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface SuccessCase {
  id: string;
  title: string;
  company: string;
  clientName: string;
  sector: string;
  size: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: string;
}
