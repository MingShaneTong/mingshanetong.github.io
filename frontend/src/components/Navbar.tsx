'use client'

import {
  HoverCard,
  Group,
  UnstyledButton,
  Text,
  SimpleGrid,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  ActionIcon, 
  rem,
  useMantineTheme,
  useMantineColorScheme, 
  useComputedColorScheme
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconSun, IconMoon } from '@tabler/icons-react';
import { NavItem, Navbar } from '@/models/Navbar';
import LogoElement from "@/components/Logo";
import Logo from '@/models/Logo';
import classes from './Navbar.module.css';

export default function HeaderMegaMenu(
  { data, logo }: 
  { 
    data: Navbar;
    logo: Logo; 
  }
) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <Box pb={60}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group justify="left">
            <LogoElement logo={logo} />
          </Group>

          <Group h="100%" gap={0} justify="flex-start" visibleFrom="sm">
            {data.attributes.navItems.map((item) => {
              return (
                <NavItemElement key={item.label} data={item} />
              );
            })}
          </Group>

          <Group justify="flex-end" visibleFrom="sm">
            <Box style={{ width: 120 }}>
              <ColorSchemeIcon />
            </Box> 
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          {data.attributes.navItems.map((item) => {
            return (
              <MobileNavItemElement key={item.label} data={item} />
            );
          })}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}

function ColorSchemeIcon() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === 'light' ? 
        <IconSun className={classes.light} stroke={1.5} /> : 
        <IconMoon className={classes.dark} stroke={1.5} />}
    </ActionIcon>
  );
}

function NavItemElement({ data }: { data: NavItem }) {
  const theme = useMantineTheme();

  if (data.children && data.children.length > 0) {
    const links = data.children.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.label}>
        <Group wrap="nowrap" align="flex-start">
          <div>
            <Text size="sm" fw={500}>
              {item.label}
            </Text>
            <Text size="xs" c="dimmed">
              {item.subLabel}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));

    return (
      <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
        <HoverCard.Target>
          <a href="#" className={classes.link}>
            <Center inline>
              <Box component="span" mr={5}>
                {data.label}
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </a>
        </HoverCard.Target>

        <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
          <SimpleGrid cols={2} spacing={0}>
            {links}
          </SimpleGrid>
        </HoverCard.Dropdown>
      </HoverCard>
    );
  } else {
    return (
      <a href={data.href} className={classes.link}>
        {data.label}
      </a>
    )
  }
}

function MobileNavItemElement({ data }: { data: NavItem }) {
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  if (data.children && data.children.length > 0) {
    const links = data.children.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.label}>
        <Group wrap="nowrap" align="flex-start">
          <div>
            <Text size="sm" fw={500}>
              {item.label}
            </Text>
            <Text size="xs" c="dimmed">
              {item.subLabel}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));

    return (
      <>
        <UnstyledButton className={classes.link} onClick={toggleLinks}>
          <Center inline>
            <Box component="span" mr={5}>
              {data.label}
            </Box>
            <IconChevronDown
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.blue[6]}
            />
          </Center>
        </UnstyledButton>
        <Collapse in={linksOpened}>{links}</Collapse>
      </>
    );
  } else {
    return (
      <a href={data.href} className={classes.link}>
        {data.label}
      </a>
    );
  }
}
