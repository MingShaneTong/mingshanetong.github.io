import { Container, Divider, Group, Paper, Title, Text, Button } from "@mantine/core";
import { Carousel, CarouselSlide } from '@mantine/carousel';
import Link from "next/link";
import '@mantine/carousel/styles.css';
import { getPosts, getRecommendedPosts } from "@/controllers/postController";
import { Post } from "@/models/Post";
import { FRONTEND_API_URL } from "@/config/api";
import styles from "./page.module.css";
import Response from "@/models/api/Response";

const IndexView = async () => {
  let response: Response<Post[]>;
  let recommended: Response<Post[]>;

  try {
    response = await getPosts();
    recommended = await getRecommendedPosts();
  } catch {
    return <></>;
  }

  return (
    <Container py={60}>
      <Title order={1} className="title">Posts</Title>
      
      <Divider my="sm" />
      <Title order={2}>Recommended Articles</Title>
      <HighlightsCarousel data={recommended.data} />

      <Divider my="sm" />
      <Title order={2}>All Posts</Title>
      {response.data.map(
        (post, index) => 
          <ArticleCard key={index} data={post}/>)}
    </Container>
  );
};

function HighlightsCarousel({ data }: { data: Post[] }) {
  return (
    <Carousel controlSize={32} my="lg" loop withIndicators>
      {data.map((post) => {
        return (
          <CarouselSlide key={post.id}>
            <Card data={post} />
          </CarouselSlide>
        );
      })}
    </Carousel>
  );
}

function Card({ data }: { data: Post }) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${FRONTEND_API_URL}${data.attributes.coverImage.data.attributes.url})` 
      }}
      className={styles.card}
    >
      <div>
        <Title order={3} className={styles.title}>
          {data.attributes.title}
        </Title>
      </div>
      <Button variant="white" color="black">
        <Link href={`/posts/${data.id}`}>
          Read article
        </Link>
      </Button>
    </Paper>
  );
}

function ArticleCard({ data }: { data: Post }) {
  let publishedAttribute = data.attributes.publishedAt;
  let published = publishedAttribute instanceof Date ? publishedAttribute : new Date(publishedAttribute);
  let options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric'}
  let date = published.toLocaleDateString("en-GB", options);

  return (
    <Paper 
      withBorder 
      radius="md" 
      p="xs" 
      my="md" 
      className={data.attributes.recommended ? styles.recommended : ""}>
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