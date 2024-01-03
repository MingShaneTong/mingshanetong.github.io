export interface Social {
  id: number;
  attributes: {
    socials: SocialItem[];
  }
}

export interface SocialItem {
  label: string;
  icon: string;
  href: string;
}
