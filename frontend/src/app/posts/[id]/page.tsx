import { Container, Title } from '@mantine/core';
import ReactMarkdown, { Components } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import rehypeRaw from 'rehype-raw';
import { notFound } from 'next/navigation';
import Image from 'next/image';

import { Text as PostText } from "@/models/Post";
import { getPostIds, getPostData } from '@/controllers/postController';
import styles from "./page.module.css";

export async function generateStaticParams() {
  let posts = await getPostIds();
 
  return posts.data.map((post) => ({
    id: post.id.toString(),
  }))
}

const IndexView = async ({ params }: { params: { id: number } }) => {
  let response = await getPostData(params.id).catch(notFound);
  let content = response.data.attributes.content;

  return (
    <Container className={styles.article} py={60}>
      <Title order={1} mb={16} className={`title ${styles.title}`}>{response.data.attributes.title}</Title>
      {content.map(
        (text, index) => 
          <TextView key={index} text={text}/>
      )}
    </Container>
  );
};

const TextView = ({ text }: { text: PostText }) => {
  let rehypePlugins = (text.type == 'html') ? [rehypeRaw] : [];
  const components = {
    img({ src, alt }: { src: string, alt: string }) {
      return <Image src={src} alt={alt} width="700" height="700" />
    }, 
    code({ className = "", children }: { className: string, children: string }) {
      const match = /language-(\w+)/.exec(className || '')
      if (!match) {
        return (<code>{children}</code>)
      }
      const language = className.replace("language-", "");
      return (
          <SyntaxHighlighter 
            language={language}>
              {children}
          </SyntaxHighlighter>
      );
    }
  };

  return (
    <ReactMarkdown components={components as Partial<Components>} rehypePlugins={rehypePlugins}>
      {text.content}
    </ReactMarkdown>
  );
}

export default IndexView;