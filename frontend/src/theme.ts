"use client";

import { MantineColorsTuple, createTheme, rem } from "@mantine/core";
import { Montserrat, Hind_Madurai } from 'next/font/google';


const colorScheme: MantineColorsTuple = [
  "#f3f5ff",
  "#dce4f5",
  "#b9c7e2",
  "#94a8d0",
  "#748dc1",
  "#5f7cb8",
  "#5474b4",
  "#44639f",
  "#39588f",
  "#2d4b81"
];

const montserrat = Montserrat({ 
  weight: "700",
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
    fontFamily: montserrat.style.fontFamily,
    sizes: {
      h1: { 
        fontSize: "28px",
        fontWeight: "700"
      },
      h2: { 
        fontSize: "24px",
        fontWeight: "700"
      }
    }
  }
});