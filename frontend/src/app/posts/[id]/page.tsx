import axios from "axios";
import ReactMarkdown from 'react-markdown';
import { Box, Heading } from "@chakra-ui/layout";
import rehypeRaw from 'rehype-raw';
import { apiUrl } from "../../../config/api.ts";
import Error from "next/error";
import qs from 'qs';

interface Response {
  data: {
    id: number;
    attributes: {
      title: string;
      sections: {
        id: number;
        type: "markdown" | "html";
        content: string;
      }[];
    };
  }[];
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
  let data = await getPostData(params.id);
  if (!data) {
    return <Error statusCode={404} title="Page Not Found" />
  }

  return (
    <>
      <Box height="100vh" padding="10">
        <Heading></Heading>
        {/* <ReactMarkdown rehypePlugins={[rehypeRaw]}>{data}</ReactMarkdown> */}
      </Box>
    </>
  );
};

export default IndexView;