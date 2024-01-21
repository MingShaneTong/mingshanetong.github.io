import { Media } from "@/models/Media";

export default interface Logo {
  id: number;
  attributes: {
    sitename: string;
    media: Media;
  }
}