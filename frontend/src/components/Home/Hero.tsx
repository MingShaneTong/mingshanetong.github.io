import { Title, Text, Button, Container, Center, ActionIcon } from '@mantine/core';
import classes from './Hero.module.css';
import { Hero } from '@/models/pages/HomePage';
import { Social, SocialItem } from '@/models/Social';
import Link from 'next/link';

export default function Hero(
  { data, socials }: 
  {
    data: Hero;
    socials: Social;
  }) {
  return (
    <div className={classes.wrapper}>
      <Center className={classes.center} px="md">
        <section className={classes.inner}>
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

          <div className={classes.controls}>
            {socials.attributes.socials.map((social) => {
              return (<Social key={social.label} social={social} />);
            })}
          </div>
        </section>
      </Center>
    </div>
  );
}

function Social({ social }: { social: SocialItem }) {
  return (
    <ActionIcon 
      key={social.label} 
      component={Link} 
      href={social.href}
      variant="subtle" 
      size="xl"
      className={classes.actionButton}>
        <i className={`icon bi-${social.icon}`} style={{ fontSize: '20px' }} />
    </ActionIcon>
  );
}