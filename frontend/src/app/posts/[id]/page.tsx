import { Container, Title } from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { notFound } from 'next/navigation';
import { Text as PostText } from "@/models/Post";
import { getPostData } from '@/controllers/postController';
import styles from "./page.module.css";

const IndexView = async ({ params }: { params: { id: number } }) => {
  let response = await getPostData(params.id).catch(notFound);
  let content = response.data.attributes.content;

  return (
    <Container className={styles.article} pt={60}>
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
  return (
    <ReactMarkdown rehypePlugins={rehypePlugins}>
      {text.content}
    </ReactMarkdown>
  );
}

export default IndexView;