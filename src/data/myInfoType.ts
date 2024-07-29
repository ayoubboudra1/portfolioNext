import { ReactNode } from 'react';

interface Experience {
  title: string;
  location: string;
  date: string;
  description: string;
}

interface Education {
  title: string;
  location: string;
  date: string;
  description: string;
}

interface AreaOfInterest {
  title: string;
  description: string;
  icon: ReactNode;
}

interface TechnicalSkill {
  skillName: string;
  percentage: string;
}

interface Language {
  name: string;
  icon: ReactNode;
  stars: ReactNode;
}

interface SoftSkill {
  name: string;
  icon: ReactNode;
}

interface Project {
  id: number;
  title: string;
  tags: string[];
  date: string;
  fullDescription: string;
  images: string[];
  typeWork: string;
  techUsed: string[];
}

export interface MyInfo {
  fullName: string;
  myEmail: string;
  myPhone: string;
  smallDescription: string;
  myImagePath: string;
  descriptionAboutMe: ReactNode;
  myExperience: Experience[];
  myEducation: Education[];
  areasOfInterst: AreaOfInterest[];
  technicalSkillsLeft: TechnicalSkill[];
  technicalSkillsRight: TechnicalSkill[];
  languages: Language[];
  softSkills: SoftSkill[];
  projects: Project[];
  footerDescription: string;
}
