"use client";

import { MantineColorsTuple, createTheme, rem } from "@mantine/core";
import { Montserrat, Hind_Madurai } from 'next/font/google';


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