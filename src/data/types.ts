export interface SiteConfig {
  name: string;
  initials: string;
  title: string;
  description: string;
  lang: 'ja' | 'en';
}

export interface SocialLink {
  label: string;
  value: string;
  href: string;
  icon: 'github' | 'twitter' | 'mail' | 'globe';
}

export interface SkillCategory {
  label: string;
  items: string[];
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  url: string;
  description: string;
  technologies: string[];
}

export interface Contact {
  message: string;
}

export interface Footer {
  text: string;
}

export interface NavItem {
  label: string;
  href: string;
}
