import { Media } from "@/models/Media";

export interface Navbar {
  id: number;
  attributes: {
    sitename: String;
    logo: {
      data: Media;
    };
    navItems: NavItem[];
  }
}

export interface NavItem {
  label: string;
  href: string;
  children: SubNavItem[];
}

export interface SubNavItem {
  label: string;
  subLabel: string;
  href: string;
}