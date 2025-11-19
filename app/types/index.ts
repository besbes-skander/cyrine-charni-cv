// Personal Information
// Note: Contact info (email, phone, linkedin, calendly) is now in config/site.config.ts
export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  headline: string;
  subtitle: string;
  experience: string;
  location: string;
  age: number;
  nationality: string;
  yearsInParis: number;
}

// Navigation
export interface NavigationItem {
  id: string;
  label: string;
}

export interface NavigationData {
  items: NavigationItem[];
}

// Hero Stats
export interface HeroStat {
  value: string;
  label: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color: ColorVariant;
}

export interface HeroStatsData {
  stats: HeroStat[];
}

// About
export interface Highlight {
  text: string;
  color: ColorVariant;
}

export interface Journey {
  title: string;
  content: string;
  highlights: Highlight[];
}

export interface Motivation {
  icon: string;
  title: string;
  description: string;
}

export interface Value {
  title: string;
  description: string;
}

export interface AboutData {
  journey: Journey;
  motivations: Motivation[];
  values: Value[];
}

// Skills
export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ToolCategory {
  category: string;
  tools: string[];
}

export interface SkillsData {
  coreSkills: SkillCategory[];
  toolStack: ToolCategory[];
}

// Case Studies
export interface StrategyPoint {
  text: string;
  detail: string;
}

export interface Challenge {
  title: string;
  points: string[];
}

export interface Strategy {
  title: string;
  points: StrategyPoint[];
}

export interface Mission {
  title: string;
  points: string[];
}

export interface Result {
  label: string;
  value: string;
  color: ColorVariant;
}

export interface Impact {
  value: string;
  label: string;
  detail: string;
}

export interface CaseStudy {
  id: string;
  icon: IconName;
  color: ColorVariant;
  title: string;
  role: string;
  period: string;
  challenge?: Challenge;
  strategy?: Strategy;
  mission?: Mission;
  results?: Result[];
  impact?: Impact;
}

export interface CaseStudiesData {
  caseStudies: CaseStudy[];
}

// Job Search
export interface JobCriteria {
  icon: IconName;
  description: string;
}

export interface JobSearchData {
  title: string;
  criteria: JobCriteria[];
  summary: string;
}

// Hobbies
export interface Hobby {
  icon: IconName;
  title: string;
  description: string;
  color: string;
}

export interface TaglinePart {
  text: string;
  color: ColorVariant;
}

export interface Tagline {
  text: string;
  parts: TaglinePart[];
}

export interface HobbiesData {
  title: string;
  hobbies: Hobby[];
  tagline: Tagline;
}

// Contact
export interface ContactData {
  title: string;
  subtitle: string;
  availability: string[];
}

// Footer
export interface FooterData {
  text: string;
  lastUpdate: string;
}

// Utility Types
export type ColorVariant = 'pink' | 'purple' | 'blue' | 'green' | 'yellow';
export type IconName =
  | 'Mail'
  | 'Linkedin'
  | 'Phone'
  | 'MapPin'
  | 'Download'
  | 'Calendar'
  | 'TrendingUp'
  | 'Users'
  | 'Target'
  | 'Heart'
  | 'Sparkles'
  | 'Book'
  | 'Plane'
  | 'Music'
  | 'Compass'
  | 'Puzzle'
  | 'Building2'
  | 'User'
  | 'Shield'
  | 'Globe';
