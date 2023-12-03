"use client";

import { MantineColorsTuple, createTheme, rem } from "@mantine/core";

const colorScheme: MantineColorsTuple = [
  "#eef3ff",
  "#dee2f2",
  "#bdc2de",
  "#98a0ca",
  "#7a84ba",
  "#6672b0",
  "#5c68ac",
  "#4c5897",
  "#424e88",
  "#364379"
];

export const theme = createTheme({
  colors: {
    brand: colorScheme,
  },
  primaryColor: 'brand',
  primaryShade: { light: 1, dark: 9 },
  fontFamily: 'Verdana, sans-serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: {
    fontFamily: 'Greycliff CF, sans-serif',
    sizes: {
      h1: { 
        fontSize: rem(4 * 16)
      },
      h2: { 
        fontSize: rem(2 * 16)
      },
      h3: { 
        fontSize: rem(1.5 * 16)
      },
      h4: { 
        fontSize: rem(1.17 * 16)
      },
      h5: { 
        fontSize: rem(1 * 16)
      },
      h6: { 
        fontSize: rem(0.8 * 16)
      },
    }
  }
});