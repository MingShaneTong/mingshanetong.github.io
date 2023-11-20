import axios from "axios";
import { Box, Heading, Text } from "@chakra-ui/layout";
import qs from 'qs';
import { apiUrl } from "@/config/api.ts"
import { Post } from "@/models/Post.ts";
import Link from 'next/link'


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
    <Box height="100vh" padding="10">
      <Heading>All Posts</Heading>
      {response.data.map(
        (post, index) => 
          <PostView key={index} post={post}/>)}
    </Box>
  );
};

const PostView = ({ post }: { post: Post }) => {
  let href = `/posts/${post.id}`;
  let publishedAttribute = post.attributes.publishedAt;
  let published = publishedAttribute instanceof Date ? publishedAttribute : new Date(publishedAttribute);
  let options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric'}

  return (
    <Link href={href}>
      <Heading as='h2' size='lg'>{post.attributes.title}</Heading>
      <Text>{published.toLocaleDateString("en-GB", options)}</Text>
    </Link>
  );
}

export default IndexView;