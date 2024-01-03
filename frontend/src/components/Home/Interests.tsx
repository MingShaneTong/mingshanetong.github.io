import { Container, Title, Text, Card, SimpleGrid, rem } from "@mantine/core";
import classes from './Interests.module.css';
import { Interest } from "@/models/pages/HomePage";

export default function Interests({ data }: { data: Interest[] }) {
  return (
    <section>
      <Title order={1} className={classes.title} ta="center" mt="sm">Interests</Title>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {data.map((interest, i) => (
          <InterestCard key={i} data={interest} />
        ))}
      </SimpleGrid>
    </section>
  );
}

function InterestCard({ data }: { data: Interest }) {
  return (
    <Card radius="md" className={classes.card} padding="xl">
      <i className={`icon bi-${data.icon}`} style={{ fontSize: 50 }} />
      <Text fz="lg" fw={600} className={classes.cardTitle} mt="sm">
        {data.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {data.description}
      </Text>
    </Card>
  );
}