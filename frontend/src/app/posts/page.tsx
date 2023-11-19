import axios from "axios";
import ReactMarkdown from 'react-markdown';
import { Box, Heading } from "@chakra-ui/layout";
import rehypeRaw from 'rehype-raw'
import Error from "next/error";
import qs from 'qs';
import { apiUrl } from "../../config/api.ts"


interface Response {
  data: {
    id: number;
    attributes: {
      title: string;
      publishedAt: any;
    };
  }[];
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

  console.log(`${apiUrl}/api/posts?${query}`);
  const response = await axios.get(`${apiUrl}/api/posts?${query}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Response = response.data;
  return data;
};

const IndexView = async () => {
  let data = await getPosts();
  if (!data) {
    return <Error statusCode={300} title="Internal Server Error" />
  }

  return (
    <>
      <Box height="100vh" padding="10">
        <Heading>My Blog Hello</Heading>
        {/* <ReactMarkdown rehypePlugins={[rehypeRaw]}>{data.data[0].attributes.Content}</ReactMarkdown> */}
      </Box>
    </>
  );
};

export default IndexView;