import Link from 'next/link';
import { Container, Group, ActionIcon } from '@mantine/core';
import { Social, SocialItem } from '@/models/Social';
import LogoModel from '@/models/Logo';
import LogoElement from "@/components/Logo";
import classes from './Footer.module.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer(
  { socials, logo }: 
  { 
    socials: Social;
    logo: LogoModel; 
  }
) {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <LogoElement logo={logo} />
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          {socials.attributes.socials.map((social) => {
            return (<Social key={social.label} social={social} />);
          })}
        </Group>
      </Container>
    </div>
  );
}

function Social({ social }: { social: SocialItem }) {
  return (
    <ActionIcon 
      key={social.label} 
      component={Link} 
      href={social.href}
      variant="subtle" 
      size="lg"
      className={classes.actionButton}>
        <i className={`icon bi-${social.icon}`} style={{ fontSize: '16px' }} />
    </ActionIcon>
  );
}