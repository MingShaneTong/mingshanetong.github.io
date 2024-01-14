import { Container, Image, Title } from '@mantine/core';
import ReactMarkdown, { Components } from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import rehypeRaw from 'rehype-raw';
import { notFound } from 'next/navigation';
import { Text as PostText } from "@/models/Post";
import { getPostData } from '@/controllers/postController';
import styles from "./page.module.css";
import { FRONTEND_UPLOAD_URL } from '@/config/api';

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
  const components: Partial<Components> = {
    img({ src, alt }: { src: string, alt: string }) {
      if(src[0] == '/') {
        src = FRONTEND_UPLOAD_URL + src;
      }
      return <Image src={src} alt={alt} />
    }, 
    code({ className = "", children }: { className: string, children: string }) {
      const match = /language-(\w+)/.exec(className || '')
      if (!match) {
        return (<code>{children}</code>)
      }
      const language = className.replace("language-", "");
      return (
          <SyntaxHighlighter
            language={language}
            children={children}
          />
      );
    }
  };

  return (
    <ReactMarkdown components={components} rehypePlugins={rehypePlugins}>
      {text.content}
    </ReactMarkdown>
  );
}

export default IndexView;