import axios from "axios";
import { Box, Heading, Text } from "@chakra-ui/layout";
import qs from 'qs';
import Link from 'next/link'

import { apiUrl } from "@/config/api.ts"
import { Post } from "@/models/Post.ts";
import Response from "@/models/api/Response";
import ArticleItem from "@/components/posts/ArticleItem";
import { Container, SimpleGrid } from "@chakra-ui/react";

const getPosts = async () => {
  const query = qs.stringify(
    {
      fields: ['title', 'publishedAt', 'category', 'snippet'],
    },
    {
      encodeValuesOnly: true
    }
  );
    console.log(query);
  const response = await axios.get(`${apiUrl}/api/posts?${query}`, {
    headers: {
      Accept: "application/json",
    },
  });
  const data: Response<Post[]> = response.data;
  return data;
};

const IndexView = async () => {
  let response = await getPosts();

  return (
    <Box 
      as={Container}
      maxW="8xl" 
      minH="100vh"
      margin="auto">
      <Heading marginTop="24px" marginBottom="16px">All Posts</Heading>
      <SimpleGrid columns={1} spacing='40px'>
        {response.data.map(
          (post, index) => 
            <ArticleItem key={index} data={post}/>)}
      </SimpleGrid>
    </Box>
  );
};

export default IndexView;