export interface Post {
  id: number;
  attributes: {
    title: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    publishedAt: string | Date;
    content: Text[];
    category: string;
  };
};

export interface Text {
  id: number;
  type: "markdown" | "html";
  content: string;
}