import { getContactMePageData } from "@/controllers/pageController";
import { Container, Title } from "@mantine/core";

export default async function ContactMe() {
  let pageData = await getContactMePageData();

  return (
    <Container py={60}>
      <Title order={1} className="title" mb={32}>Contact Me</Title>
      <iframe 
        src={pageData.data.attributes.googleform}
        width="100%" 
        height="1200" 
        frameBorder="0" 
        marginHeight={0} 
        marginWidth={0}>
        Loading…
      </iframe>
    </Container>
  );
}