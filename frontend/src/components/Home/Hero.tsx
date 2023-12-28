import { Title, Text, Button, Container, Center } from '@mantine/core';
import classes from './Hero.module.css';
import { Hero } from '@/models/pages/HomePage';

export default function Hero({ data }: { data: Hero }) {
  return (
    <div className={classes.wrapper}>
      <Center className={classes.center} px="md">
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
                  key={button.href}
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
      </Center>
    </div>
  );
}

