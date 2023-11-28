"use client";

import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  headings: {
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
