import axios from "axios";
import ReactMarkdown from 'react-markdown';
import { Box, Heading, Text } from "@chakra-ui/layout";
import rehypeRaw from 'rehype-raw';
import { apiUrl } from "@/config/api.ts";
import qs from 'qs';
import { Post, Text as PostText } from "@/models/Post";

interface Response {
  data: Post;
  meta: any;
}

const getPostData = async (id: number) => {
  const query = qs.stringify(
    {
      populate: ['content']
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
  let content = response.data.attributes.content;

  return (
    <Box height="100vh" padding="10">
      <Heading as='h1' size='xl'>{response.data.attributes.title}</Heading>
      {content.map(
        (text, index) => 
          <TextView key={index} text={text}/>
      )}
    </Box>
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