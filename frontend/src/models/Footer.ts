export interface Footer {
  id: number;
  attributes: {
    logo: string;
    socials: Social[];
  }
}

export interface Social {
  label: string;
  icon: string;
  href: string;
}