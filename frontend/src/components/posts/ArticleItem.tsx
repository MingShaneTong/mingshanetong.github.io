'use client'

import { Box, Flex, Link, Text, Image } from "@chakra-ui/react";
import { Post } from "@/models/Post";

export default function ArticleItem({ data }: { data: Post }) {
  let href = `/posts/${data.id}`;
  let publishedAttribute = data.attributes.publishedAt;
  let published = publishedAttribute instanceof Date ? publishedAttribute : new Date(publishedAttribute);
  let options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric'}

  return (
    <Box
      px={8}
      py={4}
      rounded="lg"
      shadow="lg"
      bg="grey.50"
      border={3}
      borderStyle={'solid'}
      borderColor={'green.500'}
      _dark={{
        bg: "gray.800",
      }}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Text
          as="span"
          fontSize="sm"
          color="gray.600"
          _dark={{
            color: "gray.400",
          }}
        >
          {published.toLocaleDateString("en-GB", options)}
        </Text>
        <Link
          px={3}
          py={1}
          bg="gray.600"
          color="gray.100"
          fontSize="sm"
          fontWeight="700"
          rounded="md"
          _hover={{
            bg: "gray.500",
          }}
        >
          {data.attributes.category}
        </Link>
      </Flex>

      <Box mt={2}>
        <Link
          href={href}
          fontSize="2xl"
          color="gray.700"
          _dark={{
            color: "white",
          }}
          fontWeight="700"
          _hover={{
            color: "gray.600",
            _dark: {
              color: "gray.200",
            },
            textDecor: "underline",
          }}
        >
          {data.attributes.title}
        </Link>
        <Text
          as="p"
          mt={2}
          mb={4}
          color="gray.600"
          _dark={{
            color: "gray.300",
          }}
        >
          {data.attributes.snippet}
        </Text>
      </Box>
    </Box>
  );
}