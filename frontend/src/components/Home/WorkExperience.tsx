import { Container, Title, Text, Grid, GridCol, Card, Badge, Box } from "@mantine/core";
import classes from './WorkExperience.module.css';

export default function WorkExperience({ data }: { data?: any }) {
  return (
    <section>
      <Title order={1} mb={16} size={34}>Work Experience</Title>
      <Experience />
    </section>
  );
}

function Experience() {
  return (
    <Card className={classes.card}>
      <Grid>
        <GridCol span={2}>
          <Text size="sm">NOV 2022 - PRESENT</Text>
        </GridCol>
        <GridCol span={10}>
          <Text fw={700}>Software Engineer - Company ABC</Text>
          <Text fw={600} c='gray.6'>Software Engineering Team</Text>
          <Text size="sm" mt="xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci phasellus egestas tellus rutrum. Ipsum consequat nisl vel pretium. Eget nunc scelerisque viverra mauris in aliquam sem.
          </Text>
          <Box mt="md">
            <Badge size="lg" className={classes.badge}>Badge</Badge>
          </Box>
        </GridCol>
      </Grid>
    </Card>
  );
}
