import { AspectRatio, Card, Container, SimpleGrid, Image, Text } from "@mantine/core";
import { getProjectPosts } from "@/controllers/postController";
import { Post } from "@/models/Post";
import { theme } from '@/theme.ts';
import api from "@/config/api";
import styles from "./page.module.scss";

export default async function ProjectsView() {
  var projectArticles = await getProjectPosts();

  return (
    <Container>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        {projectArticles.data.map((article) => {
          return (
            <ArticlesCards key={article.id} data={article} />
          );  
        })}
      </SimpleGrid>
    </Container>
  );
}

export function ArticlesCards({ data }: { data: Post }) {
  let publishedAttribute = data.attributes.publishedAt;
  let published = publishedAttribute instanceof Date ? publishedAttribute : new Date(publishedAttribute);
  let options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric'}
  let date = published.toLocaleDateString("en-GB", options);

  var coverImage = data.attributes.coverImage.data;

  return (
    <Card key={data.attributes.title} p="md" radius="md" component="a" href={`/posts/${data.id}`} className={styles.card}>
      <AspectRatio ratio={1920 / 1080}>
        {coverImage == null ? <></>: <Image src={`${api}${coverImage.attributes.url}`} alt={coverImage.attributes.alternativeText} />}
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {date}
      </Text>
      <Text className={styles.title} mt={5}>
        {data.attributes.title}
      </Text>
    </Card>
  );
}