export interface HomePage {
  id: number;
  attributes: {
    createdAt: string | Date;
    updatedAt: string | Date;
    publishedAt: string | Date;
    hero: Hero;
    aboutme: AboutMe;
    workexperience: WorkExperience[];
  };
};

export interface Hero {
  title: string;
  description: string;
  actions: {
    text: string;
    href: string;
  }[];
}

export interface AboutMe {
  welcome: string;
  description: string;
  achievements: string;
}

export interface WorkExperience {
  line1: string;
  line2: string;
  period: string;
  description: string;
  tags: string;
}