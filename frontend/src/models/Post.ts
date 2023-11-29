import { Media } from "@/models/Media";

export interface Post {
  id: number;
  attributes: {
    title: string;
    createdAt: string | Date;
    updatedAt: string | Date;
    publishedAt: string | Date;
    content: Text[];
    category: string;
    recommended: boolean;
    coverImage: {
      data: Media;
    };
  };
};

export interface Text {
  id: number;
  type: "markdown" | "html";
  content: string;
}