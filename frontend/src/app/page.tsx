import { Box, Container } from '@mantine/core';
import { getHomePageData } from '@/controllers/pageController';
import Hero from '@/components/Home/Hero'
import AboutMe from '@/components/Home/AboutMe';
import Interests from '@/components/Home/Interests';
import WorkExperience from '@/components/Home/WorkExperience';
import classes from "./page.module.css";
import { getSocialData } from '@/controllers/layoutController';

export default async function Home() {
  let pageDataResponse = await getHomePageData();
  let socialData = await getSocialData();
  let pageData = pageDataResponse.data.attributes;

  return (
    <Box className={classes.home}>
      <Hero data={pageData.hero} socials={socialData.data} />
      <Container>
        <AboutMe />
        <WorkExperience />
        <Interests />
      </Container>
    </Box>
  )
}
