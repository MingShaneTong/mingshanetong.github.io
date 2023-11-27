'use client'

import Image from 'next/image'
import { Container, Group, ActionIcon, rem } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import { Footer } from '@/models/Footer';
import classes from './Footer.module.css';
import api from '@/config/api';
import Link from 'next/link';

export default function Footer({ data }: { data: Footer }) {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <MantineLogo size={28} />
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          {data.attributes.socials.map((social) => {
            return (
              <Link key={social.label} href={social.href}>
                <ActionIcon size="lg" color="gray" variant="subtle">
                  <Image
                    src={`${api}${social.icon.data.attributes.url}`}
                    width="18"
                    height="18"
                    alt={social.icon.data.attributes.alternativeText}
                  />
                </ActionIcon>
              </Link>
            );
          })}
        </Group>
      </Container>
    </div>
  );
}