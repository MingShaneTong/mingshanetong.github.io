import { Container, Title, TypographyStylesProvider } from '@mantine/core';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Text as PostText } from "@/models/Post";
import { getPostData } from '@/controllers/postController';

const IndexView = async ({ params }: { params: { id: number } }) => {
  let response = await getPostData(params.id);
  let content = response.data.attributes.content;

  return (
    <TypographyStylesProvider>
      <Container>
        <Title order={1} size="4rem" mb={16}>{response.data.attributes.title}</Title>
        {content.map(
          (text, index) => 
            <TextView key={index} text={text}/>
        )}
      </Container>
    </TypographyStylesProvider>
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