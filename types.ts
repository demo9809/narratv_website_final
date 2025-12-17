export enum ServiceCategory {
  BRANDING = 'Branding & Identity',
  STRATEGY = 'Creative Strategy',
  ADVERTISING = 'Ad Campaigns',
  DIGITAL = 'Digital Marketing',
  PRODUCTION = 'Video Production',
  CONTENT = 'Content Creation'
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SubService {
  title: string;
  description: string;
}

export interface ServiceDetail {
  heroImage: string;
  tagline: string; // Short punchy text above H1
  introHeadline: string; // H2 for the intro section
  introContent: string; // HTML allowed: Overview text
  problemTitle: string;
  problemContent: string; // HTML allowed: The "Pain"
  solutionTitle: string;
  solutionContent: string; // HTML allowed: The "Gain"
  subServices: SubService[]; // Renders as a grid of cards
  benefits: string[];
  deliverables: string[];
  processSteps: { title: string; description: string }[];
  faq: FaqItem[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategory;
  description: string;
  includes: string[];
  details: ServiceDetail;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: ServiceCategory; 
  tags: string[];
  imageUrl: string;
  overview: string;
  results: string;
  gallery?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
  introHeadline: string; // The "Hook" H2
  introContent: string; // HTML: The first few paragraphs
  keyTakeaways: string[]; // Bullet points for the sidebar
  articleSections: {
    heading: string;
    content: string; // HTML allowed
  }[];
  quote?: {
    text: string;
    author: string;
  };
  category: string;
  date: string;
  imageUrl: string;
  readTime: string;
  author: string;
  authorRole: string;
  tags: string[];
}

export interface NavLink {
  label: string;
  path: string;
}

export const CONTACT_DETAILS = {
  email: "hello@narratv.co",
  phone: "+91 87145 31301",
  whatsapp: "+91 87145 31301",
  address: "Room No. 6, Ground Floor, KINFRA Advanced Technology Park, Ramanattukara - Calicut, Kerala 673631",
  mapsLink: "https://maps.google.com/?q=KINFRA+Advanced+Technology+Park+Calicut"
};