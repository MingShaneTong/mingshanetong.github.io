export interface HomePage {
  id: number;
  attributes: {
    createdAt: string | Date;
    updatedAt: string | Date;
    publishedAt: string | Date;
    hero: Hero;
    aboutme: AboutMe;
    workexperience: WorkExperience[];
    interests: Interest[];
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

export interface Interest {
  title: string;
  description: string;
  icon: string;
}