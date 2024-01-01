import { Box, Container } from '@mantine/core';
import { getHomePageData } from '@/controllers/pageController';
import Hero from '@/components/Home/Hero'
import AboutMe from '@/components/Home/AboutMe';
import Interests from '@/components/Home/Interests';
import WorkExperience from '@/components/Home/WorkExperience';
import classes from "./page.module.css";

export default async function Home() {
  let pageDataResponse = await getHomePageData();
  let pageData = pageDataResponse.data.attributes;

  return (
    <Box className={classes.home}>
      <Hero data={pageData.hero}/>
      <Container>
        <AboutMe />
        <WorkExperience />
        <Interests />
      </Container>
    </Box>
  )
}
