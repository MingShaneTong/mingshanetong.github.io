export interface Post {
  id: number;
  attributes: {
    title: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    publishedAt: string | Date;
    content: Text[];
  };
};

export interface Text {
  id: number;
  type: "markdown" | "html";
  content: string;
}