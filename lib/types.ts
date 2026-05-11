export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
  screenshots: string[];
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface NavLink {
  label: string;
  href: string;
}
