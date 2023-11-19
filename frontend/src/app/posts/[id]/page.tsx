import axios from "axios";
import ReactMarkdown from 'react-markdown';
import { Box, Heading, Text } from "@chakra-ui/layout";
import rehypeRaw from 'rehype-raw';
import { apiUrl } from "@/config/api.ts";
import qs from 'qs';
import { Post } from "@/models/Post";

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

  console.log(`${apiUrl}/api/posts/${id}?${query}`);
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

  return (
    <>
      <Box height="100vh" padding="10">
        <Heading>{response.data.attributes.title}</Heading>
        <Text>{JSON.stringify(response.data.attributes.sections)}</Text>
        {/* <ReactMarkdown rehypePlugins={[rehypeRaw]}>{data}</ReactMarkdown> */}
      </Box>
    </>
  );
};

export default IndexView;