import { Container, Divider, Group, Paper, Title, Text } from "@mantine/core";
import { Carousel, CarouselSlide } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { getPosts } from "@/controllers/postController";
import { Post } from "@/models/Post";
import Link from "next/link";

const IndexView = async () => {
  let response = await getPosts();

  return (
    <Container>
      <Title order={1}>Posts</Title>
      
      {/* <Divider my="sm" />
      <Title order={2}>Recommended Articles</Title>
      <HighlightsCarousel />

      <Divider my="sm" />
      <Title order={2}>All Posts</Title> */}
      {response.data.map(
        (post, index) => 
          <ArticleCard key={index} data={post}/>)}
    </Container>
  );
};

function HighlightsCarousel() {
  return (
    <Carousel slideSize="70%" height={320} slideGap="md" my="lg" loop withIndicators>
      <CarouselSlide>1</CarouselSlide>
      <CarouselSlide>2</CarouselSlide>
      <CarouselSlide>3</CarouselSlide>
    </Carousel>
  );
}

function ArticleCard({ data }: { data: Post }) {
  let publishedAttribute = data.attributes.publishedAt;
  let published = publishedAttribute instanceof Date ? publishedAttribute : new Date(publishedAttribute);
  let options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric'}
  let date = published.toLocaleDateString("en-GB", options);

  return (
    <Paper withBorder radius="md" p="xs" my="md">
      <Group>
        <div>
          <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
            {date}
          </Text>
          <Text fw={700} size="xl">
            <Link href={`/posts/${data.id}`}>
              {data.attributes.title}
            </Link>
          </Text>
        </div>
      </Group>
    </Paper>
  );
}

export default IndexView;