export interface HomePage {
  id: number;
  attributes: {
    createdAt: string | Date;
    updatedAt: string | Date;
    publishedAt: string | Date;
    hero: Hero;
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