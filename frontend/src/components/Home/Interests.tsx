import { Container, Title, Text, Card, SimpleGrid, rem, Center } from "@mantine/core";
import classes from './Interests.module.css';
import { Icon, IconCookie, IconGauge, IconUser } from "@tabler/icons-react";

const mockdata = [
  {
    title: 'Extreme performance',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    icon: IconGauge,
  },
  {
    title: 'Privacy focused',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    icon: IconUser,
  },
  {
    title: 'No third parties',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    icon: IconCookie,
  },
];

export default function Interests({ data }: { data?: any }) {
  const features = mockdata.map((feature) => (
    <InterestCard key={feature.title} feature={feature} />
  ));
  
  return (
    <section>
      <Title order={1} className={classes.title} ta="center" mt="sm">
        Integrate effortlessly with any technology stack
      </Title>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </section>
  );
}

function InterestCard({ feature }: { feature: {
  title: string,
  description: string,
  icon: Icon,
},}) {
  return (
    <Card radius="md" className={classes.card} padding="xl">
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  );
}