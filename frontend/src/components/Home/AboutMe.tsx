import { AboutMe } from "@/models/pages/HomePage";
import { Title, List, ListItem, Box } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import ReactMarkdown from "react-markdown";
import classes from './AboutMe.module.css';

export default function AboutMe({ data }: { data: AboutMe }) {
  return (
    <section>
      <Title order={1} mb={16} size={34}>{data.welcome}</Title>
      <Box mb="xl" className={classes.description}>
        <ReactMarkdown>
          {data.description}
        </ReactMarkdown>
      </Box>

      <Title order={2} mt="sm" mb="lg">
        Achievements
      </Title>
      <List spacing="xs" icon={<IconCheck size={14} />}>
        {data.achievements.split("\n")
          .map((line, i) => <ListItem key={i}>{line}</ListItem>)}
      </List>
    </section>
  );
}