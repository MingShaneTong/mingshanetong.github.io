import { Container, Title } from "@mantine/core";

export default function ContactMe() {
  return (
    <Container>
      <Title order={1} mb={32}>Contact Me</Title>
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSfSqn_5UoSdcKWcyhodI67OSc5NJzanBWBUWlTaerBdt__oyw/viewform?embedded=true" 
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