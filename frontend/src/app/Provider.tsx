import { MantineProvider } from "@mantine/core";
import { theme } from "@/theme";

export default function Provider({ children }: { children: React.ReactNode | React.ReactNode[] }) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      {children}
    </MantineProvider>
  );
}