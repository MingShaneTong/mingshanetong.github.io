"use client";

import { MantineColorsTuple, createTheme, rem } from "@mantine/core";
import { Hind_Vadodara, Hind_Madurai } from 'next/font/google';


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

const hindVadodara = Hind_Vadodara({ 
  weight: "500",
  subsets: ["latin"]
});
const hindMadurai = Hind_Madurai({ 
  weight: "400",
  subsets: ["latin"]
});

export const theme = createTheme({
  colors: {
    brand: colorScheme,
  },
  primaryColor: 'brand',
  primaryShade: { light: 0, dark: 9 },
  fontFamily: hindMadurai.style.fontFamily,
  headings: {
    fontFamily: hindVadodara.style.fontFamily,
    fontWeight: hindVadodara.style.fontWeight?.toString(),
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