export interface Navbar {
  id: number;
  attributes: {
    logo: string;
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