import { Media } from "@/models/Media";

export interface Footer {
  id: number;
  attributes: {
    sitename: String;
    logo: {
      data: Media;
    };
    socials: Social[];
  }
}

export interface Social {
  label: string;
  icon: string;
  href: string;
}
