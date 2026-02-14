import type { SiteConfig, Experience, Contact, Footer, NavItem, SectionLabels } from './types';

export const siteConfig: SiteConfig = {
  name: 'HagaSpa',
  displayName: 'Yuto Haga',
  title: 'Platform / Data / Fullstack',
  description:
    'Specializing in Platform Engineering and Data Engineering on GCP / AWS. Capable of handling all areas from frontend to infrastructure. Passionate about driving efficiency improvements and company-wide initiatives that create impact across organizations.',
  lang: 'en',
};

export const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const about: string[] = [
  'Working in web development and operations since 2015. Currently serving as a Platform Engineer / Data Engineer in the CTO Office at OLTA, Inc.',
  'Passionate about improving developer experience, performance optimization, service reliability, and operational efficiency.',
  'Experienced in non-technical domains including agile project leadership, DevRel event planning and execution, recruitment activities, and company-wide SaaS adoption initiatives.',
  'Competitively playing Street Fighter 6 as a hobby.',
];

export const experiences: Experience[] = [
  {
    period: '2025.08 - Present',
    title: 'CTO Office Platform Engineer / Data Engineer',
    company: 'OLTA, Inc.',
    url: 'https://corp.olta.co.jp/',
    description:
      'Responsible for infrastructure improvements and monitoring on GCP as a Platform Engineer, driving performance optimizations. Leading developer productivity visualization and company-wide AI tool adoption. Managing Looker dashboards optimization and development as a Data Engineer.',
    technologies: ['GCP', 'BigQuery', 'GKE', 'Looker', 'Terraform', 'dbt', 'Django', 'PostgreSQL'],
  },
  {
    period: '2023.06 - 2025.08',
    title: 'Platform Engineer / DevRel',
    company: 'dinii, Inc.',
    url: 'https://www.dinii.jp/',
    description:
      'Managed and improved GCP infrastructure. Achieved full IaC coverage of GCP resources with Terraform. Conducted capacity planning to stabilize services handling 5,000+ requests per second. Led DevRel activities including TSKaigi exhibition and tech event planning, contributing to recruitment.',
    technologies: ['GCP', 'Cloud Run', 'AlloyDB', 'Terraform', 'Cloud Monitoring', 'TypeScript', 'React Native'],
  },
  {
    period: '2021.01 - 2023.05',
    title: 'Lead Engineer',
    company: 'OpenFashion, Inc.',
    url: 'https://www.omnisinc.co/',
    description:
      'Built a production management system for World Group\'s "Original Stitch". Introduced Scrum development as Lead Engineer, implementing sprint management with JIRA and roadmap planning. Established a weekly release cycle.',
    technologies: ['Golang', 'MySQL', 'React', 'GCP', 'Terraform', 'GitHub Actions'],
  },
  {
    period: '2018.09 - 2020.12',
    title: 'Data Engineer',
    company: 'au Commerce & Life, Inc.',
    url: 'https://www.au-cl.co.jp/',
    description:
      'Built and operated a DMP for a mall-type e-commerce business. Adopted a multi-cloud architecture spanning AWS and GCP, managing all infrastructure with Terraform. Contributed to fostering a data-driven decision-making culture.',
    technologies: ['Python', 'Golang', 'AWS', 'GCP', 'Terraform', 'BigQuery', 'Tableau'],
  },
  {
    period: '2015.04 - 2018.09',
    title: 'Software Engineer',
    company: 'Outsourcing Technology Inc.',
    url: 'https://www.ostechnology.co.jp/',
    description:
      'First career position. Involved in the full development lifecycle from design to testing, primarily handling backend across multiple projects. Developed versatile technical skills through diverse contract projects.',
    technologies: ['C#', 'PHP', 'Java', 'Node.js', 'AWS'],
  },
];

export const contractWork: Experience[] = [
  {
    period: '2025.08 - Present',
    title: 'Technical Advisor',
    company: 'seirin and company LLC',
    url: 'https://seirin-company.com/',
    description: 'Consulting for the entire development organization. Knowledge sharing on AI-driven development workflows.',
    technologies: ['AI', 'Claude Code', 'Cursor'],
  },
  {
    period: '2025.07 - Present',
    title: 'SRE',
    company: 'TENHO, Inc.',
    url: 'https://tenho7.jp/',
    description: 'Joined as SRE for a data infrastructure project. Built a data transfer pipeline from AWS Aurora to BigQuery.',
    technologies: ['AWS', 'BigQuery', 'TROCCO'],
  },
  {
    period: '2021.12 - 2025.08',
    title: 'Data Engineer',
    company: 'OLTA, Inc.',
    url: 'https://corp.olta.co.jp/',
    description:
      'Developed programs to ingest screening data into a DataLake. Adopted Cloud Run with docker-compose architecture, sharing container knowledge across the organization. Also designed and implemented CI/CD pipelines.',
    technologies: ['Golang', 'GCP', 'Terraform', 'Cloud Build', 'Python', 'Django'],
  },
  {
    period: '2022.11 - 2023.05',
    title: 'Platform Engineer',
    company: 'dinii, Inc.',
    url: 'https://www.dinii.jp/',
    description:
      'Originally hired for infrastructure development, but took on fullstack tasks. Also worked on mobile development using React Native.',
    technologies: ['TypeScript', 'Terraform', 'React Native'],
  },
];

export const sectionLabels: SectionLabels = {
  aboutProfile: 'Profile',
  experienceFullTime: 'Full-time',
  experienceContract: 'Contract',
  contactGetInTouch: 'Get in touch',
};

export const contact: Contact = {
  message: 'Feel free to reach out for work inquiries or casual tech conversations.',
};

export const footer: Footer = {
  text: '© 2026 HagaSpa. Built with Astro & TypeScript.',
};
