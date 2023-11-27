import { Container, Title } from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Text as PostText } from "@/models/Post";
import { getPostData } from '@/controllers/postController';

const IndexView = async ({ params }: { params: { id: number } }) => {
  let response = await getPostData(params.id);
  let content = response.data.attributes.content;

  return (
    <Container>
      <Title order={1}>{response.data.attributes.title}</Title>
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