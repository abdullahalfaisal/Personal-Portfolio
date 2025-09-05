export type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  image_hint: string;
  links: {
    live?: string;
    client?: string;
    server?: string;
  };
};

export type Skill = {
  name: string;
  proficiency?: number;
  icon?: JSX.Element;
  iconPath?: string;
};

export type SkillsByCategory = {
  [category: string]: Skill[];
}

export type Experience = {
  company: string;
  title: string;
  date: string;
  description: string[];
};

export type Education = {
  institution: string;
  degree: string;
  date: string;
};

export type Certification = {
  issuer: string;
  name: string;
  date: string;
};

export type Socials = {
    github: string;
    linkedin: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
}
