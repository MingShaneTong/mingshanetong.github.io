export interface ContactMePage {
  id: number;
  attributes: {
    googleform: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    publishedAt: string | Date;
  };
};