import { AspectRatio, Card, Container, SimpleGrid, Image, Text, Box } from "@mantine/core";
import { getProjectPosts } from "@/controllers/postController";
import { Post } from "@/models/Post";
import { FRONTEND_API_URL } from "@/config/api";
import styles from "./page.module.scss";
import Response from "@/models/api/Response";

export default async function ProjectsView() {
  var projectArticles: Response<Post[]>;
  try {
    projectArticles = await getProjectPosts();
  } catch {
    return <></>;
  }

  return (
    <Container pt={60}>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        {projectArticles.data.map((data) => {
          let publishedAttribute = data.attributes.publishedAt;
          let published = publishedAttribute instanceof Date ? publishedAttribute : new Date(publishedAttribute);
          let options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric'}
          let date = published.toLocaleDateString("en-GB", options);

          var coverImage = data.attributes.coverImage.data;

          return (
            <Card key={data.attributes.title} p="md" radius="md" component="a" href={`/posts/${data.id}`} className={styles.card}>
              <AspectRatio ratio={1920 / 1080}>
                {coverImage == null ? 
                  <Box className={styles.placeholder}></Box>: 
                  <Image src={`${FRONTEND_API_URL}${coverImage.attributes.url}`} alt={coverImage.attributes.alternativeText} />}
              </AspectRatio>
              <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
                {date}
              </Text>
              <Text className={styles.title} mt={5}>
                {data.attributes.title}
              </Text>
            </Card>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}