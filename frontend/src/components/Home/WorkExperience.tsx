import { Title, Text, Grid, GridCol, Card, Badge, Box } from "@mantine/core";
import classes from './WorkExperience.module.css';
import { WorkExperience as WEModel } from "@/models/pages/HomePage";

export default function WorkExperience({ data }: { data: WEModel[] }) {
  return (
    <section>
      <Title order={1} mb={16} size={34}>Work Experience</Title>
      {data.map((experience, i) => <Experience key={i} data={experience} />)}
    </section>
  );
}

function Experience({ data }: { data: WEModel }) {
  return (
    <Card className={classes.card}>
      <Grid>
        <GridCol span={2}>
          <Text size="sm">{data.period}</Text>
        </GridCol>
        <GridCol span={10}>
          <Text fw={700}>{data.line1}</Text>
          <Text fw={600} c='gray.6'>{data.line2}</Text>
          <Text size="sm" mt="xs">{data.description}</Text>
          {data.tags ? 
            <Box mt="md">
              {
                data.tags.split(",").map(
                  (tag, i) => 
                    <Badge key={i} mr="xs" mb="xs" className={classes.badge}>{tag.trim()}</Badge>
              )}
            </Box> : <></>}
        </GridCol>
      </Grid>
    </Card>
  );
}
