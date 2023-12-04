export interface Footer {
  id: number;
  attributes: {
    socials: Social[];
  }
}

export interface Social {
  label: string;
  icon: string;
  href: string;
}
