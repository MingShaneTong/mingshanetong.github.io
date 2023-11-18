import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticleSection extends Schema.Component {
  collectionName: 'components_article_sections';
  info: {
    displayName: 'Section';
    icon: 'pencil';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    content: Attribute.Component<'article.text', true>;
  };
}

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
      'article.section': ArticleSection;
      'article.text': ArticleText;
    }
  }
}
