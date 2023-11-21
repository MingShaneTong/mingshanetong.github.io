import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticleText extends Schema.Component {
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

export interface NavigationNavItem extends Schema.Component {
  collectionName: 'components_navigation_nav_items';
  info: {
    displayName: 'NavItem';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
    children: Attribute.Component<'navigation.sub-nav-item', true>;
  };
}

export interface NavigationSubNavItem extends Schema.Component {
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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'article.text': ArticleText;
      'navigation.nav-item': NavigationNavItem;
      'navigation.sub-nav-item': NavigationSubNavItem;
    }
  }
}
