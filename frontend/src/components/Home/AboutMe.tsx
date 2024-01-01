import { Container, Title, Text, List, rem, ListItem } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

export default function AboutMe({ data }: { data?: any }) {
  return (
    <section>
      <Title order={1} mb={16} size={34}>Hello</Title>
      <Text mb="lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu sem integer vitae. Ante in nibh mauris cursus mattis molestie a iaculis at. Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Nibh praesent tristique magna sit amet purus gravida. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh. Fusce ut placerat orci nulla pellentesque dignissim enim. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Lacus laoreet non curabitur gravida arcu. Semper viverra nam libero justo laoreet sit amet cursus sit. Eget aliquet nibh praesent tristique magna. Bibendum at varius vel pharetra vel turpis nunc. Augue ut lectus arcu bibendum at varius vel pharetra. Tincidunt arcu non sodales neque sodales ut etiam sit. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Sed felis eget velit aliquet sagittis id consectetur purus. Sagittis nisl rhoncus mattis rhoncus.
      </Text>

      <Title order={2} mt="sm" mb="lg">
        Key Achievements
      </Title>
      <List
        spacing="xs"
        icon={
            <IconCheck style={{ width: rem(16), height: rem(16) }} />
        }
      >
        <ListItem>Clone or download repository from GitHub</ListItem>
        <ListItem>Install dependencies with yarn</ListItem>
        <ListItem>To start development server run npm start command</ListItem>
        <ListItem>Run tests to make sure your changes do not break the build</ListItem>
        <ListItem>Submit a pull request once you are done</ListItem>
      </List>
    </section>
  );
}