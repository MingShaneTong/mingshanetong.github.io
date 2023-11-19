import axios from "axios";
import ReactMarkdown from 'react-markdown';
import { Box, Heading, Text } from "@chakra-ui/layout";
import rehypeRaw from 'rehype-raw'
import qs from 'qs';
import { apiUrl } from "@/config/api.ts"
import { Post } from "@/models/Post.ts";


interface Response {
  data: Post[];
  meta: any;
}

const getPosts = async () => {
  const query = qs.stringify(
    {
      fields: ['title', 'publishedAt'],
    },
    {
      encodeValuesOnly: true
    }
  );

  const response = await axios.get(`${apiUrl}/api/posts?${query}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Response = response.data;
  return data;
};

const IndexView = async () => {
  let response = await getPosts();

  return (
    <>
      <Box height="100vh" padding="10">
        <Heading>All Posts</Heading>
        <Text>{JSON.stringify(response)}</Text>
        {/* <ReactMarkdown rehypePlugins={[rehypeRaw]}>{data.data[0].attributes.Content}</ReactMarkdown> */}
      </Box>
    </>
  );
};

export default IndexView;