export interface Footer {
  id: number;
  attributes: {
    logo: string;
    footerText: string;
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