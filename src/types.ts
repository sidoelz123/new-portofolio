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
  type: "INFO" | "SUCCESS" | "WARN" | "EXEC";
  message: string;
}

export type CursorContextType =
  | "DEFAULT"
  | "VIEW"
  | "OPEN"
  | "EMAIL"
  | "LAUNCH"
  | "EXPLORE"
  | "COPY"
  | "TERMINAL";

export interface CursorState {
  text: string;
  context: CursorContextType;
  isHovered: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  employment_type: string;
  period: string;
  description: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  link: string;
}

export interface SystemPing {
  host: string;
  bytes: number;
  seq: number;
  ttl: number;
  latency: string;
  status: string;
}
