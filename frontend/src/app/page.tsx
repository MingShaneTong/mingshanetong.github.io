import Hero from '@/components/Home/Hero'
import { Group } from '@mantine/core'
import { getHomePageData } from '@/controllers/pageController';
import AboutMe from '@/components/Home/AboutMe';
import Interests from '@/components/Home/Interests';
import WorkExperience from '@/components/Home/WorkExperience';
import KeyAchievements from '@/components/Home/KeyAchievements';

export default async function Home() {
  let pageDataResponse = await getHomePageData();
  let pageData = pageDataResponse.data.attributes;

  return (
    <>
      <Hero data={pageData.hero}/>
      <AboutMe />
      <Interests />
      <KeyAchievements />
      <WorkExperience />
    </>
  )
}
