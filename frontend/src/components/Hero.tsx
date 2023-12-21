import { Title, Text, Button, Container } from '@mantine/core';
import classes from './Hero.module.css';
import { Hero } from '@/models/pages/HomePage';

export default function Hero({ data }: { data: Hero }) {
  return (
    <Container className={classes.wrapper} size={1400}>
      <div className={classes.inner}>
        <Title className={classes.title}>
          {data.title}
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            {data.description}
          </Text>
        </Container>

        <div className={classes.controls}>
          {data.actions.map(button => {
            return (
              <Button
                component="a"
                href={button.href}
                className={classes.control} 
                size="lg" 
                variant="default">
                {button.text}
              </Button>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

