import { AboutMe } from "@/models/pages/HomePage";
import { Title, Text, List, rem, ListItem } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

export default function AboutMe({ data }: { data: AboutMe }) {
  return (
    <section>
      <Title order={1} mb={16} size={34}>{data.welcome}</Title>
      <Text mb="lg">{data.description}</Text>

      <Title order={2} mt="sm" mb="lg">
        Key Achievements
      </Title>
      <List spacing="xs" icon={<IconCheck size={14} />}>
        {data.achievements.split("\n")
          .map((line, i) => <ListItem key={i}>{line}</ListItem>)}
      </List>
    </section>
  );
}