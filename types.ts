export enum ThemeType {
  CORPORATE = 'CORPORATE',
  NARRATIVE = 'NARRATIVE',
  CYBER = 'CYBER'
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Language' | 'Framework' | 'Infrastructure' | 'Tools' | 'Soft';
}

export interface CareerItem {
  id: string;
  company: string;
  period: string;
  role: string;
  description: string;
  projects: Project[];
}

export interface Project {
  title: string;
  role: string;
  size: string; // e.g. "4 members"
  stack: string[];
  summary: string;
  achievements: string[];
}

export interface Certification {
  name: string;
  date: string;
}
