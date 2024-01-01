import type { Schema, Attribute } from '@strapi/strapi';

export interface HomepageActions extends Schema.Component {
  collectionName: 'components_homepage_actions';
  info: {
    displayName: 'action';
    icon: 'puzzle';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    href: Attribute.String;
  };
}

export interface HomepageHero extends Schema.Component {
  collectionName: 'components_homepage_heroes';
  info: {
    displayName: 'Hero';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    actions: Attribute.Component<'homepage.actions', true>;
  };
}

export interface NavbarNavItem extends Schema.Component {
  collectionName: 'components_navigation_nav_items';
  info: {
    displayName: 'NavItem';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
    children: Attribute.Component<'navbar.sub-nav-item', true>;
  };
}

export interface NavbarSubNavItem extends Schema.Component {
  collectionName: 'components_navigation_sub_nav_items';
  info: {
    displayName: 'SubNavItem';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    subLabel: Attribute.String;
    href: Attribute.String;
  };
}

export interface PostText extends Schema.Component {
  collectionName: 'components_article_texts';
  info: {
    displayName: 'Text';
    icon: 'file';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['markdown', 'html']>;
    content: Attribute.RichText;
  };
}

export interface SocialSocials extends Schema.Component {
  collectionName: 'components_footer_socials';
  info: {
    displayName: 'Social';
    icon: 'user';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
    icon: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'homepage.actions': HomepageActions;
      'homepage.hero': HomepageHero;
      'navbar.nav-item': NavbarNavItem;
      'navbar.sub-nav-item': NavbarSubNavItem;
      'post.text': PostText;
      'social.socials': SocialSocials;
    }
  }
}
