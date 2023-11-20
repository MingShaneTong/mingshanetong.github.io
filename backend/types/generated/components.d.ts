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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'article.text': ArticleText;
    }
  }
}
