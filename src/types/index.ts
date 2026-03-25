// ====================================
// TECNODESPEGUE — Global Types
// ====================================

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
  github?: string;
  featured?: boolean;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}
