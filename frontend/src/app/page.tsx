import Hero from '@/components/Hero'
import { Group } from '@mantine/core'
import { getHomePageData } from '@/controllers/pageController';

export default async function Home() {
  let pageDataResponse = await getHomePageData();
  let pageData = pageDataResponse.data.attributes;

  return (
    <Group>
      <Hero data={pageData.hero}/>
    </Group>
  )
}
