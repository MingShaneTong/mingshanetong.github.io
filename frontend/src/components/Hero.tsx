import { Title, Text, Button, Container } from '@mantine/core';
import classes from './Hero.module.css';

export default function Hero() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title}>
          Automated AI{' '}
          <Text component="span" className={classes.highlight} inherit>
            code reviews
          </Text>{' '}
          for any stack
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Build more reliable software with AI companion. AI is also trained to detect lazy
            developers who do nothing and just complain on Twitter.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            component="a"
            href="/posts"
            className={classes.control} 
            size="lg" 
            variant="default">
            Blog Posts
          </Button>
          <Button 
            component="a"
            href="/projects"
            className={classes.control} 
            size="lg" 
            variant="default">
            View Projects
          </Button>
        </div>
      </div>
    </Container>
  );
}

