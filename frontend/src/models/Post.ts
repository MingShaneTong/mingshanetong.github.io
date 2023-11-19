export interface Post {
  id: number;
  attributes: {
    title: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    publishedAt: string | Date;
    sections: Section[];
  };
};

export interface Section {
  id: number;
  heading: string;
  content: Text[]
}

export interface Text {
  id: number;
  type: "markdown" | "html";
  content: string;
}