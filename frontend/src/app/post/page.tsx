import axios from "axios";
import ReactMarkdown from 'react-markdown';
import { Box, Heading } from "@chakra-ui/layout";
import rehypeRaw from 'rehype-raw'
import { apiUrl } from "../../config/api.ts"

interface Response {
  data: {
    id: number;
    attributes: {
      Title: string;
      Content: string;
      createdAt: any;
      updatedAt: any;
      publishedAt: any;
    };
  }[];
  meta: any;
}

const getData = async () => {
  const response = await axios.get(apiUrl + "/api/posts", {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Response = response.data;
  return data;
};

const IndexView = async () => {
  let data = await getData();

  return (
    <>
      <Box height="100vh" padding="10">
        <Heading>My Blog</Heading>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{data.data[0].attributes.Content}</ReactMarkdown>
      </Box>
    </>
  );
};

export default IndexView;