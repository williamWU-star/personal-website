export interface ProjectCase {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  role: string;
  description: string;
  detailedDescription: string;
  imageUrl: string;
  colorTheme: string; // Tailwind hex or class-friendly representation
  accentColor: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  challenges: string[];
  solutions: string[];
  process: {
    phase: string;
    details: string;
  }[];
}

export interface CareerTimeline {
  id: string;
  year: string;
  role: string;
  company: string;
  location: string;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; proficiency: number }[];
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}
