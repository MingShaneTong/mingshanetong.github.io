import axios from "axios";
import ReactMarkdown from 'react-markdown';
import { Box, Heading, Text } from "@chakra-ui/layout";
import rehypeRaw from 'rehype-raw';
import { apiUrl } from "@/config/api.ts";
import qs from 'qs';
import { Post, Section, Text as PostText } from "@/models/Post";

interface Response {
  data: Post;
  meta: any;
}

const getPostData = async (id: number) => {
  const query = qs.stringify(
    {
      populate: {
        sections: {
          populate: ['content'],
        },
      },
    },
    {
      encodeValuesOnly: true
    }
  );

  const response = await axios.get(`${apiUrl}/api/posts/${id}?${query}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Response = response.data;
  return data;
};

const IndexView = async ({ params }: { params: { id: number } }) => {
  let response = await getPostData(params.id);
  let sections = response.data.attributes.sections;

  return (
    <Box height="100vh" padding="10">
      <Heading as='h1' size='xl'>{response.data.attributes.title}</Heading>
      {sections.map(
        (section, index) => 
          <SectionView key={index} section={section}/>
      )}
    </Box>
  );
};

const SectionView = ({ section }: { section: Section }) => {
  return (
    <>
      <Heading as='h2' size='lg'>{section.heading}</Heading>
      {section.content.map(
        (text, index) => 
          <TextView key={index} text={text}/>
      )}
    </>
  );
}

const TextView = ({ text }: { text: PostText }) => {
  if (text.type == 'html') {
    return (
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {text.content}
      </ReactMarkdown>
    );
  } else {
    return (
      <ReactMarkdown>
        {text.content}
      </ReactMarkdown>
    );
  }
}

export default IndexView;