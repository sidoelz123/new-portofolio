export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  extendedDescription: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  architecture: string[];
  demoUrl?: string;
  githubUrl?: string;
  imageSeed: string;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  code: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    tag: string;
  }[];
}

export interface SystemLog {
  timestamp: string;
  type: 'INFO' | 'SUCCESS' | 'WARN' | 'EXEC';
  message: string;
}

export type CursorContextType = 'DEFAULT' | 'VIEW' | 'OPEN' | 'EMAIL' | 'LAUNCH' | 'EXPLORE' | 'COPY' | 'TERMINAL';

export interface CursorState {
  text: string;
  context: CursorContextType;
  isHovered: boolean;
}
