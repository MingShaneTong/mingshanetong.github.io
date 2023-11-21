import type { Schema, Attribute } from '@strapi/strapi';

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'navbar.nav-item': NavbarNavItem;
      'navbar.sub-nav-item': NavbarSubNavItem;
      'post.text': PostText;
    }
  }
}
