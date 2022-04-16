import * as React from 'react';
import InformationBox from 'modules/views/InformationBox';
import Layout, { BarItem } from "pages/Layout";
import withRoot from '../modules/withRoot';
import Typography from 'modules/components/Typography';

function Project() {
  return (
    <Layout item={BarItem.Project}>
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Projects
      </Typography>
      <InformationBox image="/img/FNZ_Logo.svg">
        <Typography variant="h4" component="h4" gutterBottom>
          Internal Environment Monitoring Tool
        </Typography>
        <Typography variant="h6">
          Full Stack Developer
        </Typography>
        The goal of this project was to build a website that helps developers and testers monitor and measure the health of the internal software environments. My role in the project was to build the backend services that monitors the environment and judges its health based on several conditions and the webpages that helped visualized the data collected. I designed and implemented the API that allowed the service and the website to modify and retrieve data from the database. I was also responsible for writing documentation that contained the build instructions, a guide for developers, and suggested improvements based on developer feedback.
      </InformationBox>
    </Layout>
  );
}

export default withRoot(Project);
