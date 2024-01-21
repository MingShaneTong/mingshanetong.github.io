import { MantineColorsTuple, createTheme, rem } from "@mantine/core";
import { Montserrat, Hind_Madurai } from 'next/font/google';


const colorScheme: MantineColorsTuple = [
  "#f7f9ff",
  "#e0edff",
  "#cddaf2",
  "#a8badb",
  "#8ea5cf",
  "#738fc4",
  "#597ab8",
  "#3f65ac",
  "#2450a0",
  "#0a3b94"
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
  primaryShade: { light: 6, dark: 9 },
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