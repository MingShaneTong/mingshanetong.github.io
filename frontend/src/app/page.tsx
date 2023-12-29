import Hero from '@/components/Home/Hero'
import { Group } from '@mantine/core'
import { getHomePageData } from '@/controllers/pageController';
import AboutMe from '@/components/Home/AboutMe';
import Interests from '@/components/Home/Interests';

export default async function Home() {
  let pageDataResponse = await getHomePageData();
  let pageData = pageDataResponse.data.attributes;

  return (
    <Group>
      <Hero data={pageData.hero}/>
      <AboutMe />
      <Interests />
      {/* Skills */}
      {/* Key Achievements */}
      {/* Work Experience */}
    </Group>
  )
}
