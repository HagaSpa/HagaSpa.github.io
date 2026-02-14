import type { SocialLink, SkillCategory } from './types';

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', value: 'HagaSpa', href: 'https://github.com/hagaspa', icon: 'github' },
  { label: 'X', value: 'haga_spa', href: 'https://x.com/haga_spa', icon: 'twitter' },
  { label: 'Email', value: 'justicesparrow@gmail.com', href: 'mailto:justicesparrow@gmail.com', icon: 'mail' },
  { label: 'Web', value: 'hagaspa.com', href: 'https://hagaspa.com', icon: 'globe' },
];

export const skills: SkillCategory[] = [
  {
    label: 'Languages',
    items: ['TypeScript', 'Golang', 'Python', 'JavaScript', 'Java', 'PHP', 'C#'],
  },
  {
    label: 'Frontend',
    items: ['Next.js', 'Vue.js', 'React Native', 'Astro'],
  },
  {
    label: 'Backend',
    items: ['Nest.js', 'Django', 'go-chi', 'sqlboiler', 'Spring', 'Laravel'],
  },
  {
    label: 'Infrastructure',
    items: ['GKE', 'Cloud Run', 'Terraform', 'Docker', 'ArgoCD', 'GitHub Actions', 'Cloud Build'],
  },
  {
    label: 'Data',
    items: ['BigQuery', 'PostgreSQL', 'MySQL', 'Looker', 'dbt', 'Tableau', 'Hasura'],
  },
  {
    label: 'Tools',
    items: ['Claude Code', 'Cursor', 'Ghostty', 'tmux', 'Raycast', 'karabiner-elements', 'mise', 'Shottr', 'fzf', 'lsd', 'sheldon', 'starship', 'atuin', 'gh', 'git-delta', 'zoxide', 'bat'],
  },
];
