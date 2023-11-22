import { Media } from "@/models/Media";

export interface Footer {
  id: number;
  attributes: {
    sitename: String;
    logo: {
      data: Media;
    };
    footerText: String;
    socials: Social[];
    links: Link[];
  }
}

export interface Social {
  label: string;
  icon: string;
  href: string;
}

export interface Link {
  label: string;
  href: string;
}