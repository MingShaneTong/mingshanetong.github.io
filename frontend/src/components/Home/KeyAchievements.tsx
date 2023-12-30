import { Center, Container, List, ListItem, ThemeIcon, Title, rem } from '@mantine/core';
import classes from './KeyAchievements.module.css';
import { IconCheck } from '@tabler/icons-react';

export default function KeyAchievements({ data }: { data?: any }) {
  return (
    <Center className={classes.container}>
      <Container size="lg" py={60}>
        <Title order={1} mt="sm" mb="lg">
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
      </Container>
    </Center>
  );
}