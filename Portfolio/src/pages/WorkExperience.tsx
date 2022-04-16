import * as React from 'react';
import Layout, { BarItem } from "pages/Layout";
import withRoot from '../modules/withRoot';
import InformationBox from 'modules/views/InformationBox';
import Typography from 'modules/components/Typography';

function WorkExperience() {
  return (
    <Layout item={BarItem.Work}>
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Projects
      </Typography>
      <InformationBox image="/img/FNZ_Logo.svg">
        <Typography variant="h4" component="h4" gutterBottom>
          FNZ
        </Typography>
        <Typography variant="h5">
          Worked as a developer working on internal projects to create tools to help improve the efficiency of the development team. I developed a website to help developers monitor environment health and worked on unit tests for their Centric Project.
        </Typography>
      </InformationBox>

      <InformationBox image="/img/wgtn-crest-new.png">
        <Typography variant="h4" component="h4" gutterBottom>
          Victoria University of Wellington
        </Typography>
        <Typography variant="h5">
          Tutored for the introductory Computer Science courses, COMP102 and COMP103. Each course contained around 400 students. I was responsible assisting students in their learning by organizing tutorials, marking assignments and offering suggestions and feedback.
        </Typography>
      </InformationBox>
    </Layout>
  );
}

export default withRoot(WorkExperience);
