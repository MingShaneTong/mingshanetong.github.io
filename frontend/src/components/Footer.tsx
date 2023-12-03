"use client";

import Link from 'next/link';
import { Container, Group, ActionIcon } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Footer, Social } from '@/models/Footer';
import classes from './Footer.module.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer({ data }: { data: Footer }) {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <MantineLogo size={28} />
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          {data.attributes.socials.map((social) => {
            return (<Social key={social.label} social={social} />);
          })}
        </Group>
      </Container>
    </div>
  );
}

function Social({ social }: { social: Social }) {
  return (
    <ActionIcon 
      key={social.label} 
      component={Link} 
      href={social.href}
      variant="subtle" 
      size="lg"
      className={classes.actionButton}>
        <i className={`icon bi-${social.icon}`} />
    </ActionIcon>
  );
}